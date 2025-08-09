"use client"

import { Button } from "@/components/ui/button"
import { Palette, Skull, Flame, Zap, Star, Syringe, Heart } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function TattoosSection() {
  const { ref: leftContentRef, isIntersecting: leftInView } = useIntersectionObserver()
  const { ref: rightContentRef, isIntersecting: rightInView } = useIntersectionObserver()

  return (
    // Pure black background with chaotic punk elements
    <section id="tattoos" className="py-20 bg-black relative overflow-hidden punk-texture">
      {/* Chaotic graffiti background elements scattered everywhere */}
      <div className="absolute inset-0">
        {/* Spray paint splatters randomly placed */}
        <div className="absolute top-32 right-16 w-24 h-24 spray-paint chaos-float"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 spray-paint chaos-scatter-3"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 spray-paint chaos-scatter-1"></div>
        
        {/* Torn paper overlays for gritty texture */}
        <div className="absolute top-0 left-0 w-1/4 h-1/2 torn-edge chaos-layer-2"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 torn-edge chaos-layer-1"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left content - Chaotic tattoo information */}
            <div
              ref={leftContentRef}
              className={`space-y-8 animate-on-scroll animate-slide-in-left ${leftInView ? "in-view" : ""}`}
            >
              {/* Punk tattoo icon with sticker effect */}
              <div className="chaos-scatter-2">
                <div className="inline-flex items-center justify-center w-16 h-16 punk-sticker mb-6">
                  <Skull className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Chaotic title with scattered positioning */}
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-6xl font-black leading-tight chaos-scatter-1">
                  <span className="block text-white glitch-text">INK</span>
                  <span className="block text-red-600 neon-text ml-8 -mt-2">YOUR</span>
                  <span className="block text-white scribble-underline chaos-scatter-3">PAIN</span>
                </h2>
                
                {/* Overlapping anarchic subtitle */}
                <div className="relative">
                  <p className="text-gray-300 text-xl leading-relaxed torn-edge max-w-lg">
                    Underground tattoo artistry by Kaos Mayhem. Custom designs that reflect your punk soul and 
                    rebellious spirit. <span className="text-red-500 font-bold chaos-scatter-2">PAIN IS BEAUTY.</span>
                  </p>
                  
                  {/* Floating chaotic element */}
                  <div className="absolute -right-8 top-4 chaos-layer-3">
                    <Flame className="w-6 h-6 text-red-500 chaos-float" />
                  </div>
                </div>
              </div>

              {/* Chaotic features scattered around */}
              <div className="space-y-8">
                {/* Feature 1 - Scattered positioning */}
                <div className="flex items-start space-x-4 chaos-scatter-1 rebel-hover">
                  <div className="punk-sticker p-3 flex-shrink-0">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <div className="torn-edge">
                    <h3 className="text-xl font-bold text-red-500 mb-2 neon-text">
                      CUSTOM PUNK DESIGNS
                    </h3>
                    <p className="text-gray-300 chaos-scatter-2">
                      Original artwork that captures the raw energy of punk culture. From traditional blackwork 
                      to modern grunge aesthetics. <span className="text-red-600 font-bold">NO LIMITS.</span>
                    </p>
                  </div>
                </div>

                {/* Feature 2 - Different positioning */}
                <div className="flex items-start space-x-4 chaos-scatter-3 rebel-hover ml-8">
                  <div className="bg-red-900 border-2 border-white p-3 flex-shrink-0 underground-shadow">
                    <Syringe className="w-6 h-6 text-white" />
                  </div>
                  <div className="mayhem-border p-4 bg-black">
                    <h3 className="text-xl font-bold text-white mb-2 glitch-text">
                      CLEAN & BRUTAL
                    </h3>
                    <p className="text-gray-300 skew-chaos">
                      Professional hygiene standards with sterile equipment. We keep it clean while the art stays dirty.
                      <span className="text-red-500 font-bold"> SAFE REBELLION.</span>
                    </p>
                  </div>
                </div>

                {/* Feature 3 - Chaotic placement */}
                <div className="flex items-start space-x-4 chaos-scatter-2 rebel-hover -ml-4">
                  <div className="bg-black border-2 border-red-600 p-3 flex-shrink-0 jagged-border">
                    <Zap className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="torn-edge">
                    <h3 className="text-xl font-bold text-red-600 mb-2 cutout-text scribble-underline">
                      UNDERGROUND AESTHETIC
                    </h3>
                    <p className="text-gray-300 chaos-scatter-4">
                      Specializing in dark, edgy designs that embody the underground scene. Bold lines, 
                      dramatic shading, pure artistic rebellion. <span className="text-white font-bold">CHAOS INK.</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Chaotic stats with punk styling */}
              <div className="grid grid-cols-3 gap-8 pt-8 mayhem-border">
                <div className="text-center chaos-scatter-1 rebel-hover">
                  <div className="flex items-center justify-center mb-2">
                    <Heart className="w-6 h-6 text-red-600 mr-2 chaos-float" />
                    <div className="text-3xl font-bold neon-text">200+</div>
                  </div>
                  <div className="text-gray-400 text-sm font-medium">SOULS MARKED</div>
                </div>
                <div className="text-center chaos-scatter-3 rebel-hover">
                  <div className="flex items-center justify-center mb-2">
                    <Skull className="w-6 h-6 text-red-600 mr-2 chaos-float" />
                    <div className="text-3xl font-bold glitch-text text-red-500">5★</div>
                  </div>
                  <div className="text-gray-400 text-sm font-medium">PAIN RATING</div>
                </div>
                <div className="text-center chaos-scatter-2 rebel-hover">
                  <div className="flex items-center justify-center mb-2">
                    <Flame className="w-6 h-6 text-red-600 mr-2 chaos-float" />
                    <div className="text-3xl font-bold cutout-text">3+</div>
                  </div>
                  <div className="text-gray-400 text-sm font-medium">YEARS CHAOS</div>
                </div>
              </div>

              {/* Chaotic action button */}
              <div className="pt-6 chaos-scatter-1">
                <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 underground-shadow rebel-hover jagged-border chaos-scatter-2">
                  BOOK YOUR PAIN
                </Button>
              </div>
            </div>

            {/* Right content - Chaotic tattoo artist image with overlapping elements */}
            <div
              ref={rightContentRef}
              className={`relative animate-on-scroll animate-slide-in-right ${rightInView ? "in-view" : ""}`}
            >
              {/* Main image with chaotic positioning */}
              <div className="relative chaos-scatter-3 underground-shadow rebel-hover">
                <div className="relative overflow-hidden jagged-border">
                  <img
                    src="/tattoe-artist-arm.jpeg"
                    alt="Kaos Mayhem - Underground tattoo artist specializing in punk and grunge designs"
                    className="w-full h-auto object-cover chaos-scatter-1"
                  />
                  
                  {/* Chaotic overlay elements */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Punk badges scattered on image */}
                  <div className="absolute top-6 right-6 punk-sticker px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <Skull className="w-4 h-4 text-white" />
                      <span className="text-white font-bold text-sm">KAOS MAYHEM</span>
                    </div>
                  </div>

                  {/* Artist info with torn edge */}
                  <div className="absolute bottom-6 left-6 bg-red-900 border-2 border-white p-3 underground-shadow torn-edge">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                        <Palette className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm neon-text">UNDERGROUND ARTIST</div>
                        <div className="text-gray-300 text-xs chaos-scatter-1">PUNK & GRUNGE MASTER</div>
                      </div>
                    </div>
                  </div>

                  {/* Chaotic style tags */}
                  <div className="absolute top-20 left-6 space-y-2">
                    <div className="bg-black border border-red-600 px-3 py-1 text-xs text-red-500 font-medium chaos-scatter-2">
                      #BLACKWORK
                    </div>
                    <div className="bg-red-600 px-3 py-1 text-xs text-white font-medium chaos-scatter-4">
                      #GRUNGE
                    </div>
                    <div className="bg-black border border-white px-3 py-1 text-xs text-white font-medium chaos-scatter-1">
                      #REBELLION
                    </div>
                  </div>
                </div>

                {/* Floating chaotic elements around image */}
                <div className="absolute -top-6 -left-6 w-24 h-24 spray-paint chaos-float"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 spray-paint chaos-scatter-2"></div>

                {/* Additional tattoo images as floating chaos elements */}
                <div className="absolute -top-6 right-1/3 w-20 h-20 chaos-float underground-shadow">
                  <img src="/punk-tattoes.jpeg" alt="Punk tattoos artwork" className="w-full h-full object-cover jagged-border opacity-80" />
                </div>
                <div className="absolute bottom-1/3 -right-8 w-18 h-18 chaos-scatter-3 underground-shadow">
                  <img src="/tattoo-equipment.jpeg" alt="Tattoo equipment" className="w-full h-full object-cover jagged-border opacity-75" />
                </div>
                <div className="absolute top-1/4 -left-6 w-16 h-16 chaos-scatter-1 underground-shadow">
                  <img src="/tattoo-equipment-two.jpeg" alt="Tattoo equipment setup" className="w-full h-full object-cover jagged-border opacity-70" />
                </div>

                {/* Punk floating icons */}
                <div className="absolute top-1/2 -right-4 punk-sticker p-3 chaos-float">
                  <Star className="w-6 h-6 text-white" />
                </div>
                
                <div className="absolute bottom-1/4 -left-4 chaos-layer-3">
                  <div className="w-8 h-8 bg-red-600 chaos-scatter-3 underground-shadow"></div>
                </div>
              </div>

              {/* Additional chaotic elements scattered around */}
              <div className="absolute top-8 left-1/3 text-red-600 font-bold text-lg chaos-scatter-4 chaos-float opacity-50">
                PAIN
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
        <div className="absolute top-1/4 left-8 text-red-600 font-bold text-xl chaos-scatter-3 chaos-float opacity-20">
          INK
        </div>
        <div className="absolute bottom-1/3 right-12 text-white font-bold text-lg chaos-scatter-2 glitch-text opacity-25">
          MAYHEM
        </div>
      </div>
    </section>
  )
} 