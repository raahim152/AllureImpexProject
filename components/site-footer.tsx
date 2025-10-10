import type React from "react"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background mt-16">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <Link href="/" className="font-bold text-xl">
                Allure Impex
              </Link>
            </div>
            <p className="text-background/80 max-w-md">
              Connecting manufacturers and buyers with reliable, sustainable sourcing solutions worldwide.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <Social href="#" label="Facebook" />
              <Social href="#" label="Twitter" />
              <Social href="#" label="LinkedIn" />
              <Social href="#" label="Instagram" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/products">Products</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Products</h3>
            <ul className="flex flex-col gap-2">
              <FooterLink href="/products#corrugated">Corrugated Packaging</FooterLink>
              <FooterLink href="/products#flexible">Flexible Packaging</FooterLink>
              <FooterLink href="/products#paper-core">Paper Core</FooterLink>
              <FooterLink href="/products#biomass">Biomass Solutions</FooterLink>
              <FooterLink href="/products#plastics">Plastics</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70 text-sm">
          © 2025 Allure Impex. All rights reserved. | Where You Find Solutions
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-background/80 hover:text-background">
        {children}
      </Link>
    </li>
  )
}

function Social({ href, label }: { href: string; label: string }) {
  return (
    <a
      aria-label={label}
      href={href}
      className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary text-background hover:text-primary-foreground grid place-items-center transition-colors"
    >
      <span className="text-sm">{label[0]}</span>
    </a>
  )
}
