export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-slate-950 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <div className="space-y-4 animate-slide-in-left">
          <h2 className="text-5xl font-bold">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        <p
          className="text-lg text-gray-300 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          I am a software developer specialized in frontend development and backend using CSS, CSS animations, React, JavaScript, Django, and Python. I also have specialized skills in WordPress website creation.
        </p>

        <div className="grid md:grid-cols-2 gap-8 pt-8">
          {[
            {
              title: 'Frontend Development',
              skills: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
            },
            {
              title: 'Backend Development',
              skills: ['Django', 'Python', 'Database Design', 'REST APIs'],
            },
          ].map((category, index) => (
            <div
              key={category.title}
              className="p-6 rounded-lg border border-slate-700 bg-slate-900/50 hover:border-blue-500 transition-all duration-300 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
