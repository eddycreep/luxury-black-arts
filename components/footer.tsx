"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Palette, Music, Shirt } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-red-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">LBA</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">Luxury Black Arts</h3>
                <p className="text-sm text-red-400">Underground Culture & Artistry</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Authentic underground culture through custom tattoos, raw music, and rebellious fashion. 
              Led by Kaos Mayhem and the collective since 2021.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Underground Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#tattoos" className="text-gray-300 hover:text-red-500 transition-colors flex items-center">
                  <Palette className="w-3 h-3 mr-2" />
                  Custom Tattoos
                </Link>
              </li>
              <li>
                <Link href="#music" className="text-gray-300 hover:text-red-500 transition-colors flex items-center">
                  <Music className="w-3 h-3 mr-2" />
                  Underground Music
                </Link>
              </li>
              <li>
                <Link href="#clothing" className="text-gray-300 hover:text-red-500 transition-colors flex items-center">
                  <Shirt className="w-3 h-3 mr-2" />
                  Punk Fashion
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                  Band Merchandise
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                  Live Performances
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                  Custom Designs
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Underground Collective</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-red-500 transition-colors">
                  About Kaos Mayhem
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                  Artist Portfolio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                  Underground Ethics
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-red-500" />
                <span className="text-gray-300">+27 (0) 83 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-red-500" />
                <span className="text-gray-300">kaos@luxuryblackarts.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-red-500 mt-0.5" />
                <span className="text-gray-300">
                  Underground Studio
                  <br />
                  Cape Town, South Africa
                </span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-gray-400 text-xs">
                  Book consultations for tattoos, music collaborations, or custom fashion pieces.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-900/30 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Luxury Black Arts. All rights reserved. Underground since 2021.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors">
              Underground Ethics
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
