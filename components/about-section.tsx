"use client"

import { CheckCircle, Users, Clock, Shield, Award, Star, Sparkles } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function AboutSection() {
  const { ref: leftContentRef, isIntersecting: leftInView } = useIntersectionObserver()
  const { ref: rightContentRef, isIntersecting: rightInView } = useIntersectionObserver()

  return (
    <section className="py-20 bg-gradient-to-br from-white to-green-50/20 bg-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced left content with premium styling */}
            <div
              ref={leftContentRef}
              className={`space-y-8 animate-on-scroll animate-slide-in-left ${leftInView ? "in-view" : ""}`}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-6 shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Why Choose <span className="gradient-text">Household Heroes</span>?
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We're more than just a service provider – we're your trusted premium partners in creating a
                  comfortable, well-maintained home environment that lets you focus on what matters most to your family.
                </p>
              </div>

              {/* Enhanced features list with premium styling */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4 glass-card p-4 rounded-xl hover-lift">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full p-3 flex-shrink-0 shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                      Premium Trusted & Insured
                      <CheckCircle className="w-5 h-5 text-green-500 ml-2" />
                    </h3>
                    <p className="text-gray-600">
                      All our premium team members are thoroughly vetted, background-checked, and fully insured for your
                      complete peace of mind and family security.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 glass-card p-4 rounded-xl hover-lift">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full p-3 flex-shrink-0 shadow-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                      Ultra-Flexible Scheduling
                      <Sparkles className="w-5 h-5 text-blue-500 ml-2" />
                    </h3>
                    <p className="text-gray-600">
                      We work around your premium lifestyle with ultra-flexible timing options, including evenings,
                      weekends, and emergency services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 glass-card p-4 rounded-xl hover-lift">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-full p-3 flex-shrink-0 shadow-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                      Elite Professional Team
                      <Award className="w-5 h-5 text-purple-500 ml-2" />
                    </h3>
                    <p className="text-gray-600">
                      Our experienced elite professionals bring expertise, reliability, and a premium personal touch to
                      every service for discerning families.
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced stats with premium styling */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center group">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-6 h-6 text-green-600 mr-2" />
                    <div className="text-3xl font-bold gradient-text">500+</div>
                  </div>
                  <div className="text-gray-600 text-sm font-medium">Premium Families</div>
                </div>
                <div className="text-center group">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-6 h-6 text-green-600 mr-2" />
                    <div className="text-3xl font-bold gradient-text">5★</div>
                  </div>
                  <div className="text-gray-600 text-sm font-medium">Average Rating</div>
                </div>
                <div className="text-center group">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="w-6 h-6 text-green-600 mr-2" />
                    <div className="text-3xl font-bold gradient-text">3+</div>
                  </div>
                  <div className="text-gray-600 text-sm font-medium">Years Excellence</div>
                </div>
              </div>
            </div>

            {/* Enhanced right content with premium image styling */}
            <div
              ref={rightContentRef}
              className={`relative animate-on-scroll animate-slide-in-right ${rightInView ? "in-view" : ""}`}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift">
                <img
                  src="/images/cleaning-equipment-girl.jpg"
                  alt="Professional cleaner with equipment - representing our professional service quality"
                  className="w-full h-auto object-cover"
                />
                {/* Enhanced overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                {/* Enhanced floating badge */}
                <div className="absolute top-6 right-6 glass-premium rounded-full px-4 py-2 shadow-xl">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-900 font-bold text-sm">Certified Premium Professional</span>
                  </div>
                </div>

                {/* Additional premium badges */}
                <div className="absolute bottom-6 left-6 glass-premium rounded-xl p-3 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-900 font-bold text-sm">Premium Certified</div>
                      <div className="text-gray-600 text-xs">Excellence Guaranteed</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced decorative elements with animations */}
              <div
                className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-full blur-xl"
                style={{ animation: "float 6s ease-in-out infinite" }}
              ></div>
              <div
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-green-300/20 to-green-500/20 rounded-full blur-2xl"
                style={{ animation: "floatReverse 8s ease-in-out infinite" }}
              ></div>

              {/* Premium floating elements */}
              <div
                className="absolute top-1/2 -right-4 glass-premium rounded-full p-3 shadow-xl"
                style={{ animation: "float 7s ease-in-out infinite" }}
              >
                <Sparkles className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
