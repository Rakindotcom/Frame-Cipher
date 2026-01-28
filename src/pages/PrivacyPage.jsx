export default function PrivacyPage() {
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
              Privacy Policy
            </span>
          </h1>
          <p className="text-gray-400">Last updated: January 29, 2026</p>
        </div>

        <div className="space-y-8 text-gray-300">
          <section className="border-l-2 border-purple-500/30 pl-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Introduction</h2>
            <p className="leading-relaxed">
              Frame Cipher ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our contact form.
            </p>
          </section>

          <section className="border-l-2 border-purple-500/30 pl-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold text-blue-400 mb-3">Contact Form Information</h3>
            <p className="leading-relaxed mb-4">
              When you submit our contact form, we collect:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
              <li>Your name</li>
              <li>Email address</li>
              <li>Project type selection</li>
              <li>Message content</li>
              <li>Timestamp of submission</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-blue-400 mb-3 mt-6">Analytics Information</h3>
            <p className="leading-relaxed">
              We use Google Analytics and Firebase Analytics to understand how visitors interact with our website. This may include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400 mt-2">
              <li>Device and browser information</li>
              <li>IP address (anonymized)</li>
              <li>Pages visited and time spent</li>
              <li>Referring websites</li>
              <li>Geographic location (country/city level)</li>
            </ul>
          </section>

          <section className="border-l-2 border-purple-500/30 pl-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">How We Use Your Information</h2>
            <p className="leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
              <li>Respond to your inquiries and project requests</li>
              <li>Communicate with you about our services</li>
              <li>Improve our website and user experience</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Prevent fraud and enhance security</li>
            </ul>
          </section>

          <section className="border-l-2 border-purple-500/30 pl-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Data Storage and Security</h2>
            <p className="leading-relaxed mb-4">
              Your contact form submissions are securely stored using Google Firebase Firestore, a cloud-hosted NoSQL database. We implement appropriate security measures including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
              <li>Encrypted data transmission (HTTPS/SSL)</li>
              <li>Secure database access controls</li>
              <li>Regular security audits</li>
              <li>Limited access to authorized personnel only</li>
            </ul>
            <p className="leading-relaxed mt-4">
              While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section className="border-l-2 border-purple-500/30 pl-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Third-Party Services</h2>
            <p className="leading-relaxed mb-4">
              We use the following third-party services that may collect information:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Google Firebase</h3>
                <p className="text-gray-400">
                  Stores contact form submissions. View Firebase's privacy policy at{' '}
                  <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">
                    firebase.google.com/support/privacy
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Google Analytics</h3>
                <p className="text-gray-400">
                  Tracks website usage and analytics. View Google's privacy policy at{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">
                    policies.google.com/privacy
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section className="border-l-2 border-purple-500/30 pl-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Your Rights</h2>
            <p className="leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to processing of your information</li>
            </ul>
            <p className="leading-relaxed mt-4">
              To exercise these rights, contact us at{' '}
              <a href="mailto:teamframecipher@gmail.com" className="text-purple-400 hover:underline">
                teamframecipher@gmail.com
              </a>
            </p>
          </section>

          <section className="border-l-2 border-purple-500/30 pl-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Data Retention</h2>
            <p className="leading-relaxed">
              We retain your contact form submissions for as long as necessary to respond to your inquiry and maintain business records. You may request deletion of your information at any time by contacting us.
            </p>
          </section>

          <section className="border-l-2 border-purple-500/30 pl-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Cookies</h2>
            <p className="leading-relaxed">
              Our website uses cookies and similar tracking technologies for analytics purposes. You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.
            </p>
          </section>

          <section className="border-l-2 border-purple-500/30 pl-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Children's Privacy</h2>
            <p className="leading-relaxed">
              Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section className="border-l-2 border-purple-500/30 pl-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="border-l-2 border-purple-500/30 pl-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Contact Us</h2>
            <p className="leading-relaxed mb-4">
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <div className="space-y-2 text-gray-400">
              <p>Email: <a href="mailto:teamframecipher@gmail.com" className="text-purple-400 hover:underline">teamframecipher@gmail.com</a></p>
              <p>Phone: <a href="tel:+8801768146650" className="text-purple-400 hover:underline">+880 1768-146650</a></p>
              <p>Address: Mirpur 14, Dhaka, Bangladesh</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
