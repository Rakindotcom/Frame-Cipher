import React from 'react'
import Link from 'next/link'
import { FileText, ArrowRight, CheckCircle2 } from 'lucide-react'

function LegalSection({ id, number, title, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-32 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10 transition-colors duration-200 hover:border-white/[0.14] [&_a]:border-b [&_a]:border-frame-accent [&_a]:text-white hover:[&_a]:text-frame-accent [&_h3]:mt-6 [&_h3]:font-heading [&_h3]:text-lg [&_h3]:sm:text-xl [&_h3]:font-medium [&_h3]:uppercase [&_h3]:leading-tight [&_h3]:tracking-tight [&_h3]:text-frame-accent [&_p]:mt-4 [&_p]:text-sm [&_p]:sm:text-base [&_p]:font-normal [&_p]:leading-relaxed [&_p]:text-zinc-300 [&_ul]:mt-4"
    >
      <div className="flex items-center gap-3 border-b border-white/[0.08] pb-4 mb-4">
        <span className="font-mono text-xs uppercase tracking-wider text-frame-accent bg-[#18181B] border border-white/[0.08] px-2.5 py-0.5 rounded-full">
          Section {number}
        </span>
        <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-medium leading-[0.96] tracking-[-0.02em] text-white">
          {title}
        </h2>
      </div>
      {children}
    </section>
  )
}

