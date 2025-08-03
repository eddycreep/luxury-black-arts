"use client" // Ensures this component is a Client Component

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Shield,
  Star,
  Users,
  Phone,
  Mail,
  Award,
  Sparkles,
  Clock,
  Heart,
} from "lucide-react"
import { useEffect } from "react" // Import useEffect for client-side scrolling

// Enhanced service data with premium styling and content
const servicesData = {
  "yard-cleaning": {
    id: "yard-cleaning",
    title: "Premium Professional Yard Care Services",
    subtitle: "Transform your outdoor space with expert premium care",
    heroImage: "/images/lawnmower.jpg", // Updated image
    heroAlt: "Professional pressure washing and premium yard cleaning service",
    shortDescription:
      "Complete front and backyard maintenance including mowing, trimming, and debris removal with premium attention to detail.",
    detailedDescription:
      "Our comprehensive premium yard cleaning services transform your outdoor space into a pristine, well-maintained area that enhances your property's curb appeal and value. Our experienced elite team uses professional-grade equipment and eco-friendly practices to deliver exceptional results every time, tailored for discerning homeowners.",
    pricing: {
      daily: "R300–R400",
      weekly: "R1,200–R1,600",
      monthly: "R4,000–R5,500",
      seasonal: "R15,000–R20,000",
    },
    features: [
      "Professional lawn mowing and precision edging",
      "Expert hedge and shrub trimming",
      "Comprehensive leaf and debris removal",
      "Premium garden bed maintenance and weeding",
      "High-pressure washing patios and walkways",
      "Seasonal cleanup and preparation services",
      "Professional tree pruning and maintenance",
      "Premium mulching and soil preparation",
    ],
    benefits: [
      "Increase property value by up to 15%",
      "Save 8-12 hours per week of manual labor",
      "Professional-grade equipment and expertise",
      "Eco-friendly and sustainable practices",
      "Regular maintenance prevents costly repairs",
      "Customized premium care plans for your landscape",
    ],
    process: [
      {
        step: 1,
        title: "Premium Consultation",
        description:
          "We visit your property to assess your yard's specific needs and discuss your premium preferences.",
      },
      {
        step: 2,
        title: "Custom Premium Plan Development",
        description: "Our experts create a tailored maintenance plan that fits your budget and premium lifestyle.",
      },
      {
        step: 3,
        title: "Professional Service Delivery",
        description: "Our trained elite team arrives with professional equipment to transform your outdoor space.",
      },
      {
        step: 4,
        title: "Quality Assurance",
        description: "We conduct a thorough inspection to ensure every detail meets our premium standards.",
      },
      {
        step: 5,
        title: "Ongoing Premium Maintenance",
        description: "Regular scheduled visits keep your yard looking pristine year-round with premium care.",
      },
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        location: "Sandton",
        rating: 5,
        text: "Household Heroes completely transformed our overgrown backyard with their premium service. The team is professional, reliable, and their attention to detail is incredible. Our property value has definitely increased significantly!",
        image: "/images/family-gardening.jpg", // Updated image
      },
      {
        name: "Michael Thompson",
        location: "Rosebank",
        rating: 5,
        text: "I was spending every weekend trying to maintain my large garden. Now I have my weekends back and my yard looks better than ever with their premium care. Worth every penny for the quality!",
        image: "/images/male-red-lawnmower.jpg", // Updated image
      },
    ],
    gallery: [
      { image: "/images/lawnmower.jpg", alt: "Professional lawn mowing service" }, // Updated image
      { image: "/images/yard-umbrella.jpg", alt: "Outdoor seating with umbrella" }, // Updated image
      { image: "/images/yard-tables-chairs.jpg", alt: "Outdoor dining area in garden" }, // Updated image
    ],
    faqs: [
      {
        question: "How often should I schedule premium yard cleaning services?",
        answer:
          "We recommend weekly premium services during growing season (spring/summer) and bi-weekly during slower months. However, we can customize a premium schedule based on your specific needs and lifestyle.",
      },
      {
        question: "Do you provide your own professional equipment?",
        answer:
          "Yes, we bring all professional-grade premium equipment including commercial mowers, trimmers, pressure washers, and safety gear. You don't need to provide anything.",
      },
      {
        question: "Are your premium services eco-friendly?",
        answer:
          "We use environmentally safe premium products and sustainable practices. Our team is trained in eco-friendly landscaping techniques that protect your family and the environment.",
      },
    ],
  },
  babysitting: {
    id: "babysitting",
    title: "Elite Professional Babysitting Services",
    subtitle: "Premium childcare for your complete peace of mind",
    heroImage: "/images/girls-house-sitter.jpg", // Updated image
    heroAlt: "Professional elite babysitter with children",
    shortDescription: "Trusted and experienced premium childcare services for your complete peace of mind.",
    detailedDescription:
      "Our elite professional babysitting services provide reliable, safe, and engaging childcare with background-checked premium caregivers who prioritize your child's safety, development, and happiness. We offer flexible scheduling to meet your family's unique premium lifestyle needs.",
    pricing: {
      hourly: "R80–R120",
      daily: "R400–R700",
      weekly: "R2,000–R4,000",
      monthly: "R8,000–R15,000",
    },
    features: [
      "Background-checked and certified premium caregivers",
      "Age-appropriate educational activities and games",
      "Professional homework assistance and tutoring",
      "Nutritious meal preparation and feeding",
      "Emergency response training and certification",
      "Regular progress updates to parents",
      "Light housekeeping related to childcare",
      "Premium transportation services available",
    ],
    benefits: [
      "Complete peace of mind with trusted premium care",
      "Ultra-flexible scheduling for your lifestyle",
      "Educational activities promote child development",
      "Emergency preparedness and first aid certified",
      "Consistent premium caregivers build relationships",
      "Affordable rates compared to premium daycare centers",
    ],
    process: [
      {
        step: 1,
        title: "Premium Family Consultation",
        description: "We meet with your family to understand your children's needs, routines, and premium preferences.",
      },
      {
        step: 2,
        title: "Elite Caregiver Matching",
        description:
          "We carefully match you with a premium caregiver whose experience aligns with your family's needs.",
      },
      {
        step: 3,
        title: "Meet & Greet Session",
        description: "A supervised introduction allows you and your children to meet the caregiver before committing.",
      },
      {
        step: 4,
        title: "Premium Trial Period",
        description: "We start with a trial session to ensure the perfect fit for your premium family.",
      },
      {
        step: 5,
        title: "Ongoing Premium Support",
        description: "Regular check-ins and open communication ensure continued satisfaction with our premium service.",
      },
    ],
    testimonials: [
      {
        name: "Jennifer Adams",
        location: "Constantia",
        rating: 5,
        text: "Our premium babysitter from Household Heroes is amazing! She's become like family to us. My kids actually get excited when they know she's coming over. Professional, caring, and completely trustworthy.",
        image: "/images/girls-house-sitter.jpg", // Updated image
      },
      {
        name: "David Wilson",
        location: "Camps Bay",
        rating: 5,
        text: "As a single parent, finding reliable premium childcare was crucial. The team at Household Heroes matched us with the perfect caregiver. I can work late knowing my daughter is in excellent hands.",
        image: "/images/baby-sitting.jpg", // Kept existing
      },
    ],
    gallery: [
      { image: "/images/girls-house-sitter.jpg", alt: "Professional premium childcare services" }, // Updated image
      { image: "/images/baby-sitting-two.jpg", alt: "Educational activities with children" }, // Kept existing
    ],
    faqs: [
      {
        question: "Are all babysitters thoroughly background checked?",
        answer:
          "Yes, every premium caregiver undergoes comprehensive background checks, reference verification, and skills assessment before joining our elite team.",
      },
      {
        question: "Can you provide care for multiple children?",
        answer:
          "Our premium caregivers are experienced with families of all sizes. We adjust our rates and caregiver assignments based on the number of children.",
      },
      {
        question: "Do you offer overnight premium care?",
        answer:
          "Yes, we provide overnight babysitting services for special occasions, business trips, or when you need extended premium care.",
      },
    ],
  },
  "house-sitting": {
    id: "house-sitting",
    title: "Luxury Professional House Sitting Services",
    subtitle: "Your premium home, secure and cared for while you're away",
    heroImage: "/images/male-house-sitter.jpg", // Updated image
    heroAlt: "Professional luxury house sitting and pet care",
    shortDescription: "Comprehensive premium home security and maintenance while you're away.",
    detailedDescription:
      "Our trusted luxury house sitting services ensure your premium home remains secure, well-maintained, and lived-in while you're away. From pet care to plant watering, mail collection to security monitoring, we provide comprehensive premium care that gives you complete peace of mind during your absence.",
    pricing: {
      daily: "R300–R500",
      weekly: "R1,800–R3,000",
      monthly: "R7,000–R10,000",
      extended: "Custom premium pricing for long-term stays",
    },
    features: [
      "24/7 premium home security and monitoring",
      "Professional pet care and feeding",
      "Mail and package collection service",
      "Plant watering and garden care",
      "Basic home maintenance checks",
      "Regular status updates with photos",
      "Emergency response and contact service",
      "Utility management and monitoring",
    ],
    benefits: [
      "Enhanced security with lived-in appearance",
      "Pet comfort in familiar environment",
      "Maintained home and garden appearance",
      "Emergency response capability",
      "Cost-effective compared to premium boarding",
      "Personalized care for your specific needs",
    ],
    process: [
      {
        step: 1,
        title: "Pre-Departure Premium Consultation",
        description: "Detailed walkthrough of your home, pets, plants, and specific premium care instructions.",
      },
      {
        step: 2,
        title: "Premium Care Plan Development",
        description: "We create a comprehensive care schedule tailored to your home's premium needs.",
      },
      {
        step: 3,
        title: "Daily Premium Care Routine",
        description: "Our house sitter follows your detailed instructions while maintaining premium security.",
      },
      {
        step: 4,
        title: "Regular Premium Updates",
        description: "Daily photos and messages keep you informed about your home and pets.",
      },
      {
        step: 5,
        title: "Welcome Home Preparation",
        description: "We ensure everything is perfect for your return, including fresh groceries if requested.",
      },
    ],
    testimonials: [
      {
        name: "Emma Thompson",
        location: "Hout Bay",
        rating: 5,
        text: "We traveled to Europe for three weeks and came home to find everything exactly as we left it - actually better! Our garden was thriving, our cats were happy, and we received daily updates. Incredible premium service!",
        image: "/images/male-house-sitter.jpg", // Updated image
      },
      {
        name: "Robert Chen",
        location: "Green Point",
        rating: 5,
        text: "Business travel is stressful enough without worrying about home. Household Heroes' luxury house sitting service gives me complete peace of mind. Professional, reliable, and completely trustworthy.",
        image: "/images/household-support.jpg", // Kept existing
      },
    ],
    gallery: [
      { image: "/images/male-house-sitter.jpg", alt: "Professional premium house sitting services" }, // Updated image
      { image: "/images/pet-sitting-wto.jpg", alt: "Home security and maintenance" }, // Kept existing
      { image: "/images/plant-watering.jpg", alt: "Plant and garden care" }, // Kept existing
    ],
    faqs: [
      {
        question: "How do you ensure premium home security?",
        answer:
          "Our house sitters maintain a lived-in appearance, vary daily routines, manage lighting and curtains, and are trained in premium security protocols. We also provide emergency contact services.",
      },
      {
        question: "Can you care for multiple pets?",
        answer:
          "Yes! We're experienced with dogs, cats, birds, fish, and other pets. We follow your specific feeding, exercise, and premium care routines.",
      },
      {
        question: "What if there's an emergency?",
        answer:
          "Our house sitters are trained in emergency procedures and have 24/7 access to our support team. We maintain contact with local emergency services and your designated contacts.",
      },
    ],
  },
  "light-errands": {
    id: "light-errands",
    title: "Personal Concierge & Assistant Services",
    subtitle: "Your time is valuable - let us handle the premium details",
    heroImage: "/images/light-errand.jpg", // Kept existing
    heroAlt: "Professional errand and premium shopping services",
    shortDescription: "Grocery runs, package pickup, and other helpful premium household errands.",
    detailedDescription:
      "Save time and reduce stress with our convenient premium errand services. From grocery shopping to prescription pickups, bank visits to dry cleaning, we handle the time-consuming tasks that keep your household running smoothly, giving you more time for what matters most to your premium lifestyle.",
    pricing: {
      perTask: "R25–R50 per task",
      hourly: "R80–R120",
      daily: "R300–R500",
      monthly: "Custom premium packages available",
    },
    features: [
      "Premium grocery shopping and delivery",
      "Prescription pickup and delivery",
      "Package and mail services",
      "Bank and post office visits",
      "Dry cleaning pickup and delivery",
      "Small household purchases",
      "Gift shopping and wrapping",
      "Document delivery services",
    ],
    benefits: [
      "Save 5-10 hours per week",
      "Ultra-flexible scheduling around your needs",
      "Reliable and trustworthy premium service",
      "Cost-effective time management",
      "Professional shopping expertise",
      "Contactless delivery options available",
    ],
    process: [
      {
        step: 1,
        title: "Premium Task Consultation",
        description: "We discuss your specific errand needs and create a customized premium task list.",
      },
      {
        step: 2,
        title: "Schedule Planning",
        description: "We plan the most efficient route and timing for your premium errands.",
      },
      {
        step: 3,
        title: "Professional Execution",
        description: "Our trained team completes your tasks with attention to detail and premium care.",
      },
      {
        step: 4,
        title: "Delivery & Confirmation",
        description: "We deliver your items and provide confirmation with receipts and photos.",
      },
      {
        step: 5,
        title: "Ongoing Premium Support",
        description: "Regular service adjustments ensure we continue meeting your evolving premium needs.",
      },
    ],
    testimonials: [
      {
        name: "Lisa Rodriguez",
        location: "Claremont",
        rating: 5,
        text: "Having someone handle my weekly grocery shopping and errands has been a game-changer for my busy premium lifestyle. The team is efficient, trustworthy, and always gets exactly what I need.",
        image: "/images/light-errand.jpg", // Kept existing
      },
      {
        name: "Mark Stevens",
        location: "Observatory",
        rating: 5,
        text: "As a small business owner, every minute counts. Household Heroes handles all my personal errands so I can focus on growing my business. Excellent premium service!",
        image: "/images/household-support.jpg", // Kept existing
      },
    ],
    gallery: [
      { image: "/images/light-errand.jpg", alt: "Professional premium grocery shopping service" }, // Kept existing
      { image: "/images/household-support.jpg", alt: "Personal assistant services" }, // Kept existing
    ],
    faqs: [
      {
        question: "How do you handle premium grocery shopping preferences?",
        answer:
          "We work with detailed shopping lists, brand preferences, and dietary requirements. Our shoppers are trained to make smart substitutions when items are unavailable.",
      },
      {
        question: "Can you handle prescription pickups?",
        answer:
          "Yes, we can collect prescriptions with proper authorization. We maintain strict confidentiality and follow all pharmacy protocols.",
      },
      {
        question: "What areas do you cover for premium errands?",
        answer:
          "We cover most areas within a 25km radius of Cape Town CBD. Contact us to confirm service availability in your specific premium area.",
      },
    ],
  },
  "plant-watering": {
    id: "plant-watering",
    title: "Premium Plant Care & Botanical Services",
    subtitle: "Keep your green spaces thriving with expert premium care",
    heroImage: "/images/top-view-garden.jpg", // Updated image
    heroAlt: "Professional plant watering and premium garden care",
    shortDescription: "Keep your garden thriving with our premium plant care and watering services.",
    detailedDescription:
      "Maintain healthy, thriving plants with our specialized premium plant care services. Whether you're traveling, too busy, or simply want expert care for your green spaces, our knowledgeable team provides customized premium plant care that keeps your indoor and outdoor plants flourishing year-round.",
    pricing: {
      perVisit: "R15–R30 per visit",
      weekly: "R100–R200",
      monthly: "R350–R600",
      seasonal: "Custom premium care packages",
    },
    features: [
      "Indoor plant watering and premium care",
      "Outdoor garden maintenance",
      "Plant health monitoring and assessment",
      "Fertilizing and feeding schedules",
      "Pruning and deadheading",
      "Seasonal plant care adjustments",
      "Pest and disease monitoring",
      "Repotting and soil management",
    ],
    benefits: [
      "Healthy, thriving plants year-round",
      "Expert plant knowledge and premium care",
      "Customized watering schedules",
      "Early problem detection and treatment",
      "Increased plant longevity and beauty",
      "Perfect for travel or busy premium schedules",
    ],
    process: [
      {
        step: 1,
        title: "Premium Plant Assessment",
        description: "We evaluate each plant's specific needs, health status, and premium care requirements.",
      },
      {
        step: 2,
        title: "Custom Premium Care Plan",
        description: "Development of personalized watering and care schedules for each plant type.",
      },
      {
        step: 3,
        title: "Regular Premium Maintenance",
        description: "Scheduled visits following your plants' specific premium care requirements.",
      },
      {
        step: 4,
        title: "Health Monitoring",
        description: "Ongoing assessment and adjustments to ensure optimal plant health.",
      },
      {
        step: 5,
        title: "Progress Reporting",
        description: "Regular updates on plant health with photos and premium care recommendations.",
      },
    ],
    testimonials: [
      {
        name: "Patricia Williams",
        location: "Newlands",
        rating: 5,
        text: "My indoor jungle has never looked better! The team really understands different plant needs with their premium service. I travel frequently for work and come home to thriving, healthy plants every time.",
        image: "/images/woman-yellow-shirt.jpg", // Updated image
      },
      {
        name: "James Mitchell",
        location: "Rondebosch",
        rating: 5,
        text: "I have a large garden but lack the knowledge for proper plant care. Household Heroes' premium expertise has transformed my outdoor space into a botanical paradise.",
        image: "/images/family-gardening.jpg", // Updated image
      },
    ],
    gallery: [
      { image: "/images/top-view-garden.jpg", alt: "Professional plant watering service" }, // Updated image
      { image: "/images/woman-yellow-shirt.jpg", alt: "Indoor plant care" }, // Updated image
      { image: "/images/family-gardening.jpg", alt: "Garden maintenance and care" }, // Updated image
    ],
    faqs: [
      {
        question: "How do you determine premium watering schedules?",
        answer:
          "We assess each plant's species, size, pot type, location, and seasonal needs to create customized premium watering schedules that prevent both over and under-watering.",
      },
      {
        question: "Can you care for rare or exotic plants?",
        answer:
          "Yes! Our team includes plant specialists with experience caring for a wide variety of plant species, including rare and exotic varieties.",
      },
      {
        question: "Do you provide premium plant health consultations?",
        answer:
          "We offer comprehensive plant health assessments, problem diagnosis, and treatment recommendations to help your plants thrive.",
      },
    ],
  },
  "home-support": {
    id: "home-support",
    title: "Comprehensive Premium Home Support Services",
    subtitle: "Personalized household assistance for modern premium families",
    heroImage: "/images/household-support.jpg", // Kept existing
    heroAlt: "Comprehensive premium home support and assistance services",
    shortDescription: "Additional premium household assistance tailored to your family's needs.",
    detailedDescription:
      "Our flexible premium home support services are designed to meet your unique household needs. From organization assistance to senior companion care, light housekeeping to special event help, we provide personalized premium solutions that make managing your home easier and more efficient.",
    pricing: {
      hourly: "R100–R150",
      daily: "R500–R800",
      weekly: "R2,000–R3,500",
      monthly: "Custom premium packages available",
    },
    features: [
      "Light housekeeping and organization",
      "Laundry and ironing services",
      "Meal preparation assistance",
      "Senior companion services",
      "Special event preparation and cleanup",
      "Home organization and decluttering",
      "Administrative task assistance",
      "Seasonal home maintenance support",
    ],
    benefits: [
      "Reduced household stress and workload",
      "More quality time with family",
      "Organized and efficient living spaces",
      "Personalized premium service approach",
      "Ultra-flexible scheduling options",
      "Professional and reliable premium support",
    ],
    process: [
      {
        step: 1,
        title: "Premium Needs Assessment",
        description: "Comprehensive consultation to understand your specific household premium support requirements.",
      },
      {
        step: 2,
        title: "Service Customization",
        description: "We design a personalized premium support plan that fits your lifestyle and budget.",
      },
      {
        step: 3,
        title: "Team Assignment",
        description: "Matching you with experienced premium support staff who understand your needs.",
      },
      {
        step: 4,
        title: "Service Implementation",
        description: "Regular, reliable premium service delivery according to your customized plan.",
      },
      {
        step: 5,
        title: "Ongoing Optimization",
        description: "Regular check-ins and service adjustments to ensure continued premium satisfaction.",
      },
    ],
    testimonials: [
      {
        name: "Margaret Foster",
        location: "Bishopscourt",
        rating: 5,
        text: "The personalized premium home support we receive has made managing our large household so much easier. The team is professional, trustworthy, and truly cares about our family's premium needs.",
        image: "/images/household-support.jpg", // Kept existing
      },
      {
        name: "Andrew Davis",
        location: "Wynberg",
        rating: 5,
        text: "As we age, maintaining our home became challenging. Household Heroes provides the perfect amount of premium support while respecting our independence. Highly recommended!",
        image: "/images/baby-sitting.jpg", // Kept existing
      },
    ],
    gallery: [
      { image: "/images/household-support.jpg", alt: "Professional premium home support services" }, // Kept existing
      { image: "/images/baby-sitting.jpg", alt: "Senior companion and assistance services" }, // Kept existing
    ],
    faqs: [
      {
        question: "What types of premium home support do you provide?",
        answer:
          "We offer a wide range of premium services including light housekeeping, organization, meal prep, senior companionship, administrative assistance, and special event support.",
      },
      {
        question: "Can services be customized for seniors?",
        answer:
          "Yes! We specialize in premium senior support services including companionship, medication reminders, light housekeeping, and assistance with daily activities.",
      },
      {
        question: "Do you offer one-time or ongoing premium services?",
        answer:
          "Both! We provide one-time services for special occasions or deep cleaning, as well as ongoing regular premium support for busy families.",
      },
    ],
  },
}

