import { ArrowRight, CheckCircle, Cloud, Code, LifeBuoy, Lock, Server, Shield, Laptop, BarChart3 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Our Services</h1>
              <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                Comprehensive IT solutions tailored to your business needs
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                Core Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">End-to-End IT Solutions</h2>
              <p className="text-muted-foreground md:text-lg">
                At Zyphron, we provide comprehensive IT services designed to optimize your business operations,
                enhance security, and drive growth. Our team of experts works closely with you to understand your unique
                challenges and deliver tailored solutions.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[300px] w-full max-w-[500px] rounded-lg bg-muted p-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Server className="h-24 w-24 text-primary" />
                </div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 h-20 w-20 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Cloud className="h-10 w-10 text-secondary" />
                </div>
                <div className="absolute top-1/4 right-0 -translate-x-1/4 h-16 w-16 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Lock className="h-8 w-8 text-secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 border-muted hover:border-primary transition-colors">
              <CardHeader className="pb-2">
                <Cloud className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Cloud Services</CardTitle>
                <CardDescription>
                  Secure and scalable cloud solutions to optimize your business operations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>Cloud Migration & Strategy</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>Hybrid Cloud Solutions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>Cloud Optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>SaaS Implementation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>Cloud Security & Compliance</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-muted hover:border-primary transition-colors">
              <CardHeader className="pb-2">
                <Shield className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Cybersecurity</CardTitle>
                <CardDescription>
                  Protect your business from evolving cyber threats with our security solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
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
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>Security Awareness Training</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>Incident Response Planning</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-muted hover:border-primary transition-colors">
              <CardHeader className="pb-2">
                <LifeBuoy className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Managed IT Services</CardTitle>
                <CardDescription>
                  Comprehensive IT support and management for your entire infrastructure.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
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
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>Proactive Monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>Vendor Management</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-muted hover:border-primary transition-colors">
              <CardHeader className="pb-2">
                <Code className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Digital Transformation</CardTitle>
                <CardDescription>Modernize your business with innovative digital solutions.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
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
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>Custom Application Development</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>Legacy System Modernization</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-muted hover:border-primary transition-colors">
              <CardHeader className="pb-2">
                <Laptop className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Hardware Solutions</CardTitle>
                <CardDescription>End-to-end hardware procurement, deployment, and management.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
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
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>Equipment Maintenance</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>Asset Management</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-muted hover:border-primary transition-colors">
              <CardHeader className="pb-2">
                <BarChart3 className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Business Continuity</CardTitle>
                <CardDescription>Ensure your business can operate through any disruption.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
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
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>High Availability Solutions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                    <span>Crisis Management</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                Our Approach
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How We Deliver</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our proven methodology ensures successful outcomes for your IT initiatives
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="text-xl font-bold">Assess</h3>
              <p className="text-sm text-muted-foreground">
                We thoroughly evaluate your current IT infrastructure, processes, and challenges.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                2
              </div>
              <h3 className="text-xl font-bold">Design</h3>
              <p className="text-sm text-muted-foreground">
                Our experts create a tailored solution that addresses your specific business needs.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="text-xl font-bold">Implement</h3>
              <p className="text-sm text-muted-foreground">
                We deploy solutions with minimal disruption to your business operations.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                4
              </div>
              <h3 className="text-xl font-bold">Optimize</h3>
              <p className="text-sm text-muted-foreground">
                Continuous monitoring and improvement to ensure optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Transform Your IT?</h2>
              <p className="text-primary-foreground/80 md:text-lg">
                Contact us today to discuss how our services can help your business thrive in the digital age.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-light text-black">
                 Schedule a Consultation 
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[300px] w-full max-w-[500px] rounded-lg bg-muted/10 p-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-4">
                    <div className="aspect-square rounded-lg bg-secondary/20"></div>
                    <div className="aspect-square rounded-lg bg-primary-foreground/20"></div>
                    <div className="aspect-square rounded-lg bg-primary-foreground/20"></div>
                    <div className="aspect-square rounded-lg bg-secondary/20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

