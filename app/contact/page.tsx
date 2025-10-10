"use client"

import type React from "react"

export default function ContactPage() {
  return (
    <>
      <header className="relative grid place-items-center min-h-[40vh]">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: "url('/contact-support-background.jpg')",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-foreground/65" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
          <p className="mt-3 text-primary-foreground/90">
            We’re ready to help you find tailored solutions for your business needs.
          </p>
        </div>
      </header>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold">Get In Touch</h2>
            <div className="mt-6 flex flex-col gap-6">
              <InfoItem label="Phone" value="+92 300 8403618" />
              <InfoItem label="Email" value="Zcslhr@gmail.com" />
              <InfoItem
                label="Address"
                value={
                  <>
                    Overseas B Extension, Bahria Town
                    <br />
                    Lahore, 05499
                  </>
                }
              />
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
              <div className="flex items-center gap-4">
                <Social label="Facebook" />
                <Social label="Twitter" />
                <Social label="LinkedIn" />
                <Social label="Instagram" />
              </div>
            </div>
          </div>

          <div id="form" className="rounded-2xl border border-border p-6">
            <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()} aria-label="Contact form">
              <Field label="Your Name" id="name" type="text" placeholder="John Doe" required />
              <Field label="Email Address" id="email" type="email" placeholder="john@example.com" required />
              <Field label="Subject" id="subject" type="text" placeholder="Product Inquiry" />
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3"
                  placeholder="Tell us about your requirements..."
                  required
                />
              </div>
              <button type="submit" className="rounded-lg px-6 py-3 bg-primary text-primary-foreground font-medium">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

function InfoItem({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full grid place-items-center bg-primary/20 text-primary">
        <span aria-hidden>•</span>
      </div>
      <div>
        <p className="font-semibold">{label}</p>
        <p className="text-muted-foreground">{value}</p>
      </div>
    </div>
  )
}

function Social({ label }: { label: string }) {
  return (
    <a
      aria-label={label}
      href="#"
      className="w-10 h-10 rounded-full grid place-items-center bg-foreground/5 hover:bg-primary text-foreground hover:text-primary-foreground transition-colors"
    >
      <span className="text-sm">{label[0]}</span>
    </a>
  )
}

function Field({
  label,
  id,
  type,
  placeholder,
  required,
}: {
  label: string
  id: string
  type: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-input bg-background px-4 py-3"
      />
    </div>
  )
}
