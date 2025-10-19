import Link from "next/link"

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[70vh] grid place-items-center">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: "url('/industrial-warehouse-aerial.png')",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-foreground/60" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-16 text-primary-foreground">
          <div className="inline-flex items-center rounded-full border border-primary/40 bg-primary/20 px-3 py-1 text-sm mb-6">
            Trusted Global Sourcing Partner
          </div>
          <h1 className="text-balance text-4xl md:text-6xl font-bold leading-tight">
            Where You Find <span className="text-primary">Solutions</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/90">
            Connecting manufacturers and buyers with reliable, sustainable sourcing solutions worldwide.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="rounded-lg px-6 py-3 bg-primary text-primary-foreground font-medium text-center"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="rounded-lg px-6 py-3 border border-primary/40 text-primary-foreground/90 bg-background/10 text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Stat value="50+" label="Happy Clients" />
            <Stat value="25+" label="Years Experience" />
            <Stat value="5+" label="Cities Served" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">
              Our Product <span className="text-primary">Categories</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              A comprehensive range of high-quality products to meet diverse industrial needs.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CategoryCard
              href="/products#corrugated"
              title="Corrugated Packaging"
              icon="📦"
              img="/corrugated-boxes.jpg"
              badge="Popular"
              desc="High-quality corrugated packaging for secure shipping and storage."
            />
            <CategoryCard
              href="/products#flexible"
              title="Flexible Packaging"
              icon="🧱"
              img="/flexible-packaging-reels.jpg"
              desc="Versatile flexible materials for multiple applications."
            />
            <CategoryCard
              href="/products#paper-core"
              title="Paper Core"
              icon="🧵"
              img="/paper-core-tubes.jpg"
              desc="Durable paper core tubes and cylinders."
            />
            <CategoryCard
              href="/products#biomass"
              title="Biomass Solutions"
              icon="🍃"
              img="/biomass-energy.jpg"
              desc="Sustainable biomass solutions for eco-friendly energy."
            />
            <CategoryCard
              href="/products#plastics"
              title="Plastics"
              icon="🏭"
              img="/plastic-granules.jpg"
              desc="Plastic materials and manufactured components."
            />
            <CustomSolution />
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-background/80">
            Ready to discuss your requirements? Our team is here to help.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="rounded-lg px-6 py-3 bg-primary text-primary-foreground font-medium">
              Contact Us
            </Link>
            <Link href="/products" className="rounded-lg px-6 py-3 border border-background/30 text-background/90">
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-4xl md:text-5xl font-bold text-primary">{value}</div>
      <div className="text-foreground/80 font-medium">{label}</div>
    </div>
  )
}

function CategoryCard({
  href,
  title,
  icon,
  img,
  desc,
  badge,
}: {
  href: string
  title: string
  icon: string
  img: string
  desc: string
  badge?: string
}) {
  return (
    <a href={href} className="rounded-2xl border border-border overflow-hidden bg-card hover:shadow transition-shadow">
      <div
        className="aspect-video bg-center bg-cover"
        style={{ backgroundImage: `url("${img}")` }}
        aria-label={title}
        role="img"
      />
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full grid place-items-center bg-primary/20 text-primary">
            <span aria-hidden>{icon}</span>
            <span className="sr-only">{title} icon</span>
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
          {badge ? (
            <span className="ml-auto rounded-full text-xs px-2 py-1 bg-primary text-primary-foreground">{badge}</span>
          ) : null}
        </div>
        <p className="mt-3 text-muted-foreground">{desc}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-primary font-medium">Learn More</span>
          <span aria-hidden className="text-primary">
            →
          </span>
        </div>
      </div>
    </a>
  )
}

function CustomSolution() {
  return (
    <div className="rounded-2xl overflow-hidden bg-primary text-primary-foreground p-6 flex flex-col items-center justify-center text-center">
      <div className="w-16 h-16 rounded-full bg-primary-foreground/10 grid place-items-center text-2xl mb-4">💡</div>
      <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
      <p className="opacity-90 mb-4">Need something specific? We tailor solutions to your requirements.</p>
      <Link href="/contact#form" className="rounded-lg px-4 py-2 bg-background text-foreground font-medium">
        Request Custom Quote
      </Link>
    </div>
  )
}
