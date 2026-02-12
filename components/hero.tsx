import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-10 py-20 md:py-28 lg:grid-cols-2 lg:gap-16">
          {/* Content Side */}
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              Board-Certified Dermatology
            </p>
            <h1 className="mb-6 font-serif text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Healthy skin starts with{" "}
              <span className="text-primary">expert care</span>
            </h1>
            <p className="mb-10 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Comprehensive dermatological care for the whole family. From medical
              treatments to cosmetic enhancements, we help you look and feel your best.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
              <Button variant="outline" size="lg">
                View Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-border pt-8">
              <div>
                <p className="text-2xl font-bold text-foreground">15+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <p className="text-2xl font-bold text-foreground">10,000+</p>
                <p className="text-sm text-muted-foreground">Patients Served</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <p className="text-2xl font-bold text-foreground">5.0</p>
                <p className="text-sm text-muted-foreground">Google Rating</p>
              </div>
            </div>
          </div>
          {/* Image Side */}
          <div className="relative hidden lg:block">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="/friendly-dermatologist-doctor-in-modern-clinic--pr.jpg"
                alt="Dermatology specialist at our East Texas clinic"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
