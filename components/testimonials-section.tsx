"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    service: "Yard Cleaning",
    image: "/images/trash-man.jpg",
    rating: 5,
    text: "Household Heroes transformed our overgrown backyard into a beautiful space. Their attention to detail is incredible!",
    location: "Downtown Area",
  },
  {
    name: "Michael Chen",
    service: "Babysitting",
    image: "/images/baby-sitting-two.jpg",
    rating: 5,
    text: "We trust our babysitter completely. She's professional, caring, and our kids absolutely love her!",
    location: "Suburban District",
  },
  {
    name: "Lisa Rodriguez",
    service: "Pet Sitting",
    image: "/images/pet-sitting-wto.jpg",
    rating: 5,
    text: "Our dog Max gets so excited when his pet sitter arrives. The daily photo updates give us such peace of mind.",
    location: "Riverside Community",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-[#D94343]">Families</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the families who trust Household Heroes with their most
            important needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-0">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`${testimonial.service} service`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 text-sm font-medium text-[#D94343]">
                    {testimonial.service}
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-4">
                    <Quote className="w-6 h-6 text-[#D94343] opacity-50 absolute -top-2 -left-1" />
                    <p className="text-gray-600 italic pl-6 leading-relaxed">{testimonial.text}</p>
                  </div>

                  {/* Customer Info */}
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
