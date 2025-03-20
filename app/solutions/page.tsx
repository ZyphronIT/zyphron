import Link from "next/link"
import { ArrowRight, Award, BarChart3, CheckCircle, Globe, HeartHandshake, Server, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SolutionsPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Industry Solutions</h1>
              <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                Tailored IT solutions designed for your industry's unique challenges
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
                Industry Expertise
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">Specialized Solutions for Every Sector</h2>
              <p className="text-muted-foreground md:text-lg">
                At Zyphron, we understand that different industries face unique challenges. Our team has deep
                expertise across multiple sectors, allowing us to deliver solutions that address your specific needs and
                compliance requirements.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[300px] w-full max-w-[500px] rounded-lg bg-muted p-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe className="h-24 w-24 text-primary" />
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
                Our Solutions
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Industry-Specific Solutions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover how our tailored IT solutions can transform your industry
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
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
                    <h3 className="font-medium">Key Challenges</h3>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Maintaining patient data security and privacy</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Regulatory compliance (HIPAA, GDPR)</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Integration of diverse medical systems</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Our Solutions</h3>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Secure EHR/EMR systems implementation</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Compliance-focused security frameworks</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Telehealth infrastructure solutions</span>
                      </li>
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full mt-2">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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
                    <h3 className="font-medium">Key Challenges</h3>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Cybersecurity threats and fraud prevention</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Regulatory compliance (PCI DSS, SOX)</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Digital transformation of legacy systems</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Our Solutions</h3>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Advanced threat protection systems</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Compliance automation and reporting</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Secure fintech integration solutions</span>
                      </li>
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full mt-2">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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
                    <h3 className="font-medium">Key Challenges</h3>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Remote and hybrid learning environments</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Student data security and privacy</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Limited IT resources and budgets</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Our Solutions</h3>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Digital learning platform implementation</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Secure student information systems</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Cost-effective IT infrastructure solutions</span>
                      </li>
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full mt-2">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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
                    <h3 className="font-medium">Key Challenges</h3>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Stringent security and compliance requirements</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Legacy system modernization</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Citizen service delivery optimization</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Our Solutions</h3>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Compliance-focused security frameworks</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Digital transformation roadmaps</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Citizen engagement platforms</span>
                      </li>
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full mt-2">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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
                    <h3 className="font-medium">Key Challenges</h3>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Operational technology (OT) integration</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Supply chain visibility and management</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Industrial IoT security concerns</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Our Solutions</h3>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>IT/OT convergence strategies</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Supply chain management systems</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Secure IIoT implementation</span>
                      </li>
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full mt-2">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-muted hover:border-primary transition-colors">
              <CardHeader>
                <div className="rounded-full bg-secondary/20 p-3 w-fit mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Professional Services</CardTitle>
                <CardDescription>
                  Technology that enhances collaboration and client service delivery for professional firms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">Key Challenges</h3>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Client data security and confidentiality</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Remote work and collaboration needs</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Document management and workflow optimization</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Our Solutions</h3>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Secure client portal development</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Collaborative workspace solutions</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                        <span>Automated document management systems</span>
                      </li>
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full mt-2">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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
                Success Stories
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Real Results for Real Businesses</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See how our industry solutions have transformed organizations like yours
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

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Find the Right Solution for Your Industry
              </h2>
              <p className="text-primary-foreground/80 md:text-lg">
                Our team of industry experts is ready to help you navigate the unique challenges of your sector.
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
  )
}

