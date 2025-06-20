"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Scissors, Baby, Heart, Droplets, Car, Home, ArrowRight, Clock, Shield, Star } from "lucide-react"

// Service data for the overview section
const servicesData = [
  {
    id: "yard-cleaning",
    icon: Scissors,
    title: "Yard Cleaning",
    shortDescription: "Complete front and backyard maintenance including mowing, trimming, and debris removal.",
    dailyPrice: "R300–R400",
    monthlyPrice: "R1,000–R1,600 (4 visits)",
    color: "bg-green-100 text-green-600",
    image: "/images/water-hoes.jpg",
    imageAlt: "Professional pressure washing patio cleaning service",
    highlights: ["Professional lawn mowing", "Hedge trimming", "Debris removal", "Pressure washing"],
  },
  {
    id: "babysitting",
    icon: Baby,
    title: "Babysitting",
    shortDescription: "Trusted and experienced childcare services for your peace of mind.",
    dailyPrice: "R400–R700",
    monthlyPrice: "R2,000–R4,000 (2–3 days/wk)",
    color: "bg-blue-100 text-blue-600",
    image: "/images/baby-sitting.jpg",
    imageAlt: "Professional babysitter with child",
    highlights: ["Background-checked caregivers", "Educational activities", "Meal preparation", "Emergency training"],
  },
  {
    id: "house-sitting",
    icon: Home,
    title: "House Sitting",
    shortDescription: "Comprehensive home security and maintenance while you're away.",
    dailyPrice: "R300–R500",
    monthlyPrice: "R7,000–R10,000 (full-time)",
    color: "bg-purple-100 text-purple-600",
    image: "/images/pet-sitting.jpg",
    imageAlt: "Professional house sitting service",
    highlights: ["24/7 security monitoring", "Pet care", "Mail collection", "Plant watering"],
  },
  {
    id: "light-errands",
    icon: Car,
    title: "Light Errands",
    shortDescription: "Grocery runs, package pickup, and other helpful household errands.",
    dailyPrice: "Starting at R25",
    monthlyPrice: "Custom pricing",
    color: "bg-orange-100 text-orange-600",
    image: "/images/light-errand.jpg",
    imageAlt: "Professional grocery shopping and light errands service",
    highlights: ["Grocery shopping", "Prescription pickup", "Package delivery", "Bank errands"],
  },
  {
    id: "plant-watering",
    icon: Droplets,
    title: "Plant Watering",
    shortDescription: "Keep your garden thriving with our plant care and watering services.",
    dailyPrice: "Starting at R15",
    monthlyPrice: "Custom pricing",
    color: "bg-teal-100 text-teal-600",
    image: "/images/plant-watering.jpg",
    imageAlt: "Professional plant watering and garden care services",
    highlights: ["Indoor plant care", "Garden maintenance", "Health monitoring", "Seasonal care"],
  },
  {
    id: "home-support",
    icon: Heart,
    title: "Home Support",
    shortDescription: "Additional household assistance tailored to your family's needs.",
    dailyPrice: "Custom pricing",
    monthlyPrice: "Custom pricing",
    color: "bg-pink-100 text-pink-600",
    image: "/images/household-support.jpg",
    imageAlt: "Comprehensive home support services",
    highlights: ["Light housekeeping", "Organization", "Senior companion care", "Event assistance"],
  },
]

export function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <Heart className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Our <span className="text-green-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From yard maintenance to childcare, we provide comprehensive household support services you can trust. Click
            on any service to learn more about what we offer.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicesData.map((service, index) => (
            <Card
              key={service.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-green-300 overflow-hidden animate-slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Service Image with glassmorphism */}
              <div className="relative h-48 overflow-hidden">
                {/* Glassmorphism frame around image */}
                <div className="absolute -inset-1 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg z-10"></div>

                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>

                {/* Price Badge with glassmorphism */}
                <div className="absolute top-4 right-4">
                  <div className="absolute -inset-1 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-lg"></div>
                  <div className="relative bg-green-600/90 backdrop-blur-sm text-white rounded-full px-3 py-1 text-sm font-bold border border-white/20">
                    {service.dailyPrice}
                  </div>
                </div>

                {/* Service Icon with glassmorphism */}
                <div className="absolute bottom-4 left-4">
                  <div className="absolute -inset-1 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 shadow-lg"></div>
                  <div
                    className={`relative w-12 h-12 rounded-xl ${service.color} flex items-center justify-center backdrop-blur-sm border border-white/20`}
                  >
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.shortDescription}</p>

                {/* Service Highlights */}
                <div className="space-y-2 mb-6">
                  {service.highlights.slice(0, 3).map((highlight, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Link href={`/services/${service.id}`} className="block">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white group">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Monthly from</span>
                    <span className="font-semibold text-green-600">{service.monthlyPrice.split(" ")[0]}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 lg:p-12 text-center animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Need a Custom Service Package?</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We understand every family has unique needs. Let us create a personalized service package that fits your
              lifestyle and budget perfectly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg group">
                Get Custom Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg"
              >
                <Clock className="mr-2 w-5 h-5" />
                Schedule Consultation
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-8 mt-8 pt-8 border-t border-green-200">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-600">Fully Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600">5-Star Rated</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-600">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
