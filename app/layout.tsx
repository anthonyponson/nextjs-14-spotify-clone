import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/Sidebar"
import SupabaseProvider from "@/providers/SupabaseProviders"
import UserProvider from "@/providers/userProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "spotify",
  description: "listen to music on online for free",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SupabaseProvider>
          <UserProvider>
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
