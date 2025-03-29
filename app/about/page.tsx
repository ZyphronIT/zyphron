import { ArrowRight, Award, CheckCircle, Clock, Globe, Lightbulb, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">About Zyphron</h1>
              <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                Your trusted IT partner for over 20 years
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
                Our Story
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">Transforming Businesses Through Technology</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Zyphron has grown from a small IT support company to a leading provider of
                  comprehensive IT solutions across Australia. Our journey has been driven by a passion for technology
                  and a commitment to helping businesses thrive in an increasingly digital world.
                </p>
                <p>
                  Over the past two decades, we've partnered with hundreds of organizations across various industries,
                  helping them navigate the complex technology landscape and leverage IT as a strategic asset rather
                  than just an operational necessity.
                </p>
                <p>
                  Today, our team of over 200 certified IT professionals continues to deliver innovative solutions that
                  address the evolving challenges faced by modern businesses. From cybersecurity to cloud
                  transformation, we remain at the forefront of technology trends to ensure our clients stay ahead of
                  the curve.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[400px] w-full max-w-[500px] rounded-lg bg-muted p-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-4">
                    <div className="aspect-square rounded-lg bg-secondary/20"></div>
                    <div className="aspect-square rounded-lg bg-primary/20"></div>
                    <div className="aspect-square rounded-lg bg-primary/20"></div>
                    <div className="aspect-square rounded-lg bg-secondary/20"></div>
                  </div>
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
                Our Values
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Drives Us</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our core values shape everything we do and how we serve our clients
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-background border-2 border-muted hover:border-primary transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-secondary/20 p-3 w-fit">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Client Focus</h3>
                <p className="text-sm text-muted-foreground">
                  We put our clients at the center of everything we do, building long-term partnerships based on trust
                  and mutual success.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-2 border-muted hover:border-primary transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-secondary/20 p-3 w-fit">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  We strive for excellence in every aspect of our work, from technical expertise to customer service and
                  project delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-2 border-muted hover:border-primary transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-secondary/20 p-3 w-fit">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  We embrace innovation and continuously seek new ways to solve complex problems and create value for
                  our clients.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-2 border-muted hover:border-primary transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-secondary/20 p-3 w-fit">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Integrity</h3>
                <p className="text-sm text-muted-foreground">
                  We operate with the highest ethical standards, maintaining transparency and honesty in all our
                  interactions.
                </p>
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
                Our Team
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Leadership</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Experienced professionals guiding our vision and strategy
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-muted h-40 w-40"></div>
              <div>
                <h3 className="text-xl font-bold">John Brennan</h3>
                <p className="text-sm text-muted-foreground">Founder & CEO</p>
              </div>
              <p className="text-sm text-muted-foreground max-w-[300px]">
                With over 25 years in the IT industry, John founded Zyphron with a vision to help businesses leverage
                technology for growth.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-muted h-40 w-40"></div>
              <div>
                <h3 className="text-xl font-bold">Sarah Mitchell</h3>
                <p className="text-sm text-muted-foreground">Chief Technology Officer</p>
              </div>
              <p className="text-sm text-muted-foreground max-w-[300px]">
                Sarah leads our technical strategy, bringing extensive experience in cloud architecture and digital
                transformation.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-muted h-40 w-40"></div>
              <div>
                <h3 className="text-xl font-bold">Michael Chen</h3>
                <p className="text-sm text-muted-foreground">Chief Information Security Officer</p>
              </div>
              <p className="text-sm text-muted-foreground max-w-[300px]">
                Michael oversees our cybersecurity practice, ensuring our clients receive the highest level of
                protection against evolving threats.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-muted h-40 w-40"></div>
              <div>
                <h3 className="text-xl font-bold">Emily Rodriguez</h3>
                <p className="text-sm text-muted-foreground">Chief Operations Officer</p>
              </div>
              <p className="text-sm text-muted-foreground max-w-[300px]">
                Emily ensures operational excellence across all our service delivery teams, focusing on client
                satisfaction and efficiency.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-muted h-40 w-40"></div>
              <div>
                <h3 className="text-xl font-bold">David Thompson</h3>
                <p className="text-sm text-muted-foreground">Chief Financial Officer</p>
              </div>
              <p className="text-sm text-muted-foreground max-w-[300px]">
                David manages our financial strategy, ensuring sustainable growth and value creation for our clients and
                stakeholders.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-muted h-40 w-40"></div>
              <div>
                <h3 className="text-xl font-bold">Lisa Wong</h3>
                <p className="text-sm text-muted-foreground">Director of Client Success</p>
              </div>
              <p className="text-sm text-muted-foreground max-w-[300px]">
                Lisa leads our client success team, ensuring we deliver exceptional service and build lasting
                relationships with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="careers">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                Our Achievements
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Milestones & Recognition</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A track record of excellence and industry recognition
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Our Journey</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-secondary/20 p-1 mt-1">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium">2000</p>
                      <p className="text-sm text-muted-foreground">
                        Founded in Sydney with a team of 5 IT professionals
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-secondary/20 p-1 mt-1">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium">2005</p>
                      <p className="text-sm text-muted-foreground">
                        Expanded to Melbourne and Brisbane, reaching 50 employees
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-secondary/20 p-1 mt-1">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium">2010</p>
                      <p className="text-sm text-muted-foreground">Launched our cloud services division</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-secondary/20 p-1 mt-1">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium">2015</p>
                      <p className="text-sm text-muted-foreground">Established our dedicated cybersecurity practice</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-secondary/20 p-1 mt-1">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium">2020</p>
                      <p className="text-sm text-muted-foreground">
                        Reached 200 employees and expanded to Perth and Adelaide
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Awards & Certifications</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-secondary/20 p-1 mt-1">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium">ISO 27001 Certified</p>
                      <p className="text-sm text-muted-foreground">Information Security Management</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-secondary/20 p-1 mt-1">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium">Microsoft Gold Partner</p>
                      <p className="text-sm text-muted-foreground">Cloud Platform, Security, and Modern Workplace</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-secondary/20 p-1 mt-1">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium">AWS Advanced Consulting Partner</p>
                      <p className="text-sm text-muted-foreground">Cloud Migration and Management</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-secondary/20 p-1 mt-1">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium">IT Service Provider of the Year</p>
                      <p className="text-sm text-muted-foreground">Australian Technology Awards, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Team</h2>
              <p className="text-primary-foreground/80 md:text-lg">
                We're always looking for talented professionals who share our passion for technology and client success.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-light text-black">
                  Learn About Our Culture
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

