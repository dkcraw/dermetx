import { Stethoscope, Sparkles, ShieldCheck, Microscope, Sun, Syringe } from "lucide-react"

const services = [
  {
    icon: Stethoscope,
    title: "Medical Dermatology",
    description: "Diagnosis and treatment of skin conditions including acne, eczema, psoriasis, and rashes.",
  },
  {
    icon: Microscope,
    title: "Skin Cancer Screening",
    description: "Comprehensive skin exams and early detection of melanoma and other skin cancers.",
  },
  {
    icon: ShieldCheck,
    title: "Mole Removal",
    description: "Safe removal and biopsy of suspicious moles and skin growths.",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Treatments",
    description: "Botox, fillers, chemical peels, and other aesthetic procedures for rejuvenated skin.",
  },
  {
    icon: Sun,
    title: "Sun Damage Repair",
    description: "Treatment for sun spots, photodamage, and prevention of further skin damage.",
  },
  {
    icon: Syringe,
    title: "Injectable Treatments",
    description: "Professional administration of dermal fillers and neuromodulators for natural-looking results.",
  },
]

export function Services() {
  return (
    <section id="services" className="border-b border-border py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">What We Offer</p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Comprehensive Skin Care
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            From routine skin checks to advanced cosmetic procedures, we provide expert care for all your dermatological
            needs.
          </p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col gap-4 bg-background p-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-secondary">
                <service.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
