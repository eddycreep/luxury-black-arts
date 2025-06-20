"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Shield, Clock, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Complete insurance coverage for your peace of mind",
  },
  {
    icon: CheckCircle,
    title: "Background Checked",
    description: "All team members undergo thorough background verification",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Services available 7 days a week to fit your schedule",
  },
  {
    icon: Users,
    title: "Trusted Team",
    description: "Experienced professionals who care about your family",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content with slide-in animation */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-green-600">Household Heroes?</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                As part of CC Corporation, we bring years of experience and a commitment to excellence in every service
                we provide. Your family's satisfaction and safety are our top priorities.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-green-600 rounded-lg p-2 flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Learn More About Us
            </Button>
          </div>

          {/* Right Content - Image with slide-in animation */}
          <div className="relative animate-slide-in-right">
            <img
              src="/images/household-support.jpg"
              alt="Household Heroes professional team providing home support services"
              className="w-full h-auto rounded-2xl shadow-xl object-cover"
            />
            {/* Stats Overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-6 shadow-lg">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">5+</div>
                  <div className="text-xs text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">500+</div>
                  <div className="text-xs text-gray-600">Happy Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">24/7</div>
                  <div className="text-xs text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
