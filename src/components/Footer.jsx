export default function Footer() {
  return (
    <footer className="border-t border-purple-500/20 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Frame Cipher" className="w-10 h-10 object-contain" />
              <h3 className="text-2xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                FRAME CIPHER
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Cinematic media production agency specializing in commercial video, photography, and brand strategy.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-mono text-purple-400 tracking-wider mb-4">QUICK ACCESS</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Projects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-mono text-purple-400 tracking-wider mb-4">CONNECT</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Vimeo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-mono">
            © 2026 FRAME CIPHER. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
