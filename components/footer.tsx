import Link from "next/link"
import { Facebook, Linkedin, Mail, MapPin, Phone, Server, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="py-12 border-b border-primary-foreground/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to transform your business?</h2>
              <p className="text-primary-foreground/80 mb-6 max-w-md">
                Contact us today to discuss how our IT solutions can help your business thrive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-light">
                  <Link href="/contact"className="text-black">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="bg-primary-light p-6 rounded-lg max-w-sm">
                <h3 className="text-xl font-bold mb-4">Subscribe to our newsletter</h3>
                <p className="text-primary-foreground/80 mb-4 text-sm">
                  Stay updated with the latest technology trends and insights.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-md bg-primary-dark text-primary-foreground border border-primary-foreground/20 focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 font-bold text-2xl mb-4">
                {/* <Server className="h-6 w-6" />
                <span>Zyphron</span> */}
                <img src="/Zyphronlogo.png" alt="Zyphron_Logo" className="w-20 h-15"/>
              </Link>
              <p className="text-primary-foreground/80 mb-6 max-w-md">
                Transforming business through technology. We provide comprehensive IT solutions to help your
                business operate efficiently and securely.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/services/cloud-services"
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    Cloud Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/cybersecurity"
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    Cybersecurity
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/managed-it-services"
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    Managed IT Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/digital-transformation"
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    Digital Transformation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/hardware-solutions"
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    Hardware Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/testimonials"
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/80">16 John Markwell Pde, Daisy Hill 4127 QLD AUS
</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/80">+61 423260050</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/80">digitalhub@zyphron.com.au</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Zyphron. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors"
            >
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

