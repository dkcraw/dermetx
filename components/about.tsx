import { Check } from "lucide-react"

const highlights = [
  "Board-certified dermatologists",
  "State-of-the-art facilities",
  "Personalized treatment plans",
  "Family-friendly environment",
  "Most insurance accepted",
  "Convenient East Texas location",
]

export function About() {
  return (
    <section id="about" className="border-b border-border bg-card py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="/modern-dermatology-clinic-interior-with-friendly-s.jpg"
                alt="Dermatology of East Texas clinic interior"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">About Our Practice</p>
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Dedicated to your skin health
            </h2>
            <p className="mb-5 text-base leading-relaxed text-muted-foreground">
              At Dermatology of East Texas, we believe everyone deserves healthy, beautiful skin. Our team of
              experienced dermatologists combines cutting-edge technology with compassionate care.
            </p>
            <p className="mb-10 text-base leading-relaxed text-muted-foreground">
              Whether you&apos;re dealing with a chronic skin condition, need a routine skin cancer screening, or want to
              explore cosmetic options, we&apos;re here to guide you every step of the way.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
