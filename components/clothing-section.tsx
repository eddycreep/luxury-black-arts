"use client"

import { Button } from "@/components/ui/button"
import { Shirt, Scissors, Star, Skull, Zap, ShoppingBag, Flame } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function ClothingSection() {
  const { ref: leftContentRef, isIntersecting: leftInView } = useIntersectionObserver()
  const { ref: rightContentRef, isIntersecting: rightInView } = useIntersectionObserver()

  return (
    // Pure black background with chaotic punk elements
    <section id="clothing" className="py-20 bg-black relative overflow-hidden punk-texture">
      {/* Chaotic graffiti background elements scattered everywhere */}
      <div className="absolute inset-0">
        {/* Spray paint splatters randomly placed */}
        <div className="absolute top-24 left-16 w-30 h-30 spray-paint chaos-float"></div>
        <div className="absolute bottom-28 right-24 w-38 h-38 spray-paint chaos-scatter-3"></div>
        <div className="absolute top-2/3 left-1/3 w-22 h-22 spray-paint chaos-scatter-1"></div>
        
        {/* Torn paper overlays for gritty texture */}
        <div className="absolute top-0 left-0 w-1/3 h-1/2 torn-edge chaos-layer-2"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/3 torn-edge chaos-layer-1"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left content - Chaotic fashion information */}
            <div
              ref={leftContentRef}
              className={`space-y-8 animate-on-scroll animate-slide-in-left ${leftInView ? "in-view" : ""}`}
            >
              {/* Punk fashion icon with sticker effect */}
              <div className="chaos-scatter-2">
                <div className="inline-flex items-center justify-center w-16 h-16 punk-sticker mb-6">
                  <Scissors className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Chaotic title with scattered positioning */}
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-6xl font-black leading-tight chaos-scatter-1">
                  <span className="block text-white glitch-text">PUNK</span>
                  <span className="block text-red-600 neon-text ml-8 -mt-2">FASHION</span>
                  <span className="block text-red-500 scribble-underline chaos-scatter-3">REBEL</span>
                </h2>
                
                {/* Overlapping anarchic subtitle */}
                <div className="relative">
                  <p className="text-gray-300 text-xl leading-relaxed torn-edge max-w-lg">
                    Underground fashion designed by Kaos Mayhem and LSG. Every piece embodies the rebellious spirit 
                    of punk culture with modern edge. <span className="text-red-500 font-bold chaos-scatter-2">WEAR YOUR ATTITUDE.</span>
                  </p>
                  
                  {/* Floating chaotic element */}
                  <div className="absolute -right-8 top-4 chaos-layer-3">
                    <Flame className="w-6 h-6 text-red-500 chaos-float" />
                  </div>
                </div>
              </div>

              {/* Chaotic features scattered around */}
              <div className="space-y-8">
                {/* Feature 1 - Custom Designs */}
                <div className="flex items-start space-x-4 chaos-scatter-1 rebel-hover">
                  <div className="punk-sticker p-3 flex-shrink-0">
                    <Scissors className="w-6 h-6 text-white" />
                  </div>
                  <div className="torn-edge">
                    <h3 className="text-xl font-bold text-red-500 mb-2 neon-text">
                      CUSTOM REBEL DESIGNS
                    </h3>
                    <p className="text-gray-300 chaos-scatter-2">
                      Hand-crafted pieces that reflect the raw energy of underground culture. Each design tells 
                      a story of rebellion and authentic self-expression. <span className="text-red-600 font-bold">NO LIMITS.</span>
                    </p>
                  </div>
                </div>

                {/* Feature 2 - Dual Designers */}
                <div className="flex items-start space-x-4 chaos-scatter-3 rebel-hover ml-8">
                  <div className="bg-red-900 border-2 border-white p-3 flex-shrink-0 underground-shadow">
                    <Skull className="w-6 h-6 text-white" />
                  </div>
                  <div className="mayhem-border p-4 bg-black">
                    <h3 className="text-xl font-bold text-white mb-2 glitch-text">
                      DUAL REBEL DESIGNERS
                    </h3>
                    <p className="text-gray-300 skew-chaos">
                      Creative collaboration between Kaos Mayhem and LSG brings diverse perspectives to every piece, 
                      creating unique punk fashion statements. <span className="text-red-500 font-bold">DOUBLE CHAOS.</span>
                    </p>
                  </div>
                </div>

                {/* Feature 3 - Authentic Punk Style */}
                <div className="flex items-start space-x-4 chaos-scatter-2 rebel-hover -ml-4">
                  <div className="bg-black border-2 border-red-600 p-3 flex-shrink-0 jagged-border">
                    <Zap className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="torn-edge">
                    <h3 className="text-xl font-bold text-red-600 mb-2 cutout-text scribble-underline">
                      AUTHENTIC PUNK STYLE
                    </h3>
                    <p className="text-gray-300 chaos-scatter-4">
                      From distressed denim to metal-studded accessories, every piece captures the essence 
                      of punk and grunge culture with modern craftsmanship. <span className="text-white font-bold">WEARABLE REBELLION.</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Chaotic fashion categories scattered */}
              <div className="space-y-4 chaos-scatter-3">
                <h4 className="text-lg font-bold text-white neon-text">OUR REBEL COLLECTIONS:</h4>
                <div className="grid grid-cols-2 gap-3">
                  <span className="px-4 py-2 bg-red-600 text-white text-sm font-medium text-center chaos-scatter-1 punk-sticker">
                    BAND MERCH
                  </span>
                  <span className="px-4 py-2 bg-black border-2 border-white text-white text-sm font-medium text-center chaos-scatter-2 underground-shadow">
                    PUNK JACKETS
                  </span>
                  <span className="px-4 py-2 bg-red-900 border border-red-500 text-red-400 text-sm font-medium text-center chaos-scatter-4 mayhem-border">
                    GRUNGE TEES
                  </span>
                  <span className="px-4 py-2 bg-gray-900 border-2 border-red-600 text-red-500 text-sm font-medium text-center chaos-scatter-3 jagged-border">
                    ACCESSORIES
                  </span>
                </div>
              </div>

              {/* Chaotic stats with fashion styling */}
              <div className="grid grid-cols-3 gap-8 pt-8 mayhem-border">
                <div className="text-center chaos-scatter-1 rebel-hover">
                  <div className="flex items-center justify-center mb-2">
                    <Shirt className="w-6 h-6 text-red-600 mr-2 chaos-float" />
                    <div className="text-3xl font-bold neon-text">100+</div>
                  </div>
                  <div className="text-gray-400 text-sm font-medium">DESIGNS CREATED</div>
                </div>
                <div className="text-center chaos-scatter-3 rebel-hover">
                  <div className="flex items-center justify-center mb-2">
                    <Skull className="w-6 h-6 text-red-600 mr-2 chaos-float" />
                    <div className="text-3xl font-bold glitch-text text-red-500">2</div>
                  </div>
                  <div className="text-gray-400 text-sm font-medium">REBEL DESIGNERS</div>
                </div>
                <div className="text-center chaos-scatter-2 rebel-hover">
                  <div className="flex items-center justify-center mb-2">
                    <ShoppingBag className="w-6 h-6 text-red-600 mr-2 chaos-float" />
                    <div className="text-3xl font-bold cutout-text">500+</div>
                  </div>
                  <div className="text-gray-400 text-sm font-medium">REBELS DRESSED</div>
                </div>
              </div>

              {/* Chaotic action buttons scattered */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 underground-shadow rebel-hover jagged-border chaos-scatter-1">
                  SHOP REBELLION
                </Button>
                <Button variant="outline" className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold px-6 py-4 chaos-scatter-3 mayhem-border">
                  CUSTOM CHAOS
                </Button>
              </div>
            </div>

            {/* Right content - Chaotic fashion image with overlapping elements */}
            <div
              ref={rightContentRef}
              className={`relative animate-on-scroll animate-slide-in-right ${rightInView ? "in-view" : ""}`}
            >
              {/* Main fashion image with chaotic positioning */}
              <div className="relative chaos-scatter-3 underground-shadow rebel-hover">
                <div className="relative overflow-hidden jagged-border">
                  <img
                    src="/leather-jacket.jpeg"
                    alt="Punk fashion model wearing underground designs by Kaos Mayhem and LSG - alternative style clothing"
                    className="w-full h-auto object-cover chaos-scatter-1"
                  />
                  
                  {/* Chaotic overlay elements */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Fashion badge with punk sticker effect */}
                  <div className="absolute top-6 right-6 punk-sticker px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <Shirt className="w-4 h-4 text-white" />
                      <span className="text-white font-bold text-sm">UNDERGROUND FASHION</span>
                    </div>
                  </div>

                  {/* Designer info with torn edge */}
                  <div className="absolute bottom-6 left-6 bg-red-900 border-2 border-white p-3 underground-shadow torn-edge">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                        <Scissors className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm neon-text">KAOS MAYHEM × LSG</div>
                        <div className="text-gray-300 text-xs chaos-scatter-1">PUNK FASHION REBELS</div>
                      </div>
                    </div>
                  </div>

                  {/* Chaotic style tags scattered */}
                  <div className="absolute top-20 left-6 space-y-2">
                    <div className="bg-black border border-red-600 px-3 py-1 text-xs text-red-500 font-medium chaos-scatter-2">
                      #PUNKSTYLE
                    </div>
                    <div className="bg-red-600 px-3 py-1 text-xs text-white font-medium chaos-scatter-4">
                      #ALTERNATIVE
                    </div>
                    <div className="bg-black border border-white px-3 py-1 text-xs text-white font-medium chaos-scatter-1">
                      #UNDERGROUND
                    </div>
                  </div>
                </div>

                {/* Floating chaotic elements around image */}
                <div className="absolute -top-6 -left-6 w-24 h-24 spray-paint chaos-float"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 spray-paint chaos-scatter-2"></div>

                {/* Additional fashion images as floating chaos elements */}
                <div className="absolute -top-8 right-1/4 w-20 h-20 chaos-float underground-shadow">
                  <img src="/punk-red-fur.jpeg" alt="Punk red fur fashion" className="w-full h-full object-cover jagged-border opacity-80" />
                </div>
                <div className="absolute bottom-1/3 -right-6 w-16 h-16 chaos-scatter-1 underground-shadow">
                  <img src="/tweaker.jpeg" alt="Punk tweaker style" className="w-full h-full object-cover jagged-border opacity-75" />
                </div>
                <div className="absolute top-1/4 -left-8 w-18 h-18 chaos-scatter-4 underground-shadow">
                  <img src="/punk-black-kilt.jpeg" alt="Punk black kilt fashion" className="w-full h-full object-cover jagged-border opacity-70" />
                </div>
                <div className="absolute bottom-1/2 right-8 w-14 h-14 chaos-scatter-3 underground-shadow">
                  <img src="/punk-joker.jpeg" alt="Punk joker style" className="w-full h-full object-cover jagged-border opacity-65" />
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
                STYLE
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
          FASHION
        </div>
        <div className="absolute bottom-1/3 right-12 text-white font-bold text-lg chaos-scatter-2 glitch-text opacity-25">
          PUNK
        </div>
        <div className="absolute top-1/2 right-1/4 text-red-500 font-bold text-2xl chaos-scatter-1 neon-text opacity-30">
          REBEL
        </div>
      </div>
    </section>
  )
} 