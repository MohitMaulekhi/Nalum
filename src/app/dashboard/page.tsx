'use client'
import { useAuth } from '@/firebase/auth'
import React from 'react'

export default function Dashboard() {
  const {logout}  = useAuth()
  return (
    <div>Dashboard
      <button type="button" onClick={
        logout
      }>Logout</button>
    </div>
  )
}
