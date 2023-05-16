import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

const protectedRoutes = ["/protected", '/testing123']

export default async function middleware(req: NextRequest) {
  // Get the path
  const path = req.nextUrl.pathname

  // Get the token
  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  })

  // Check if route is protected
  if (!session && protectedRoutes.some(route => route === path)) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  // Redirect logged in users from login and register routes
  if (session && (path === "/login" || path === "/register")) {
    return NextResponse.redirect(new URL("/protected", req.url))
  }

  return NextResponse.next()
}
