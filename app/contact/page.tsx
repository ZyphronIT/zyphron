import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Contact Us</h1>
                <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                  Get in touch with our team to discuss your IT needs
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and our team will get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          First Name
                        </label>
                        <input
                          id="first-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Last Name
                        </label>
                        <input
                          id="last-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="+61 423260050"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="company"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Company Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="service"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select a service</option>
                        <option value="cloud">Cloud Services</option>
                        <option value="security">Cybersecurity</option>
                        <option value="managed">Managed IT Services</option>
                        <option value="digital">Digital Transformation</option>
                        <option value="hardware">Hardware Solutions</option>
                        <option value="continuity">Business Continuity</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tell us about your IT needs"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="grid gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Our Offices</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="space-y-2">
                        <h3 className="font-bold">Brisbane (Headquarters)</h3>
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-primary/10 p-1">
                            <MapPin className="h-5 w-5 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">16 John Markwell Pde, Daisy Hill 4127 QLD AUS
</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-primary/10 p-1">
                            <Phone className="h-5 w-5 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">+61 423260050</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-bold">Melbourne</h3>
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-primary/10 p-1">
                            <MapPin className="h-5 w-5 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            NA
                          </p>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-primary/10 p-1">
                            <Phone className="h-5 w-5 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">+61 000000000</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-bold">Sydney</h3>
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-primary/10 p-1">
                            <MapPin className="h-5 w-5 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                           NA
                          </p>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-primary/10 p-1">
                            <Phone className="h-5 w-5 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">+61 0 0000 0000</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-primary/10 p-1">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold">Email</h3>
                          <p className="text-sm text-muted-foreground">digitalhub@zyphron.com.au</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-primary/10 p-1">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold">Support Hotline</h3>
                          <p className="text-sm text-muted-foreground">
                            0000 000 000 (24/7 for managed service clients)
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Business Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Monday - Friday</span>
                        <span className="text-sm text-muted-foreground">9:00 AM - 5:30 PM</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Saturday - Sunday</span>
                        <span className="text-sm text-muted-foreground">Closed</span>
                      </div>
                      <div className="mt-2 text-sm text-muted-foreground">
                        24/7 Support available for managed service clients
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                  FAQ
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about our services
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>What industries do you serve?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We serve a wide range of industries including healthcare, finance, education, government,
                    manufacturing, and professional services. Our solutions are tailored to meet the specific needs and
                    compliance requirements of each sector.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How quickly can you respond to IT issues?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    For our managed service clients, we offer 24/7 support with guaranteed response times based on issue
                    severity. Critical issues typically receive a response within 15 minutes, while standard issues are
                    addressed within 1-4 hours.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What size businesses do you work with?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We work with businesses of all sizes, from small operations with 10-20 employees to large
                    enterprises with thousands of staff. Our solutions are scalable and can be customized to fit your
                    organization's size and budget.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How do you ensure data security and privacy?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We implement multi-layered security measures including advanced threat protection, encryption,
                    access controls, and regular security assessments. We're ISO 27001 certified and comply with
                    industry-specific regulations such as HIPAA, GDPR, and PCI DSS.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What is the process for becoming a client?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our process typically begins with an initial consultation to understand your needs, followed by an
                    assessment of your current IT environment. We then develop a tailored solution proposal, and upon
                    agreement, implement the solution with minimal disruption to your business.
                  </p>
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
                  Contact us today to discuss how our services can help your business thrive in the digital age.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-light text-black">
                    Call Us Now
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

