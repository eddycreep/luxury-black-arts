"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white text-gray-900 py-16 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image src="/images/logo.png" alt="Household Heroes Logo" width={32} height={32} className="w-8 h-8" />
              <div>
                <h3 className="font-bold text-lg text-gray-900">Household Heroes</h3>
                <p className="text-sm text-gray-600">A CC Corporation Service</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Professional household services you can trust. From yard maintenance to childcare, we're here to support
              your family's needs.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-600 hover:text-green-600 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-600 hover:text-green-600 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-600 hover:text-green-600 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-900">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  Yard Cleaning
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  Babysitting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  House Sitting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  Light Errands
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  Plant Watering
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-900">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  Insurance
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-900">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-600" />
                <span className="text-gray-600">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-green-600" />
                <span className="text-gray-600">hello@householdheroes.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-green-600 mt-0.5" />
                <span className="text-gray-600">
                  123 Service Street
                  <br />
                  Your City, ST 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Household Heroes. All rights reserved. A CC Corporation Service.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
