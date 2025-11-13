import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">BUGGIE</h3>
            <p className="text-gray-400 text-sm">
              Full-stack developer creating beautiful digital experiences.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-blue-400 transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Follow</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-gray-400 hover:text-blue-400"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-gray-400 hover:text-blue-400"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-gray-400 hover:text-blue-400"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Buggie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
