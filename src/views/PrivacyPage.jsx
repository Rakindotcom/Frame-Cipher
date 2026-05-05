import { PageHero, TypeMarquee } from '../components/Kinetic'

export default function PrivacyPage() {
  return (
    <main className="bg-frame-bg text-frame-fg">
      <PageHero eyebrow="Legal" meta="Last updated: January 29, 2026" number="PP" title="Privacy policy">
        Frame Cipher explains what we collect, why we collect it, and how contact and analytics data are handled.
      </PageHero>

      <TypeMarquee items={['Privacy', 'Consent', 'Security', 'Retention', 'Contact']} slow />

      <section className="px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-[95vw] gap-8 lg:grid-cols-[0.42fr_1fr]">
          <aside className="sticky top-28 hidden self-start border-2 border-frame-border p-6 lg:block">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-frame-accent">Document index</p>
            <ol className="mt-6 grid gap-3 text-sm font-black uppercase tracking-tighter text-frame-muted-fg">
              <li>Information we collect</li>
              <li>How information is used</li>
              <li>Security and third parties</li>
              <li>Your rights</li>
              <li>Contact</li>
            </ol>
          </aside>

          <div className="grid gap-px bg-frame-border">
            <LegalSection title="Introduction">
              <p>
                Frame Cipher ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our contact form.
              </p>
            </LegalSection>

            <LegalSection title="Information We Collect">
              <h3>Contact Form Information</h3>
              <p>When you submit our contact form, we collect:</p>
              <List items={['Your name', 'Email address', 'Project type selection', 'Message content', 'Timestamp of submission']} />

              <h3>Analytics Information</h3>
              <p>
                We use Google Analytics and Firebase Analytics to understand how visitors interact with our website. This may include:
              </p>
              <List items={['Device and browser information', 'IP address (anonymized)', 'Pages visited and time spent', 'Referring websites', 'Geographic location (country/city level)']} />
            </LegalSection>

            <LegalSection title="How We Use Your Information">
              <p>We use the information we collect to:</p>
              <List items={['Respond to your inquiries and project requests', 'Communicate with you about our services', 'Improve our website and user experience', 'Analyze website traffic and usage patterns', 'Prevent fraud and enhance security']} />
            </LegalSection>

            <LegalSection title="Data Storage and Security">
              <p>
                Your contact form submissions are securely stored using Google Firebase Firestore, a cloud-hosted NoSQL database. We implement appropriate security measures including:
              </p>
              <List items={['Encrypted data transmission (HTTPS/SSL)', 'Secure database access controls', 'Regular security audits', 'Limited access to authorized personnel only']} />
              <p>
                While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
              </p>
            </LegalSection>

            <LegalSection title="Third-Party Services">
              <p>We use the following third-party services that may collect information:</p>
              <h3>Google Firebase</h3>
              <p>
                Stores contact form submissions. View Firebase's privacy policy at{' '}
                <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">
                  firebase.google.com/support/privacy
                </a>
              </p>
              <h3>Google Analytics</h3>
              <p>
                Tracks website usage and analytics. View Google's privacy policy at{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  policies.google.com/privacy
                </a>
              </p>
            </LegalSection>

            <LegalSection title="Your Rights">
              <p>You have the right to:</p>
              <List items={['Access the personal information we hold about you', 'Request correction of inaccurate information', 'Request deletion of your information', 'Opt-out of marketing communications', 'Object to processing of your information']} />
              <p>
                To exercise these rights, contact us at{' '}
                <a href="mailto:teamframecipher@gmail.com">teamframecipher@gmail.com</a>
              </p>
            </LegalSection>

            <LegalSection title="Data Retention">
              <p>
                We retain your contact form submissions for as long as necessary to respond to your inquiry and maintain business records. You may request deletion of your information at any time by contacting us.
              </p>
            </LegalSection>

            <LegalSection title="Cookies">
              <p>
                Our website uses cookies and similar tracking technologies for analytics purposes. You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.
              </p>
            </LegalSection>

            <LegalSection title="Children's Privacy">
              <p>
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
              </p>
            </LegalSection>

            <LegalSection title="Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </LegalSection>

            <LegalSection title="Contact Us">
              <p>If you have questions about this Privacy Policy, please contact us:</p>
              <p>Email: <a href="mailto:teamframecipher@gmail.com">teamframecipher@gmail.com</a></p>
              <p>Phone: <a href="tel:+8801768146650">+880 1768-146650</a></p>
              <p>Address: Mirpur 14, Dhaka, Bangladesh</p>
            </LegalSection>
          </div>
        </div>
      </section>
    </main>
  )
}

function LegalSection({ title, children }) {
  return (
    <section className="bg-frame-bg p-7 md:p-10 [&_a]:border-b-2 [&_a]:border-frame-accent [&_a]:font-bold [&_a]:text-frame-fg [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:uppercase [&_h3]:leading-none [&_h3]:tracking-tighter [&_h3]:text-frame-accent [&_p]:mt-4 [&_p]:text-base [&_p]:font-medium [&_p]:leading-tight [&_p]:text-frame-muted-fg [&_ul]:mt-5">
      <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
        {title}
      </h2>
      {children}
    </section>
  )
}

function List({ items }) {
  return (
    <ul className="grid gap-2">
      {items.map((item) => (
        <li key={item} className="border-l-4 border-frame-accent pl-4 text-base font-medium leading-tight text-frame-muted-fg">
          {item}
        </li>
      ))}
    </ul>
  )
}
