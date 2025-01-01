'use client'
import { auth } from '@/firebase/firebaseConfig'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User as FirebaseUser ,UserCredential} from 'firebase/auth'
import React, { useContext, useState, useEffect, ReactNode } from 'react'


type AuthContextType = {
    currentUser: FirebaseUser | null
    login: (email: string, password: string) => Promise<UserCredential>
    signup: (email: string, password: string) => Promise<UserCredential>
    logout: () => Promise<void>
    loading: boolean
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}

export function AuthProvider({ children }:{children:ReactNode}) {
    const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null)
    const [loading, setLoading] = useState(true)

    // AUTH HANDLERS
    function signup(email:string, password:string) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email:string, password:string) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        setCurrentUser(null)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async user => {
            try {
                // Set the user to our local context state
                setLoading(true)
                setCurrentUser(user)
                console.log(user);
                if (!user) {
                    return
                }
            } catch (error) {
                if (error instanceof Error) {
                    console.log(error.message)
                }
            } finally {
                setLoading(false)
            }
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        logout,
        login,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}