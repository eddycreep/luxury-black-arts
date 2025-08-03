"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle } from "lucide-react"
import { useState } from "react"
import { submitCustomerInterest } from "./data/create-customer-interest"
import { toast } from "sonner"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function CTASection() {
  const { ref: leftContentRef, isIntersecting: leftInView } = useIntersectionObserver()
  const { ref: rightContentRef, isIntersecting: rightInView } = useIntersectionObserver()

  const [interest, setInterest] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    interest: "",
  })

  const handleSubmit = async () => {
    try {
      const response = await submitCustomerInterest({ customerInterest: interest })

      if (response.message === "success") {
        toast("Interest submitted", {
          icon: "✔️",
          style: {
            borderRadius: "10px",
            background: "#fff",
            color: "#333",
          },
          duration: 3000,
        })
      }
    } catch (error) {
      console.error(error)
      toast("Error submitting interest", {
        icon: "❌",
        style: {
          borderRadius: "10px",
          background: "#fff",
          color: "#333",
        },
        duration: 3000,
      })
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-green-700/90"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-500/20 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Form Section with slide-in animation */}
            <div
              ref={leftContentRef}
              className={`space-y-8 animate-on-scroll animate-slide-in-left ${leftInView ? "in-view" : ""}`}
            >
              {/* Main heading and description */}
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Ready to Transform Your <span className="text-green-200">Home?</span>
                </h2>
                <p className="text-xl text-green-100 leading-relaxed">
                  Ready to transform your home operations? Get in touch for a free consultation and quote.
                </p>
              </div>

              {/* Contact form with modern styling */}
              <div className="space-y-6">
                {/* Name fields in a row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="First Name"
                      className="h-14 bg-white/10 border-white/20 text-white placeholder:text-green-200 focus:border-white focus:bg-white/20 rounded-lg backdrop-blur-sm"
                      required
                      value={interest.first_name}
                      onChange={(e) => setInterest({ ...interest, first_name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="Last Name"
                      className="h-14 bg-white/10 border-white/20 text-white placeholder:text-green-200 focus:border-white focus:bg-white/20 rounded-lg backdrop-blur-sm"
                      required
                      value={interest.last_name}
                      onChange={(e) => setInterest({ ...interest, last_name: e.target.value })}
                    />
                  </div>
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="h-14 bg-white/10 border-white/20 text-white placeholder:text-green-200 focus:border-white focus:bg-white/20 rounded-lg backdrop-blur-sm"
                    required
                    value={interest.email}
                    onChange={(e) => setInterest({ ...interest, email: e.target.value })}
                  />
                </div>

                {/* Phone field */}
                <div className="space-y-2">
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    className="h-14 bg-white/10 border-white/20 text-white placeholder:text-green-200 focus:border-white focus:bg-white/20 rounded-lg backdrop-blur-sm"
                    required
                    value={interest.phone_number}
                    onChange={(e) => setInterest({ ...interest, phone_number: e.target.value })}
                  />
                </div>

                {/* Service selection dropdown */}
                <div className="space-y-2">
                  <select
                    className="w-full h-14 bg-white/10 border border-white/20 text-white rounded-lg px-4 backdrop-blur-sm focus:border-white focus:bg-white/20 focus:outline-none"
                    value={interest.interest}
                    onChange={(e) => setInterest({ ...interest, interest: e.target.value })}
                  >
                    <option value="" className="text-gray-900">
                      Interested in...
                    </option>
                    <option value="yard cleaning" className="text-gray-900">
                      Yard Cleaning
                    </option>
                    <option value="baby sitting" className="text-gray-900">
                      Babysitting
                    </option>
                    <option value="house sitting" className="text-gray-900">
                      House Sitting
                    </option>
                    <option value="light errands" className="text-gray-900">
                      Light Errands
                    </option>
                    <option value="plant watering" className="text-gray-900">
                      Plant Watering
                    </option>
                    <option value="home support" className="text-gray-900">
                      Home Support
                    </option>
                  </select>
                </div>

                {/* Submit button */}
                <Button
                  onClick={handleSubmit}
                  type="submit"
                  size="lg"
                  className="w-full h-14 bg-white text-green-700 hover:bg-green-50 text-lg font-semibold rounded-lg group shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-200" />
                  <span className="text-green-100 text-sm">Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-200" />
                  <span className="text-green-100 text-sm">Quick Response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-200" />
                  <span className="text-green-100 text-sm">Professional Service</span>
                </div>
              </div>
            </div>

            {/* Right Content - Updated with provided family image and slide-in animation */}
            <div
              ref={rightContentRef}
              className={`relative animate-on-scroll animate-slide-in-right ${rightInView ? "in-view" : ""}`}
            >
              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/household-heroes.jpg-Rh2CgysYDvX38FMfxK7NG22XDgz123.jpeg"
                  alt="Happy family with father and children using tablet together at home - representing trust and family values"
                  className="w-full h-auto object-cover"
                />
                {/* Image overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                {/* Floating badge on image */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-700 font-semibold text-sm">Trusted by Families</span>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full backdrop-blur-sm"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-full backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
