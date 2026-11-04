import React from 'react'
import { PrivacyHero, PrivacyContent } from '../components/privacy'

export default function PrivacyPage() {
  return (
    <main className="legal-page min-h-screen bg-[#09090B] text-[#FAFAFA] overflow-x-hidden [overflow-anchor:none]">
      <PrivacyHero />
      <PrivacyContent />
    </main>
  )
}
