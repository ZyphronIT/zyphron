import Link from "next/link"
import { ArrowRight, Quote, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TestimonialsPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Client Testimonials</h1>
              <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                Hear what our clients have to say about working with Zyphron
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 border-muted hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-secondary h-12 w-12"></div>
                  <div>
                    <CardTitle>Sarah Johnson</CardTitle>
                    <CardDescription>CEO, TechSolutions Inc.</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex">
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                </div>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-secondary/20" />
                  <p className="relative z-10 text-muted-foreground pl-6">
                    Zyphron transformed our IT infrastructure, improving efficiency and security while reducing costs.
                    Their team is responsive and knowledgeable, and they've become a trusted partner in our business
                    growth.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-muted hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-secondary h-12 w-12"></div>
                  <div>
                    <CardTitle>Michael Chen</CardTitle>
                    <CardDescription>CTO, HealthFirst</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex">
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                </div>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-secondary/20" />
                  <p className="relative z-10 text-muted-foreground pl-6">
                    Their cybersecurity solutions have been crucial for our healthcare organization. We've seen a
                    significant reduction in security incidents, and their team's expertise in healthcare compliance has
                    been invaluable.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-muted hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-secondary h-12 w-12"></div>
                  <div>
                    <CardTitle>Emily Rodriguez</CardTitle>
                    <CardDescription>Operations Director, EduTech</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex">
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                </div>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-secondary/20" />
                  <p className="relative z-10 text-muted-foreground pl-6">
                    The cloud migration project was seamless. Their team worked around our schedule to ensure minimal
                    disruption to our educational services. The new system has improved our ability to deliver remote
                    learning solutions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-muted hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-secondary h-12 w-12"></div>
                  <div>
                    <CardTitle>Robert Torres</CardTitle>
                    <CardDescription>COO, Industrial Systems Inc.</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex">
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                </div>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-secondary/20" />
                  <p className="relative z-10 text-muted-foreground pl-6">
                    Zyphron's OT/IT integration strategy has transformed our production processes, resulting in a 30%
                    increase in efficiency and improved supply chain visibility. Their understanding of manufacturing
                    challenges is exceptional.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-muted hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-secondary h-12 w-12"></div>
                  <div>
                    <CardTitle>Jennifer Lee</CardTitle>
                    <CardDescription>CFO, Financial Partners Ltd.</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex">
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                </div>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-secondary/20" />
                  <p className="relative z-10 text-muted-foreground pl-6">
                    The managed security services provided by Zyphron have given us peace of mind. Their proactive
                    approach to threat detection and response has protected our sensitive financial data and client
                    information.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-muted hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-secondary h-12 w-12"></div>
                  <div>
                    <CardTitle>David Wilson</CardTitle>
                    <CardDescription>IT Director, City Government</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex">
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                </div>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-secondary/20" />
                  <p className="relative z-10 text-muted-foreground pl-6">
                    Zyphron helped us modernize our citizen services while maintaining strict compliance with
                    government regulations. Their team's expertise in public sector IT challenges made the transition
                    smooth and successful.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                Client Success Stories
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Case Studies</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore detailed examples of how we've helped our clients overcome challenges
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Healthcare Provider</CardTitle>
                <CardDescription>Regional hospital network with 5 facilities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    "Zyphron helped us modernize our IT infrastructure while ensuring HIPAA compliance. Their
                    solutions improved our patient care delivery while reducing operational costs."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-secondary h-12 w-12"></div>
                    <div>
                      <p className="font-medium">Dr. Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">CIO, Regional Health Network</p>
                    </div>
                  </div>
                  <Link href="/case-studies/healthcare" className="text-sm font-medium text-primary flex items-center">
                    Read Case Study
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Financial Services</CardTitle>
                <CardDescription>Mid-sized investment management firm</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    "The cybersecurity solutions implemented by Zyphron have significantly reduced our risk profile
                    while enabling us to meet regulatory requirements with confidence."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-secondary h-12 w-12"></div>
                    <div>
                      <p className="font-medium">Michael Chen</p>
                      <p className="text-sm text-muted-foreground">CISO, Capital Investments</p>
                    </div>
                  </div>
                  <Link href="/case-studies/finance" className="text-sm font-medium text-primary flex items-center">
                    Read Case Study
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Manufacturing</CardTitle>
                <CardDescription>Industrial equipment manufacturer</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    "Zyphron's OT/IT integration strategy has transformed our production processes, resulting in a 30%
                    increase in efficiency and improved supply chain visibility."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-secondary h-12 w-12"></div>
                    <div>
                      <p className="font-medium">Robert Torres</p>
                      <p className="text-sm text-muted-foreground">COO, Industrial Systems Inc.</p>
                    </div>
                  </div>
                  <Link
                    href="/case-studies/manufacturing"
                    className="text-sm font-medium text-primary flex items-center"
                  >
                    Read Case Study
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
                Client Satisfaction
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Impact in Numbers</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Measurable results that demonstrate our commitment to client success
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Client Satisfaction Rate</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Active Clients</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">30%</div>
                <p className="text-muted-foreground">Average Cost Reduction</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <p className="text-muted-foreground">Service Uptime</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Transform Your IT?</h2>
              <p className="text-primary-foreground/80 md:text-lg">
                Join our satisfied clients and experience the Zyphron difference. Contact us today to discuss your IT
                needs.
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

