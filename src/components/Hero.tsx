
export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-ninja-purple/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-ninja-light-purple/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <div>
              <span className="inline-block px-3 py-1 text-sm font-medium bg-ninja-purple/10 text-ninja-purple rounded-full mb-6">
                Digital Innovation Agency
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
                We create <span className="text-ninja-purple">digital experiences</span> that matter
              </h1>
            </div>
            <p className="text-lg text-gray-600">
              Planet Ninja is a full-service digital agency specializing in brand strategy, 
              web design, and digital marketing. We help businesses stand out in the digital universe.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-ninja-purple hover:bg-ninja-purple/90 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-medium"
              >
                Get Started
              </a>
              <a 
                href="#portfolio" 
                className="border border-gray-300 hover:border-ninja-purple text-gray-700 hover:text-ninja-purple px-8 py-3 rounded-full transition-all duration-300 font-medium"
              >
                View Our Work
              </a>
            </div>
            
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">Trusted by innovative companies</p>
              <div className="flex flex-wrap items-center gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative lg:h-[600px] hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-ninja-light-purple/30 to-ninja-purple/20 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-gray-200 rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
