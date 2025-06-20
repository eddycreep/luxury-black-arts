import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Star, Users, Phone, Mail } from "lucide-react"

// Comprehensive service data with detailed information
const servicesData = {
  "yard-cleaning": {
    id: "yard-cleaning",
    title: "Professional Yard Cleaning Services",
    subtitle: "Transform your outdoor space with expert care",
    heroImage: "/images/water-hoes.jpg",
    heroAlt: "Professional pressure washing and yard cleaning service",
    shortDescription: "Complete front and backyard maintenance including mowing, trimming, and debris removal.",
    detailedDescription:
      "Our comprehensive yard cleaning services transform your outdoor space into a pristine, well-maintained area that enhances your property's curb appeal and value. Our experienced team uses professional-grade equipment and eco-friendly practices to deliver exceptional results every time.",
    pricing: {
      daily: "R300–R400",
      weekly: "R1,200–R1,600",
      monthly: "R4,000–R5,500",
      seasonal: "R15,000–R20,000",
    },
    features: [
      "Professional lawn mowing and edging",
      "Hedge and shrub trimming",
      "Leaf and debris removal",
      "Garden bed maintenance and weeding",
      "Pressure washing patios and walkways",
      "Seasonal cleanup services",
      "Tree pruning and maintenance",
      "Mulching and soil preparation",
    ],
    benefits: [
      "Increase property value by up to 15%",
      "Save 8-12 hours per week of manual labor",
      "Professional equipment and expertise",
      "Eco-friendly and sustainable practices",
      "Regular maintenance prevents costly repairs",
      "Customized care plans for your landscape",
    ],
    process: [
      {
        step: 1,
        title: "Initial Consultation",
        description: "We visit your property to assess your yard's specific needs and discuss your preferences.",
      },
      {
        step: 2,
        title: "Custom Plan Development",
        description: "Our experts create a tailored maintenance plan that fits your budget and schedule.",
      },
      {
        step: 3,
        title: "Professional Service Delivery",
        description: "Our trained team arrives with professional equipment to transform your outdoor space.",
      },
      {
        step: 4,
        title: "Quality Assurance",
        description: "We conduct a thorough inspection to ensure every detail meets our high standards.",
      },
      {
        step: 5,
        title: "Ongoing Maintenance",
        description: "Regular scheduled visits keep your yard looking pristine year-round.",
      },
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        location: "Sandton",
        rating: 5,
        text: "Household Heroes completely transformed our overgrown backyard. The team is professional, reliable, and their attention to detail is incredible. Our property value has definitely increased!",
        image: "/images/sweep.jpg",
      },
      {
        name: "Michael Thompson",
        location: "Rosebank",
        rating: 5,
        text: "I was spending every weekend trying to maintain my large garden. Now I have my weekends back and my yard looks better than ever. Worth every penny!",
        image: "/images/water-hoes.jpg",
      },
    ],
    gallery: [
      { image: "/images/sweep.jpg", alt: "Before and after yard transformation" },
      { image: "/images/water-hoes.jpg", alt: "Professional pressure washing service" },
      { image: "/images/plant-watering.jpg", alt: "Garden maintenance and care" },
    ],
    faqs: [
      {
        question: "How often should I schedule yard cleaning services?",
        answer:
          "We recommend weekly services during growing season (spring/summer) and bi-weekly during slower months. However, we can customize a schedule based on your specific needs and budget.",
      },
      {
        question: "Do you provide your own equipment?",
        answer:
          "Yes, we bring all professional-grade equipment including mowers, trimmers, pressure washers, and safety gear. You don't need to provide anything.",
      },
      {
        question: "Are your services eco-friendly?",
        answer:
          "We use environmentally safe products and sustainable practices. Our team is trained in eco-friendly landscaping techniques.",
      },
    ],
  },
  babysitting: {
    id: "babysitting",
    title: "Professional Babysitting Services",
    subtitle: "Trusted childcare for your peace of mind",
    heroImage: "/images/baby-sitting.jpg",
    heroAlt: "Professional babysitter with children",
    shortDescription: "Trusted and experienced childcare services for your peace of mind.",
    detailedDescription:
      "Our professional babysitting services provide reliable, safe, and engaging childcare with background-checked caregivers who prioritize your child's safety, development, and happiness. We offer flexible scheduling to meet your family's unique needs.",
    pricing: {
      hourly: "R80–R120",
      daily: "R400–R700",
      weekly: "R2,000–R4,000",
      monthly: "R8,000–R15,000",
    },
    features: [
      "Background-checked and certified caregivers",
      "Age-appropriate activities and games",
      "Homework assistance and tutoring",
      "Meal preparation and feeding",
      "Emergency response training",
      "Regular progress updates to parents",
      "Light housekeeping related to childcare",
      "Transportation services available",
    ],
    benefits: [
      "Complete peace of mind with trusted care",
      "Flexible scheduling for your lifestyle",
      "Educational activities promote development",
      "Emergency preparedness and first aid certified",
      "Consistent caregivers build relationships",
      "Affordable rates compared to daycare centers",
    ],
    process: [
      {
        step: 1,
        title: "Family Consultation",
        description: "We meet with your family to understand your children's needs, routines, and preferences.",
      },
      {
        step: 2,
        title: "Caregiver Matching",
        description: "We carefully match you with a caregiver whose experience aligns with your family's needs.",
      },
      {
        step: 3,
        title: "Meet & Greet Session",
        description: "A supervised introduction allows you and your children to meet the caregiver before committing.",
      },
      {
        step: 4,
        title: "Trial Period",
        description: "We start with a trial session to ensure the perfect fit for your family.",
      },
      {
        step: 5,
        title: "Ongoing Support",
        description: "Regular check-ins and open communication ensure continued satisfaction.",
      },
    ],
    testimonials: [
      {
        name: "Jennifer Adams",
        location: "Constantia",
        rating: 5,
        text: "Our babysitter from Household Heroes is amazing! She's become like family to us. My kids actually get excited when they know she's coming over. Professional, caring, and trustworthy.",
        image: "/images/baby-sitting-two.jpg",
      },
      {
        name: "David Wilson",
        location: "Camps Bay",
        rating: 5,
        text: "As a single parent, finding reliable childcare was crucial. The team at Household Heroes matched us with the perfect caregiver. I can work late knowing my daughter is in excellent hands.",
        image: "/images/baby-sitting.jpg",
      },
    ],
    gallery: [
      { image: "/images/baby-sitting.jpg", alt: "Professional childcare services" },
      { image: "/images/baby-sitting-two.jpg", alt: "Educational activities with children" },
    ],
    faqs: [
      {
        question: "Are all babysitters background checked?",
        answer:
          "Yes, every caregiver undergoes comprehensive background checks, reference verification, and skills assessment before joining our team.",
      },
      {
        question: "Can you provide care for multiple children?",
        answer:
          "Our caregivers are experienced with families of all sizes. We adjust our rates and caregiver assignments based on the number of children.",
      },
      {
        question: "Do you offer overnight care?",
        answer:
          "Yes, we provide overnight babysitting services for special occasions, business trips, or when you need extended care.",
      },
    ],
  },
  "house-sitting": {
    id: "house-sitting",
    title: "Professional House Sitting Services",
    subtitle: "Your home, secure and cared for while you're away",
    heroImage: "/images/pet-sitting.jpg",
    heroAlt: "Professional house sitting and pet care",
    shortDescription: "Comprehensive home security and maintenance while you're away.",
    detailedDescription:
      "Our trusted house sitting services ensure your home remains secure, well-maintained, and lived-in while you're away. From pet care to plant watering, mail collection to security monitoring, we provide comprehensive care that gives you complete peace of mind during your absence.",
    pricing: {
      daily: "R300–R500",
      weekly: "R1,800–R3,000",
      monthly: "R7,000–R10,000",
      extended: "Custom pricing for long-term stays",
    },
    features: [
      "24/7 home security and monitoring",
      "Professional pet care and feeding",
      "Mail and package collection",
      "Plant watering and garden care",
      "Basic home maintenance checks",
      "Regular status updates with photos",
      "Emergency response and contact",
      "Utility management and monitoring",
    ],
    benefits: [
      "Enhanced security with lived-in appearance",
      "Pet comfort in familiar environment",
      "Maintained home and garden appearance",
      "Emergency response capability",
      "Cost-effective compared to boarding",
      "Personalized care for your specific needs",
    ],
    process: [
      {
        step: 1,
        title: "Pre-Departure Consultation",
        description: "Detailed walkthrough of your home, pets, plants, and specific care instructions.",
      },
      {
        step: 2,
        title: "Care Plan Development",
        description: "We create a comprehensive care schedule tailored to your home's needs.",
      },
      {
        step: 3,
        title: "Daily Care Routine",
        description: "Our house sitter follows your detailed instructions while maintaining security.",
      },
      {
        step: 4,
        title: "Regular Updates",
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
        text: "We traveled to Europe for three weeks and came home to find everything exactly as we left it - actually better! Our garden was thriving, our cats were happy, and we received daily updates. Incredible service!",
        image: "/images/pet-sitting-wto.jpg",
      },
      {
        name: "Robert Chen",
        location: "Green Point",
        rating: 5,
        text: "Business travel is stressful enough without worrying about home. Household Heroes' house sitting service gives me complete peace of mind. Professional, reliable, and trustworthy.",
        image: "/images/household-support.jpg",
      },
    ],
    gallery: [
      { image: "/images/pet-sitting.jpg", alt: "Professional pet care services" },
      { image: "/images/pet-sitting-wto.jpg", alt: "Home security and maintenance" },
      { image: "/images/plant-watering.jpg", alt: "Plant and garden care" },
    ],
    faqs: [
      {
        question: "How do you ensure home security?",
        answer:
          "Our house sitters maintain a lived-in appearance, vary daily routines, manage lighting and curtains, and are trained in security protocols. We also provide emergency contact services.",
      },
      {
        question: "Can you care for multiple pets?",
        answer:
          "Yes! We're experienced with dogs, cats, birds, fish, and other pets. We follow your specific feeding, exercise, and care routines.",
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
    title: "Light Errands & Personal Assistant Services",
    subtitle: "Your time is valuable - let us handle the details",
    heroImage: "/images/light-errand.jpg",
    heroAlt: "Professional errand and shopping services",
    shortDescription: "Grocery runs, package pickup, and other helpful household errands.",
    detailedDescription:
      "Save time and reduce stress with our convenient errand services. From grocery shopping to prescription pickups, bank visits to dry cleaning, we handle the time-consuming tasks that keep your household running smoothly, giving you more time for what matters most.",
    pricing: {
      perTask: "R25–R50 per task",
      hourly: "R80–R120",
      daily: "R300–R500",
      monthly: "Custom packages available",
    },
    features: [
      "Grocery shopping and delivery",
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
      "Flexible scheduling around your needs",
      "Reliable and trustworthy service",
      "Cost-effective time management",
      "Professional shopping expertise",
      "Contactless delivery options available",
    ],
    process: [
      {
        step: 1,
        title: "Task Consultation",
        description: "We discuss your specific errand needs and create a customized task list.",
      },
      {
        step: 2,
        title: "Schedule Planning",
        description: "We plan the most efficient route and timing for your errands.",
      },
      {
        step: 3,
        title: "Professional Execution",
        description: "Our trained team completes your tasks with attention to detail and care.",
      },
      {
        step: 4,
        title: "Delivery & Confirmation",
        description: "We deliver your items and provide confirmation with receipts and photos.",
      },
      {
        step: 5,
        title: "Ongoing Support",
        description: "Regular service adjustments ensure we continue meeting your evolving needs.",
      },
    ],
    testimonials: [
      {
        name: "Lisa Rodriguez",
        location: "Claremont",
        rating: 5,
        text: "Having someone handle my weekly grocery shopping and errands has been a game-changer for my busy schedule. The team is efficient, trustworthy, and always gets exactly what I need.",
        image: "/images/light-errand.jpg",
      },
      {
        name: "Mark Stevens",
        location: "Observatory",
        rating: 5,
        text: "As a small business owner, every minute counts. Household Heroes handles all my personal errands so I can focus on growing my business. Excellent service!",
        image: "/images/household-support.jpg",
      },
    ],
    gallery: [
      { image: "/images/light-errand.jpg", alt: "Professional grocery shopping service" },
      { image: "/images/household-support.jpg", alt: "Personal assistant services" },
    ],
    faqs: [
      {
        question: "How do you handle grocery shopping preferences?",
        answer:
          "We work with detailed shopping lists, brand preferences, and dietary requirements. Our shoppers are trained to make smart substitutions when items are unavailable.",
      },
      {
        question: "Can you handle prescription pickups?",
        answer:
          "Yes, we can collect prescriptions with proper authorization. We maintain strict confidentiality and follow all pharmacy protocols.",
      },
      {
        question: "What areas do you cover for errands?",
        answer:
          "We cover most areas within a 25km radius of Cape Town CBD. Contact us to confirm service availability in your specific area.",
      },
    ],
  },
  "plant-watering": {
    id: "plant-watering",
    title: "Professional Plant Care & Watering Services",
    subtitle: "Keep your green spaces thriving with expert care",
    heroImage: "/images/plant-watering.jpg",
    heroAlt: "Professional plant watering and garden care",
    shortDescription: "Keep your garden thriving with our plant care and watering services.",
    detailedDescription:
      "Maintain healthy, thriving plants with our specialized plant care services. Whether you're traveling, too busy, or simply want expert care for your green spaces, our knowledgeable team provides customized plant care that keeps your indoor and outdoor plants flourishing year-round.",
    pricing: {
      perVisit: "R15–R30 per visit",
      weekly: "R100–R200",
      monthly: "R350–R600",
      seasonal: "Custom care packages",
    },
    features: [
      "Indoor plant watering and care",
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
      "Expert plant knowledge and care",
      "Customized watering schedules",
      "Early problem detection and treatment",
      "Increased plant longevity and beauty",
      "Perfect for travel or busy schedules",
    ],
    process: [
      {
        step: 1,
        title: "Plant Assessment",
        description: "We evaluate each plant's specific needs, health status, and care requirements.",
      },
      {
        step: 2,
        title: "Custom Care Plan",
        description: "Development of personalized watering and care schedules for each plant type.",
      },
      {
        step: 3,
        title: "Regular Maintenance",
        description: "Scheduled visits following your plants' specific care requirements.",
      },
      {
        step: 4,
        title: "Health Monitoring",
        description: "Ongoing assessment and adjustments to ensure optimal plant health.",
      },
      {
        step: 5,
        title: "Progress Reporting",
        description: "Regular updates on plant health with photos and care recommendations.",
      },
    ],
    testimonials: [
      {
        name: "Patricia Williams",
        location: "Newlands",
        rating: 5,
        text: "My indoor jungle has never looked better! The team really understands different plant needs. I travel frequently for work and come home to thriving, healthy plants every time.",
        image: "/images/plant-watering.jpg",
      },
      {
        name: "James Mitchell",
        location: "Rondebosch",
        rating: 5,
        text: "I have a large garden but lack the knowledge for proper plant care. Household Heroes' expertise has transformed my outdoor space into a botanical paradise.",
        image: "/images/water-hoes.jpg",
      },
    ],
    gallery: [
      { image: "/images/plant-watering.jpg", alt: "Professional plant watering service" },
      { image: "/images/water-hoes.jpg", alt: "Garden irrigation and care" },
    ],
    faqs: [
      {
        question: "How do you determine watering schedules?",
        answer:
          "We assess each plant's species, size, pot type, location, and seasonal needs to create customized watering schedules that prevent both over and under-watering.",
      },
      {
        question: "Can you care for rare or exotic plants?",
        answer:
          "Yes! Our team includes plant specialists with experience caring for a wide variety of plant species, including rare and exotic varieties.",
      },
      {
        question: "Do you provide plant health consultations?",
        answer:
          "We offer plant health assessments, problem diagnosis, and treatment recommendations to help your plants thrive.",
      },
    ],
  },
  "home-support": {
    id: "home-support",
    title: "Comprehensive Home Support Services",
    subtitle: "Personalized household assistance for modern families",
    heroImage: "/images/household-support.jpg",
    heroAlt: "Comprehensive home support and assistance services",
    shortDescription: "Additional household assistance tailored to your family's needs.",
    detailedDescription:
      "Our flexible home support services are designed to meet your unique household needs. From organization assistance to senior companion care, light housekeeping to special event help, we provide personalized solutions that make managing your home easier and more efficient.",
    pricing: {
      hourly: "R100–R150",
      daily: "R500–R800",
      weekly: "R2,000–R3,500",
      monthly: "Custom packages available",
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
      "Personalized service approach",
      "Flexible scheduling options",
      "Professional and reliable support",
    ],
    process: [
      {
        step: 1,
        title: "Needs Assessment",
        description: "Comprehensive consultation to understand your specific household support requirements.",
      },
      {
        step: 2,
        title: "Service Customization",
        description: "We design a personalized support plan that fits your lifestyle and budget.",
      },
      {
        step: 3,
        title: "Team Assignment",
        description: "Matching you with experienced support staff who understand your needs.",
      },
      {
        step: 4,
        title: "Service Implementation",
        description: "Regular, reliable service delivery according to your customized plan.",
      },
      {
        step: 5,
        title: "Ongoing Optimization",
        description: "Regular check-ins and service adjustments to ensure continued satisfaction.",
      },
    ],
    testimonials: [
      {
        name: "Margaret Foster",
        location: "Bishopscourt",
        rating: 5,
        text: "The personalized home support we receive has made managing our large household so much easier. The team is professional, trustworthy, and truly cares about our family's needs.",
        image: "/images/household-support.jpg",
      },
      {
        name: "Andrew Davis",
        location: "Wynberg",
        rating: 5,
        text: "As we age, maintaining our home became challenging. Household Heroes provides the perfect amount of support while respecting our independence. Highly recommended!",
        image: "/images/baby-sitting.jpg",
      },
    ],
    gallery: [
      { image: "/images/household-support.jpg", alt: "Professional home support services" },
      { image: "/images/baby-sitting.jpg", alt: "Senior companion and assistance services" },
    ],
    faqs: [
      {
        question: "What types of home support do you provide?",
        answer:
          "We offer a wide range of services including light housekeeping, organization, meal prep, senior companionship, administrative assistance, and special event support.",
      },
      {
        question: "Can services be customized for seniors?",
        answer:
          "Yes! We specialize in senior support services including companionship, medication reminders, light housekeeping, and assistance with daily activities.",
      },
      {
        question: "Do you offer one-time or ongoing services?",
        answer:
          "Both! We provide one-time services for special occasions or deep cleaning, as well as ongoing regular support for busy families.",
      },
    ],
  },
}

interface ServiceDetailPageProps {
  params: Promise<{ serviceId: string }>
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  // Await the params Promise to get the serviceId
  const { serviceId } = await params
  const service = servicesData[serviceId as keyof typeof servicesData]

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        <Image
          src={service.heroImage || "/placeholder.svg"}
          alt={service.heroAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              {/* Back Navigation */}
              <Link
                href="/#services"
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Services
              </Link>

              {/* Hero Text */}
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">{service.title}</h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">{service.subtitle}</p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg group">
                  Get Quote Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  About Our <span className="text-green-600">{service.title.split(" ")[0]}</span> Service
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">{service.detailedDescription}</p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  What's Included
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Pricing Card */}
            <Card className="shadow-2xl border-0 sticky top-8">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Service Pricing</h3>
                  <p className="text-gray-600">Transparent, competitive rates</p>
                </div>

                <div className="space-y-4 mb-8">
                  {Object.entries(service.pricing).map(([period, price]) => (
                    <div key={period} className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-700 capitalize">{period.replace(/([A-Z])/g, " $1").trim()}:</span>
                      <span className="font-bold text-green-600 text-lg">{price}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white h-12 text-lg">
                    Book This Service
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white h-12"
                  >
                    Request Custom Quote
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="text-center space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700">065 842 1416</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700">whires44@gmail.com</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="text-green-600">Service?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference professional service makes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It <span className="text-green-600">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our simple, professional process ensures excellent results every time
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {service.process.map((step, index) => (
              <div key={index} className="flex items-start space-x-6 mb-12 last:mb-0">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-green-600">Clients</span> Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real feedback from families who trust our services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {service.testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.text}"</blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-green-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {service.faqs.map((faq, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and personalized quote for your {service.title.toLowerCase()}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 text-lg group">
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 text-lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call 065 842 1416
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
