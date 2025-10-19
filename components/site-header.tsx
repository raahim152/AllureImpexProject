"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-4 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg md:text-xl text-foreground">
            <span aria-hidden className="inline-block rounded-md bg-primary px-2 py-1 text-sm">
              AI
            </span>
            <span className="sr-only">Allure Impex Home</span>
            <span aria-hidden>Allure Impex</span>
          </Link>
          <div className="hidden sm:block text-sm text-muted-foreground md:pl-3 md:border-l md:border-border">
            Where You Find Solutions
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <HeaderLink href="/">Home</HeaderLink>
          <HeaderLink href="/about">About</HeaderLink>
          <HeaderLink href="/products">Products</HeaderLink>
          <HeaderLink href="/contact">Contact</HeaderLink>
          <Link href="/contact#form" className="rounded-lg px-4 py-2 bg-primary text-primary-foreground font-medium">
            Get Quote
          </Link>
        </nav>

        <button aria-label="Toggle menu" className="md:hidden text-foreground" onClick={() => setOpen((v) => !v)}>
          <svg width="24" height="24" viewBox="0 0 24 24" role="img" aria-hidden="true">
            <path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
          </svg>
        </button>
      </div>

      <div className={cn("md:hidden border-t border-border", open ? "block" : "hidden")}>
        <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-4">
          <HeaderLink href="/" onClick={() => setOpen(false)}>
            Home
          </HeaderLink>
          <HeaderLink href="/about" onClick={() => setOpen(false)}>
            About
          </HeaderLink>
          <HeaderLink href="/products" onClick={() => setOpen(false)}>
            Products
          </HeaderLink>
          <HeaderLink href="/contact" onClick={() => setOpen(false)}>
            Contact
          </HeaderLink>
          <Link
            href="/contact#form"
            onClick={() => setOpen(false)}
            className="rounded-lg px-4 py-2 bg-primary text-primary-foreground font-medium text-center"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  )
}

function HeaderLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <Link href={href} onClick={onClick} className="relative font-medium text-foreground/80 hover:text-foreground">
      <span>{children}</span>
      <span aria-hidden className="absolute left-0 -bottom-1 h-0.5 w-0 bg-primary transition-all" />
    </Link>
  )
}
