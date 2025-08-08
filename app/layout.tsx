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
  title: 'Luxury Black Arts | Underground Culture & Artistry',
  description: 'Custom tattoos, punk music, and underground fashion by Kaos Mayhem and collective. Authentic underground culture since 2021.',
  keywords: 'tattoos, punk music, underground fashion, Kaos Mayhem, grunge, trap metal, custom designs, punk culture',
  generator: 'v0.dev',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={urbanist.variable}>
      <body className={cn("font-sans antialiased bg-black text-white")}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
