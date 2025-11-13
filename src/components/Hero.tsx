export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center pt-20"
    >
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <div className="space-y-4 animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Hello, I am Buggie
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            Frontend, Backend Developer
          </p>
        </div>

        <div
          className="pt-8 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 hover-lift">
            Get In Touch
          </button>
        </div>

        <div
          className="pt-12 animate-float"
          style={{ animationDelay: '0.4s' }}
        >
          <svg
            className="w-6 h-6 mx-auto text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
