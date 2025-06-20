"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Shield, CheckCircle, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-emerald-900">
      {/* Animated Background with Diagonal Light Streaks */}
      <div className="absolute inset-0">
        {/* Base gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-green-800/80 to-emerald-900/90"></div>

        {/* Diagonal light streaks */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-green-300/50 to-transparent transform rotate-12 animate-pulse"></div>
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-green-200/40 to-transparent transform rotate-12 animation-delay-1000"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-green-400/30 to-transparent transform rotate-12 animation-delay-2000"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-green-300/40 to-transparent transform rotate-12 animation-delay-1500"></div>
        </div>

        {/* Subtle geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-green-300/30 rounded-full"></div>
          <div className="absolute bottom-40 right-32 w-24 h-24 border border-green-400/20 rounded-full"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 border border-green-200/25 rounded-full"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            {/* Trust Badge with Glassmorphism */}
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 shadow-lg">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white/90 text-sm font-medium">Trusted by 500+ families</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Transform Your Home
                <span className="block text-green-300">with Professional Care</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-2xl">
                From pristine yards to reliable childcare, we deliver comprehensive household services that give you
                more time for what matters most.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-white text-green-800 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-md px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:border-white/50"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call 065 842 1416
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-white/70">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">2,000+</div>
                <div className="text-sm text-white/70">Services Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-white/70">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Content - Service Showcase with Enhanced Glassmorphism */}
          <div className="relative animate-slide-in-right">
            {/* Main Service Dashboard Card with enhanced glassmorphism */}
            <div className="relative">
              {/* Glassmorphism frame around the dashboard */}
              <div className="absolute -inset-4 bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20 shadow-2xl"></div>

              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Household Heroes</h3>
                      <p className="text-white/60 text-sm">Service Dashboard</p>
                    </div>
                  </div>
                  <div className="bg-green-400/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-green-300 text-xs font-medium">ACTIVE</span>
                  </div>
                </div>

                {/* Service Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-2xl font-bold text-white">R 2,400</div>
                    <div className="text-white/60 text-sm">Monthly Savings</div>
                    <div className="text-green-300 text-xs">↗ +15% this month</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-2xl font-bold text-white">12</div>
                    <div className="text-white/60 text-sm">Services Active</div>
                    <div className="text-green-300 text-xs">All systems running</div>
                  </div>
                </div>

                {/* Service List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-400/20 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-300" />
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">Yard Cleaning</div>
                        <div className="text-white/50 text-xs">Weekly • Next: Tomorrow</div>
                      </div>
                    </div>
                    <div className="text-green-300 text-sm font-medium">R 350</div>
                  </div>

                  <div className="flex items-center justify-between bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-400/20 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-blue-300" />
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">Babysitting</div>
                        <div className="text-white/50 text-xs">3x/week • Next: Friday</div>
                      </div>
                    </div>
                    <div className="text-green-300 text-sm font-medium">R 600</div>
                  </div>

                  <div className="flex items-center justify-between bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-400/20 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-purple-300" />
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">Plant Care</div>
                        <div className="text-white/50 text-xs">Daily • Automated</div>
                      </div>
                    </div>
                    <div className="text-green-300 text-sm font-medium">R 120</div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex space-x-2 mt-6">
                  <button className="flex-1 bg-green-500/20 hover:bg-green-500/30 backdrop-blur-sm text-green-300 rounded-lg py-2 text-sm font-medium transition-colors">
                    Book Service
                  </button>
                  <button className="flex-1 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white/80 rounded-lg py-2 text-sm font-medium transition-colors">
                    View Schedule
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Mobile Card with enhanced glassmorphism */}
            <div className="absolute -bottom-8 -right-8">
              {/* Glassmorphism frame */}
              <div className="absolute -inset-2 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl"></div>
              <div className="relative bg-white/15 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">5-Star Rating</div>
                    <div className="text-white/60 text-xs">From 500+ families</div>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Trust Badge with enhanced glassmorphism */}
            <div className="absolute -top-4 -left-4">
              {/* Glassmorphism frame */}
              <div className="absolute -inset-1 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-xl"></div>
              <div className="relative bg-white/15 backdrop-blur-xl rounded-full p-3 border border-white/20 shadow-xl">
                <Shield className="w-6 h-6 text-green-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
