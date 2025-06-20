"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Upload, ArrowRight, CheckCircle, Users, Briefcase, Heart } from "lucide-react"

export function CareersSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Professional Interview Image with enhanced glassmorphism */}
            <div className="relative animate-slide-in-left">
              {/* Glassmorphism frame around main image */}
              <div className="absolute -inset-4 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl"></div>

              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src="/images/remote-interview.jpg"
                  alt="Professional remote interview - woman participating in video call with hiring manager"
                  className="w-full h-auto object-cover"
                />
                {/* Image overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                {/* Floating badge on image with glassmorphism */}
                <div className="absolute top-6 left-6">
                  <div className="absolute -inset-1 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-lg"></div>
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/20">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-700 font-semibold text-sm">Now Hiring</span>
                    </div>
                  </div>
                </div>

                {/* Career stats overlay with glassmorphism */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="absolute -inset-2 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl"></div>
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-green-600">50+</div>
                        <div className="text-xs text-gray-600">Team Members</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-green-600">5+</div>
                        <div className="text-xs text-gray-600">Open Positions</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-green-600">24/7</div>
                        <div className="text-xs text-gray-600">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements with glassmorphism */}
              <div className="absolute -top-4 -right-4">
                <div className="absolute -inset-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-lg"></div>
                <div className="relative w-24 h-24 bg-green-100/50 rounded-full border border-white/20"></div>
              </div>
              <div className="absolute -bottom-6 -left-6">
                <div className="absolute -inset-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-lg"></div>
                <div className="relative w-32 h-32 bg-green-50/50 rounded-full border border-white/20"></div>
              </div>
            </div>

            {/* Right Content - Application Form with slide-in animation */}
            <div className="space-y-8 animate-slide-in-right">
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

              {/* Application form with CTA section styling */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="space-y-6">
                  {/* Name fields in a row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Input
                        type="text"
                        placeholder="First Name"
                        className="h-14 border-2 border-gray-200 focus:border-green-500 focus:ring-0 rounded-xl transition-colors"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        type="text"
                        placeholder="Last Name"
                        className="h-14 border-2 border-gray-200 focus:border-green-500 focus:ring-0 rounded-xl transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Email Address"
                      className="h-14 border-2 border-gray-200 focus:border-green-500 focus:ring-0 rounded-xl transition-colors"
                      required
                    />
                  </div>

                  {/* Phone field */}
                  <div className="space-y-2">
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      className="h-14 border-2 border-gray-200 focus:border-green-500 focus:ring-0 rounded-xl transition-colors"
                      required
                    />
                  </div>

                  {/* Area of Interest dropdown */}
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
              </div>

              {/* Trust indicators */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-600 text-sm">Quick Response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-green-600" />
                  <span className="text-gray-600 text-sm">Growing Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-green-600" />
                  <span className="text-gray-600 text-sm">Make a Difference</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
