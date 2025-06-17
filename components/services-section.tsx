"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scissors, Baby, Heart, Droplets, Car, PawPrint } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Yard Cleaning",
    description: "Complete front and backyard maintenance including mowing, trimming, and debris removal.",
    price: "Starting at R45",
    color: "bg-green-100 text-green-600",
    image: "/images/water-hoes.jpg",
    imageAlt: "Professional pressure washing patio cleaning service",
  },
  {
    icon: Baby,
    title: "Babysitting",
    description: "Trusted and experienced childcare services for your peace of mind.",
    price: "Starting at R15/hr",
    color: "bg-blue-100 text-blue-600",
    image: "/images/baby-sitting.jpg",
    imageAlt: "Professional babysitter with child",
  },
  {
    icon: PawPrint,
    title: "Pet Sitting",
    description: "Loving care for your furry friends when you're away from home.",
    price: "Starting at R20/day",
    color: "bg-purple-100 text-purple-600",
    image: "/images/pet-sitting.jpg",
    imageAlt: "Professional pet sitter with dog",
  },
  {
    icon: Car,
    title: "Light Errands",
    description: "Grocery runs, package pickup, and other helpful household errands.",
    price: "Starting at R25",
    color: "bg-orange-100 text-orange-600",
    image: "/images/household-support.jpg",
    imageAlt: "Professional household support services",
  },
  {
    icon: Droplets,
    title: "Plant Watering",
    description: "Keep your garden thriving with our plant care and watering services.",
    price: "Starting at R15",
    color: "bg-teal-100 text-teal-600",
    image: "/images/sweep.jpg",
    imageAlt: "Garden and plant care services",
  },
  {
    icon: Heart,
    title: "Home Support",
    description: "Additional household assistance tailored to your family's needs.",
    price: "Custom pricing",
    color: "bg-pink-100 text-pink-600",
    image: "/images/household-support.jpg",
    imageAlt: "Comprehensive home support services",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From yard maintenance to childcare, we provide comprehensive household support services you can trust.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>

                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-green-600">{service.price}</span>
                  <Button variant="ghost" size="sm" className="text-green-600 hover:bg-green-600 hover:text-white">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
