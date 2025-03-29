"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ChevronDown,
  Menu,
  X,
  Server,
  Cloud,
  Shield,
  LifeBuoy,
  Code,
  Laptop,
  BarChart3,
  HeartHandshake,
  Users,
  Globe,
  Building,
  Award,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [openCollapsible, setOpenCollapsible] = useState<string | null>(null)
  const [megaMenu, setMegaMenu] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    {
      icon: <Cloud className="h-6 w-6 text-primary" />,
      title: "Cloud Services",
      description: "Secure and scalable cloud solutions",
      href: "/services/cloud-services",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Cybersecurity",
      description: "Protect your business from threats",
      href: "/services/cybersecurity",
    },
    {
      icon: <LifeBuoy className="h-6 w-6 text-primary" />,
      title: "Managed IT Services",
      description: "Comprehensive IT support",
      href: "/services/managed-it-services",
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Digital Transformation",
      description: "Modernize your business",
      href: "/services/digital-transformation",
    },
    {
      icon: <Laptop className="h-6 w-6 text-primary" />,
      title: "Hardware Solutions",
      description: "End-to-end hardware management",
      href: "/services/hardware-solutions",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "Business Continuity",
      description: "Ensure uninterrupted operations",
      href: "/services/business-continuity",
    },
  ]

  const solutions = [
    {
      icon: <HeartHandshake className="h-6 w-6 text-primary" />,
      title: "Healthcare",
      description: "Secure healthcare IT solutions",
      href: "/solutions/healthcare",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "Finance",
      description: "Secure financial IT infrastructure",
      href: "/solutions/finance",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Education",
      description: "Technology for modern learning",
      href: "/solutions/education",
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Government",
      description: "Compliant government IT solutions",
      href: "/solutions/government",
    },
    {
      icon: <Building className="h-6 w-6 text-primary" />,
      title: "Manufacturing",
      description: "Optimize production processes",
      href: "/solutions/manufacturing",
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Professional Services",
      description: "Enhance client service delivery",
      href: "/solutions/professional-services",
    },
  ]

  const resources = [
    { title: "Blog", href: "/blog" },
    { title: "Case Studies", href: "/case-studies" },
    { title: "Whitepapers", href: "/resources/whitepapers" },
    { title: "Webinars", href: "/resources/webinars" },
    { title: "Events", href: "/resources/events" },
  ]

  const about = [
    { title: "Our Story", href: "/about" },
    { title: "Leadership Team", href: "/about/leadership" },
    { title: "Careers", href: "/careers" },
    { title: "Testimonials", href: "/testimonials" },
    { title: "Partners", href: "/partners" },
  ]

  const toggleCollapsible = (label: string) => {
    if (openCollapsible === label) {
      setOpenCollapsible(null)
    } else {
      setOpenCollapsible(label)
    }
  }

  const handleMegaMenuToggle = (menu: string) => {
    if (megaMenu === menu) {
      setMegaMenu(null)
    } else {
      setMegaMenu(menu)
    }
  }

  const closeMegaMenu = () => {
    setMegaMenu(null)
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
      >
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-primary">
              {/* <Server className="h-7 w-7" />
              <span>Zyphron</span> */}
              <img src="/Zyphron.jpg" alt="Zyphron_Logo" className="w-20 h-15"/>
            </Link>
            <nav className="hidden lg:flex gap-8">
              <Link
                href="/"
                className={`text-base font-medium transition-colors hover:text-primary ${pathname === "/" ? "text-primary" : "text-muted-foreground"
                  }`}
              >
                Home
              </Link>

              <div className="relative">
                <button
                  className={`flex items-center gap-1 text-base font-medium transition-colors hover:text-primary ${pathname.startsWith("/services") ? "text-primary" : "text-muted-foreground"
                    }`}
                  onClick={() => handleMegaMenuToggle("services")}
                  onMouseEnter={() => setMegaMenu("services")}
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${megaMenu === "services" ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              <div className="relative">
                <button
                  className={`flex items-center gap-1 text-base font-medium transition-colors hover:text-primary ${pathname.startsWith("/solutions") ? "text-primary" : "text-muted-foreground"
                    }`}
                  onClick={() => handleMegaMenuToggle("solutions")}
                  onMouseEnter={() => setMegaMenu("solutions")}
                >
                  Solutions
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${megaMenu === "solutions" ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              <div className="relative">
                <button
                  className={`flex items-center gap-1 text-base font-medium transition-colors hover:text-primary ${pathname.startsWith("/about") ||
                      pathname.startsWith("/careers") ||
                      pathname.startsWith("/testimonials") ||
                      pathname.startsWith("/partners")
                      ? "text-primary"
                      : "text-muted-foreground"
                    }`}
                  onClick={() => handleMegaMenuToggle("about")}
                  onMouseEnter={() => setMegaMenu("about")}
                >
                  About Us
                  <ChevronDown className={`h-4 w-4 transition-transform ${megaMenu === "about" ? "rotate-180" : ""}`} />
                </button>
              </div>

              <div className="relative">
                <button
                  className={`flex items-center gap-1 text-base font-medium transition-colors hover:text-primary ${pathname.startsWith("/blog") ||
                      pathname.startsWith("/case-studies") ||
                      pathname.startsWith("/resources") ||
                      pathname.startsWith("resources/whitepapers")

                      ? "text-primary"
                      : "text-muted-foreground"
                    }`}
                  onClick={() => handleMegaMenuToggle("resources")}
                  onMouseEnter={() => setMegaMenu("resources")}
                >
                  Resources
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${megaMenu === "resources" ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              <Link
                href="/contact"
                className={`text-base font-medium transition-colors hover:text-primary ${pathname === "/contact" ? "text-primary" : "text-muted-foreground"
                  }`}
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden lg:flex">
              Client Portal
            </Button>
            <Button size="sm" className="hidden lg:flex">
              <Link href="/contact" className="text-primary-foreground">
                Contact Us
              </Link>
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-6 py-6">
                  <div className="flex items-center justify-between">
                    <Link
                      href="/"
                      className="flex items-center gap-2 font-bold text-xl text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      <Server className="h-5 w-5" />
                      <span>Zyphron</span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close</span>
                    </Button>
                  </div>
                  <nav className="flex flex-col gap-4">
                    <Link
                      href="/"
                      className={`text-base font-medium transition-colors hover:text-primary ${pathname === "/" ? "text-primary" : "text-muted-foreground"
                        }`}
                      onClick={() => setIsOpen(false)}
                    >
                      Home
                    </Link>

                    <Collapsible
                      open={openCollapsible === "services"}
                      onOpenChange={() => toggleCollapsible("services")}
                    >
                      <CollapsibleTrigger className="flex items-center justify-between w-full">
                        <span
                          className={`text-base font-medium transition-colors hover:text-primary ${pathname.startsWith("/services") ? "text-primary" : "text-muted-foreground"
                            }`}
                        >
                          Services
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${openCollapsible === "services" ? "rotate-180" : ""}`}
                        />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pl-4 mt-2 space-y-2 border-l border-muted">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block text-sm text-muted-foreground hover:text-primary py-1"
                            onClick={() => setIsOpen(false)}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>

                    <Collapsible
                      open={openCollapsible === "solutions"}
                      onOpenChange={() => toggleCollapsible("solutions")}
                    >
                      <CollapsibleTrigger className="flex items-center justify-between w-full">
                        <span
                          className={`text-base font-medium transition-colors hover:text-primary ${pathname.startsWith("/solutions") ? "text-primary" : "text-muted-foreground"
                            }`}
                        >
                          Solutions
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${openCollapsible === "solutions" ? "rotate-180" : ""}`}
                        />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pl-4 mt-2 space-y-2 border-l border-muted">
                        {solutions.map((solution) => (
                          <Link
                            key={solution.href}
                            href={solution.href}
                            className="block text-sm text-muted-foreground hover:text-primary py-1"
                            onClick={() => setIsOpen(false)}
                          >
                            {solution.title}
                          </Link>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>

                    <Collapsible open={openCollapsible === "about"} onOpenChange={() => toggleCollapsible("about")}>
                      <CollapsibleTrigger className="flex items-center justify-between w-full">
                        <span
                          className={`text-base font-medium transition-colors hover:text-primary ${pathname.startsWith("/about") ||
                              pathname.startsWith("/careers") ||
                              pathname.startsWith("/testimonials") ||
                              pathname.startsWith("/partners")
                              ? "text-primary"
                              : "text-muted-foreground"
                            }`}
                        >
                          About Us
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${openCollapsible === "about" ? "rotate-180" : ""}`}
                        />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pl-4 mt-2 space-y-2 border-l border-muted">
                        {about.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block text-sm text-muted-foreground hover:text-primary py-1"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>

                    <Collapsible
                      open={openCollapsible === "`resources"}
                      onOpenChange={() => toggleCollapsible("resources")}
                    >
                      <CollapsibleTrigger className="flex items-center justify-between w-full">
                        <span
                          className={`text-base font-medium transition-colors hover:text-primary ${pathname.startsWith("/blog") ||
                              pathname.startsWith("Resources/case-studies") ||
                              pathname.startsWith("/resources")||
                              pathname.startsWith("Resources/whitepapers")
                              ? "text-primary"
                              : "text-muted-foreground"
                            }`}
                        >
                          Resources
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${openCollapsible === "resources" ? "rotate-180" : ""}`}
                        />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pl-4 mt-2 space-y-2 border-l border-muted">
                        {resources.map((resource) => (
                          <Link
                            key={resource.href}
                            href={resource.href}
                            className="block text-sm text-muted-foreground hover:text-primary py-1"
                            onClick={() => setIsOpen(false)}
                          >
                            {resource.title}
                          </Link>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>

                    <Link
                      href="/contact"
                      className={`text-base font-medium transition-colors hover:text-primary ${pathname === "/contact" ? "text-primary" : "text-muted-foreground"
                        }`}
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </Link>
                  </nav>
                  <div className="flex flex-col gap-2 mt-auto">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="https://client.Zyphron.com.au" target="_blank" rel="noopener noreferrer">
                        Client Portal
                      </Link>
                    </Button>
                    <Button className="w-full" asChild onClick={() => setIsOpen(false)}>
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mega Menu for Services */}
        {megaMenu === "services" && (
          <div
            className="absolute left-0 right-0 bg-white shadow-custom-lg mega-menu z-50 border-t"
            onMouseLeave={closeMegaMenu}
          >
            <div className="container py-8">
              <div className="grid grid-cols-3 gap-8">
                <div className="col-span-1">
                  <h3 className="text-lg font-bold text-primary mb-4">Our Services</h3>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive IT solutions designed to optimize your business operations, enhance security, and
                    drive growth.
                  </p>
                  <Button asChild>
                    <Link href="/services" onClick={closeMegaMenu}>
                      View All Services
                    </Link>
                  </Button>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={closeMegaMenu}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <div className="mt-1">{service.icon}</div>
                        <div>
                          <h4 className="font-medium text-primary">{service.title}</h4>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mega Menu for Solutions */}
        {megaMenu === "solutions" && (
          <div
            className="absolute left-0 right-0 bg-white shadow-custom-lg mega-menu z-50 border-t"
            onMouseLeave={closeMegaMenu}
          >
            <div className="container py-8">
              <div className="grid grid-cols-3 gap-8">
                <div className="col-span-1">
                  <h3 className="text-lg font-bold text-primary mb-4">Industry Solutions</h3>
                  <p className="text-muted-foreground mb-4">
                    Tailored IT solutions designed for your industry's unique challenges and requirements.
                  </p>
                  <Button asChild>
                    <Link href="/solutions" onClick={closeMegaMenu}>
                      View All Solutions
                    </Link>
                  </Button>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-2 gap-4">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.href}
                        href={solution.href}
                        onClick={closeMegaMenu}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <div className="mt-1">{solution.icon}</div>
                        <div>
                          <h4 className="font-medium text-primary">{solution.title}</h4>
                          <p className="text-sm text-muted-foreground">{solution.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mega Menu for About */}
        {megaMenu === "about" && (
          <div
            className="absolute left-0 right-0 bg-white shadow-custom-lg mega-menu z-50 border-t"
            onMouseLeave={closeMegaMenu}
          >
            <div className="container py-8">
              <div className="grid grid-cols-3 gap-8">
                <div className="col-span-1">
                  <h3 className="text-lg font-bold text-primary mb-4">About Zyphron</h3>
                  <p className="text-muted-foreground mb-4">
                    Learn more about our company, our team, and our commitment to helping businesses thrive in the
                    digital age.
                  </p>
                  <Button asChild>
                    <Link href="/about" onClick={closeMegaMenu}>
                      Learn More About Us
                    </Link>
                  </Button>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-2 gap-4">
                    {about.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMegaMenu}
                        className="p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <h4 className="font-medium text-primary">{item.title}</h4>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mega Menu for Resources */}
        {megaMenu === "resources" && (
          <div
            className="absolute left-0 right-0 bg-white shadow-custom-lg mega-menu z-50 border-t"
            onMouseLeave={closeMegaMenu}
          >
            <div className="container py-8">
              <div className="grid grid-cols-3 gap-8">
                <div className="col-span-1">
                  <h3 className="text-lg font-bold text-primary mb-4">Resources</h3>
                  <p className="text-muted-foreground mb-4">
                    Explore our knowledge base, case studies, and industry insights to help you make informed IT
                    decisions.
                  </p>
                  <Button asChild>
                    <Link href="/resources" onClick={closeMegaMenu}>
                      View All Resources
                    </Link>
                  </Button>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-2 gap-4">
                    {resources.map((resource) => (
                      <Link
                        key={resource.href}
                        href={resource.href}
                        onClick={closeMegaMenu}
                        className="p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <h4 className="font-medium text-primary">{resource.title}</h4>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

