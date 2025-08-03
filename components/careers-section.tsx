"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Upload, ArrowRight, CheckCircle, Users, Briefcase, Heart, Award } from "lucide-react"
import { useState } from "react"
import { submitCustomerInterest } from "./data/create-customer-interest"
import { toast } from "sonner"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function CareersSection() {
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
        toast("Career Application Submitted Successfully!", {
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
      toast("Error submitting application", {
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
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/85 to-green-700/85"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-500/25 to-transparent"></div>

      {/* Premium floating background patterns */}
      <div className="absolute inset-0 opacity-15">
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-2xl"
          style={{ animation: "float 8s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl"
          style={{ animation: "floatReverse 10s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full blur-xl"
          style={{ animation: "float 6s ease-in-out infinite", animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced left content with premium family image */}
            <div
              ref={leftContentRef}
              className={`relative animate-on-scroll animate-slide-in-left ${leftInView ? "in-view" : ""}`}
            >
              {/* Premium image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift">
                <img
                  src="/images/family-dog.jpg"
                  alt="Happy family with dog at home - representing trust and family values"
                  className="w-full h-auto object-cover"
                />
                {/* Enhanced image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                {/* Premium hiring badge */}
                <div className="absolute top-6 left-6 glass-premium rounded-full px-4 py-2 shadow-xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-bold text-sm">Now Hiring Premium Talent</span>
                  </div>
                </div>

                {/* Enhanced career stats overlay */}
                <div className="absolute bottom-6 left-6 right-6 glass-premium rounded-xl p-4 shadow-xl">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="flex items-center justify-center mb-1">
                        <Users className="w-4 h-4 text-green-300 mr-1" />
                        <div className="text-lg font-bold text-white">50+</div>
                      </div>
                      <div className="text-xs text-white/80">Team Members</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center mb-1">
                        <Briefcase className="w-4 h-4 text-green-300 mr-1" />
                        <div className="text-lg font-bold text-white">5+</div>
                      </div>
                      <div className="text-xs text-white/80">Open Positions</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center mb-1">
                        <Award className="w-4 h-4 text-green-300 mr-1" />
                        <div className="text-lg font-bold text-white">24/7</div>
                      </div>
                      <div className="text-xs text-white/80">Support</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced decorative elements */}
              <div
                className="absolute -top-6 -right-6 w-24 h-24 glass-premium rounded-full shadow-xl border border-white/20"
                style={{ animation: "float 7s ease-in-out infinite" }}
              ></div>
              <div
                className="absolute -bottom-8 -left-8 w-32 h-32 glass-card rounded-full shadow-xl border border-white/10"
                style={{ animation: "floatReverse 9s ease-in-out infinite" }}
              ></div>
            </div>

            {/* Enhanced right content with premium form styling */}
            <div
              ref={rightContentRef}
              className={`relative animate-on-scroll animate-slide-in-right ${rightInView ? "in-view" : ""}`}
            >
              {/* Premium form container with enhanced glassmorphism */}
              <div className="glass-premium rounded-3xl p-8 shadow-2xl relative overflow-hidden hover-lift">
                {/* Enhanced background decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-300/15 to-transparent"></div>

                {/* Premium floating patterns */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute top-10 right-10 w-20 h-20 bg-white rounded-full blur-lg"
                    style={{ animation: "float 6s ease-in-out infinite" }}
                  ></div>
                  <div
                    className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full blur-xl"
                    style={{ animation: "floatReverse 8s ease-in-out infinite" }}
                  ></div>
                </div>

                <div className="relative z-10 space-y-8">
                  {/* Enhanced section header */}
                  <div className="space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 glass-card rounded-full mb-4 border border-white/30 shadow-xl">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                      Join Our Elite <span className="text-green-100">Team</span>
                    </h2>
                    <p className="text-xl text-green-50 leading-relaxed">
                      Ready to make a meaningful difference in premium families' lives? Apply today and become part of
                      the Household Heroes elite family of professionals.
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
                          className="h-14 glass-card border border-white/40 text-white placeholder:text-green-100 focus:border-white/70 focus:bg-white/30 rounded-xl shadow-lg transition-all duration-300 hover-lift"
                          required
                          value={interest.first_name}
                          onChange={(e) => setInterest({ ...interest, first_name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Input
                          type="text"
                          placeholder="Last Name"
                          className="h-14 glass-card border border-white/40 text-white placeholder:text-green-100 focus:border-white/70 focus:bg-white/30 rounded-xl shadow-lg transition-all duration-300 hover-lift"
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
                        className="h-14 glass-card border border-white/40 text-white placeholder:text-green-100 focus:border-white/70 focus:bg-white/30 rounded-xl shadow-lg transition-all duration-300 hover-lift"
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
                        className="h-14 glass-card border border-white/40 text-white placeholder:text-green-100 focus:border-white/70 focus:bg-white/30 rounded-xl shadow-lg transition-all duration-300 hover-lift"
                        required
                        value={interest.phone_number}
                        onChange={(e) => setInterest({ ...interest, phone_number: e.target.value })}
                      />
                    </div>

                    {/* Enhanced service selection dropdown */}
                    <div className="space-y-2">
                      <select
                        className="w-full h-14 glass-card border border-white/40 text-white rounded-xl px-4 shadow-lg focus:border-white/70 focus:bg-white/30 focus:outline-none transition-all duration-300 hover-lift"
                        value={interest.interest}
                        onChange={(e) => setInterest({ ...interest, interest: e.target.value })}
                      >
                        <option value="" className="text-gray-900 bg-white">
                          Area of Interest
                        </option>
                        <option value="yard-cleaning" className="text-gray-900 bg-white">
                          Premium Yard Care & Maintenance
                        </option>
                        <option value="babysitting" className="text-gray-900 bg-white">
                          Elite Childcare & Babysitting
                        </option>
                        <option value="house-sitting" className="text-gray-900 bg-white">
                          Luxury House Sitting
                        </option>
                        <option value="light-errands" className="text-gray-900 bg-white">
                          Personal Concierge & Errands
                        </option>
                        <option value="plant-care" className="text-gray-900 bg-white">
                          Botanical Care & Plant Watering
                        </option>
                        <option value="general-support" className="text-gray-900 bg-white">
                          Premium General Home Support
                        </option>
                      </select>
                    </div>

                    {/* Enhanced CV upload */}
                    <div className="space-y-2">
                      <div className="relative">
                        <input id="cv" name="cv" type="file" accept=".pdf,.doc,.docx" className="hidden" required />
                        <label
                          htmlFor="cv"
                          className="flex items-center justify-center w-full h-14 glass-card border-2 border-dashed border-white/50 rounded-xl cursor-pointer hover:border-white/70 hover:bg-white/30 transition-all duration-300 group shadow-lg hover-lift"
                        >
                          <Upload className="w-5 h-5 text-green-100 group-hover:text-white mr-2 transition-colors" />
                          <span className="text-green-100 group-hover:text-white transition-colors font-medium">
                            Upload Premium CV/Resume
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Enhanced cover notes */}
                    <div className="space-y-2">
                      <textarea
                        placeholder="Cover Notes (Optional)"
                        rows={4}
                        className="w-full glass-card border border-white/40 text-white placeholder:text-green-100 focus:border-white/70 focus:bg-white/30 rounded-xl px-4 py-3 resize-none shadow-lg focus:outline-none transition-all duration-300 hover-lift"
                      />
                    </div>

                    {/* Enhanced submit button */}
                    <Button
                      onClick={handleSubmit}
                      type="submit"
                      size="lg"
                      className="w-full h-14 btn-premium glass-card border border-white/40 text-white hover:bg-white hover:text-green-700 text-lg font-semibold rounded-xl group shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                      style={{ animation: "pulseGlow 4s ease-in-out infinite" }}
                    >
                      Submit Premium Application
                      <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Enhanced trust indicators */}
                  <div className="flex items-center space-x-6 pt-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-100" />
                      <span className="text-green-50 text-sm font-medium">Quick Response</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-green-100" />
                      <span className="text-green-50 text-sm font-medium">Growing Elite Team</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart className="w-5 h-5 text-green-100" />
                      <span className="text-green-50 text-sm font-medium">Make a Difference</span>
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
