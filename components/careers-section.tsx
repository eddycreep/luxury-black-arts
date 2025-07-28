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
        toast('Interest submitted', {
            icon: '✔️',
            style: {
                borderRadius: '10px',
                background: '#fff',
                color: '#333',
            },
            duration: 3000,
        });
      }
    } catch (error) {
      console.error(error)
        toast('Error submitting interest', {
          icon: '❌',
          style: {
              borderRadius: '10px',
              background: '#fff',
              color: '#333',
          },
          duration: 3000,
        });
    }
  }

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration elements */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-green-300/90 to-green-500/90"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-500/20 to-transparent"></div> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content - Updated with provided family image and slide-in animation */}
            <div className="relative animate-slide-in-left">
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
            
            {/* Left Content - Form Section with slide-in animation */}
            <div className="space-y-8 animate-slide-in-right">
              {/* Main heading and description */}
              {/* Section Header */}
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Briefcase className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Join Our <span className="text-green-600">Team</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Ready to make a difference in families' lives? Apply today and become part of the Household Heroes
                  family.
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
                      onChange={e => setInterest({ ...interest, first_name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="Last Name"
                      className="h-14 bg-white/10 border-white/20 text-white placeholder:text-green-200 focus:border-white focus:bg-white/20 rounded-lg backdrop-blur-sm"
                      required
                      value={interest.last_name}
                      onChange={e => setInterest({ ...interest, last_name: e.target.value })}
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
                    onChange={e => setInterest({ ...interest, email: e.target.value })}
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
                    onChange={e => setInterest({ ...interest, phone_number: e.target.value })}
                  />
                </div>

                {/* Service selection dropdown */}
                <div className="space-y-2">
                    <select className="w-full h-14 border-2 border-gray-200 focus:border-green-500 focus:ring-0 rounded-xl px-4 transition-colors">
                      <option value="">Area of Interest</option>
                      <option value="yard-cleaning">Yard Cleaning & Maintenance</option>
                      <option value="babysitting">Babysitting & Childcare</option>
                      <option value="house-sitting">House Sitting</option>
                      <option value="light-errands">Light Errands & Shopping</option>
                      <option value="plant-care">Plant Care & Watering</option>
                      <option value="general-support">General Home Support</option>
                    </select>
                  </div>

                  {/* CV Upload */}
                  <div className="space-y-2">
                    <div className="relative">
                      <input id="cv" name="cv" type="file" accept=".pdf,.doc,.docx" className="hidden" required />
                      <label
                        htmlFor="cv"
                        className="flex items-center justify-center w-full h-14 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-green-500 transition-colors group"
                      >
                        <Upload className="w-5 h-5 text-gray-400 group-hover:text-green-500 mr-2" />
                        <span className="text-gray-600 group-hover:text-green-600">Upload CV/Resume</span>
                      </label>
                    </div>
                  </div>

                  {/* Cover Notes */}
                  <div className="space-y-2">
                    <textarea
                      placeholder="Cover Notes (Optional)"
                      rows={4}
                      className="w-full border-2 border-gray-200 focus:border-green-500 focus:ring-0 rounded-xl px-4 py-3 resize-none transition-colors"
                    />
                  </div>

                {/* Submit button */}
                <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-xl group shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Submit Application
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

          </div>
        </div>
      </div>
    </section>
  )
}
