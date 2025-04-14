
export default function About() {
  const stats = [
    { value: "10+", label: "Years of Experience" },
    { value: "150+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "15", label: "Team Members" },
  ];

  const values = [
    {
      title: "Innovation",
      description: "We embrace creative thinking and cutting-edge solutions to stay ahead in the digital landscape.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Excellence",
      description: "We are committed to delivering the highest quality in everything we do, exceeding expectations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Collaboration",
      description: "We believe in working closely with our clients, fostering partnerships that drive success.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-ninja-purple/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-ninja-light-purple/10 rounded-full blur-2xl"></div>
              
              {/* Image placeholder */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400 text-lg font-medium">Team Image</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <span className="inline-block px-3 py-1 text-sm font-medium bg-ninja-purple/10 text-ninja-purple rounded-full mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Crafting digital success stories since 2013
              </h2>
              <p className="text-gray-600 mb-4">
                Planet Ninja is a team of passionate digital experts dedicated to helping businesses thrive in the digital world. 
                With a blend of creativity, technical expertise, and strategic thinking, we craft digital solutions that drive 
                real business results.
              </p>
              <p className="text-gray-600">
                Our approach is collaborative and client-focused. We work closely with you to understand your unique challenges 
                and goals, then develop tailored strategies that align with your vision and deliver measurable outcomes.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <span className="block text-3xl font-bold text-ninja-purple font-display">{stat.value}</span>
                  <span className="block text-sm text-gray-600">{stat.label}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="/about" 
              className="inline-flex items-center text-ninja-purple font-medium hover:text-ninja-purple/80 transition-colors"
            >
              <span>Learn more about our story</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Our Values */}
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600">
              The principles that guide our work and define our culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-ninja-purple/10 flex items-center justify-center text-ninja-purple mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 font-display">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
