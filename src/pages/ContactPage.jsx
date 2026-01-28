import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Commercial Video',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await addDoc(collection(db, 'contacts'), {
        name: formData.name,
        email: formData.email,
        projectType: formData.projectType,
        message: formData.message,
        timestamp: serverTimestamp()
      });

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        projectType: 'Commercial Video',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <div className="flex items-center gap-4 mb-4 justify-center">
            <div className="h-px w-24 bg-linear-to-r from-transparent to-purple-500/50" />
            <span className="text-sm font-mono text-purple-400 tracking-[0.3em]">GET IN TOUCH</span>
            <div className="h-px w-24 bg-linear-to-l from-transparent to-purple-500/50" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Let's Create Together
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            Ready to elevate your brand? Start a conversation with our team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="border border-purple-500/20 bg-[#0a0a0f]/50 backdrop-blur-sm p-8">
            <h2 className="text-2xl font-bold mb-6 text-purple-400">Contact Information</h2>
            
            <div className="space-y-6">
              <div>
                <div className="text-sm font-mono text-gray-500 mb-2">EMAIL</div>
                <a href="mailto:teamframecipher@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                  teamframecipher@gmail.com
                </a>
              </div>

              <div>
                <div className="text-sm font-mono text-gray-500 mb-2">PHONE</div>
                <a href="tel:+8801768146650" className="text-gray-300 hover:text-purple-400 transition-colors">
                  +880 1768-146650
                </a>
              </div>

              <div>
                <div className="text-sm font-mono text-gray-500 mb-2">LOCATION</div>
                <p className="text-gray-300">
                  Mirpur 14, Dhaka<br />
                  Bangladesh
                </p>
              </div>
            </div>
          </div>

          <div className="border border-blue-500/20 bg-[#0a0a0f]/50 backdrop-blur-sm p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Send a Message</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-4 p-4 bg-green-500/20 border border-green-500/50 text-green-400">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-4 p-4 bg-red-500/20 border border-red-500/50 text-red-400">
                Failed to send message. Please try again.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-mono text-gray-400 mb-2">NAME</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-purple-500/30 focus:border-purple-400 outline-none text-gray-300 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-gray-400 mb-2">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-purple-500/30 focus:border-purple-400 outline-none text-gray-300 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-gray-400 mb-2">PROJECT TYPE</label>
                <select 
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-purple-500/30 focus:border-purple-400 outline-none text-gray-300 transition-colors"
                >
                  <option>Commercial Video</option>
                  <option>Product Campaign</option>
                  <option>Photography</option>
                  <option>Brand Strategy</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-mono text-gray-400 mb-2">MESSAGE</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-purple-500/30 focus:border-purple-400 outline-none text-gray-300 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-purple-600 hover:bg-purple-500 transition-all duration-300 font-semibold tracking-wide relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10">
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-purple-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              </button>
            </form>
          </div>
        </div>

        <div className="border border-purple-500/20 bg-purple-950/20 backdrop-blur-sm p-8 text-center">
          <h3 className="text-xl font-bold mb-3">Business Inquiries</h3>
          <p className="text-gray-400 mb-4">
            For partnership opportunities and large-scale projects, reach out to our team.
          </p>
          <a
            href="mailto:teamframecipher@gmail.com"
            className="inline-block px-8 py-3 border-2 border-purple-500/50 hover:border-purple-400 transition-all duration-300 font-semibold tracking-wide"
          >
            teamframecipher@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}
