"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Sparkles, Award, Clock, Shield } from "lucide-react"
import Link from "next/link"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

const services = [
  {
    id: "yard-cleaning",
    title: "Premium Yard Care",
    description: "Professional yard cleaning, lawn mowing, and garden maintenance to keep your outdoor space pristine.",
    price: "From R150/hour",
    image: "/images/gardening.jpg",
    rating: 4.9,
    reviews: 127,
    icon: "🌿",
    badge: "Most Popular",
  },
  {
    id: "babysitting",
    title: "Elite Childcare",
    description: "Trusted, experienced babysitters to care for your children with premium attention and care.",
    price: "From R80/hour",
    image: "/images/asian-kid-dog.jpg",
    rating: 4.8,
    reviews: 89,
    icon: "👶",
    badge: "Certified",
  },
  {
    id: "house-sitting",
    title: "Luxury House Sitting",
    description: "Premium house sitting services to keep your home secure and maintained while you're away.",
    price: "From R200/day",
    image: "/images/elderly.jpg",
    rating: 4.9,
    reviews: 156,
    icon: "🏠",
    badge: "24/7 Security",
  },
  {
    id: "light-errands",
    title: "Personal Concierge",
    description: "Grocery shopping, pharmacy runs, and premium errands to save you valuable time.",
    price: "From R100/hour",
    image: "/images/teen-boy-runnning.jpg",
    rating: 4.7,
    reviews: 203,
    icon: "🛍️",
    badge: "Time Saver",
  },
  {
    id: "plant-care",
    title: "Botanical Care",
    description: "Expert plant care and watering services to keep your indoor and outdoor plants thriving.",
    price: "From R60/visit",
    image: "/images/granny-boy-gardening.jpg",
    rating: 4.8,
    reviews: 94,
    icon: "🌱",
    badge: "Eco-Friendly",
  },
  {
    id: "general-support",
    title: "Premium Home Support",
    description: "Comprehensive household tasks including cleaning, organizing, and premium maintenance support.",
    price: "From R120/hour",
    image: "/images/mopping-teen.jpg",
    rating: 4.9,
    reviews: 178,
    icon: "✨",
    badge: "Full Service",
  },
]

export function ServicesSection() {
  const headerRef = useIntersectionObserver()
  const ctaRef = useIntersectionObserver()
  const serviceRefs = services.map(() => useIntersectionObserver())

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30 bg-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced section header with premium styling */}
          <div
            ref={headerRef.ref}
            className={`text-center mb-16 animate-on-scroll animate-slide-in-up ${headerRef.isIntersecting ? "in-view" : ""}`}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-6 shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Premium <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From yard maintenance to childcare, we provide comprehensive household support services tailored to your
              family's premium lifestyle and needs.
            </p>
          </div>

          {/* Enhanced services grid with premium card design */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const { ref, isIntersecting } = serviceRefs[index]

              return (
                <Card
                  key={service.id}
                  ref={ref}
                  className={`group glass-card hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 shadow-lg overflow-hidden animate-on-scroll animate-slide-in-up delay-${index * 100} ${isIntersecting ? "in-view" : ""} hover-lift`}
                >
                  <div className="relative">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Enhanced gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                    {/* Premium service badge */}
                    <div className="absolute top-4 left-4 glass-premium rounded-full px-3 py-1 shadow-lg">
                      <span className="text-white font-semibold text-xs flex items-center">
                        <Award className="w-3 h-3 mr-1" />
                        {service.badge}
                      </span>
                    </div>

                    {/* Enhanced price badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full px-3 py-1 shadow-lg">
                      <span className="text-white font-bold text-sm">{service.price}</span>
                    </div>

                    {/* Enhanced rating badge */}
                    <div className="absolute bottom-4 left-4 glass-premium rounded-full px-3 py-1 shadow-lg">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-bold text-sm">{service.rating}</span>
                        <span className="text-white/80 text-xs">({service.reviews})</span>
                      </div>
                    </div>

                    {/* Service icon overlay */}
                    <div className="absolute bottom-4 right-4 w-10 h-10 glass-premium rounded-full flex items-center justify-center text-lg">
                      {service.icon}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors flex items-center">
                      <span className="mr-2 text-2xl">{service.icon}</span>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                    {/* Enhanced features list */}
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Shield className="w-4 h-4 mr-1 text-green-500" />
                        Insured
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-green-500" />
                        Flexible
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-1 text-green-500" />
                        Premium
                      </div>
                    </div>

                    <Link href={`/services/${service.id}`}>
                      <Button
                        variant="outline"
                        className="w-full btn-premium group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all duration-300 bg-transparent border-2 border-green-200 hover:shadow-lg"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Enhanced call to action with premium styling */}
          <div
            ref={ctaRef.ref}
            className={`text-center mt-16 animate-on-scroll animate-fade-in ${ctaRef.isIntersecting ? "in-view" : ""}`}
          >
            <div className="glass-premium rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl">
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Custom Premium Solutions</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Don't see exactly what you need? We create bespoke solutions for discerning families!
              </p>
              <Button
                size="lg"
                className="btn-premium bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 text-lg shadow-xl hover:shadow-2xl"
              >
                Get Custom Premium Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
