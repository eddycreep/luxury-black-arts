"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-green-100 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-600">Trusted by 500+ families</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Home, <span className="text-[#D94343]">Our Care</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Professional yard cleaning and trusted home support services. From pristine lawns to reliable
                babysitting - we've got your household covered.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#D94343] hover:bg-[#c22727] text-white px-8 py-4 text-lg group">
                Get a Yard Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#D94343] text-[#D94343] hover:bg-[#D94343] hover:text-white px-8 py-4 text-lg"
              >
                View All Services
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-8">
              <div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Happy Families</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">2,000+</div>
                <div className="text-sm text-gray-600">Yards Cleaned</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="bg-green-200 rounded-3xl p-8 relative overflow-hidden">
              <img
                src="/images/sweep.jpg"
                alt="Professional yard cleaning service - raking leaves"
                className="w-full h-auto rounded-2xl shadow-lg object-cover"
              />
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
                <div className="text-green-600 font-semibold text-sm">100% Professional</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
