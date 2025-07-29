"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Upload, ArrowRight, CheckCircle, Users, Briefcase, Heart } from "lucide-react"
import { useState } from "react"
import { submitCustomerInterest } from "./data/create-customer-interest"
import { toast } from "sonner"

export function CareersSection() {
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
    <section className="py-20 bg-gradient-to-br from-hh-green-600 via-hh-green-700 to-hh-green-800 relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-hh-green-600/80 to-hh-green-700/80"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-hh-green-500/20 to-transparent"></div>

      {/* Decorative background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Updated with new family image and slide-in animation */}
            <div className="relative animate-slide-in-left">
              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/family-dog.jpg"
                  alt="Happy family with dog at home - representing trust and family values"
                  className="w-full h-auto object-cover"
                />
                {/* Image overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                {/* Floating badge on image */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-hh-green-500 rounded-full animate-pulse"></div>
                    <span className="text-hh-green-700 font-semibold text-sm">Now Hiring</span>
                  </div>
                </div>

                {/* Career stats overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-hh-green-600">50+</div>
                      <div className="text-xs text-gray-600">Team Members</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-hh-green-600">5+</div>
                      <div className="text-xs text-gray-600">Open Positions</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-hh-green-600">24/7</div>
                      <div className="text-xs text-gray-600">Support</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/15 rounded-full backdrop-blur-sm border border-white/20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/10 rounded-full backdrop-blur-sm border border-white/20"></div>
            </div>

            {/* Right Content - Form Section with slide-in animation */}
            <div className="space-y-8 animate-slide-in-right">
              {/* Section Header */}
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/15 backdrop-blur-sm rounded-full mb-4 border border-white/20">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Join Our <span className="text-hh-green-200">Team</span>
                </h2>
                <p className="text-xl text-hh-green-100 leading-relaxed">
                  Ready to make a difference in families' lives? Apply today and become part of the Household Heroes
                  family.
                </p>
              </div>

              {/* Contact form with glassmorphism styling */}
              <div className="space-y-6">
                {/* Name fields in a row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="First Name"
                      className="h-14 bg-white/15 border border-white/30 text-white placeholder:text-hh-green-200 focus:border-white/60 focus:bg-white/25 rounded-xl backdrop-blur-md shadow-lg transition-all duration-300"
                      required
                      value={interest.first_name}
                      onChange={(e) => setInterest({ ...interest, first_name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="Last Name"
                      className="h-14 bg-white/15 border border-white/30 text-white placeholder:text-hh-green-200 focus:border-white/60 focus:bg-white/25 rounded-xl backdrop-blur-md shadow-lg transition-all duration-300"
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
                    className="h-14 bg-white/15 border border-white/30 text-white placeholder:text-hh-green-200 focus:border-white/60 focus:bg-white/25 rounded-xl backdrop-blur-md shadow-lg transition-all duration-300"
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
                    className="h-14 bg-white/15 border border-white/30 text-white placeholder:text-hh-green-200 focus:border-white/60 focus:bg-white/25 rounded-xl backdrop-blur-md shadow-lg transition-all duration-300"
                    required
                    value={interest.phone_number}
                    onChange={(e) => setInterest({ ...interest, phone_number: e.target.value })}
                  />
                </div>

                {/* Service selection dropdown */}
                <div className="space-y-2">
                  <select
                    className="w-full h-14 bg-white/15 border border-white/30 text-white rounded-xl px-4 backdrop-blur-md shadow-lg focus:border-white/60 focus:bg-white/25 focus:outline-none transition-all duration-300"
                    value={interest.interest}
                    onChange={(e) => setInterest({ ...interest, interest: e.target.value })}
                  >
                    <option value="" className="text-gray-900 bg-white">
                      Area of Interest
                    </option>
                    <option value="yard-cleaning" className="text-gray-900 bg-white">
                      Yard Cleaning & Maintenance
                    </option>
                    <option value="babysitting" className="text-gray-900 bg-white">
                      Babysitting & Childcare
                    </option>
                    <option value="house-sitting" className="text-gray-900 bg-white">
                      House Sitting
                    </option>
                    <option value="light-errands" className="text-gray-900 bg-white">
                      Light Errands & Shopping
                    </option>
                    <option value="plant-care" className="text-gray-900 bg-white">
                      Plant Care & Watering
                    </option>
                    <option value="general-support" className="text-gray-900 bg-white">
                      General Home Support
                    </option>
                  </select>
                </div>

                {/* CV Upload */}
                <div className="space-y-2">
                  <div className="relative">
                    <input id="cv" name="cv" type="file" accept=".pdf,.doc,.docx" className="hidden" required />
                    <label
                      htmlFor="cv"
                      className="flex items-center justify-center w-full h-14 bg-white/15 border-2 border-dashed border-white/40 rounded-xl cursor-pointer hover:border-white/60 hover:bg-white/25 transition-all duration-300 group backdrop-blur-md shadow-lg"
                    >
                      <Upload className="w-5 h-5 text-hh-green-200 group-hover:text-white mr-2 transition-colors" />
                      <span className="text-hh-green-200 group-hover:text-white transition-colors">
                        Upload CV/Resume
                      </span>
                    </label>
                  </div>
                </div>

                {/* Cover Notes */}
                <div className="space-y-2">
                  <textarea
                    placeholder="Cover Notes (Optional)"
                    rows={4}
                    className="w-full bg-white/15 border border-white/30 text-white placeholder:text-hh-green-200 focus:border-white/60 focus:bg-white/25 rounded-xl px-4 py-3 resize-none backdrop-blur-md shadow-lg focus:outline-none transition-all duration-300"
                  />
                </div>

                {/* Submit button */}
                <Button
                  onClick={handleSubmit}
                  type="submit"
                  size="lg"
                  className="w-full h-14 bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-hh-green-700 text-lg font-semibold rounded-xl group shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Submit Application
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-hh-green-200" />
                  <span className="text-hh-green-100 text-sm">Quick Response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-hh-green-200" />
                  <span className="text-hh-green-100 text-sm">Growing Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-hh-green-200" />
                  <span className="text-hh-green-100 text-sm">Make a Difference</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
