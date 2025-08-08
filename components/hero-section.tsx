"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Skull, Zap, Music, Palette, Shirt, Star } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    // Pure black background with chaotic punk layout
    <section className="relative min-h-screen bg-black overflow-hidden punk-texture">
      {/* Chaotic graffiti background elements scattered around */}
      <div className="absolute inset-0">
        {/* Graffiti spray paint spots randomly placed */}
        <div className="absolute top-20 left-10 w-32 h-32 spray-paint chaos-float"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 spray-paint chaos-scatter-2"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 spray-paint chaos-scatter-3"></div>
        
        {/* Torn paper texture overlays */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 torn-edge chaos-layer-1"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 torn-edge chaos-layer-2"></div>
      </div>

      {/* Main chaotic content container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left side - Scattered punk text elements */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Underground badge with punk sticker effect */}
            <div className={`inline-block punk-sticker px-4 py-2 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              <span className="text-white font-bold text-sm chaos-scatter-1">UNDERGROUND SINCE 2021</span>
            </div>

            {/* Main chaotic title with scattered positioning */}
            <div className="space-y-6">
              <div className="relative">
                {/* Main title with glitch effect */}
                <h1 className={`text-6xl lg:text-8xl font-black text-white leading-none transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                  <span className="block chaos-scatter-1 glitch-text">LUXURY</span>
                  <span className="block chaos-scatter-3 neon-text ml-8">BLACK</span>
                  <span className="block chaos-scatter-2 scribble-underline text-red-600 -mt-4">ARTS</span>
                </h1>
                
                {/* Overlapping chaotic subtitle */}
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 chaos-layer-3">
                  <p className="text-red-500 text-lg font-bold chaos-scatter-4 skew-chaos">MAYHEM</p>
                  <p className="text-white text-sm chaos-scatter-1 -mt-2">& REBELLION</p>
                </div>
              </div>

              {/* Anarchic description text with torn edge */}
              <div className={`max-w-lg transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                <p className="text-gray-300 text-lg leading-relaxed torn-edge chaos-scatter-2">
                  Raw underground culture through custom tattoos, brutal music, and rebellious fashion. 
                  <span className="text-red-500 font-bold"> NO RULES. PURE CHAOS.</span>
                </p>
              </div>
            </div>

            {/* Chaotic action buttons scattered */}
            <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 underground-shadow rebel-hover chaos-scatter-1 jagged-border">
                ENTER THE CHAOS
              </Button>
              <Button variant="outline" className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold px-6 py-4 chaos-scatter-3 mayhem-border">
                JOIN REBELLION
              </Button>
            </div>

            {/* Scattered punk elements with icons */}
            <div className="flex items-center gap-8 pt-8">
              <div className="chaos-scatter-1 chaos-float">
                <Skull className="w-8 h-8 text-red-500" />
                <p className="text-xs text-white mt-1">ANARCHY</p>
              </div>
              <div className="chaos-scatter-2 rebel-hover">
                <Zap className="w-8 h-8 text-white" />
                <p className="text-xs text-red-500 mt-1">MAYHEM</p>
              </div>
              <div className="chaos-scatter-4">
                <Star className="w-8 h-8 text-red-600 chaos-float" />
                <p className="text-xs text-white mt-1">CHAOS</p>
              </div>
            </div>
          </div>

          {/* Right side - Chaotic service cards overlapping */}
          <div className="lg:col-span-5 relative">
            <div className={`relative h-96 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              
              {/* Tattoo card - positioned chaotically */}
              <div className="absolute top-0 left-0 w-48 chaos-scatter-1 chaos-layer-1">
                <div className="bg-black border-2 border-red-600 p-4 underground-shadow rebel-hover torn-edge">
                  <div className="w-full h-32 bg-gray-900 mb-3 overflow-hidden">
                    <img 
                      src="/images/tatto-artist.jpg" 
                      alt="Punk tattoo art" 
                      className="w-full h-full object-cover chaos-scatter-2"
                    />
                  </div>
                  <h3 className="text-white font-bold chaos-scatter-1 neon-text">TATTOO</h3>
                  <p className="text-red-500 text-sm skew-chaos">PAIN IS ART</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-white font-bold">$150+</span>
                    <Palette className="w-5 h-5 text-red-500 chaos-float" />
                  </div>
                </div>
              </div>

              {/* Music card - overlapping and rotated */}
              <div className="absolute top-16 right-4 w-48 chaos-scatter-3 chaos-layer-2">
                <div className="bg-red-900 border-2 border-white p-4 underground-shadow rebel-hover jagged-border">
                  <div className="w-full h-32 bg-black mb-3 overflow-hidden">
                    <img 
                      src="/images/punk-concert.jpg" 
                      alt="Underground punk concert" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-white font-bold glitch-text">MUSIC</h3>
                  <p className="text-black text-sm font-bold">PURE NOISE</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-white font-bold">$25</span>
                    <Music className="w-5 h-5 text-black chaos-float" />
                  </div>
                </div>
              </div>

              {/* Fashion card - chaotically positioned */}
              <div className="absolute bottom-0 left-12 w-48 chaos-scatter-2 chaos-layer-3">
                <div className="bg-gray-900 border-2 border-red-500 p-4 underground-shadow rebel-hover mayhem-border">
                  <div className="w-full h-32 bg-red-600 mb-3 overflow-hidden">
                    <img 
                      src="/images/tatto-blue-hair.jpg" 
                      alt="Punk fashion rebellion" 
                      className="w-full h-full object-cover chaos-scatter-4"
                    />
                  </div>
                  <h3 className="text-red-500 font-bold cutout-text scribble-underline">FASHION</h3>
                  <p className="text-white text-sm chaos-scatter-1">REBEL WEAR</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-red-500 font-bold">$85</span>
                    <Shirt className="w-5 h-5 text-white chaos-float" />
                  </div>
                </div>
              </div>

              {/* Floating chaotic elements */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 chaos-float">
                <div className="w-8 h-8 bg-red-600 chaos-scatter-3"></div>
              </div>
              <div className="absolute bottom-8 right-8 chaos-layer-1">
                <div className="w-6 h-6 bg-white chaos-scatter-1 punk-sticker"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chaotic floating graffiti elements across the screen */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-1/3 text-red-600 font-bold text-2xl chaos-scatter-4 chaos-float opacity-20">
          ANARCHY
        </div>
        <div className="absolute bottom-32 right-1/4 text-white font-bold text-lg chaos-scatter-1 rebel-hover opacity-30">
          MAYHEM
        </div>
        <div className="absolute top-1/2 right-8 text-red-500 font-bold text-xl chaos-scatter-2 neon-text opacity-25">
          CHAOS
        </div>
      </div>
    </section>
  )
}
