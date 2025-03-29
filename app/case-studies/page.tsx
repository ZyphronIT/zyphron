import Link from "next/link"
import { ArrowRight, BarChart3, CheckCircle, Globe, HeartHandshake, Server, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CaseStudiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Case Studies</h1>
                <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                  Real-world examples of how we've helped our clients succeed
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
                  Featured Case Study
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">
                  Healthcare Transformation: Regional Health Network
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    A regional hospital network with 5 facilities faced significant challenges with their aging IT
                    infrastructure, compliance concerns, and the need to improve patient care through technology.
                  </p>
                  <p>
                    Zyphron implemented a comprehensive digital transformation strategy, including secure cloud
                    migration, modernized electronic health record systems, and enhanced cybersecurity measures.
                  </p>
                  <p>
                    The result was a 40% reduction in IT operational costs, 99.99% system uptime, full HIPAA compliance,
                    and improved patient care delivery through seamless information access.
                  </p>
                </div>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-center">
                <div className="relative h-[400px] w-full max-w-[500px] rounded-lg bg-muted p-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <HeartHandshake className="h-24 w-24 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                  Industry Solutions
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Success Stories by Industry</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore how we've helped organizations across different sectors
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-2 border-muted hover:border-primary transition-colors">
                <CardHeader>
                  <div className="rounded-full bg-secondary/20 p-3 w-fit mb-4">
                    <HeartHandshake className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Healthcare</CardTitle>
                  <CardDescription>
                    Secure solutions that comply with healthcare regulations while improving patient care.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium">Featured Clients:</h3>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                          <span>Regional Health Network</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                          <span>Metropolitan Medical Center</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                          <span>Allied Health Services</span>
                        </li>
                      </ul>
                    </div>
                    <Link
                      href="/case-studies/healthcare"
                      className="text-sm font-medium text-primary flex items-center"
                    >
                      View Healthcare Case Studies
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-muted hover:border-primary transition-colors">
                <CardHeader>
                  <div className="rounded-full bg-secondary/20 p-3 w-fit mb-4">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Finance</CardTitle>
                  <CardDescription>
                    Robust and secure IT infrastructure for financial institutions with strict compliance requirements.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium">Featured Clients:</h3>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                          <span>Capital Investments</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                          <span>National Banking Group</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                          <span>Financial Partners Ltd.</span>
                        </li>
                      </ul>
                    </div>
                    <Link href="/case-studies/finance" className="text-sm font-medium text-primary flex items-center">
                      View Finance Case Studies
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-muted hover:border-primary transition-colors">
                <CardHeader>
                  <div className="rounded-full bg-secondary/20 p-3 w-fit mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Education</CardTitle>
                  <CardDescription>
                    Technology solutions that enhance learning experiences and streamline administrative processes.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium">Featured Clients:</h3>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                          <span>Metropolitan University</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                          <span>Regional School District</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                          <span>EduTech Learning Center</span>
                        </li>
                      </ul>
                    </div>
                    <Link href="/case-studies/education" className="text-sm font-medium text-primary flex items-center">
                      View Education Case Studies
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-muted hover:border-primary transition-colors">
                <CardHeader>
                  <div className="rounded-full bg-secondary/20 p-3 w-fit mb-4">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Government</CardTitle>
                  <CardDescription>
                    Secure and compliant IT solutions designed specifically for government agencies.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium">Featured Clients:</h3>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                          <span>City Government</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                          <span>State Department of Services</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                          <span>Federal Agency</span>
                        </li>
                      </ul>
                    </div>
                    <Link
                      href="/case-studies/government"
                      className="text-sm font-medium text-primary flex items-center"
                    >
                      View Government Case Studies
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-muted hover:border-primary transition-colors">
                <CardHeader>
                  <div className="rounded-full bg-secondary/20 p-3 w-fit mb-4">
                    <Server className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Manufacturing</CardTitle>
                  <CardDescription>
                    IT solutions that optimize production processes and supply chain management.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium">Featured Clients:</h3>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                          <span>Industrial Systems Inc.</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                          <span>Precision Manufacturing</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                          <span>Global Production Ltd.</span>
                        </li>
                      </ul>
                    </div>
                    <Link
                      href="/case-studies/manufacturing"
                      className="text-sm font-medium text-primary flex items-center"
                    >
                      View Manufacturing Case Studies
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-muted hover:border-primary transition-colors">
                <CardHeader>
                  <div className="rounded-full bg-secondary/20 p-3 w-fit mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Professional Services</CardTitle>
                  <CardDescription>
                    Technology that enhances collaboration and client service delivery for professional firms.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium">Featured Clients:</h3>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                          <span>Legal Partners LLP</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                          <span>Accounting Solutions</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                          <span>Consulting Group International</span>
                        </li>
                      </ul>
                    </div>
                    <Link
                      href="/case-studies/professional-services"
                      className="text-sm font-medium text-primary flex items-center"
                    >
                      View Professional Services Case Studies
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                  Recent Success Stories
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Latest Case Studies</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our most recent client success stories
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Cloud Migration for Financial Services Firm</CardTitle>
                  <CardDescription>Capital Investments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium">Challenge:</h3>
                      <p className="text-sm text-muted-foreground">
                        Aging on-premises infrastructure with increasing maintenance costs and security concerns.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">Solution:</h3>
                      <p className="text-sm text-muted-foreground">
                        Secure hybrid cloud migration with enhanced security controls and compliance monitoring.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">Results:</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                          <span>35% reduction in IT operational costs</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                          <span>99.99% system uptime</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                          <span>Enhanced security posture</span>
                        </li>
                      </ul>
                    </div>
                    <Link
                      href="/case-studies/finance/capital-investments"
                      className="text-sm font-medium text-primary flex items-center"
                    >
                      Read Full Case Study
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Digital Transformation for Healthcare Provider</CardTitle>
                  <CardDescription>Metropolitan Medical Center</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium">Challenge:</h3>
                      <p className="text-sm text-muted-foreground">
                        Fragmented systems creating inefficiencies in patient care and administrative processes.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">Solution:</h3>
                      <p className="text-sm text-muted-foreground">
                        Integrated healthcare information system with secure patient portals and mobile access.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">Results:</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                          <span>45% reduction in administrative time</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                          <span>Improved patient satisfaction scores</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                          <span>Enhanced data-driven decision making</span>
                        </li>
                      </ul>
                    </div>
                    <Link
                      href="/case-studies/healthcare/metropolitan-medical"
                      className="text-sm font-medium text-primary flex items-center"
                    >
                      Read Full Case Study
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Manufacturing Process Optimization</CardTitle>
                  <CardDescription>Industrial Systems Inc.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium">Challenge:</h3>
                      <p className="text-sm text-muted-foreground">
                        Disconnected OT/IT systems causing production inefficiencies and supply chain visibility issues.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">Solution:</h3>
                      <p className="text-sm text-muted-foreground">
                        Integrated IIoT platform with real-time analytics and secure OT/IT convergence strategy.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">Results:</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                          <span>30% increase in production efficiency</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                          <span>25% reduction in downtime</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                          <span>Improved supply chain visibility</span>
                        </li>
                      </ul>
                    </div>
                    <Link
                      href="/case-studies/manufacturing/industrial-systems"
                      className="text-sm font-medium text-primary flex items-center"
                    >
                      Read Full Case Study
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Ready to Become Our Next Success Story?
                </h2>
                <p className="text-primary-foreground/80 md:text-lg">
                  Contact us today to discuss how our solutions can transform your business.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-light text-black">
                    View All Case Studies
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
    </div>
  )
}

