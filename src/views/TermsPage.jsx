import React from 'react'
import { TermsHero, TermsContent } from '../components/terms'

export default function TermsPage() {
  return (
    <main className="legal-page min-h-screen bg-[#09090B] text-[#FAFAFA] overflow-x-hidden [overflow-anchor:none]">
      <TermsHero />
      <TermsContent />
    </main>
  )
}
