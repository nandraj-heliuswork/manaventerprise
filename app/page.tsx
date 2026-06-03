"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Monitor,
  Award,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Lightbulb,
  Target,
  Camera,
  Shield,
  Printer,
  Cpu,
  Building,
  GraduationCap,
  Hospital,
  Plane,
  ShoppingBag,
  Youtube,
  Menu,
  X,
  Star,
  Zap,
  Users,
  Globe,
  Send,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import emailjs from 'emailjs-com';



export default function ManavEnterprisePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.email as HTMLInputElement).value;
    const phone = (form.contact as HTMLInputElement).value;
    let valid = true;

    // Email validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    } else {
      setEmailError("");
    }

    // Phone validation (10 digits)
    if (!/^\d{10}$/.test(phone)) {
      setPhoneError("Please enter a valid 10-digit phone number.");
      valid = false;
    } else {
      setPhoneError("");
    }

    if (!valid) return;

    emailjs.sendForm(
      'service_qgmd1co',
      'template_ogvq0kr',
      form,
      'aegEL7dlDE8nODP-w'
    ).then(
      (result) => {
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
      },
      (error) => {
        alert('There was an error sending your message. Please try again later.');
      }
    );
  };

  const products = [
    {
      category: "Education Solutions",
      icon: <GraduationCap className="h-6 w-6" />,
      color: "from-blue-500 to-blue-600",
      items: [
        "Digital Teaching Devices (Android 12–14)",
        "Interactive Flat Panels & QHD Displays",
        "Visualizers, Digital Podiums",
        "Virtual 3D Science Labs",
        "Brio Bluetooth Clickers (Student Response Systems)",
      ],
    },
    {
      category: "Audio/Video & Conference Solutions",
      icon: <Camera className="h-6 w-6" />,
      color: "from-orange-500 to-orange-600",
      items: [
        "HD Cameras with noise cancellation & privacy features",
        "Video Conferencing Systems (Chairman–Delegate Setup)",
        "Meeting Software & Content Cast Tools",
      ],
    },
    {
      category: "Display & Signage",
      icon: <Monitor className="h-6 w-6" />,
      color: "from-purple-500 to-purple-600",
      items: ["Active LED Walls", "Digital Standees with signage management"],
    },
    {
      category: "Security Surveillance",
      icon: <Shield className="h-6 w-6" />,
      color: "from-green-500 to-green-600",
      items: ["CCTV (Indoor, Outdoor, Solar)", "AI-Facial Recognition Cameras", "Body-Worn & Torch Cameras"],
    },
    {
      category: "IT Hardware & Printing",
      icon: <Printer className="h-6 w-6" />,
      color: "from-red-500 to-red-600",
      items: [
        "Desktops, Laptops, Printers, Scanners, Plotters",
        "Authorized Partner: HP, Dell, Acer",
        "Service Center: Intel Gujarat",
      ],
    },
    {
      category: "STEM & Robotics Lab",
      icon: <Cpu className="h-6 w-6" />,
      color: "from-indigo-500 to-indigo-600",
      items: ["3D Printers, Drones, Arduino", "IoT Kits, Electronics & Coding"],
    },
  ]

  const clientSegments = [
    {
      name: "Schools, Colleges, Institutions",
      icon: <GraduationCap className="h-5 w-5" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "Corporates, Retail, Government Bodies",
      icon: <Building className="h-5 w-5" />,
      color: "bg-orange-100 text-orange-600",
    },
    { name: "Hospitals", icon: <Hospital className="h-5 w-5" />, color: "bg-green-100 text-green-600" },
    { name: "Airports", icon: <Plane className="h-5 w-5" />, color: "bg-purple-100 text-purple-600" },
    { name: "YouTubers", icon: <Youtube className="h-5 w-5" />, color: "bg-red-100 text-red-600" },
    { name: "Malls", icon: <ShoppingBag className="h-5 w-5" />, color: "bg-indigo-100 text-indigo-600" },
  ]

  const achievements = [
    { text: "5000+ Interactive Classrooms Installed", icon: <Monitor className="h-8 w-8" />, color: "text-blue-500" },
    {
      text: "1000+ Classrooms in one of India's largest schools",
      icon: <GraduationCap className="h-8 w-8" />,
      color: "text-orange-500",
    },
    {
      text: "Partnered in government projects: ERNET, RUSA, Vibrant Gujarat, PM/CM Events",
      icon: <Globe className="h-8 w-8" />,
      color: "text-green-500",
    },
    {
      text: "Authorized Electrical Contractor – Class-D License",
      icon: <Zap className="h-8 w-8" />,
      color: "text-purple-500",
    },
    {
      text: "Authorized Service Center for Intel, Digisol",
      icon: <Award className="h-8 w-8" />,
      color: "text-red-500",
    },
  ]

  const stats = [
    { number: "10+", label: "Years Experience", icon: <Star className="h-6 w-6" />, color: "text-blue-500" },
    { number: "5000+", label: "Classrooms Installed", icon: <Monitor className="h-6 w-6" />, color: "text-orange-500" },
    { number: "1000+", label: "Happy Clients", icon: <Users className="h-6 w-6" />, color: "text-green-500" },
    { number: "PAN", label: "India Network", icon: <Globe className="h-6 w-6" />, color: "text-purple-500" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container flex h-20 items-center justify-between px-4">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Image src="/logo.png" alt="Manav Enterprise Logo" width={60} height={60} className="h-12 w-auto" />
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                Manav Enterprise
              </span>
              <p className="text-xs text-gray-600">An IT Solution Provider</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => {
                const aboutSection = document.getElementById("about")
                if (aboutSection) {
                  const headerHeight = 120
                  const elementPosition = aboutSection.offsetTop - headerHeight
                  window.scrollTo({
                    top: elementPosition,
                    behavior: "smooth",
                  })
                }
              }}
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => {
                const productsSection = document.getElementById("products")
                if (productsSection) {
                  const headerHeight = 120
                  const elementPosition = productsSection.offsetTop - headerHeight
                  window.scrollTo({
                    top: elementPosition,
                    behavior: "smooth",
                  })
                }
              }}
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Products
            </button>

            <button
              onClick={() => {
                const achievementsSection = document.getElementById("achievements")
                if (achievementsSection) {
                  const headerHeight = 120
                  const elementPosition = achievementsSection.offsetTop - headerHeight
                  window.scrollTo({
                    top: elementPosition,
                    behavior: "smooth",
                  })
                }
              }}
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Achievements
            </button>
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  const headerHeight = 120
                  const elementPosition = contactSection.offsetTop - headerHeight
                  window.scrollTo({
                    top: elementPosition,
                    behavior: "smooth",
                  })
                }
              }}
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
            <Button
              className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-600 to-blue-700"
              onClick={() => {
                const getInTouchSection = document.getElementById("get-in-touch")
                if (getInTouchSection) {
                  const headerHeight = 120
                  const elementPosition = getInTouchSection.offsetTop - headerHeight
                  window.scrollTo({
                    top: elementPosition,
                    behavior: "smooth",
                  })
                }
              }}
            >
              Get In Touch
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <nav className="flex flex-col space-y-4 p-4 text-left">
              <button
                onClick={() => {
                  const aboutSection = document.getElementById("about")
                  if (aboutSection) {
                    const headerHeight = 120
                    const elementPosition = aboutSection.offsetTop - headerHeight
                    window.scrollTo({
                      top: elementPosition,
                      behavior: "smooth",
                    })
                  }
                  setIsMenuOpen(false)
                }}
                className="text-sm font-medium hover:text-blue-600 transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => {
                  const productsSection = document.getElementById("products")
                  if (productsSection) {
                    const headerHeight = 120
                    const elementPosition = productsSection.offsetTop - headerHeight
                    window.scrollTo({
                      top: elementPosition,
                      behavior: "smooth",
                    })
                  }
                  setIsMenuOpen(false)
                }}
                className="text-sm font-medium hover:text-blue-600 transition-colors text-left"
              >
                Products
              </button>

              <button
                onClick={() => {
                  const achievementsSection = document.getElementById("achievements")
                  if (achievementsSection) {
                    const headerHeight = 120
                    const elementPosition = achievementsSection.offsetTop - headerHeight
                    window.scrollTo({
                      top: elementPosition,
                    })
                  }
                  setIsMenuOpen(false)
                }}
                className="text-sm font-medium hover:text-blue-600 transition-colors text-left"
              >
                Achievements
              </button>
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact")
                  if (contactSection) {
                    const headerHeight = 120
                    const elementPosition = contactSection.offsetTop - headerHeight
                    window.scrollTo({
                      top: elementPosition,
                      behavior: "smooth",
                    })
                  }
                  setIsMenuOpen(false)
                }}
                className="text-sm font-medium hover:text-blue-600 transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-blue-600/5"></div>
        <div className="container mx-auto text-center relative z-10">
          <Badge
            className="mb-6 bg-gradient-to-r from-orange-100 to-blue-100 text-blue-800 border-blue-200"
            variant="secondary"
          >
            <Award className="mr-2 h-4 w-4" />
            ISO 9001:2015 Certified | Government e-Marketplace (GeM) Registered
          </Badge>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto animate-slide-in">
            Leading provider of Education Technology and Display Solutions across India with over a decade of experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              size="lg"
              className="text-lg px-8 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 shadow-lg"
              onClick={() => document.getElementById("get-in-touch")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Phone className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-2 border-orange-500 text-orange-600 hover:bg-orange-50 shadow-lg bg-transparent"
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Monitor className="mr-2 h-5 w-5" />
              View Products
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-blue-600">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white animate-fade-in">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-white/20 rounded-full">{stat.icon}</div>
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              About Manav Enterprise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With over a decade of experience, we serve schools, institutions, and corporates through a strong
              PAN-India partner and service network.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4 flex items-center text-blue-700">
                  <Target className="mr-3 h-6 w-6" />
                  Our Mission
                </h3>
                <p className="text-gray-700">
                  To revolutionize classroom teaching and learning through interactive, technology-driven education
                  systems. We aim to enhance curriculum delivery and comprehension with innovative hardware and
                  software, empowering both teachers and students.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4 flex items-center text-orange-700">
                  <Lightbulb className="mr-3 h-6 w-6" />
                  Our Expertise
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                    Smart classroom infrastructure: Interactive Boards, Digital Podiums, Flat Panels
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                    R&D in education equipment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                    Affordable, customized, and scalable solutions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                    Nationwide after-sales support with trained engineers
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50 p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Why Choose Us?</h3>
                <p className="text-gray-600">Trusted by thousands across India</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Award className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-800">ISO Certified</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Globe className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-800">PAN India</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Users className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-800">Expert Team</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Zap className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-800">24/7 Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-10 px-4 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Product Portfolio
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive solutions for education, corporate, and institutional needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg"
              >
                <CardHeader className={`bg-gradient-to-r ${product.color} text-white rounded-t-lg`}>
                  <CardTitle className="flex items-center text-lg">
                    <div className="mr-3 p-2 bg-white/20 rounded-lg">{product.icon}</div>
                    {product.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {product.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-sm text-gray-700">
                        <CheckCircle className="mr-3 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Remote Management Systems */}
          <Card className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Monitor className="mr-3 h-6 w-6" />
                Remote Management Systems
              </CardTitle>
              <CardDescription className="text-indigo-100">
                Centralized control for devices – Remote access, locking, app installs, reporting
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>



      {/* Achievements Section */}
      <section id="achievements" className="py-10 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Key Achievements
            </h2>
            <p className="text-lg text-gray-600">Milestones that define our success and commitment to excellence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg"
              >
                <CardContent className="pt-8 pb-6">
                  <div className={`${achievement.color} mx-auto mb-4`}>{achievement.icon}</div>
                  <p className="text-sm text-gray-700 font-medium">{achievement.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Segments */}
      <section className="py-10 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Client Segments
            </h2>
            <p className="text-lg text-gray-600">Serving diverse industries with tailored solutions</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clientSegments.map((segment, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md"
              >
                <CardContent className="pt-6 pb-4">
                  <div className={`flex justify-center mb-3 p-3 rounded-full ${segment.color} mx-auto w-fit`}>
                    {segment.icon}
                  </div>
                  <p className="text-xs text-gray-700 font-medium">{segment.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Badge variant="outline" className="text-sm border-2 border-orange-500 text-orange-600 bg-orange-50">
              <Star className="mr-2 h-4 w-4" />
              Support for CSR and PSU Projects
            </Badge>
          </div>
        </div>
      </section>

      {/* Geographical Presence Section */}
      <section className="py-10 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Geographical Presence
            </h2>
            <p className="text-lg text-gray-600">
              Serving clients across India with our extensive network and partnerships
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Map Section */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-2xl shadow-lg">
                <Image
                  src="/india-coverage-map.jpeg"
                  alt="Manav Enterprise Service Coverage Map - Showing presence across major Indian states"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="inline-block w-4 h-4 bg-orange-500 rounded mr-2"></span>
                    Primary Service Areas
                    <span className="inline-block w-4 h-4 bg-purple-600 rounded mr-2 ml-4"></span>
                    Extended Coverage
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2 ml-4"></span>
                    Service Centers
                  </p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4 flex items-center text-blue-700">
                  <Globe className="mr-3 h-6 w-6" />
                  PAN-India Network
                </h3>
                <p className="text-gray-700 mb-4">
                  With our headquarters in Ahmedabad, Gujarat, we have established a strong presence across major cities
                  in India, ensuring comprehensive coverage and support for our clients nationwide.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-4 w-4 text-green-500" />
                    Strategic partnerships in 15+ major cities
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-4 w-4 text-green-500" />
                    Dedicated service centers for quick support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-4 w-4 text-green-500" />
                    Regional teams for localized solutions
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4 flex items-center text-orange-700">
                  <Users className="mr-3 h-6 w-6" />
                  Regional Coverage
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">North India</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Delhi NCR</li>
                      <li>• Jaipur</li>
                      <li>• Lucknow</li>
                      <li>• Chandigarh</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">West India</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Ahmedabad (HQ)</li>
                      <li>• Mumbai</li>
                      <li>• Pune</li>
                      <li>• Surat</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">South India</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Bangalore</li>
                      <li>• Chennai</li>
                      <li>• Hyderabad</li>
                      <li>• Kochi</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">East India</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Kolkata</li>
                      <li>• Bhubaneswar</li>
                      <li>• Guwahati</li>
                      <li>• Patna</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-to-r from-orange-500 to-green-600 text-white border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Zap className="mr-3 h-6 w-6" />
                    <h3 className="text-xl font-semibold">24/7 Support Network</h3>
                  </div>
                  <p className="text-green-100">
                    Our distributed network ensures rapid response times and local expertise, providing you with
                    reliable support wherever you are in India.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section id="get-in-touch" className="py-10 px-4 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600">
              Ready to transform your educational or corporate environment? Let's discuss your requirements.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="text-center text-xl flex items-center justify-center">
                  <Send className="mr-2 h-5 w-5" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form id="contact-form" onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email address"
                    />
                    {emailError && (
                      <p className="text-red-600 text-xs mt-1">{emailError}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      id="contact"
                      name="contact"
                      required
                      maxLength={10}
                      minLength={10}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      placeholder="Enter your contact number"
                    />
                    {phoneError && (
                      <p className="text-red-600 text-xs mt-1">{phoneError}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your requirements, project details, or any questions you have..."
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-gradient-to-r from-orange-600 to-blue-600 hover:from-orange-700 hover:to-blue-700 text-white font-semibold px-8 py-3 shadow-lg"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 px-4 bg-gradient-to-br from-orange-500 to-blue-600">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Contact Information</h2>
            <p className="text-lg text-blue-100">
              Find us at our head office or reach out through any of these channels
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-white/20 rounded-full">
                      <MapPin className="h-8 w-8 text-orange-200" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Head Office</h3>
                  <p className="text-blue-100 text-sm">
                    FF-5, Pratiksha Complex, Nr. Mahalaxmi Five Road, Paldi, Ahmedabad – 07
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-white/20 rounded-full">
                      <Mail className="h-8 w-8 text-orange-200" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-blue-100 text-sm">manaventerprise2018@gmail.com</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-white/20 rounded-full">
                      <Phone className="h-8 w-8 text-orange-200" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <p className="text-blue-100 text-sm">
                    +91 94262 41700
                    <br />
                    +91 90819 41700
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/logo.png" alt="Manav Enterprise Logo" width={40} height={40} className="h-10 w-auto" />
                <div>
                  <span className="text-lg font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                    Manav Enterprise
                  </span>
                  <p className="text-xs text-gray-400">An IT Solution Provider</p>
                </div>
              </div>
              <p className="text-sm text-gray-300">
                Leading provider of Education Technology and Display Solutions across India with over a decade of
                experience.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-orange-400">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <button
                    onClick={() => {
                      const aboutSection = document.getElementById("about")
                      if (aboutSection) {
                        const headerHeight = 120
                        const elementPosition = aboutSection.offsetTop - headerHeight
                        window.scrollTo({
                          top: elementPosition,
                          behavior: "smooth",
                        })
                      }
                    }}
                    className="hover:text-blue-400 transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const productsSection = document.getElementById("products")
                      if (productsSection) {
                        const headerHeight = 120
                        const elementPosition = productsSection.offsetTop - headerHeight
                        window.scrollTo({
                          top: elementPosition,
                          behavior: "smooth",
                        })
                      }
                    }}
                    className="hover:text-blue-400 transition-colors"
                  >
                    Products
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => {
                      const achievementsSection = document.getElementById("achievements")
                      if (achievementsSection) {
                        const headerHeight = 120
                        const elementPosition = achievementsSection.offsetTop - headerHeight
                        window.scrollTo({
                          top: elementPosition,
                          behavior: "smooth",
                        })
                      }
                    }}
                    className="hover:text-blue-400 transition-colors"
                  >
                    Achievements
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const contactSection = document.getElementById("contact")
                      if (contactSection) {
                        const headerHeight = 120
                        const elementPosition = contactSection.offsetTop - headerHeight
                        window.scrollTo({
                          top: elementPosition,
                          behavior: "smooth",
                        })
                      }
                    }}
                    className="hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-blue-400">Certifications</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <Award className="mr-2 h-4 w-4 text-orange-400" />
                  ISO 9001:2015 Certified
                </li>
                <li className="flex items-center">
                  <Globe className="mr-2 h-4 w-4 text-blue-400" />
                  Government e-Marketplace (GeM) Registered
                </li>
                <li className="flex items-center">
                  <Zap className="mr-2 h-4 w-4 text-green-400" />
                  Authorized Electrical Contractor – Class-D License
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-purple-400" />
                  Authorized Service Center for Intel, Digisol
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-blue-400" />
                  R&B Certified Contractor
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Manav Enterprise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
