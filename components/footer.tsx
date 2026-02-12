import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary py-12">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="mb-4 block font-serif text-base font-bold text-foreground">
              Dermatology of East Texas
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Providing exceptional dermatological care to East Texas families since 2009.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="text-foreground/80 hover:text-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-foreground/80 hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#hours" className="text-foreground/80 hover:text-foreground">
                  Hours & Location
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-foreground/80 hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>Medical Dermatology</li>
              <li>Skin Cancer Screening</li>
              <li>Cosmetic Treatments</li>
              <li>Injectable Treatments</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Contact Info</h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>123 Medical Center Drive, Suite 200</li>
              <li>Tyler, TX 75701</li>
              <li>
                <a href="tel:+19035551234" className="hover:text-foreground">
                  (903) 555-1234
                </a>
              </li>
              <li>
                <a href="mailto:info@dermeasttexas.com" className="hover:text-foreground">
                  info@dermeasttexas.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-8 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dermatology of East Texas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
