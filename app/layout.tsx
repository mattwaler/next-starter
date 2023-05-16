import "@/styles/globals.css"
import Toaster from "@/components/toaster"

interface Props {
  children?: React.ReactNode
}

export default async function RootLayout(props: Props) {
  const { children } = props
  return (
    <html lang="en">
      <body>
        <Toaster />
        {children}
      </body>
    </html>
  )
}
