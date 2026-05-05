export default function TermsPage() {
  return (
    <div className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-24 bg-linear-to-r from-transparent to-purple-500/50" />
            <span className="text-sm font-mono text-purple-400 tracking-[0.3em]">LEGAL</span>
            <div className="h-px w-24 bg-linear-to-l from-transparent to-purple-500/50" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Terms of Service
            </span>
          </h1>
          <p className="text-gray-400">Last updated: January 29, 2026</p>
        </div>

        <div className="space-y-8 text-gray-300">
          <section className="border-l-2 border-blue-500/30 pl-6">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Agreement to Terms</h2>
            <p className="leading-relaxed">
              By accessing or using the Frame Cipher website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="border-l-2 border-blue-500/30 pl-6">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Services Description</h2>
            <p className="leading-relaxed mb-4">
              Frame Cipher provides professional media production services including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
              <li>Commercial video production</li>
              <li>Product campaign creation</li>
              <li>Professional photography</li>
              <li>Brand strategy and consulting</li>
              <li>Creative content development</li>
            </ul>
          </section>

          <section className="border-l-2 border-blue-500/30 pl-6">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Use of Website</h2>
            <h3 className="text-xl font-semibold text-purple-400 mb-3">Permitted Use</h3>
            <p className="leading-relaxed mb-4">
              You may use our website for lawful purposes only. You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit harmful code or malware</li>
              <li>Attempt unauthorized access to our systems</li>
              <li>Harass, abuse, or harm others</li>
              <li>Submit false or misleading information</li>
              <li>Use automated systems to scrape content</li>
            </ul>
          </section>

          <section className="border-l-2 border-blue-500/30 pl-6">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Contact Form Submissions</h2>
            <p className="leading-relaxed mb-4">
              When you submit our contact form:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
              <li>You confirm that all information provided is accurate and truthful</li>
              <li>You consent to us storing and processing your information as described in our Privacy Policy</li>
              <li>You agree to receive communications from us regarding your inquiry</li>
              <li>Submission does not constitute a binding agreement for services</li>
              <li>We reserve the right to decline any project inquiry</li>
            </ul>
          </section>

          <section className="border-l-2 border-blue-500/30 pl-6">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Intellectual Property</h2>
            <h3 className="text-xl font-semibold text-purple-400 mb-3">Our Content</h3>
            <p className="leading-relaxed mb-4">
              All content on this website, including but not limited to text, graphics, logos, images, videos, and software, is the property of Frame Cipher or its content suppliers and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            
            <h3 className="text-xl font-semibold text-purple-400 mb-3">Portfolio Work</h3>
            <p className="leading-relaxed">
              Portfolio pieces displayed on our website are owned by Frame Cipher or used with permission. Unauthorized use, reproduction, or distribution is prohibited.
            </p>
          </section>

          <section className="border-l-2 border-blue-500/30 pl-6">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Service Agreements</h2>
            <p className="leading-relaxed mb-4">
              For actual production services:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
              <li>A separate written agreement will be required</li>
              <li>Specific terms, deliverables, and pricing will be outlined in project contracts</li>
              <li>Payment terms and schedules will be defined per project</li>
              <li>Intellectual property rights will be specified in individual agreements</li>
              <li>Revisions and approval processes will be documented</li>
            </ul>
          </section>

          <section className="border-l-2 border-blue-500/30 pl-6">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Limitation of Liability</h2>
            <p className="leading-relaxed mb-4">
              To the fullest extent permitted by law:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
              <li>Frame Cipher shall not be liable for any indirect, incidental, special, or consequential damages</li>
              <li>We do not guarantee uninterrupted or error-free website operation</li>
              <li>We are not responsible for third-party content or links</li>
              <li>Our total liability shall not exceed the amount paid for services (if any)</li>
            </ul>
          </section>

          <section className="border-l-2 border-blue-500/30 pl-6">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Disclaimer of Warranties</h2>
            <p className="leading-relaxed">
              Our website and services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
          </section>

          <section className="border-l-2 border-blue-500/30 pl-6">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Third-Party Services</h2>
            <p className="leading-relaxed mb-4">
              Our website uses third-party services including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
              <li>Google Firebase for data storage</li>
              <li>Google Analytics for website analytics</li>
              <li>Vercel for hosting services</li>
            </ul>
            <p className="leading-relaxed mt-4">
              These services have their own terms and privacy policies. We are not responsible for their practices or content.
            </p>
          </section>

          <section className="border-l-2 border-blue-500/30 pl-6">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Indemnification</h2>
            <p className="leading-relaxed">
              You agree to indemnify and hold Frame Cipher harmless from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of our website or violation of these terms.
            </p>
          </section>

          <section className="border-l-2 border-blue-500/30 pl-6">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Governing Law</h2>
            <p className="leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of Bangladesh. Any disputes shall be subject to the exclusive jurisdiction of the courts in Dhaka, Bangladesh.
            </p>
          </section>

          <section className="border-l-2 border-blue-500/30 pl-6">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Modifications to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the website after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="border-l-2 border-blue-500/30 pl-6">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Termination</h2>
            <p className="leading-relaxed">
              We may terminate or suspend your access to our website immediately, without prior notice, for any reason, including breach of these Terms.
            </p>
          </section>

          <section className="border-l-2 border-blue-500/30 pl-6">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Severability</h2>
            <p className="leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section className="border-l-2 border-blue-500/30 pl-6">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Contact Information</h2>
            <p className="leading-relaxed mb-4">
              For questions about these Terms of Service, contact us:
            </p>
            <div className="space-y-2 text-gray-400">
              <p>Email: <a href="mailto:teamframecipher@gmail.com" className="text-purple-400 hover:underline">teamframecipher@gmail.com</a></p>
              <p>Phone: <a href="tel:+8801768146650" className="text-purple-400 hover:underline">+880 1768-146650</a></p>
              <p>Address: Mirpur 14, Dhaka, Bangladesh</p>
            </div>
          </section>

          <section className="border-l-2 border-blue-500/30 pl-6">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Entire Agreement</h2>
            <p className="leading-relaxed">
              These Terms of Service, together with our Privacy Policy, constitute the entire agreement between you and Frame Cipher regarding the use of our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
