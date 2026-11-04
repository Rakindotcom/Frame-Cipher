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
  { id: 'intro', title: '1. Introduction' },
  { id: 'collect', title: '2. Information We Collect' },
  { id: 'usage', title: '3. How We Use Information' },
  { id: 'sharing', title: '4. Sharing & Disclosure' },
  { id: 'security', title: '5. Data Security' },
  { id: 'rights', title: '6. Your Rights' },
  { id: 'links', title: '7. Third-Party Links' },
  { id: 'changes', title: '8. Changes to This Policy' },
  { id: 'contact', title: '9. Contact Us' },
]

export default function PrivacyContent() {
  return (
    <section className="px-4 py-16 sm:px-6 md:px-8 md:py-24 text-white">
      <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[280px_1fr] items-start">
        {/* Sticky Document Index Sidebar */}
        <aside className="sticky top-28 hidden lg:block rounded-xl border border-white/[0.08] bg-[#121214] p-6">
          <div className="flex items-center gap-2 border-b border-white/[0.08] pb-3 mb-4">
            <FileText className="h-4 w-4 text-frame-accent" />
            <p className="font-mono text-xs uppercase tracking-[1.1px] text-frame-accent">
              Policy Index
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
              Have privacy or data questions?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-frame-accent hover:text-white transition-colors"
            >
              <span>Contact privacy officer</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </aside>

        {/* Legal Sections Column */}
        <div className="grid gap-6">
          <LegalSection id="intro" number="01" title="Introduction">
            <p>
              Frame Cipher (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our contact form.
            </p>
          </LegalSection>

          <LegalSection id="collect" number="02" title="Information We Collect">
            <h3>Contact Form Information</h3>
            <p>When you submit our contact form, we collect:</p>
            <List
              items={[
                'Your name',
                'Email address',
                'Project type selection',
                'Message content',
                'Timestamp of submission',
              ]}
            />

            <h3>Analytics Information</h3>
            <p>
              We use Google Analytics and Firebase Analytics to understand how visitors interact with our website. This may include:
            </p>
            <List
              items={[
                'Device and browser information',
                'IP address (anonymized)',
                'Pages visited and time spent',
                'Referring websites',
                'Geographic location (country/city level)',
              ]}
            />
          </LegalSection>

          <LegalSection id="usage" number="03" title="How We Use Your Information">
            <p>We use the information we collect to:</p>
            <List
              items={[
                'Respond to your inquiries and project requests',
                'Communicate with you about our services',
                'Improve our website and user experience',
                'Analyze website traffic and usage patterns',
                'Prevent fraud and enhance security',
              ]}
            />
          </LegalSection>

          <LegalSection id="sharing" number="04" title="Information Sharing and Disclosure">
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information with:
            </p>
            <List
              items={[
                'Service providers who assist in website operation (e.g., Firebase, Google Analytics)',
                'Legal authorities when required by law or to protect our rights',
                'Professional advisors (lawyers, accountants) under confidentiality agreements',
              ]}
            />
          </LegalSection>

          <LegalSection id="security" number="05" title="Data Security">
            <p>
              We implement reasonable administrative, technical, and physical security measures to protect your personal information. Contact form submissions are transmitted securely and stored in an encrypted database. However, no electronic transmission over the internet can be guaranteed 100% secure.
            </p>
          </LegalSection>

          <LegalSection id="rights" number="06" title="Your Rights">
            <p>You have the right to:</p>
            <List
              items={[
                'Request access to the personal information we hold about you',
                'Request correction of inaccurate information',
                'Request deletion of your information',
                'Opt-out of marketing communications',
                'Withdraw consent at any time',
              ]}
            />
            <p>
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:teamframecipher@gmail.com" className="text-frame-accent hover:underline">
                teamframecipher@gmail.com
              </a>.
            </p>
          </LegalSection>

          <LegalSection id="links" number="07" title="Third-Party Links">
            <p>
              Our website may contain links to external sites (e.g., social media platforms, client websites). We are not responsible for the privacy practices or content of these third-party websites. We encourage you to review their privacy policies.
            </p>
          </LegalSection>

          <LegalSection id="changes" number="08" title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &quot;Last updated&quot; date. Continued use of our website after changes constitutes acceptance of the updated policy.
            </p>
          </LegalSection>

          <LegalSection id="contact" number="09" title="Contact Us">
            <p>If you have questions about this Privacy Policy, please contact us at:</p>
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
