"use client"

import { Button } from "@/components/ui/button"
import { Music, Volume2, Skull, Zap, Star, Mic, Radio, Headphones } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function MusicSection() {
  const { ref: leftContentRef, isIntersecting: leftInView } = useIntersectionObserver()
  const { ref: rightContentRef, isIntersecting: rightInView } = useIntersectionObserver()

  return (
    // Pure black background with chaotic graffiti elements
    <section id="music" className="py-20 bg-black relative overflow-hidden punk-texture">
      {/* Chaotic graffiti background elements scattered around */}
      <div className="absolute inset-0">
        {/* Spray paint splatters positioned chaotically */}
        <div className="absolute top-40 left-16 w-28 h-28 spray-paint chaos-float"></div>
        <div className="absolute bottom-32 right-24 w-20 h-20 spray-paint chaos-scatter-1"></div>
        <div className="absolute top-1/3 left-1/2 w-24 h-24 spray-paint chaos-scatter-4"></div>
        
        {/* Torn paper texture overlays for underground feel */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 torn-edge chaos-layer-1"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 torn-edge chaos-layer-2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left content - Chaotic concert image with overlapping elements */}
            <div
              ref={leftContentRef}
              className={`relative animate-on-scroll animate-slide-in-left ${leftInView ? "in-view" : ""}`}
            >
              {/* Main concert image with anarchic styling */}
              <div className="relative chaos-scatter-2 underground-shadow rebel-hover">
                <div className="relative overflow-hidden jagged-border">
                  <img
                    src="/concert-fans-black-white.jpeg"
                    alt="Live punk concert performance by Kaos Mayhem and group - underground music scene"
                    className="w-full h-auto object-cover chaos-scatter-1"
                  />
                  
                  {/* Chaotic overlay with torn effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                  {/* Live performance badge with punk sticker effect */}
                  <div className="absolute top-6 left-6 punk-sticker px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full chaos-float"></div>
                      <span className="text-white font-bold text-sm">LIVE CHAOS</span>
                    </div>
                  </div>

                  {/* Band info with chaotic overlays */}
                  <div className="absolute bottom-6 left-6 right-6 bg-red-900 border-2 border-white p-4 underground-shadow torn-edge">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="flex items-center justify-center mb-1">
                          <Skull className="w-4 h-4 text-white mr-1 chaos-float" />
                          <div className="text-lg font-bold text-white neon-text">5+</div>
                        </div>
                        <div className="text-xs text-gray-300">REBELS</div>
                      </div>
                      <div>
                        <div className="flex items-center justify-center mb-1">
                          <Volume2 className="w-4 h-4 text-red-400 mr-1 chaos-scatter-2" />
                          <div className="text-lg font-bold text-white glitch-text">50+</div>
                        </div>
                        <div className="text-xs text-gray-300">NOISE TRACKS</div>
                      </div>
                      <div>
                        <div className="flex items-center justify-center mb-1">
                          <Zap className="w-4 h-4 text-red-400 mr-1 chaos-float" />
                          <div className="text-lg font-bold text-white cutout-text">100+</div>
                        </div>
                        <div className="text-xs text-gray-300">CHAOS SHOWS</div>
                      </div>
                    </div>
                  </div>

                  {/* Scattered punk elements on image */}
                  <div className="absolute top-20 right-6 space-y-2">
                    <div className="bg-black border border-red-600 px-3 py-1 text-xs text-red-500 font-medium chaos-scatter-3">
                      #PUNK
                    </div>
                    <div className="bg-red-600 px-3 py-1 text-xs text-white font-medium chaos-scatter-1">
                      #GRUNGE
                    </div>
                    <div className="bg-black border border-white px-3 py-1 text-xs text-white font-medium chaos-scatter-4">
                      #TRAPMETAL
                    </div>
                  </div>
                </div>

                {/* Floating chaotic elements around image */}
                <div className="absolute -top-6 -right-6 w-24 h-24 spray-paint chaos-float"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 spray-paint chaos-scatter-3"></div>

                {/* Additional music images as floating chaos elements */}
                <div className="absolute -top-8 left-1/4 w-22 h-22 chaos-float underground-shadow">
                  <img src="/granny-punk.jpg" alt="Granny punk style" className="w-full h-full object-cover jagged-border opacity-80" />
                </div>
                <div className="absolute bottom-1/4 -right-8 w-18 h-18 chaos-scatter-1 underground-shadow">
                  <img src="/punkies.jpeg" alt="Punk community" className="w-full h-full object-cover jagged-border opacity-75" />
                </div>
                <div className="absolute top-1/3 -left-6 w-16 h-16 chaos-scatter-4 underground-shadow">
                  <img src="/punk-mural-girls.jpeg" alt="Punk mural girls" className="w-full h-full object-cover jagged-border opacity-70" />
                </div>
                <div className="absolute bottom-1/2 right-1/4 w-20 h-20 chaos-scatter-2 underground-shadow">
                  <img src="/punk-red-rage-writing.jpeg" alt="Punk red rage writing" className="w-full h-full object-cover jagged-border opacity-65" />
                </div>

                {/* Punk floating icons */}
                <div className="absolute top-1/2 -left-4 punk-sticker p-3 chaos-float">
                  <Music className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Right content - Chaotic music information */}
            <div
              ref={rightContentRef}
              className={`space-y-8 animate-on-scroll animate-slide-in-right ${rightInView ? "in-view" : ""}`}
            >
              {/* Underground music icon with sticker effect */}
              <div className="chaos-scatter-1">
                <div className="inline-flex items-center justify-center w-16 h-16 punk-sticker mb-6">
                  <Radio className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Chaotic title with scattered positioning */}
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-6xl font-black leading-tight chaos-scatter-3">
                  <span className="block text-red-600 glitch-text">RAW</span>
                  <span className="block text-white neon-text ml-8 -mt-2">SOUND</span>
                  <span className="block text-red-500 scribble-underline chaos-scatter-2">CHAOS</span>
                </h2>
                
                {/* Overlapping anarchic subtitle */}
                <div className="relative">
                  <p className="text-gray-300 text-xl leading-relaxed torn-edge max-w-lg">
                    Underground music collective led by Kaos Mayhem. We create punk, grunge, trap metal, 
                    and heavy metal that speaks to the rebellious soul. <span className="text-red-500 font-bold chaos-scatter-1">PURE NOISE.</span>
                  </p>
                  
                  {/* Floating chaotic element */}
                  <div className="absolute -right-8 top-4 chaos-layer-3">
                    <Mic className="w-6 h-6 text-red-500 chaos-float" />
                  </div>
                </div>
              </div>

              {/* Chaotic features scattered around */}
              <div className="space-y-8">
                {/* Feature 1 - Multi-Genre Masters */}
                <div className="flex items-start space-x-4 chaos-scatter-2 rebel-hover">
                  <div className="punk-sticker p-3 flex-shrink-0">
                    <Volume2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="torn-edge">
                    <h3 className="text-xl font-bold text-red-500 mb-2 neon-text">
                      MULTI-GENRE CHAOS
                    </h3>
                    <p className="text-gray-300 chaos-scatter-4">
                      From crushing trap metal to raw punk energy, we blend genres to create something uniquely ours. 
                      <span className="text-red-600 font-bold">NO BOUNDARIES.</span>
                    </p>
                  </div>
                </div>

                {/* Feature 2 - Collective Power */}
                <div className="flex items-start space-x-4 chaos-scatter-1 rebel-hover ml-8">
                  <div className="bg-red-900 border-2 border-white p-3 flex-shrink-0 underground-shadow">
                    <Skull className="w-6 h-6 text-white" />
                  </div>
                  <div className="mayhem-border p-4 bg-black">
                    <h3 className="text-xl font-bold text-white mb-2 glitch-text">
                      COLLECTIVE MAYHEM
                    </h3>
                    <p className="text-gray-300 skew-chaos">
                      A tight-knit group of musicians who share the same vision. Each member brings their own 
                      style to create our signature underground sound. <span className="text-red-500 font-bold">PURE REBELLION.</span>
                    </p>
                  </div>
                </div>

                {/* Feature 3 - Live Energy */}
                <div className="flex items-start space-x-4 chaos-scatter-4 rebel-hover -ml-4">
                  <div className="bg-black border-2 border-red-600 p-3 flex-shrink-0 jagged-border">
                    <Headphones className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="torn-edge">
                    <h3 className="text-xl font-bold text-red-600 mb-2 cutout-text scribble-underline">
                      LIVE CHAOS ENERGY
                    </h3>
                    <p className="text-gray-300 chaos-scatter-2">
                      Our live performances are where the magic happens. Raw, unfiltered energy that connects 
                      with every soul in the underground scene. <span className="text-white font-bold">MAYHEM UNLEASHED.</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Chaotic music genres tags scattered */}
              <div className="space-y-4 chaos-scatter-3">
                <h4 className="text-lg font-bold text-white neon-text">OUR CHAOS GENRES:</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-red-600 text-white text-sm font-medium chaos-scatter-1 punk-sticker">
                    PUNK ROCK
                  </span>
                  <span className="px-4 py-2 bg-black border-2 border-white text-white text-sm font-medium chaos-scatter-2 underground-shadow">
                    GRUNGE
                  </span>
                  <span className="px-4 py-2 bg-red-900 border border-red-500 text-red-400 text-sm font-medium chaos-scatter-4 mayhem-border">
                    TRAP METAL
                  </span>
                  <span className="px-4 py-2 bg-gray-900 border-2 border-red-600 text-red-500 text-sm font-medium chaos-scatter-3 jagged-border">
                    HEAVY METAL
                  </span>
                </div>
              </div>

              {/* Chaotic stats with punk styling */}
              <div className="grid grid-cols-3 gap-8 pt-8 mayhem-border">
                <div className="text-center chaos-scatter-2 rebel-hover">
                  <div className="flex items-center justify-center mb-2">
                    <Music className="w-6 h-6 text-red-600 mr-2 chaos-float" />
                    <div className="text-3xl font-bold neon-text">15+</div>
                  </div>
                  <div className="text-gray-400 text-sm font-medium">NOISE RELEASED</div>
                </div>
                <div className="text-center chaos-scatter-1 rebel-hover">
                  <div className="flex items-center justify-center mb-2">
                    <Skull className="w-6 h-6 text-red-600 mr-2 chaos-float" />
                    <div className="text-3xl font-bold glitch-text text-red-500">5K+</div>
                  </div>
                  <div className="text-gray-400 text-sm font-medium">REBELS</div>
                </div>
                <div className="text-center chaos-scatter-4 rebel-hover">
                  <div className="flex items-center justify-center mb-2">
                    <Zap className="w-6 h-6 text-red-600 mr-2 chaos-float" />
                    <div className="text-3xl font-bold cutout-text">50+</div>
                  </div>
                  <div className="text-gray-400 text-sm font-medium">CHAOS SHOWS</div>
                </div>
              </div>

              {/* Chaotic action buttons scattered */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 underground-shadow rebel-hover jagged-border chaos-scatter-2">
                  LISTEN TO CHAOS
                </Button>
                <Button variant="outline" className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold px-6 py-4 chaos-scatter-1 mayhem-border">
                  BOOK MAYHEM
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating graffiti words across section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-8 text-red-600 font-bold text-xl chaos-scatter-3 chaos-float opacity-20">
          NOISE
        </div>
        <div className="absolute bottom-1/3 left-12 text-white font-bold text-lg chaos-scatter-1 glitch-text opacity-25">
          CHAOS
        </div>
        <div className="absolute top-1/2 left-1/4 text-red-500 font-bold text-2xl chaos-scatter-2 neon-text opacity-30">
          PUNK
        </div>
      </div>
    </section>
  )
} 