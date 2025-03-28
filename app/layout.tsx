import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import LoadingSplash from "@/components/loading-splash"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Coinbase How to Buy Bitcoin and Earn™ | Udemy",
  description: "How to Use the Coinbase App to Buy Bitcoin | Coinbase Tutorial | Coinbase Earn™ | Coinbase Wallet",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingSplash />
        {children}
        <Analytics />
      </body>
    </html>
  )
}



import './globals.css'