import { GraduationCap, Award, Heart } from "lucide-react"

export function About() {
  return (
    <section id="about" className="border-b border-border bg-card py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Meet Your Physician</p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Dr. Matthew Rowley, M.D.
          </h2>
          <p className="mt-2 text-base text-muted-foreground">Board-Certified Dermatologist</p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Photo */}
          <div className="lg:col-span-2">
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src="/dr-rowley-headshot.jpg"
                alt="Dr. Matthew Rowley, M.D. - Board-Certified Dermatologist"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-3">
            <p className="mb-5 text-base leading-relaxed text-muted-foreground">
              Dr. Matthew Rowley is a board-certified dermatologist with over 30 years of experience in medical and
              surgical dermatology. Born in Fort Worth and raised in Houston, Texas, Dr. Rowley began his academic
              career at the University of Texas at Austin, graduating Summa Cum Laude.
            </p>
            <p className="mb-5 text-base leading-relaxed text-muted-foreground">
              He earned his medical degree from Southwestern Medical School in Dallas in 1990. He completed his
              dermatology residency at the historic Charity Hospital in New Orleans, Louisiana, where he received
              extensive training in the diagnosis and treatment of a wide range of skin conditions.
            </p>
            <p className="mb-5 text-base leading-relaxed text-muted-foreground">
              After residency, Dr. Rowley moved to Lufkin, Texas, where he founded Dermatology of East Texas in 1994.
              For the past 31 years, he has provided compassionate, patient-centered care to the East Texas community
              and has become a respected leader in the field of dermatology. He was voted best dermatologist in Lufkin
              5 years in a row.
            </p>
            <p className="mb-10 text-base leading-relaxed text-muted-foreground">
              Outside of his medical practice, Dr. Rowley is a devoted father of three and an active member of
              St. Andrew&apos;s Catholic Church, where he is involved in both faith-based and community service activities.
            </p>

            {/* Highlights */}
            <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
              <div className="flex flex-col items-center gap-2 bg-background px-4 py-6 text-center">
                <GraduationCap className="h-5 w-5 text-primary" />
                <span className="text-lg font-bold text-foreground">UT Austin</span>
                <span className="text-xs text-muted-foreground">Summa Cum Laude</span>
              </div>
              <div className="flex flex-col items-center gap-2 bg-background px-4 py-6 text-center">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-lg font-bold text-foreground">30+ Years</span>
                <span className="text-xs text-muted-foreground">Of Experience</span>
              </div>
              <div className="flex flex-col items-center gap-2 bg-background px-4 py-6 text-center">
                <Heart className="h-5 w-5 text-primary" />
                <span className="text-lg font-bold text-foreground">5x Voted</span>
                <span className="text-xs text-muted-foreground">{"Best in Lufkin"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
