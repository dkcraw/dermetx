import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="bg-card py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Get in Touch</p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">Contact Us</h2>
          <p className="text-base leading-relaxed text-muted-foreground">Have questions or ready to schedule? We&apos;re here to help.</p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-5">
          {/* Contact Methods */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div>
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-sm bg-secondary">
                <Phone className="h-4 w-4 text-primary" />
              </div>
              <h3 className="mb-1 text-sm font-semibold text-foreground">Phone</h3>
              <p className="mb-1 text-xs text-muted-foreground">Call us to schedule an appointment</p>
              <a href="tel:+19035551234" className="text-sm font-semibold text-foreground hover:text-primary">
                (903) 555-1234
              </a>
            </div>

            <div className="h-px bg-border" />

            <div>
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-sm bg-secondary">
                <Mail className="h-4 w-4 text-primary" />
              </div>
              <h3 className="mb-1 text-sm font-semibold text-foreground">Email</h3>
              <p className="mb-1 text-xs text-muted-foreground">Send us a message anytime</p>
              <a href="mailto:info@dermeasttexas.com" className="text-sm font-semibold text-foreground hover:text-primary">
                info@dermeasttexas.com
              </a>
            </div>

            <div className="h-px bg-border" />

            <div>
              <p className="mb-1 text-sm font-semibold text-foreground">Patient Portal</p>
              <p className="mb-1 text-xs text-muted-foreground">Access records and schedule online</p>
              <a href="#" className="text-sm font-semibold text-primary hover:underline">
                {"Login to Portal →"}
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-sm border border-border bg-background p-8 lg:col-span-3">
            <h3 className="mb-6 text-lg font-semibold text-foreground">Send a Message</h3>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="firstName" className="text-xs">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="lastName" className="text-xs">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-xs">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-xs">Phone</Label>
                <Input id="phone" type="tel" placeholder="(903) 555-1234" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-xs">Message</Label>
                <Textarea id="message" placeholder="How can we help you?" rows={4} className="resize-none" />
              </div>
              <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
