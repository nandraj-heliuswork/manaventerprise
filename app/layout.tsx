import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Manav Enterprise - Education Technology & Display Solutions",
  description:
    "Leading provider of Education Technology and Display Solutions across India with over a decade of experience. ISO 9001:2015 certified with PAN-India service network.",
  keywords:
    "education technology, interactive boards, digital podiums, smart classroom, display solutions, CCTV, video conferencing, STEM lab, robotics",
  icons: {
    icon: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