function List({ items }) {
  return (
    <ul className="grid gap-2.5">
      {items.map((item, index) => (
        <li
          key={`${item.slice(0, 20)}-${index}`}
          className="flex items-start gap-3 rounded-lg border border-white/[0.04] bg-[#18181B] p-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300"
        >
          <CheckCircle2 className="h-4 w-4 shrink-0 text-frame-accent mt-1" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

const tableOfContents = [
  { id: 'agreement', title: '1. Agreement to Terms' },
  { id: 'services', title: '2. Services Description' },
  { id: 'use', title: '3. Use of Website' },
  { id: 'submissions', title: '4. Contact Submissions' },
  { id: 'ip', title: '5. Intellectual Property' },
  { id: 'warranties', title: '6. Warranties & Disclaimers' },
  { id: 'liability', title: '7. Limitation of Liability' },
  { id: 'agreements', title: '8. Service Agreements' },
  { id: 'law', title: '9. Governing Law' },
  { id: 'changes', title: '10. Changes to Terms' },
  { id: 'contact', title: '11. Contact Information' },
]

export default function TermsContent() {
  return (
    <section className="px-4 py-16 sm:px-6 md:px-8 md:py-24 text-white">
      <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[280px_1fr] items-start">
        {/* Sticky Document Index Sidebar */}
        <aside className="sticky top-28 hidden lg:block rounded-xl border border-white/[0.08] bg-[#121214] p-6">
          <div className="flex items-center gap-2 border-b border-white/[0.08] pb-3 mb-4">
            <FileText className="h-4 w-4 text-frame-accent" />
            <p className="font-mono text-xs uppercase tracking-[1.1px] text-frame-accent">
              Document Index
            </p>
          </div>
          <nav aria-label="Table of contents">
            <ol className="grid gap-2 text-xs font-mono text-zinc-400">
              {tableOfContents.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block py-1 px-2 rounded hover:bg-white/[0.04] hover:text-white transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-6 pt-5 border-t border-white/[0.08] space-y-3">
            <p className="font-mono text-[11px] text-zinc-500 uppercase">
              Need custom terms for your enterprise?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-frame-accent hover:text-white transition-colors"
            >
              <span>Contact legal team</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </aside>

        {/* Legal Sections Column */}
        <div className="grid gap-6">
          <LegalSection id="agreement" number="01" title="Agreement to Terms">
            <p>
              By accessing or using the Frame Cipher website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
            </p>
          </LegalSection>

          <LegalSection id="services" number="02" title="Services Description">
            <p>Frame Cipher provides professional media production services including:</p>
            <List
              items={[
                'Commercial video production',
                'Product campaign creation',
                'Professional photography',
                'Brand strategy and consulting',
                'Creative content development',
              ]}
            />
          </LegalSection>

          <LegalSection id="use" number="03" title="Use of Website">
            <h3>Permitted Use</h3>
            <p>You may use our website for lawful purposes only. You agree not to:</p>
            <List
              items={[
                'Violate any applicable laws or regulations',
                'Infringe on intellectual property rights',
                'Transmit harmful code or malware',
                'Attempt unauthorized access to our systems',
                'Harass, abuse, or harm others',
                'Submit false or misleading information',
                'Use automated systems to scrape content',
              ]}
            />
          </LegalSection>

          <LegalSection id="submissions" number="04" title="Contact Form Submissions">
            <p>When you submit our contact form:</p>
            <List
              items={[
                'You confirm that all information provided is accurate and truthful',
                'You consent to us storing and processing your information as described in our Privacy Policy',
                'You agree to receive communications from us regarding your inquiry',
                'Submission does not constitute a binding agreement for services',
                'We reserve the right to decline any project inquiry',
              ]}
            />
          </LegalSection>

          <LegalSection id="ip" number="05" title="Intellectual Property">
            <h3>Our Content</h3>
            <p>
              All content on this website, including text, graphics, logos, images, videos, audio clips, and software, is the property of Frame Cipher and is protected by copyright and intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
            </p>

            <h3>Client Work</h3>
            <p>
              Portfolio items and case studies displayed on our website represent work completed for clients. Ownership of final deliverables is governed by individual client contracts.
            </p>
          </LegalSection>

          <LegalSection id="warranties" number="06" title="Disclaimers and Warranties">
            <p>
              Our website is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. We make no warranties, express or implied, regarding:
            </p>
            <List
              items={[
                'Uninterrupted or error-free website operation',
                'Accuracy, completeness, or reliability of content',
                'Fitness for a particular purpose',
                'Non-infringement of third-party rights',
              ]}
            />
          </LegalSection>

          <LegalSection id="liability" number="07" title="Limitation of Liability">
            <p>
              To the fullest extent permitted by law, Frame Cipher shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:
            </p>
            <List
              items={[
                'Your use of or inability to use our website',
                'Any unauthorized access to or use of our servers',
                'Any interruption or cessation of transmission',
                'Any bugs, viruses, or harmful code transmitted through our website',
              ]}
            />
          </LegalSection>

          <LegalSection id="agreements" number="08" title="Service Agreements">
            <p>
              Specific production projects, deliverables, timelines, pricing, and client obligations are governed by separate, legally binding Service Agreements executed between Frame Cipher and the client. In the event of a conflict between these website terms and a signed client agreement, the signed agreement shall prevail.
            </p>
          </LegalSection>

          <LegalSection id="law" number="09" title="Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Bangladesh, without regard to its conflict of law provisions. Any legal action arising from these terms shall be subject to the exclusive jurisdiction of the courts of Bangladesh.
            </p>
          </LegalSection>

          <LegalSection id="changes" number="10" title="Changes to Terms">
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated &quot;Last updated&quot; date. Continued use of our website following any changes constitutes your acceptance of the new terms.
            </p>
          </LegalSection>

          <LegalSection id="contact" number="11" title="Contact Information">
            <p>If you have questions about these Terms of Service, please contact us at:</p>
            <div className="mt-4 rounded-lg border border-white/[0.08] bg-[#18181B] p-5 font-mono text-xs sm:text-sm text-zinc-300 space-y-2">
              <p className="font-heading text-base font-medium text-white uppercase">Frame Cipher</p>
              <p>
                Email:{' '}
                <a href="mailto:teamframecipher@gmail.com" className="text-frame-accent hover:underline">
                  teamframecipher@gmail.com
                </a>
              </p>
              <p>
                Website:{' '}
                <a href="https://framecipher.com" target="_blank" rel="noopener noreferrer" className="text-frame-accent hover:underline">
                  framecipher.com
                </a>
              </p>
            </div>
          </LegalSection>
        </div>
      </div>
    </section>
  )
}
