export default function Portfolio() {
  const projects = [
    {
      title: 'Restaurant Website',
      subtitle: 'Delicious Food',
      description: 'A modern restaurant website showcasing menu items and cuisine.',
      screenshot: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=300&fit=crop',
      tags: ['React', 'Tailwind', 'Design'],
      link: 'https://my-portfolio-delta-ten-16.vercel.app/',
    },
    {
      title: 'NFT Website',
      subtitle: 'Discover NFTs',
      description: 'An interactive NFT marketplace platform with collection showcase.',
      screenshot: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop',
      tags: ['React', 'Web3', 'UI/UX'],
      link: 'https://nft-website-7y4o70sxn-buggiebbyverses-projects.vercel.app/',
    },
    {
      title: 'Car Dealer Website',
      subtitle: 'Find Your Dream Car',
      description: 'A dynamic car dealership platform with vehicle listings and filters.',
      screenshot: 'https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=500&h=300&fit=crop',
      tags: ['React', 'Database', 'API', 'WordPress'],
      link: 'https://autohire.ng/',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-4 mb-16 animate-slide-in-left">
          <h2 className="text-5xl font-bold">Portfolio</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-lg overflow-hidden bg-slate-800 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="w-full h-48 relative overflow-hidden">
                <img
                  src={project.screenshot}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-blue-400">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-700 text-xs text-purple-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 text-sm inline-block text-center"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
