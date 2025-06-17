import type { Metadata } from 'next'
import './globals.css'
import { cn } from "@/lib/utils"
import { Nunito_Sans } from "next/font/google"

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  display: "swap",
})

export const metadata: Metadata = {
  title: 'Household Heroes | CC Corporation',
  description: 'Yard cleaning and trusted home services by Household Heroes, powered by Crews Cntrl Corporation.',
  generator: 'v0.dev',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-sans antialiased", nunito_sans.className )}>
        {children}
      </body>
    </html>
  )
}
