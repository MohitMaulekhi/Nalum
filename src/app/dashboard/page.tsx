'use client'
import { useAuth } from '@/firebase/auth'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Dashboard() {
  const { logout, currentUser } = useAuth()
  const router = useRouter();
    useEffect(() => {
      if(!currentUser){
        router.push("/")
      }
    }, [currentUser,router])
  return (
    <div >
      <button type="button" onClick={
        logout
      } className="text-white bg-gray-800 hover:bg-gray-900 m-6 float-right focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Logout</button>

      <h1 className="text-4xl font-bold text-center h-[100vh] flex justify-center items-center">
        Welcome {currentUser?.email}

      </h1>
      <p>
        this website is under development

      </p>
    </div>
  )
}
