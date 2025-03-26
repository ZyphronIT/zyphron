import Link from "next/link"
import {
  ArrowRight,
  Award,
  BarChart3,
  CheckCircle,
  Cloud,
  Code,
  Globe,
  HeartHandshake,
  Laptop,
  LifeBuoy,
  Lock,
  Server,
  Shield,
  Users,
  Play,
  ChevronRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const image = [
  "/alibaba.png",
  "/amazon.png",
  "/azure.png",
  "/google.png",
  "/ibm.png"
]

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="container px-4 md:px-6 py-20 md:py-32">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <div className="inline-block bg-secondary/20 px-3 py-1 text-sm text-secondary rounded-full">
                  Trusted IT Partner
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Transforming Business Through Technology
                </h1>
                <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                  Managed Gen AI, Data, Data Science, Big Data, Cloud Solutions, CRM and ERP
                  to help your business thrive in the digital
                  age.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Link href="/contact">Get Started</Link>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-light">
                  <Link href="/services" className="text-black">Explore Our Services</Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                  </div>
                </div>
                <p className="text-sm text-primary-foreground/80">Trusted by 500+ businesses across Australia</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[400px] w-full max-w-[500px] rounded-lg p-4 overflow-hidden">
              {/* <div className="relative h-[400px] w-full max-w-[500px] rounded-lg bg-primary-light p-4 overflow-hidden"> */}

                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <Server className="h-24 w-24 text-secondary animate-pulse" />
                </div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 h-20 w-20 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Cloud className="h-10 w-10 text-secondary" />
                </div>
                <div className="absolute top-1/4 right-0 -translate-x-1/4 h-16 w-16 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Lock className="h-8 w-8 text-secondary" />
                </div>
                <div className="absolute bottom-0 right-1/4 -translate-y-1/4 h-14 w-14 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Globe className="h-7 w-7 text-secondary" />
                </div> */}
          <img src="/Hero.png" alt="Hero Image" className="h-[300px] w-full max-w-[500px] rounded-lg"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      {/* <section className="bg-muted py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary">Trusted By Industry Leaders</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-12 w-32 bg-muted-foreground/20 rounded-md flex items-center justify-center">
                <span className="text-muted-foreground font-medium">LOGO {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

<section className="bg-muted py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary">Trusted By Industry Leaders</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {image.map((i) => (
              <div key={i} className="h-12 w-32 rounded-md flex items-center justify-center">
                <span className="text-muted-foreground font-medium">
                  <img className="h-25 w-50" src={i} alt="image"></img>
                  </span>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Services Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-full bg-secondary/20 px-3 py-1 text-sm text-primary">
                Our Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Comprehensive IT Solutions
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We provide end-to-end IT services to help your business operate efficiently and securely.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 border-muted hover:border-primary transition-colors service-card">
              <CardHeader className="pb-2">
                <Cloud className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Cloud Services</CardTitle>
                <CardDescription>
                  Secure and scalable cloud solutions to optimize your business operations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>Cloud Migration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>Hybrid Cloud Solutions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>Cloud Optimization</span>
                  </li>
                </ul>
                <Link
                  href="/services/cloud-services"
                  className="text-sm font-medium text-primary flex items-center hover:text-primary/80 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="border-2 border-muted hover:border-primary transition-colors service-card">
              <CardHeader className="pb-2">
                <Shield className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Cybersecurity</CardTitle>
                <CardDescription>
                  Protect your business from evolving cyber threats with our security solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>Threat Detection & Response</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>Security Assessments</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>Compliance Management</span>
                  </li>
                </ul>
                <Link
                  href="/services/cybersecurity"
                  className="text-sm font-medium text-primary flex items-center hover:text-primary/80 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="border-2 border-muted hover:border-primary transition-colors service-card">
              <CardHeader className="pb-2">
                <LifeBuoy className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Managed IT Services</CardTitle>
                <CardDescription>
                  Comprehensive IT support and management for your entire infrastructure.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>24/7 Helpdesk Support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>Network Management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>IT Strategy & Consulting</span>
                  </li>
                </ul>
                <Link
                  href="/services/managed-it-services"
                  className="text-sm font-medium text-primary flex items-center hover:text-primary/80 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="border-2 border-muted hover:border-primary transition-colors service-card">
              <CardHeader className="pb-2">
                <Code className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Digital Transformation</CardTitle>
                <CardDescription>Modernize your business with innovative digital solutions.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>Process Automation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>Digital Workplace Solutions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>Business Intelligence</span>
                  </li>
                </ul>
                <Link
                  href="/services/digital-transformation"
                  className="text-sm font-medium text-primary flex items-center hover:text-primary/80 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="border-2 border-muted hover:border-primary transition-colors service-card">
              <CardHeader className="pb-2">
                <Laptop className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Hardware Solutions</CardTitle>
                <CardDescription>End-to-end hardware procurement, deployment, and management.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>Device Lifecycle Management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>Infrastructure Deployment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>Hardware as a Service</span>
                  </li>
                </ul>
                <Link
                  href="/services/hardware-solutions"
                  className="text-sm font-medium text-primary flex items-center hover:text-primary/80 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="border-2 border-muted hover:border-primary transition-colors service-card">
              <CardHeader className="pb-2">
                <BarChart3 className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Business Continuity</CardTitle>
                <CardDescription>Ensure your business can operate through any disruption.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>Disaster Recovery Planning</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>Backup Solutions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>Business Continuity Testing</span>
                  </li>
                </ul>
                <Link
                  href="/services/business-continuity"
                  className="text-sm font-medium text-primary flex items-center hover:text-primary/80 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-12">
            <Button size="lg" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-lg bg-white p-6 shadow-custom flex flex-col items-center justify-center text-center">
                  <Award className="h-10 w-10 text-secondary mb-3" />
                  <h3 className="font-bold text-primary">20+ Years</h3>
                  <p className="text-sm text-muted-foreground">Industry Experience</p>
                </div>
                <div className="aspect-square rounded-lg bg-white p-6 shadow-custom flex flex-col items-center justify-center text-center">
                  <Users className="h-10 w-10 text-secondary mb-3" />
                  <h3 className="font-bold text-primary">200+</h3>
                  <p className="text-sm text-muted-foreground">IT Professionals</p>
                </div>
                <div className="aspect-square rounded-lg bg-white p-6 shadow-custom flex flex-col items-center justify-center text-center">
                  <Server className="h-10 w-10 text-secondary mb-3" />
                  <h3 className="font-bold text-primary">500+</h3>
                  <p className="text-sm text-muted-foreground">Clients Served</p>
                </div>
                <div className="aspect-square rounded-lg bg-white p-6 shadow-custom flex flex-col items-center justify-center text-center">
                  <Globe className="h-10 w-10 text-secondary mb-3" />
                  <h3 className="font-bold text-primary">5</h3>
                  <p className="text-sm text-muted-foreground">Office Locations</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="space-y-4">
                <div className="inline-block rounded-full bg-secondary/20 px-3 py-1 text-sm text-primary">
                  Why Choose Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                  Your Trusted IT Partner
                </h2>
                <p className="text-muted-foreground">
                  With over 20 years of experience, we've been helping businesses leverage technology to achieve their
                  goals.
                </p>
                <div className="space-y-4 mt-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-secondary/20 p-1 mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Expert Team</h3>
                      <p className="text-sm text-muted-foreground">
                        Our certified professionals bring decades of combined experience to every project.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-secondary/20 p-1 mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Client-Focused Approach</h3>
                      <p className="text-sm text-muted-foreground">
                        We prioritize understanding your business needs to deliver tailored solutions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-secondary/20 p-1 mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Proven Track Record</h3>
                      <p className="text-sm text-muted-foreground">
                        We've successfully delivered thousands of projects for businesses of all sizes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button asChild>
                    <Link href="/about">Learn More About Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-full bg-secondary/20 px-3 py-1 text-sm text-primary">
                Industry Solutions
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Tailored for Your Industry
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We understand that different industries have unique IT requirements. Our solutions are customized to
                meet your specific needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-3 rounded-lg border-2 border-muted bg-background p-6 text-center shadow-sm hover:border-primary transition-colors service-card">
              <div className="rounded-full bg-secondary/20 p-4">
                <HeartHandshake className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary">Healthcare</h3>
              <p className="text-sm text-muted-foreground">
                Secure solutions that comply with healthcare regulations while improving patient care.
              </p>
              <Link
                href="/solutions/healthcare"
                className="text-sm font-medium text-primary flex items-center hover:text-primary/80 transition-colors mt-2"
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-3 rounded-lg border-2 border-muted bg-background p-6 text-center shadow-sm hover:border-primary transition-colors service-card">
              <div className="rounded-full bg-secondary/20 p-4">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary">Finance</h3>
              <p className="text-sm text-muted-foreground">
                Robust and secure IT infrastructure for financial institutions with strict compliance requirements.
              </p>
              <Link
                href="/solutions/finance"
                className="text-sm font-medium text-primary flex items-center hover:text-primary/80 transition-colors mt-2"
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-3 rounded-lg border-2 border-muted bg-background p-6 text-center shadow-sm hover:border-primary transition-colors service-card">
              <div className="rounded-full bg-secondary/20 p-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary">Education</h3>
              <p className="text-sm text-muted-foreground">
                Technology solutions that enhance learning experiences and streamline administrative processes.
              </p>
              <Link
                href="/solutions/education"
                className="text-sm font-medium text-primary flex items-center hover:text-primary/80 transition-colors mt-2"
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-3 rounded-lg border-2 border-muted bg-background p-6 text-center shadow-sm hover:border-primary transition-colors service-card">
              <div className="rounded-full bg-secondary/20 p-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary">Government</h3>
              <p className="text-sm text-muted-foreground">
                Secure and compliant IT solutions designed specifically for government agencies.
              </p>
              <Link
                href="/solutions/government"
                className="text-sm font-medium text-primary flex items-center hover:text-primary/80 transition-colors mt-2"
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-3 rounded-lg border-2 border-muted bg-background p-6 text-center shadow-sm hover:border-primary transition-colors service-card">
              <div className="rounded-full bg-secondary/20 p-4">
                <Server className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary">Manufacturing</h3>
              <p className="text-sm text-muted-foreground">
                IT solutions that optimize production processes and supply chain management.
              </p>
              <Link
                href="/solutions/manufacturing"
                className="text-sm font-medium text-primary flex items-center hover:text-primary/80 transition-colors mt-2"
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-3 rounded-lg border-2 border-muted bg-background p-6 text-center shadow-sm hover:border-primary transition-colors service-card">
              <div className="rounded-full bg-secondary/20 p-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary">Professional Services</h3>
              <p className="text-sm text-muted-foreground">
                Technology that enhances collaboration and client service delivery for professional firms.
              </p>
              <Link
                href="/solutions/professional-services"
                className="text-sm font-medium text-primary flex items-center hover:text-primary/80 transition-colors mt-2"
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Button size="lg" asChild>
              <Link href="/solutions">View All Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="space-y-4">
                <div className="inline-block rounded-full bg-secondary/20 px-3 py-1 text-sm text-secondary">
                  Case Study
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Healthcare Transformation</h2>
                <p className="text-primary-foreground/80">
                  See how we helped a regional hospital network modernize their IT infrastructure, improve patient care,
                  and reduce operational costs.
                </p>
                <div className="space-y-2 mt-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>40% reduction in IT operational costs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>99.99% system uptime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>Full HIPAA compliance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>Improved patient care delivery</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
                    <Link href="/case-studies/healthcare">
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden bg-primary-light relative image-hover-zoom">
                <div className="absolute inset-0 flex items-center justify-center">
                  <HeartHandshake className="h-24 w-24 text-secondary" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-white h-12 w-12"></div>
                    <div>
                      <p className="font-medium">Dr. Sarah Johnson</p>
                      <p className="text-sm text-primary-foreground/80">CIO, Regional Health Network</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="rounded-full bg-secondary/90 p-4 hover:bg-secondary transition-colors">
                    <Play className="h-8 w-8 text-primary" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-full bg-secondary/20 px-3 py-1 text-sm text-primary">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="bg-background border-2 border-muted hover:border-primary transition-colors testimonial-card">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-secondary h-12 w-12"></div>
                  <div>
                    <CardTitle>Sarah Johnson</CardTitle>
                    <CardDescription>CEO, TechSolutions Inc.</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 fill-secondary text-secondary"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Zyphron transformed our IT infrastructure, improving efficiency and security while reducing costs.
                  Their team is responsive and knowledgeable."
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-2 border-muted hover:border-primary transition-colors testimonial-card">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-secondary h-12 w-12"></div>
                  <div>
                    <CardTitle>Michael Chen</CardTitle>
                    <CardDescription>CTO, HealthFirst</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 fill-secondary text-secondary"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Their cybersecurity solutions have been crucial for our healthcare organization. We've seen a
                  significant reduction in security incidents."
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-2 border-muted hover:border-primary transition-colors testimonial-card">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-secondary h-12 w-12"></div>
                  <div>
                    <CardTitle>Emily Rodriguez</CardTitle>
                    <CardDescription>Operations Director, EduTech</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 fill-secondary text-secondary"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "The cloud migration project was seamless. Their team worked around our schedule to ensure minimal
                  disruption to our educational services."
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/testimonials">
                View All Testimonials
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary mb-4">
                Ready to Transform Your IT?
              </h2>
              <p className="text-primary/80 mb-6 max-w-md">
                Contact us today to discuss how our services can help your business thrive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary hover:bg-secondary-light" asChild>
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white p-8 rounded-lg shadow-custom max-w-md">
                <h3 className="text-xl font-bold text-primary mb-4">Contact Us</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="text-sm font-medium text-muted-foreground">
                        First Name
                      </label>
                      <input
                        id="first-name"
                        className="mt-1 block w-full rounded-md border-muted bg-background px-3 py-2 text-sm"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="text-sm font-medium text-muted-foreground">
                        Last Name
                      </label>
                      <input
                        id="last-name"
                        className="mt-1 block w-full rounded-md border-muted bg-background px-3 py-2 text-sm"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="mt-1 block w-full rounded-md border-muted bg-background px-3 py-2 text-sm"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-muted-foreground">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="mt-1 block w-full rounded-md border-muted bg-background px-3 py-2 text-sm"
                      placeholder="+61 423260050"
                    />
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Submit</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-full bg-secondary/20 px-3 py-1 text-sm text-primary">
                Latest Insights
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">From Our Blog</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay updated with the latest technology trends and insights.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="border-2 border-muted hover:border-primary transition-colors service-card overflow-hidden"
              >
                <div className="aspect-video bg-muted relative image-hover-zoom">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-full bg-muted-foreground/20"></div>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-xs text-muted-foreground">May 15, 2023</div>
                    <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
                    <div className="text-xs text-muted-foreground">5 min read</div>
                  </div>
                  <CardTitle className="text-xl">The Future of Cloud Computing: Trends to Watch</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Explore the emerging trends in cloud computing and how they will shape the future of business
                    technology.
                  </p>
                  <Link
                    href="/blog/future-of-cloud-computing"
                    className="text-sm font-medium text-primary flex items-center hover:text-primary/80 transition-colors"
                  >
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/blog">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}


