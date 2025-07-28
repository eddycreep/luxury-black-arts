import type { Metadata } from 'next'
import './globals.css'
import { cn } from "@/lib/utils"
import { Urbanist } from "next/font/google"
import { Toaster } from "@/components/ui/sonner";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
})

export const metadata: Metadata = {
  title: 'Household Heroes | CC Corporation',
  description: 'Yard cleaning and trusted home services by Household Heroes, powered by Crews Cntrl Corporation.',
  generator: 'v0.dev',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={urbanist.variable}>
      <body className={cn("font-sans antialiased")}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
