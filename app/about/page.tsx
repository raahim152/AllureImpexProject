import Link from "next/link"

export default function AboutPage() {
  return (
    <>
      <header className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <nav className="text-sm mb-3">
            <Link href="/" className="underline-offset-4 hover:underline">
              Home
            </Link>{" "}
            / <span>About</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold">Our Story</h1>
          <p className="mt-2 max-w-2xl text-primary-foreground/90">
            Over 25 years connecting manufacturers and buyers with reliable, sustainable sourcing solutions.
          </p>
        </div>
      </header>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold">
              Our Mission & <span className="text-primary">Vision</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              We bridge trusted manufacturers and global buyers, delivering quality products and sustainable sourcing
              that drive growth and long-term partnerships.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full grid place-items-center bg-primary/20 text-primary text-2xl">
                🎯
              </div>
              <div>
                <h3 className="font-semibold text-xl">Our Purpose</h3>
                <p className="text-muted-foreground">Transform sourcing challenges into opportunities for growth.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border">
            <img alt="Team collaboration" src="/team-collaboration.png" className="w-full h-auto" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <p className="mt-3 text-muted-foreground">The principles that guide everything we do.</p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ValueCard emoji="🤝" title="Integrity" desc="Honesty, transparency, and ethical practices." />
            <ValueCard emoji="🏅" title="Quality" desc="High standards from selection to delivery." />
            <ValueCard emoji="💡" title="Innovation" desc="Solutions that anticipate market needs." />
            <ValueCard emoji="👥" title="Partnership" desc="Success through long-term collaboration." />
            <ValueCard emoji="🌱" title="Sustainability" desc="Committed to responsible practices." />
            <ValueCard emoji="🚀" title="Excellence" desc="Raising the bar in every operation." />
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold">
              Meet Our <span className="text-primary">Leadership</span>
            </h2>
            <p className="mt-3 text-muted-foreground">Experienced leaders with a shared commitment to excellence.</p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <LeaderCard name="Zain Chaudhry" role="Founder & CEO" emoji="👔" />
            <LeaderCard name="Sarah Ahmed" role="Operations Director" emoji="🛠️" />
            <LeaderCard name="Michael Roberts" role="Business Development" emoji="📈" />
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="rounded-lg px-6 py-3 bg-primary text-primary-foreground font-medium">
              Connect With Our Team
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Ready to Partner With Us?</h2>
          <p className="mt-3 max-w-2xl mx-auto opacity-90">
            Let&apos;s discuss how we can deliver the perfect sourcing solutions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact#form" className="rounded-lg px-6 py-3 bg-background text-foreground font-medium">
              Contact Us Today
            </Link>
            <Link href="/products" className="rounded-lg px-6 py-3 border border-primary-foreground/30">
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function ValueCard({ emoji, title, desc }: { emoji: string; title: string; desc: string }) {
  return (
    <div className="bg-card rounded-2xl p-6 border border-border">
      <div className="w-16 h-16 rounded-full bg-primary/20 text-primary grid place-items-center text-2xl mb-4">
        <span aria-hidden>{emoji}</span>
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-muted-foreground">{desc}</p>
    </div>
  )
}

function LeaderCard({ name, role, emoji }: { name: string; role: string; emoji: string }) {
  return (
    <div className="rounded-2xl border border-border p-6">
      <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 grid place-items-center text-3xl text-primary">
        <span aria-hidden>{emoji}</span>
      </div>
      <h3 className="mt-4 text-center font-semibold text-xl">{name}</h3>
      <p className="text-center text-primary mt-1">{role}</p>
      <p className="text-center text-muted-foreground mt-3">Decades of experience turning sourcing into growth.</p>
    </div>
  )
}
