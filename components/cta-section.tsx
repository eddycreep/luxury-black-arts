"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, Sparkles, Award, Shield } from "lucide-react"
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
        toast("Premium Interest Submitted Successfully!", {
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
    <section className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-green-800 relative overflow-hidden bg-pattern">
      {/* Enhanced background decoration elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/95 to-green-700/95"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-500/30 to-transparent"></div>

      {/* Premium floating elements */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-2xl"
          style={{ animation: "float 8s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl"
          style={{ animation: "floatReverse 10s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full blur-xl"
          style={{ animation: "float 6s ease-in-out infinite", animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced left content with premium form styling */}
            <div
              ref={leftContentRef}
              className={`space-y-8 animate-on-scroll animate-slide-in-left ${leftInView ? "in-view" : ""}`}
            >
              {/* Premium header with enhanced styling */}
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 glass-premium rounded-full mb-6 shadow-xl">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Ready to Transform Your <span className="text-green-200">Premium Home?</span>
                </h2>
                <p className="text-xl text-green-100 leading-relaxed">
                  Ready to elevate your home operations? Get in touch for a complimentary premium consultation and
                  personalized quote.
                </p>
              </div>

              {/* Enhanced contact form with premium glassmorphism */}
              <div className="space-y-6">
                {/* Enhanced name fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="First Name"
                      className="h-14 glass-premium text-white placeholder:text-green-200 focus:border-white/60 focus:bg-white/25 rounded-xl shadow-lg transition-all duration-300 hover-lift"
                      required
                      value={interest.first_name}
                      onChange={(e) => setInterest({ ...interest, first_name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="Last Name"
                      className="h-14 glass-premium text-white placeholder:text-green-200 focus:border-white/60 focus:bg-white/25 rounded-xl shadow-lg transition-all duration-300 hover-lift"
                      required
                      value={interest.last_name}
                      onChange={(e) => setInterest({ ...interest, last_name: e.target.value })}
                    />
                  </div>
                </div>

                {/* Enhanced email field */}
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="h-14 glass-premium text-white placeholder:text-green-200 focus:border-white/60 focus:bg-white/25 rounded-xl shadow-lg transition-all duration-300 hover-lift"
                    required
                    value={interest.email}
                    onChange={(e) => setInterest({ ...interest, email: e.target.value })}
                  />
                </div>

                {/* Enhanced phone field */}
                <div className="space-y-2">
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    className="h-14 glass-premium text-white placeholder:text-green-200 focus:border-white/60 focus:bg-white/25 rounded-xl shadow-lg transition-all duration-300 hover-lift"
                    required
                    value={interest.phone_number}
                    onChange={(e) => setInterest({ ...interest, phone_number: e.target.value })}
                  />
                </div>

                {/* Enhanced service selection dropdown */}
                <div className="space-y-2">
                  <select
                    className="w-full h-14 glass-premium text-white rounded-xl px-4 shadow-lg focus:border-white/60 focus:bg-white/25 focus:outline-none transition-all duration-300 hover-lift"
                    value={interest.interest}
                    onChange={(e) => setInterest({ ...interest, interest: e.target.value })}
                  >
                    <option value="" className="text-gray-900 bg-white">
                      Select Premium Service...
                    </option>
                    <option value="yard cleaning" className="text-gray-900 bg-white">
                      Premium Yard Care
                    </option>
                    <option value="baby sitting" className="text-gray-900 bg-white">
                      Elite Childcare
                    </option>
                    <option value="house sitting" className="text-gray-900 bg-white">
                      Luxury House Sitting
                    </option>
                    <option value="light errands" className="text-gray-900 bg-white">
                      Personal Concierge
                    </option>
                    <option value="plant watering" className="text-gray-900 bg-white">
                      Botanical Care
                    </option>
                    <option value="home support" className="text-gray-900 bg-white">
                      Premium Home Support
                    </option>
                  </select>
                </div>

                {/* Enhanced submit button */}
                <Button
                  onClick={handleSubmit}
                  type="submit"
                  size="lg"
                  className="w-full h-14 btn-premium bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-green-700 text-lg font-semibold rounded-xl group shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                  style={{ animation: "pulseGlow 3s ease-in-out infinite" }}
                >
                  Get Premium Service
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Enhanced trust indicators */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-200" />
                  <span className="text-green-100 text-sm font-medium">Free Premium Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-green-200" />
                  <span className="text-green-100 text-sm font-medium">Instant Response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-200" />
                  <span className="text-green-100 text-sm font-medium">Premium Service</span>
                </div>
              </div>
            </div>

            {/* Enhanced right content with premium family image */}
            <div
              ref={rightContentRef}
              className={`relative animate-on-scroll animate-slide-in-right ${rightInView ? "in-view" : ""}`}
            >
              {/* Premium image container with enhanced styling */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/household-heroes.jpg-Rh2CgysYDvX38FMfxK7NG22XDgz123.jpeg"
                  alt="Happy premium family with father and children using tablet together at home - representing trust and family values"
                  className="w-full h-auto object-cover"
                />
                {/* Enhanced image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                {/* Premium floating badge */}
                <div className="absolute top-6 left-6 glass-premium rounded-full px-4 py-2 shadow-xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-bold text-sm">Trusted by Premium Families</span>
                  </div>
                </div>

                {/* Premium service stats overlay */}
                <div className="absolute bottom-6 left-6 right-6 glass-premium rounded-xl p-4 shadow-xl">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-white">500+</div>
                      <div className="text-xs text-white/80">Premium Families</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">5★</div>
                      <div className="text-xs text-white/80">Rating</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">24/7</div>
                      <div className="text-xs text-white/80">Support</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced decorative elements */}
              <div
                className="absolute -top-6 -right-6 w-24 h-24 glass-premium rounded-full shadow-xl"
                style={{ animation: "float 6s ease-in-out infinite" }}
              ></div>
              <div
                className="absolute -bottom-8 -left-8 w-32 h-32 glass-card rounded-full shadow-xl"
                style={{ animation: "floatReverse 8s ease-in-out infinite" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
