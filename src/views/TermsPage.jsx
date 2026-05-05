import { PageHero, TypeMarquee } from '../components/Kinetic'

export default function TermsPage() {
  return (
    <main className="bg-frame-bg text-frame-fg">
      <PageHero eyebrow="Legal" meta="Last updated: January 29, 2026" number="TS" title="Terms of service">
        The rules for using the Frame Cipher website, submitting project inquiries, and engaging with our services.
      </PageHero>

      <TypeMarquee items={['Agreement', 'Services', 'Use', 'Rights', 'Liability', 'Contact']} accent slow />

      <section className="px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-[95vw] gap-8 lg:grid-cols-[0.42fr_1fr]">
          <aside className="sticky top-28 hidden self-start border-2 border-frame-border p-6 lg:block">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-frame-accent">Document index</p>
            <ol className="mt-6 grid gap-3 text-sm font-black uppercase tracking-tighter text-frame-muted-fg">
              <li>Agreement and services</li>
              <li>Permitted use</li>
              <li>Submissions and IP</li>
              <li>Liability and warranties</li>
              <li>Contact</li>
            </ol>
          </aside>

          <div className="grid gap-px bg-frame-border">
            <LegalSection title="Agreement to Terms">
              <p>
                By accessing or using the Frame Cipher website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
              </p>
            </LegalSection>

            <LegalSection title="Services Description">
              <p>Frame Cipher provides professional media production services including:</p>
              <List items={['Commercial video production', 'Product campaign creation', 'Professional photography', 'Brand strategy and consulting', 'Creative content development']} />
            </LegalSection>

            <LegalSection title="Use of Website">
              <h3>Permitted Use</h3>
              <p>You may use our website for lawful purposes only. You agree not to:</p>
              <List items={['Violate any applicable laws or regulations', 'Infringe on intellectual property rights', 'Transmit harmful code or malware', 'Attempt unauthorized access to our systems', 'Harass, abuse, or harm others', 'Submit false or misleading information', 'Use automated systems to scrape content']} />
            </LegalSection>

            <LegalSection title="Contact Form Submissions">
              <p>When you submit our contact form:</p>
              <List items={['You confirm that all information provided is accurate and truthful', 'You consent to us storing and processing your information as described in our Privacy Policy', 'You agree to receive communications from us regarding your inquiry', 'Submission does not constitute a binding agreement for services', 'We reserve the right to decline any project inquiry']} />
            </LegalSection>

            <LegalSection title="Intellectual Property">
              <h3>Our Content</h3>
              <p>
                All content on this website, including but not limited to text, graphics, logos, images, videos, and software, is the property of Frame Cipher or its content suppliers and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <h3>Portfolio Work</h3>
              <p>
                Portfolio pieces displayed on our website are owned by Frame Cipher or used with permission. Unauthorized use, reproduction, or distribution is prohibited.
              </p>
            </LegalSection>

            <LegalSection title="Service Agreements">
              <p>For actual production services:</p>
              <List items={['A separate written agreement will be required', 'Specific terms, deliverables, and pricing will be outlined in project contracts', 'Payment terms and schedules will be defined per project', 'Intellectual property rights will be specified in individual agreements', 'Revisions and approval processes will be documented']} />
            </LegalSection>

            <LegalSection title="Limitation of Liability">
              <p>To the fullest extent permitted by law:</p>
              <List items={['Frame Cipher shall not be liable for any indirect, incidental, special, or consequential damages', 'We do not guarantee uninterrupted or error-free website operation', 'We are not responsible for third-party content or links', 'Our total liability shall not exceed the amount paid for services (if any)']} />
            </LegalSection>

            <LegalSection title="Disclaimer of Warranties">
              <p>
                Our website and services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
            </LegalSection>

            <LegalSection title="Third-Party Services">
              <p>Our website uses third-party services including:</p>
              <List items={['Google Firebase for data storage', 'Google Analytics for website analytics', 'Vercel for hosting services']} />
              <p>
                These services have their own terms and privacy policies. We are not responsible for their practices or content.
              </p>
            </LegalSection>

            <LegalSection title="Indemnification">
              <p>
                You agree to indemnify and hold Frame Cipher harmless from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of our website or violation of these terms.
              </p>
            </LegalSection>

            <LegalSection title="Governing Law">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Bangladesh. Any disputes shall be subject to the exclusive jurisdiction of the courts in Dhaka, Bangladesh.
              </p>
            </LegalSection>

            <LegalSection title="Modifications to Terms">
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the website after changes constitutes acceptance of the modified terms.
              </p>
            </LegalSection>

            <LegalSection title="Termination">
              <p>
                We may terminate or suspend your access to our website immediately, without prior notice, for any reason, including breach of these Terms.
              </p>
            </LegalSection>

            <LegalSection title="Severability">
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>
            </LegalSection>

            <LegalSection title="Contact Information">
              <p>For questions about these Terms of Service, contact us:</p>
              <p>Email: <a href="mailto:teamframecipher@gmail.com">teamframecipher@gmail.com</a></p>
              <p>Phone: <a href="tel:+8801768146650">+880 1768-146650</a></p>
              <p>Address: Mirpur 14, Dhaka, Bangladesh</p>
            </LegalSection>

            <LegalSection title="Entire Agreement">
              <p>
                These Terms of Service, together with our Privacy Policy, constitute the entire agreement between you and Frame Cipher regarding the use of our website.
              </p>
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
