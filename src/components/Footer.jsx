export default function Footer() {
  return (
    <footer className="border-t border-purple-500/20 py-6 md:py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-2">
              <img src="/logo.png" alt="Frame Cipher" className="w-8 h-8 object-contain" />
              <h3 className="text-lg font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                FRAME CIPHER
              </h3>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Cinematic media production agency specializing in commercial video, photography, and brand strategy.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono text-purple-400 tracking-wider mb-2">QUICK ACCESS</h4>
            <ul className="space-y-1 text-xs">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Projects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono text-purple-400 tracking-wider mb-2">CONTACT</h4>
            <ul className="space-y-1 text-xs text-gray-400">
              <li>Mirpur 14, Dhaka</li>
              <li>
                <a href="tel:+8801768146650" className="hover:text-purple-400 transition-colors">
                  +880 1768-146650
                </a>
              </li>
              <li>
                <a href="mailto:teamframecipher@gmail.com" className="hover:text-purple-400 transition-colors">
                  teamframecipher@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-500/20 pt-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs">
          <p className="text-gray-500 font-mono">
            © 2026 FRAME CIPHER. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4 text-gray-500">
            <a href="/privacy" className="hover:text-purple-400 transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-purple-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
