'use client'

import { ContactHero, ContactDirectLines, ContactBriefForm } from '../components/contact'

export default function ContactPage() {
  return (
    <main className="bg-frame-bg text-frame-fg">
      <ContactHero />

      <section className="px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-[95vw] gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <ContactDirectLines />
          <ContactBriefForm />
        </div>
      </section>
    </main>
  )
}
