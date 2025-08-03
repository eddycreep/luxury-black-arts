"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Sandton, Johannesburg",
    rating: 5,
    text: "Household Heroes has been a lifesaver! Their yard cleaning service is exceptional, and the team is always professional and reliable. My garden has never looked better.",
    image: "/images/water-bottle.jpg",
    service: "Yard Cleaning",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Cape Town",
    rating: 5,
    text: "We've been using their babysitting services for over a year now. The caregivers are wonderful with our kids, and we have complete peace of mind when we go out.",
    image: "/images/teen-dog.jpg",
    service: "Babysitting",
  },
  {
    id: 3,
    name: "Lisa Williams",
    location: "Durban",
    rating: 5,
    text: "Their house sitting service is fantastic. When we went on vacation, they took excellent care of our home and plants. Everything was perfect when we returned!",
    image: "/images/backview-running.jpg",
    service: "House Sitting",
  },
]

export function TestimonialsSection() {
  const { ref: headerRef, isIntersecting: headerInView } = useIntersectionObserver()
  const { ref: ctaRef, isIntersecting: ctaInView } = useIntersectionObserver()
  const testimonialRefs = testimonials.map(() => useIntersectionObserver())

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            ref={headerRef}
            className={`text-center mb-16 animate-on-scroll animate-slide-in-up ${headerInView ? "in-view" : ""}`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our <span className="text-green-600">Families</span> Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our satisfied customers have to say about our household
              support services.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const { ref, isIntersecting } = testimonialRefs[index]

              return (
                <Card
                  key={testimonial.id}
                  ref={ref}
                  className={`relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 animate-on-scroll animate-slide-in-up delay-${index * 200} ${isIntersecting ? "in-view" : ""}`}
                >
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 text-green-100">
                    <Quote className="w-8 h-8" />
                  </div>

                  <CardContent className="p-8">
                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial text */}
                    <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

                    {/* Customer info */}
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.location}</div>
                        <div className="text-xs text-green-600 font-medium">{testimonial.service}</div>
                      </div>
                    </div>
                  </CardContent>

                  {/* Decorative element */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
                </Card>
              )
            })}
          </div>

          {/* Call to Action */}
          <div
            ref={ctaRef}
            className={`text-center mt-16 animate-on-scroll animate-fade-in ${ctaInView ? "in-view" : ""}`}
          >
            <div className="bg-green-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Happy Customers?</h3>
              <p className="text-gray-600 mb-6">
                Experience the peace of mind that comes with professional household support services.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-700 font-semibold">4.9/5 from 500+ reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
