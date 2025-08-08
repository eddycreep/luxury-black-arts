"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Skull, Zap, Star, Flame, CheckCircle } from "lucide-react"
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
        toast("REBELLION JOINED SUCCESSFULLY!", {
          icon: "⚡",
          style: {
            borderRadius: "0px",
            background: "#000000",
            color: "#ffffff",
            border: "2px solid #dc2626",
            fontWeight: "bold",
          },
          duration: 3000,
        })
      }
    } catch (error) {
      console.error(error)
      toast("CHAOS ERROR - TRY AGAIN", {
        icon: "💀",
        style: {
          borderRadius: "0px",
          background: "#000000",
          color: "#dc2626",
          border: "2px solid #dc2626",
          fontWeight: "bold",
        },
        duration: 3000,
      })
    }
  }

  return (
    // Pure black background with chaotic punk elements
    <section className="py-20 bg-black relative overflow-hidden punk-texture">
      {/* Chaotic graffiti background elements scattered everywhere */}
      <div className="absolute inset-0">
        {/* Spray paint splatters randomly placed */}
        <div className="absolute top-20 right-16 w-32 h-32 spray-paint chaos-float"></div>
        <div className="absolute bottom-24 left-20 w-28 h-28 spray-paint chaos-scatter-3"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 spray-paint chaos-scatter-1"></div>
        
        {/* Torn paper overlays for gritty texture */}
        <div className="absolute top-0 left-0 w-1/3 h-1/2 torn-edge chaos-layer-2"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/3 torn-edge chaos-layer-1"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left content - Chaotic CTA form */}
            <div
              ref={leftContentRef}
              className={`space-y-8 animate-on-scroll animate-slide-in-left ${leftInView ? "in-view" : ""}`}
            >
              {/* Underground icon with sticker effect */}
              <div className="chaos-scatter-2">
                <div className="inline-flex items-center justify-center w-16 h-16 punk-sticker mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Chaotic title with scattered positioning */}
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-6xl font-black leading-tight chaos-scatter-1">
                  <span className="block text-white glitch-text">READY</span>
                  <span className="block text-red-600 neon-text ml-8 -mt-2">TO JOIN</span>
                  <span className="block text-red-500 scribble-underline chaos-scatter-3">THE CHAOS?</span>
                </h2>
                
                {/* Overlapping anarchic subtitle */}
                <div className="relative">
                  <p className="text-gray-300 text-xl leading-relaxed torn-edge max-w-lg">
                    Connect with us for custom tattoos, underground music collaborations, or rebellious fashion pieces. 
                    <span className="text-red-500 font-bold chaos-scatter-2">JOIN THE UNDERGROUND.</span>
                  </p>
                  
                  {/* Floating chaotic element */}
                  <div className="absolute -right-8 top-4 chaos-layer-3">
                    <Flame className="w-6 h-6 text-red-500 chaos-float" />
                  </div>
                </div>
              </div>

              {/* Chaotic contact form with punk styling */}
              <div className="space-y-6 chaos-scatter-1">
                {/* Name fields with chaotic positioning */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2 chaos-scatter-2">
                    <Input
                      type="text"
                      placeholder="FIRST NAME"
                      className="h-14 bg-black border-2 border-red-600 text-white placeholder:text-gray-400 focus:border-red-500 focus:bg-black mayhem-border rebel-hover"
                      required
                      value={interest.first_name}
                      onChange={(e) => setInterest({ ...interest, first_name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2 chaos-scatter-4">
                    <Input
                      type="text"
                      placeholder="LAST NAME"
                      className="h-14 bg-black border-2 border-red-600 text-white placeholder:text-gray-400 focus:border-red-500 focus:bg-black mayhem-border rebel-hover"
                      required
                      value={interest.last_name}
                      onChange={(e) => setInterest({ ...interest, last_name: e.target.value })}
                    />
                  </div>
                </div>

                {/* Email field with punk styling */}
                <div className="space-y-2 chaos-scatter-3">
                  <Input
                    type="email"
                    placeholder="EMAIL ADDRESS"
                    className="h-14 bg-black border-2 border-red-600 text-white placeholder:text-gray-400 focus:border-red-500 focus:bg-black jagged-border rebel-hover"
                    required
                    value={interest.email}
                    onChange={(e) => setInterest({ ...interest, email: e.target.value })}
                  />
                </div>

                {/* Phone field with chaotic styling */}
                <div className="space-y-2 chaos-scatter-1">
                  <Input
                    type="tel"
                    placeholder="PHONE NUMBER"
                    className="h-14 bg-black border-2 border-red-600 text-white placeholder:text-gray-400 focus:border-red-500 focus:bg-black underground-shadow rebel-hover"
                    required
                    value={interest.phone_number}
                    onChange={(e) => setInterest({ ...interest, phone_number: e.target.value })}
                  />
                </div>

                {/* Service selection dropdown with punk styling */}
                <div className="space-y-2 chaos-scatter-2">
                  <select
                    className="w-full h-14 bg-black border-2 border-red-600 text-white px-4 focus:border-red-500 focus:bg-black focus:outline-none punk-sticker rebel-hover"
                    value={interest.interest}
                    onChange={(e) => setInterest({ ...interest, interest: e.target.value })}
                  >
                    <option value="" className="text-gray-900 bg-white">
                      CHOOSE YOUR CHAOS
                    </option>
                    <option value="custom-tattoo" className="text-gray-900 bg-white">
                      Custom Tattoo Mayhem
                    </option>
                    <option value="music-collab" className="text-gray-900 bg-white">
                      Underground Music Collaboration
                    </option>
                    <option value="punk-fashion" className="text-gray-900 bg-white">
                      Punk Fashion Rebellion
                    </option>
                    <option value="band-merch" className="text-gray-900 bg-white">
                      Band Merchandise Chaos
                    </option>
                    <option value="underground-show" className="text-gray-900 bg-white">
                      Book Underground Show
                    </option>
                    <option value="general-chaos" className="text-gray-900 bg-white">
                      General Underground Inquiry
                    </option>
                  </select>
                </div>

                {/* Submit button with chaotic styling */}
                <Button
                  onClick={handleSubmit}
                  type="submit"
                  size="lg"
                  className="w-full h-14 bg-red-600 hover:bg-red-700 text-white font-bold text-lg underground-shadow rebel-hover jagged-border chaos-scatter-3"
                >
                  JOIN THE REBELLION
                  <ArrowRight className="ml-2 w-6 h-6 chaos-float" />
                </Button>
              </div>

              {/* Chaotic trust indicators scattered */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2 chaos-scatter-1">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-300 text-sm font-medium">AUTHENTIC UNDERGROUND</span>
                </div>
                <div className="flex items-center space-x-2 chaos-scatter-3">
                  <Zap className="w-5 h-5 text-red-500" />
                  <span className="text-gray-300 text-sm font-medium">QUICK CHAOS</span>
                </div>
                <div className="flex items-center space-x-2 chaos-scatter-2">
                  <Star className="w-5 h-5 text-red-500" />
                  <span className="text-gray-300 text-sm font-medium">RAW ARTISTRY</span>
                </div>
              </div>
            </div>

            {/* Right content - Chaotic image with overlapping elements */}
            <div
              ref={rightContentRef}
              className={`relative animate-on-scroll animate-slide-in-right ${rightInView ? "in-view" : ""}`}
            >
              {/* Main image with chaotic positioning */}
              <div className="relative chaos-scatter-3 underground-shadow rebel-hover">
                <div className="relative overflow-hidden jagged-border">
                  <img
                    src="/images/tatto-blue-hair.jpg"
                    alt="Underground culture representative showcasing tattoos, music, and fashion by Luxury Black Arts"
                    className="w-full h-auto object-cover chaos-scatter-1"
                  />
                  
                  {/* Chaotic overlay elements */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Underground culture badge with punk sticker effect */}
                  <div className="absolute top-6 right-6 punk-sticker px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <Skull className="w-4 h-4 text-white" />
                      <span className="text-white font-bold text-sm">UNDERGROUND CULTURE</span>
                    </div>
                  </div>

                  {/* Stats overlay with chaotic styling */}
                  <div className="absolute bottom-6 left-6 right-6 bg-red-900 border-2 border-white p-4 underground-shadow torn-edge">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="flex items-center justify-center mb-1">
                          <Skull className="w-4 h-4 text-white mr-1 chaos-float" />
                          <div className="text-lg font-bold text-white neon-text">200+</div>
                        </div>
                        <div className="text-xs text-gray-300">TATTOOS</div>
                      </div>
                      <div>
                        <div className="flex items-center justify-center mb-1">
                          <Zap className="w-4 h-4 text-red-400 mr-1 chaos-scatter-2" />
                          <div className="text-lg font-bold text-white glitch-text">15+</div>
                        </div>
                        <div className="text-xs text-gray-300">TRACKS</div>
                      </div>
                      <div>
                        <div className="flex items-center justify-center mb-1">
                          <Star className="w-4 h-4 text-red-400 mr-1 chaos-float" />
                          <div className="text-lg font-bold text-white cutout-text">100+</div>
                        </div>
                        <div className="text-xs text-gray-300">DESIGNS</div>
                      </div>
                    </div>
                  </div>

                  {/* Chaotic service tags scattered */}
                  <div className="absolute top-20 left-6 space-y-2">
                    <div className="bg-black border border-red-600 px-3 py-1 text-xs text-red-500 font-medium chaos-scatter-2">
                      #TATTOOS
                    </div>
                    <div className="bg-red-600 px-3 py-1 text-xs text-white font-medium chaos-scatter-4">
                      #MUSIC
                    </div>
                    <div className="bg-black border border-white px-3 py-1 text-xs text-white font-medium chaos-scatter-1">
                      #FASHION
                    </div>
                  </div>
                </div>

                {/* Floating chaotic elements around image */}
                <div className="absolute -top-6 -left-6 w-24 h-24 spray-paint chaos-float"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 spray-paint chaos-scatter-3"></div>

                {/* Punk floating icons */}
                <div className="absolute top-1/2 -right-4 punk-sticker p-3 chaos-float">
                  <Flame className="w-6 h-6 text-white" />
                </div>
                
                <div className="absolute bottom-1/4 -left-4 chaos-layer-3">
                  <div className="w-8 h-8 bg-red-600 chaos-scatter-2 underground-shadow"></div>
                </div>
              </div>

              {/* Additional chaotic elements scattered around */}
              <div className="absolute top-8 left-1/3 text-red-600 font-bold text-lg chaos-scatter-4 chaos-float opacity-50">
                JOIN
              </div>
              <div className="absolute bottom-8 right-1/4 text-white font-bold text-sm chaos-scatter-1 neon-text opacity-40">
                REBELLION
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating graffiti words across section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-8 text-red-600 font-bold text-xl chaos-scatter-3 chaos-float opacity-20">
          CHAOS
        </div>
        <div className="absolute bottom-1/3 left-12 text-white font-bold text-lg chaos-scatter-2 glitch-text opacity-25">
          REBELLION
        </div>
        <div className="absolute top-1/2 right-1/4 text-red-500 font-bold text-2xl chaos-scatter-1 neon-text opacity-30">
          JOIN
        </div>
      </div>
    </section>
  )
}
