"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "yard-cleaning",
    title: "Yard Cleaning & Maintenance",
    description:
      "Professional yard cleaning, lawn mowing, and garden maintenance to keep your outdoor space beautiful.",
    price: "From R150/hour",
    image: "/images/gardening.jpg",
    rating: 4.9,
    reviews: 127,
  },
  {
    id: "babysitting",
    title: "Babysitting & Childcare",
    description: "Trusted, experienced babysitters to care for your children while you're away or need a break.",
    price: "From R80/hour",
    image: "/images/asian-kid-dog.jpg",
    rating: 4.8,
    reviews: 89,
  },
  {
    id: "house-sitting",
    title: "House Sitting",
    description: "Reliable house sitting services to keep your home secure and maintained while you're away.",
    price: "From R200/day",
    image: "/images/elderly.jpg",
    rating: 4.9,
    reviews: 156,
  },
  {
    id: "light-errands",
    title: "Light Errands & Shopping",
    description: "Grocery shopping, pharmacy runs, and other light errands to save you time and effort.",
    price: "From R100/hour",
    image: "/images/teen-boy-runnning.jpg",
    rating: 4.7,
    reviews: 203,
  },
  {
    id: "plant-care",
    title: "Plant Care & Watering",
    description: "Expert plant care and watering services to keep your indoor and outdoor plants thriving.",
    price: "From R60/visit",
    image: "/images/granny-boy-gardening.jpg",
    rating: 4.8,
    reviews: 94,
  },
  {
    id: "general-support",
    title: "General Home Support",
    description: "Various household tasks including cleaning, organizing, and general maintenance support.",
    price: "From R120/hour",
    image: "/images/mopping-teen.jpg",
    rating: 4.9,
    reviews: 178,
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-green-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From yard maintenance to childcare, we provide comprehensive household support services tailored to your
              family's needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* Price badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                    <span className="text-green-700 font-semibold text-sm">{service.price}</span>
                  </div>

                  {/* Rating badge */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-gray-900 font-semibold text-sm">{service.rating}</span>
                      <span className="text-gray-600 text-xs">({service.reviews})</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                  <Link href={`/services/${service.id}`}>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all duration-300 bg-transparent"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              Don't see exactly what you need? We offer custom solutions too!
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
              Get Custom Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
