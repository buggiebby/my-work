export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-slate-950 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-4 mb-12 animate-slide-in-left">
          <h2 className="text-5xl font-bold">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        <form className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
              placeholder="Project inquiry"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              rows={6}
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <button className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 hover-lift">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