interface ServiceDetailPageProps {
  params: { serviceId: string } // Changed params type to object, not Promise
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  // Scroll to the top of the page on component mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Access serviceId directly from params object
  const { serviceId } = params

  // Map common aliases to actual service IDs
  const serviceIdMap: Record<string, keyof typeof servicesData> = {
    "plant-care": "plant-watering", // Map "plant-care" to "plant-watering"
    // Add other potential aliases here if needed in the future
  }

  // Use the mapped ID or the original serviceId if no mapping exists
  const actualServiceId = serviceIdMap[serviceId] || serviceId
  const service = servicesData[actualServiceId as keyof typeof servicesData]

  if (!service) {
    // Log the missing serviceId for debugging
    console.error(`Service not found for ID: ${serviceId}. Attempted lookup with: ${actualServiceId}`)
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced hero section with premium styling */}
      <section className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
        <Image
          src={service.heroImage || "/placeholder.svg"}
          alt={service.heroAlt}
          fill
          className="object-cover"
          priority
        />
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"></div>

        {/* Premium floating elements */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-2xl"
            style={{ animation: "float 8s ease-in-out infinite" }}
          ></div>
          <div
            className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl"
            style={{ animation: "floatReverse 10s ease-in-out infinite" }}
          ></div>
        </div>

        {/* Enhanced hero content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              {/* Enhanced back navigation */}
              <Link
                href="/#services"
                className="inline-flex items-center glass-premium rounded-full px-4 py-2 text-white/90 hover:text-white mb-8 transition-all duration-300 group shadow-xl hover-lift"
              >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Premium Services
              </Link>

              {/* Enhanced hero text */}
              <div className="space-y-6">
                <div className="inline-flex items-center glass-premium rounded-full px-4 py-2 mb-4 shadow-xl">
                  <Award className="w-4 h-4 text-yellow-400 mr-2" />
                  <span className="text-white font-semibold text-sm">Premium Service</span>
                </div>
                <h1 className="text-4xl lg:text-7xl font-bold text-white mb-6 leading-tight">{service.title}</h1>
                <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl">{service.subtitle}</p>
              </div>

              {/* Enhanced CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="btn-premium bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg group shadow-2xl hover:shadow-3xl"
                >
                  Get Premium Quote Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-premium border-2 border-white/40 text-white hover:bg-white/15 hover:border-white/60 px-8 py-4 text-lg bg-transparent hover-lift"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Premium Line
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced service overview with premium styling */}
      <section className="py-20 bg-gradient-to-br from-white to-green-50/20 bg-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced left content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-6 shadow-lg">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                  About Our <span className="gradient-text">{service.title.split(" ")[0]}</span> Premium Service
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">{service.detailedDescription}</p>
              </div>

              {/* Enhanced key features */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  Premium Features Included
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 glass-card p-3 rounded-lg hover-lift">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced pricing card */}
            <Card className="glass-premium shadow-2xl border-0 sticky top-8 hover-lift">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Premium Service Pricing</h3>
                  <p className="text-gray-600">Transparent, competitive premium rates</p>
                </div>

                <div className="space-y-4 mb-8">
                  {Object.entries(service.pricing).map(([period, price]) => (
                    <div
                      key={period}
                      className="flex justify-between items-center py-3 border-b border-gray-100 hover:bg-green-50/50 px-2 rounded transition-colors"
                    >
                      <span className="text-gray-700 capitalize font-medium">
                        {period.replace(/([A-Z])/g, " $1").trim()}:
                      </span>
                      <span className="font-bold text-green-600 text-lg">{price}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <Button className="w-full btn-premium bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white h-12 text-lg shadow-xl hover:shadow-2xl">
                    Book Premium Service
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white h-12 hover-lift bg-transparent"
                  >
                    Request Custom Premium Quote
                  </Button>
                </div>

                {/* Enhanced contact info */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="text-center space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700 font-medium">065 842 1416</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700 font-medium">yangacccorp@gmail.com</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced benefits section */}
      <section className="py-20 bg-white bg-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-6 shadow-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our Premium <span className="gradient-text">Service?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference premium professional service makes for your family
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <Card
                key={index}
                className="glass-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed font-medium">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced process section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30 bg-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-6 shadow-lg">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              How Our Premium Process <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our simple, professional premium process ensures exceptional results every time
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {service.process.map((step, index) => (
              <div key={index} className="flex items-start space-x-6 mb-12 last:mb-0">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-lg">
                  {step.step}
                </div>
                <div className="flex-1 glass-card p-6 rounded-xl hover-lift">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced testimonials section */}
      <section className="py-20 bg-white bg-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-6 shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Premium <span className="gradient-text">Clients</span> Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real feedback from premium families who trust our exceptional services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {service.testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="glass-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-sm text-gray-500 font-medium">Premium Rating</span>
                  </div>
                  <blockquote className="text-gray-700 italic mb-6 leading-relaxed text-lg">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced FAQ section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30 bg-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-6 shadow-lg">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our premium services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {service.faqs.map((faq, index) => (
              <Card
                key={index}
                className="glass-card border border-gray-200 hover:shadow-lg transition-all duration-300 hover-lift"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800">
        {" "}
        {/* Modified gradient to match HomePage */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Premium floating elements */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-2xl"
              style={{ animation: "float 8s ease-in-out infinite" }}
            ></div>
            <div
              className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl"
              style={{ animation: "floatReverse 10s ease-in-out infinite" }}
            ></div>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 glass-premium rounded-full mb-6 shadow-xl">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a complimentary premium consultation and personalized quote for your{" "}
              {service.title.toLowerCase()}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="btn-premium bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-green-700 px-8 py-4 text-lg group shadow-2xl hover:shadow-3xl"
              >
                Get Free Premium Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass-premium border-2 border-white/40 text-white hover:bg-white/15 hover:border-white/60 px-8 py-4 text-lg bg-transparent hover-lift"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Premium Line 065 842 1416
              </Button>
            </div>

            {/* Enhanced trust indicators */}
            <div className="flex items-center justify-center space-x-8 mt-8 text-sm text-green-100">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-300 mr-2" />
                Free Premium Consultation
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 text-green-300 mr-2" />
                Premium Service Guarantee
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-green-300 mr-2" />
                Fully Insured & Bonded
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
