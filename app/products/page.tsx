export default function ProductsPage() {
  return (
    <>
      <header className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h1 className="text-4xl md:text-6xl font-bold">Our Products</h1>
          <p className="mt-2 max-w-2xl text-primary-foreground/90">
            A comprehensive range of high-quality industrial solutions.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a className="rounded-lg px-3 py-1 bg-background/10" href="#corrugated">
              Corrugated
            </a>
            <a className="rounded-lg px-3 py-1 bg-background/10" href="#flexible">
              Flexible
            </a>
            <a className="rounded-lg px-3 py-1 bg-background/10" href="#paper-core">
              Paper Core
            </a>
            <a className="rounded-lg px-3 py-1 bg-background/10" href="#biomass">
              Biomass
            </a>
            <a className="rounded-lg px-3 py-1 bg-background/10" href="#plastics">
              Plastics
            </a>
          </div>
        </div>
      </header>

      <Section
        id="corrugated"
        chip="Packaging Solutions"
        title="Corrugated Packaging"
        img="/corrugated-packaging.jpg"
        bullets={[
          ["Custom Sizes & Designs", "Tailored to your exact specifications"],
          ["Eco-Friendly Materials", "Sustainable and recyclable options"],
          ["Durability & Strength", "Protection for fragile and heavy items"],
        ]}
      />

      <Section
        id="flexible"
        reversed
        chip="Versatile Solutions"
        title="Flexible Packaging"
        img="/flexible-films-for-food-packaging.jpg"
        bullets={[
          ["Barrier Protection", "Extended shelf life for perishable goods"],
          ["Print Quality", "High-definition printing for brand visibility"],
          ["Material Variety", "Options for different applications"],
        ]}
      />

      <Section
        id="paper-core"
        chip="Industrial Solutions"
        title="Paper Core"
        img="/paper-core-tubes-industrial.jpg"
        bullets={[
          ["Multiple Sizes", "Wide range of diameters and lengths"],
          ["Custom Wall Thickness", "Strength tailored to needs"],
          ["Surface Finishes", "Finishes for different applications"],
        ]}
      />

      <Section
        id="biomass"
        reversed
        chip="Sustainable Energy"
        title="Biomass Solutions"
        img="/biomass-pellets-energy.jpg"
        bullets={[
          ["Renewable Energy", "A sustainable alternative to fossil fuels"],
          ["Carbon Neutral", "Reduced environmental impact"],
          ["Cost Effective", "Economical for industries"],
        ]}
      />

      <Section
        id="plastics"
        chip="Material Solutions"
        title="Plastics"
        img="/plastic-materials-granules.jpg"
        bullets={[
          ["Material Variety", "Wide selection of types and grades"],
          ["Custom Manufacturing", "Components to your specs"],
          ["Quality Assurance", "Rigorous testing and QC"],
        ]}
      />

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Find Your <span className="">Solution?</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto opacity-90">Contact us today to discuss your requirements.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact#form" className="rounded-lg px-6 py-3 bg-background text-foreground font-medium">
              Contact Us
            </a>
            <a href="/" className="rounded-lg px-6 py-3 border border-primary-foreground/30">
              Back to Home
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

function Section({
  id,
  title,
  chip,
  img,
  bullets,
  reversed,
}: {
  id: string
  title: string
  chip: string
  img: string
  bullets: [string, string][]
  reversed?: boolean
}) {
  return (
    <section id={id} className="py-16 bg-background scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reversed ? "lg:[&>div:first-child]:order-2" : ""}`}
        >
          <div>
            <span className="inline-flex items-center rounded-full bg-primary/15 text-primary px-3 py-1 text-sm">
              {chip}
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">
              {title.split(" ")[0]} <span className="text-primary">{title.split(" ").slice(1).join(" ")}</span>
            </h2>
            <ul className="mt-6 flex flex-col gap-4">
              {bullets.map(([h, p]) => (
                <li key={h} className="flex items-start gap-3">
                  <span aria-hidden className="mt-1 text-primary">
                    ✔
                  </span>
                  <div>
                    <h4 className="font-semibold">{h}</h4>
                    <p className="text-muted-foreground">{p}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a href="/contact#form" className="rounded-lg px-5 py-3 bg-primary text-primary-foreground font-medium">
                Request Quote
              </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border">
            <img src={img || "/placeholder.svg"} alt={title} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
