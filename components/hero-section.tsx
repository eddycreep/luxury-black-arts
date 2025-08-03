"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Shield, CheckCircle, Phone, Sparkles, Award, Users2 } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function HeroSection() {
  const { ref: leftContentRef, isIntersecting: leftInView } = useIntersectionObserver()
  const { ref: rightContentRef, isIntersecting: rightInView } = useIntersectionObserver()

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 bg-pattern">
      {/* Enhanced animated background with more dynamic elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/95 via-green-800/90 to-emerald-900/95"></div>

        {/* Floating geometric shapes for premium feel */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-green-300/40 rounded-full animate-pulse"></div>
          <div
            className="absolute bottom-40 right-32 w-24 h-24 border-2 border-green-400/30 rounded-full"
            style={{ animation: "float 6s ease-in-out infinite" }}
          ></div>
          <div
            className="absolute top-1/2 left-10 w-16 h-16 border-2 border-green-200/35 rounded-full"
            style={{ animation: "floatReverse 8s ease-in-out infinite" }}
          ></div>
          <div
            className="absolute top-32 right-20 w-20 h-20 bg-green-300/10 rounded-full blur-xl"
            style={{ animation: "float 7s ease-in-out infinite" }}
          ></div>
        </div>

        {/* Enhanced diagonal light streaks with better animation */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-green-300/60 to-transparent transform rotate-12 animate-pulse"></div>
          <div
            className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-green-200/50 to-transparent transform rotate-12"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-green-400/40 to-transparent transform rotate-12"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Enhanced left content with premium styling */}
          <div
            ref={leftContentRef}
            className={`space-y-8 animate-on-scroll animate-slide-in-left ${leftInView ? "in-view" : ""}`}
          >
            {/* Premium trust badge with enhanced glassmorphism */}
            <div className="inline-flex items-center space-x-3 glass-premium rounded-full px-6 py-3 shadow-2xl hover-lift">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-white/95 text-sm font-semibold">Trusted by 500+ Premium Families</span>
            </div>

            {/* Enhanced main heading with gradient text */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Transform Your Home
                <span className="block gradient-text">with Professional Care</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/85 leading-relaxed max-w-2xl">
                From pristine yards to reliable childcare, we deliver comprehensive household services that give you
                more time for what matters most to your family.
              </p>
            </div>

            {/* Enhanced CTA buttons with premium styling */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="btn-premium bg-white text-green-800 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 group"
              >
                Get Free Premium Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass-premium border-2 border-white/40 text-white hover:bg-white/15 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:border-white/60 bg-transparent hover-lift"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call 065 842 1416
              </Button>
            </div>

            {/* Enhanced trust indicators with icons */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center group">
                <div className="flex items-center justify-center mb-2">
                  <Users2 className="w-6 h-6 text-green-300 mr-2" />
                  <div className="text-3xl font-bold text-white">500+</div>
                </div>
                <div className="text-sm text-white/70">Premium Families</div>
              </div>
              <div className="text-center group">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="w-6 h-6 text-green-300 mr-2" />
                  <div className="text-3xl font-bold text-white">2,000+</div>
                </div>
                <div className="text-sm text-white/70">Services Completed</div>
              </div>
              <div className="text-center group">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 text-green-300 mr-2" />
                  <div className="text-3xl font-bold text-white">24/7</div>
                </div>
                <div className="text-sm text-white/70">Premium Support</div>
              </div>
            </div>
          </div>

          {/* Enhanced right content with premium dashboard */}
          <div
            ref={rightContentRef}
            className={`relative animate-on-scroll animate-slide-in-right ${rightInView ? "in-view" : ""}`}
          >
            {/* Premium service dashboard with enhanced glassmorphism */}
            <div
              className="relative glass-premium rounded-3xl p-8 shadow-2xl hover-lift"
              style={{ animation: "pulseGlow 4s ease-in-out infinite" }}
            >
              {/* Enhanced header with premium styling */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">Household Heroes</h3>
                    <p className="text-white/70 text-sm">Premium Service Dashboard</p>
                  </div>
                </div>
                <div className="glass-card rounded-full px-4 py-2">
                  <span className="text-green-300 text-xs font-bold flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    PREMIUM ACTIVE
                  </span>
                </div>
              </div>

              {/* Enhanced service stats with better visual hierarchy */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="glass-card rounded-xl p-4 hover-lift">
                  <div className="text-2xl font-bold text-white">R 2,400</div>
                  <div className="text-white/70 text-sm">Monthly Savings</div>
                  <div className="text-green-300 text-xs flex items-center mt-1">
                    <ArrowRight className="w-3 h-3 mr-1 rotate-[-45deg]" />
                    +15% this month
                  </div>
                </div>
                <div className="glass-card rounded-xl p-4 hover-lift">
                  <div className="text-2xl font-bold text-white">12</div>
                  <div className="text-white/70 text-sm">Active Services</div>
                  <div className="text-green-300 text-xs flex items-center mt-1">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    All systems optimal
                  </div>
                </div>
              </div>

              {/* Enhanced service list with better styling */}
              <div className="space-y-3">
                {[
                  {
                    name: "Premium Yard Care",
                    schedule: "Weekly • Next: Tomorrow",
                    price: "R 350",
                    color: "green",
                    icon: "🌿",
                  },
                  {
                    name: "Elite Babysitting",
                    schedule: "3x/week • Next: Friday",
                    price: "R 600",
                    color: "blue",
                    icon: "👶",
                  },
                  {
                    name: "Luxury Plant Care",
                    schedule: "Daily • Automated",
                    price: "R 120",
                    color: "purple",
                    icon: "🌱",
                  },
                ].map((service, index) => (
                  <div key={index} className="flex items-center justify-between glass-card rounded-lg p-3 hover-lift">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-10 h-10 bg-${service.color}-400/20 rounded-lg flex items-center justify-center text-lg`}
                      >
                        {service.icon}
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">{service.name}</div>
                        <div className="text-white/60 text-xs">{service.schedule}</div>
                      </div>
                    </div>
                    <div className="text-green-300 text-sm font-bold">{service.price}</div>
                  </div>
                ))}
              </div>

              {/* Enhanced quick actions */}
              <div className="flex space-x-2 mt-6">
                <button className="flex-1 btn-premium bg-green-500/30 hover:bg-green-500/40 text-green-200 rounded-lg py-3 text-sm font-medium transition-all duration-300">
                  Book Premium Service
                </button>
                <button className="flex-1 glass-card hover:bg-white/15 text-white/90 rounded-lg py-3 text-sm font-medium transition-all duration-300">
                  View Full Schedule
                </button>
              </div>
            </div>

            {/* Enhanced floating elements with better animations */}
            <div className="absolute -bottom-8 -right-8 glass-premium rounded-2xl p-4 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300 hover-lift">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-white text-sm font-bold">5-Star Premium</div>
                  <div className="text-white/70 text-xs">From 500+ families</div>
                </div>
              </div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>

            {/* Enhanced floating trust badge */}
            <div
              className="absolute -top-4 -left-4 glass-premium rounded-full p-4 shadow-xl"
              style={{ animation: "float 5s ease-in-out infinite" }}
            >
              <Shield className="w-6 h-6 text-green-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
    </section>
  )
}
