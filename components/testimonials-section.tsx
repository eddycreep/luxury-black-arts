"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, Award, Heart, CheckCircle } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Sandton, Johannesburg",
    rating: 5,
    text: "Household Heroes has been a lifesaver! Their premium yard cleaning service is exceptional, and the team is always professional and reliable. My garden has never looked better - it's like having a personal botanical paradise.",
    image: "/images/water-bottle.jpg",
    service: "Premium Yard Care",
    verified: true,
    premium: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Cape Town",
    rating: 5,
    text: "We've been using their elite babysitting services for over a year now. The caregivers are wonderful with our kids, and we have complete peace of mind when we go out. They treat our children like family.",
    image: "/images/teen-dog.jpg",
    service: "Elite Childcare",
    verified: true,
    premium: true,
  },
  {
    id: 3,
    name: "Lisa Williams",
    location: "Durban",
    rating: 5,
    text: "Their luxury house sitting service is fantastic. When we went on vacation, they took excellent care of our home and plants. Everything was perfect when we returned - even better than when we left!",
    image: "/images/backview-running.jpg",
    service: "Luxury House Sitting",
    verified: true,
    premium: false,
  },
]

export function TestimonialsSection() {
  const headerRef = useIntersectionObserver()
  const ctaRef = useIntersectionObserver()
  const testimonialRefs = testimonials.map(() => useIntersectionObserver())

  return (
    <section className="py-20 bg-white bg-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced section header */}
          <div
            ref={headerRef.ref}
            className={`text-center mb-16 animate-on-scroll animate-slide-in-up ${headerRef.isIntersecting ? "in-view" : ""}`}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-6 shadow-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              What Our Premium <span className="gradient-text">Families</span> Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our satisfied premium families have to say about our
              exceptional household support services.
            </p>
          </div>

          {/* Enhanced testimonials grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const { ref, isIntersecting } = testimonialRefs[index]

              return (
                <Card
                  key={testimonial.id}
                  ref={ref}
                  className={`relative overflow-hidden glass-card hover:shadow-2xl transition-all duration-500 border-0 hover-lift animate-on-scroll animate-slide-in-up delay-${index * 200} ${isIntersecting ? "in-view" : ""}`}
                >
                  {/* Premium badge for premium customers */}
                  {testimonial.premium && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full px-3 py-1 shadow-lg">
                      <span className="text-white text-xs font-bold flex items-center">
                        <Award className="w-3 h-3 mr-1" />
                        PREMIUM
                      </span>
                    </div>
                  )}

                  {/* Enhanced quote icon */}
                  <div className="absolute top-6 left-6 text-green-100">
                    <Quote className="w-10 h-10" />
                  </div>

                  <CardContent className="p-8 pt-12">
                    {/* Enhanced rating display */}
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-gray-500 font-medium">Perfect Rating</span>
                    </div>

                    {/* Enhanced testimonial text */}
                    <p className="text-gray-700 mb-6 leading-relaxed italic text-lg">"{testimonial.text}"</p>

                    {/* Enhanced customer info */}
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-green-200"
                        />
                        {testimonial.verified && (
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.location}</div>
                        <div className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full mt-1">
                          {testimonial.service}
                        </div>
                      </div>
                    </div>
                  </CardContent>

                  {/* Enhanced decorative element */}
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600"></div>
                </Card>
              )
            })}
          </div>

          {/* Enhanced call to action */}
          <div
            ref={ctaRef.ref}
            className={`text-center mt-16 animate-on-scroll animate-fade-in ${ctaRef.isIntersecting ? "in-view" : ""}`}
          >
            <div className="glass-premium rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl">
              <div className="flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-3xl font-bold text-gray-900">Ready to Join Our Premium Family?</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Experience the peace of mind that comes with our premium household support services.
              </p>
              <div className="flex items-center justify-center space-x-6 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-700 font-bold text-lg">4.9/5 from 500+ Premium Reviews</span>
              </div>
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Verified Reviews
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 text-green-500 mr-2" />
                  Premium Service
                </div>
                <div className="flex items-center">
                  <Heart className="w-4 h-4 text-green-500 mr-2" />
                  Family Trusted
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
