"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <Image src="/images/logo.png" alt="Household Heroes Logo" width={40} height={40} className="w-10 h-10" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Household Heroes</h1>
              <p className="text-xs text-gray-500">A CC Corporation Service</p>
            </div>
          </div>

          {/* Desktop Navigation - Reverted to warm green theme */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-green-600 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-green-600 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">
              Contact
            </Link>
            <Button className="bg-green-600 hover:bg-green-700 text-white">Book Now</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="#services" className="text-gray-700 hover:text-green-600 transition-colors">
                Services
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-green-600 transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">
                Contact
              </Link>
              <Button className="bg-green-600 hover:bg-green-700 text-white w-full">Book Now</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
