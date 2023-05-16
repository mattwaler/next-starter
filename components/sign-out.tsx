"use client"

import { signOut } from "next-auth/react"

export default function SignOut() {
  return (
    <button
      className="underline"
      onClick={() => signOut()}
    >
      Sign out
    </button>
  )
}
