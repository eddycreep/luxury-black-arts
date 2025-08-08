"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black shadow-lg sticky top-0 z-50 border-b border-red-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              {/* <span className="text-white font-bold text-lg">LBA</span> */}
              <Image 
                src="/red-smile.png"
                alt="red-devil-icon"
                height={40}
                width={40}
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Luxury Black Arts</h1>
              <p className="text-xs text-red-400">Underground Culture & Artistry</p>
            </div>
          </div>

          {/* Desktop Navigation - Updated with red punk theme */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#tattoos" className="text-gray-300 hover:text-red-500 transition-colors">
              Tattoos
            </Link>
            <Link href="#music" className="text-gray-300 hover:text-red-500 transition-colors">
              Music
            </Link>
            <Link href="#clothing" className="text-gray-300 hover:text-red-500 transition-colors">
              Clothing
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-red-500 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-red-500 transition-colors">
              Contact
            </Link>
            <Button className="bg-red-600 hover:bg-red-700 text-white border border-red-500 shadow-lg hover-lift">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-red-500 transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-red-900/30">
            <nav className="flex flex-col space-y-4">
              <Link href="#tattoos" className="text-gray-300 hover:text-red-500 transition-colors">
                Tattoos
              </Link>
              <Link href="#music" className="text-gray-300 hover:text-red-500 transition-colors">
                Music
              </Link>
              <Link href="#clothing" className="text-gray-300 hover:text-red-500 transition-colors">
                Clothing
              </Link>
              <Link href="#about" className="text-gray-300 hover:text-red-500 transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-red-500 transition-colors">
                Contact
              </Link>
              <Button className="bg-red-600 hover:bg-red-700 text-white w-full border border-red-500 shadow-lg">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
