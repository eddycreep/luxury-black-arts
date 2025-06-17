"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#D94343] to-[#c22727]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Main CTA Content */}
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Ready to Get Started?</h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Get your free quote today and discover why families trust Household Heroes for all their home support
              needs.
            </p>
          </div>

          {/* CTA Form */}
          <div className="max-w-md mx-auto space-y-4">
            <div className="flex gap-3">
              <Input
                placeholder="Enter your phone number"
                className="bg-white border-0 text-gray-900 placeholder:text-gray-500"
              />
              <Button className="bg-white text-[#D94343] hover:bg-gray-100 px-6">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-sm text-red-100">We'll call you within 24 hours for your free consultation</p>
          </div>

          {/* Alternative CTA */}
          <div className="pt-8 border-t border-red-400">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#D94343] px-8"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (555) 123-4567
              </Button>
              <span className="text-red-100">or</span>
              <Button size="lg" className="bg-white text-[#D94343] hover:bg-gray-100 px-8">
                Schedule Online
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
