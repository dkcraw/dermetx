import { MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const schedule = [
  { day: "Monday", hours: "8:00 AM - 5:00 PM", isOpen: true },
  { day: "Tuesday", hours: "8:00 AM - 5:00 PM", isOpen: true },
  { day: "Wednesday", hours: "8:00 AM - 5:00 PM", isOpen: true },
  { day: "Thursday", hours: "8:00 AM - 5:00 PM", isOpen: true },
  { day: "Friday", hours: "8:00 AM - 12:00 PM", isOpen: true },
  { day: "Saturday", hours: "Closed", isOpen: false },
  { day: "Sunday", hours: "Closed", isOpen: false },
]

export function Hours() {
  return (
    <section id="hours" className="border-b border-border py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Plan Your Visit</p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Hours & Location
          </h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border lg:grid-cols-2">
          {/* Hours Side */}
          <div className="bg-background p-8 md:p-12">
            <h3 className="mb-2 text-xl font-semibold text-foreground">Office Hours</h3>
            <p className="mb-8 text-sm text-muted-foreground">Walk-ins welcome. Appointments recommended.</p>
            <div className="space-y-0">
              {schedule.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between border-b border-border py-3 last:border-0"
                >
                  <span className="text-sm font-medium text-foreground">{item.day}</span>
                  <span className={item.isOpen ? "text-sm font-medium text-foreground" : "text-sm text-muted-foreground"}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Location Side */}
          <div className="bg-background p-8 md:p-12">
            <h3 className="mb-2 text-xl font-semibold text-foreground">Visit Us</h3>
            <p className="mb-6 text-sm text-muted-foreground">Conveniently located in Tyler&apos;s medical district.</p>

            <div className="mb-6 flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <div className="text-sm">
                <p className="font-medium text-foreground">123 Medical Center Drive, Suite 200</p>
                <p className="text-muted-foreground">Tyler, TX 75701</p>
              </div>
            </div>

            <div className="mb-8 aspect-video overflow-hidden rounded-sm bg-muted">
              <img
                src="/map-of-tyler-texas-medical-district-with-location-.jpg"
                alt="Map showing clinic location in Tyler, Texas"
                className="h-full w-full object-cover"
              />
            </div>

            <Button size="lg" className="w-full">
              <Phone className="mr-2 h-4 w-4" />
              Call (903) 555-1234
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
