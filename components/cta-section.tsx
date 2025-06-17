"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Phone, CheckCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Ready to Transform Your <span className="text-green-600">Home?</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Join hundreds of satisfied families who trust Household Heroes for all their home support needs. Get
                  your personalized quote in minutes.
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 rounded-full p-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Free consultation and quote</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 rounded-full p-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Response within 24 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 rounded-full p-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Fully insured and background-checked team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 rounded-full p-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Flexible scheduling to fit your needs</span>
                </div>
              </div>

              {/* Alternative Contact */}
              <div className="pt-6 border-t border-green-200">
                <p className="text-gray-600 mb-4">Prefer to speak directly?</p>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: (555) 123-4567
                </Button>
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div className="relative">
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-green-200 rounded-3xl transform rotate-3 opacity-20"></div>

              {/* Form Container */}
              <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border border-green-100">
                <div className="text-center mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Get Your Free Quote</h3>
                  <p className="text-gray-600">Fill out the form below and we'll contact you within 24 hours</p>
                </div>

                <form className="space-y-6">
                  {/* Name Fields Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-semibold text-gray-700 block">
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="John"
                        className="h-12 border-2 border-gray-200 focus:border-green-500 focus:ring-0 rounded-xl transition-colors"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-semibold text-gray-700 block">
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Smith"
                        className="h-12 border-2 border-gray-200 focus:border-green-500 focus:ring-0 rounded-xl transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700 block">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john.smith@example.com"
                      className="h-12 border-2 border-gray-200 focus:border-green-500 focus:ring-0 rounded-xl transition-colors"
                      required
                    />
                  </div>

                  {/* Contact Number Field */}
                  <div className="space-y-2">
                    <label htmlFor="contactNumber" className="text-sm font-semibold text-gray-700 block">
                      Contact Number *
                    </label>
                    <Input
                      id="contactNumber"
                      name="contactNumber"
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="h-12 border-2 border-gray-200 focus:border-green-500 focus:ring-0 rounded-xl transition-colors"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-xl group shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get My Free Quote
                    <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  {/* Privacy Notice */}
                  <p className="text-xs text-gray-500 text-center leading-relaxed pt-4">
                    By submitting this form, you agree to our{" "}
                    <a href="#" className="text-green-600 hover:text-green-700 underline font-medium">
                      Privacy Policy
                    </a>{" "}
                    and consent to being contacted about our services.
                  </p>
                </form>

                {/* Trust Indicators */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Secure & Private</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>No Spam</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Quick Response</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
