import SignOut from "@/components/sign-out"
import { getServerSession } from "next-auth/next"


export default async function Home() {
  const session = await getServerSession()

  return (
    <div className="flex h-screen">
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center">
        <p>
          Logged in as {session?.user?.email}!
        </p>
        <SignOut />
      </div>
    </div>
  )
}
