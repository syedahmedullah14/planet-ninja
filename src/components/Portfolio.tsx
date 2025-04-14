
import { useState } from "react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");
  
  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Design" },
    { id: "brand", label: "Branding" },
    { id: "marketing", label: "Marketing" },
    { id: "ui", label: "UI/UX Design" },
  ];
  
  const projects = [
    {
      title: "Eco Lifestyle Branding",
      category: "brand",
      image: "bg-gradient-to-br from-green-100 to-green-200",
      client: "Green Living Co.",
    },
    {
      title: "E-commerce Platform",
      category: "web",
      image: "bg-gradient-to-br from-blue-100 to-blue-200",
      client: "Fashion Forward",
    },
    {
      title: "Mobile Banking App",
      category: "ui",
      image: "bg-gradient-to-br from-purple-100 to-purple-200",
      client: "FinTech Solutions",
    },
    {
      title: "Product Launch Campaign",
      category: "marketing",
      image: "bg-gradient-to-br from-red-100 to-red-200",
      client: "Tech Innovators",
    },
    {
      title: "Corporate Rebrand",
      category: "brand",
      image: "bg-gradient-to-br from-yellow-100 to-yellow-200",
      client: "Global Industries",
    },
    {
      title: "Travel Blog Platform",
      category: "web",
      image: "bg-gradient-to-br from-teal-100 to-teal-200",
      client: "Wanderlust Adventures",
    },
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-ninja-purple/10 text-ninja-purple rounded-full mb-4">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Showcasing our creative excellence
          </h2>
          <p className="text-gray-600">
            Browse through our collection of projects that demonstrate our expertise, creativity, and dedication to delivering exceptional results.
          </p>
        </div>

        {/* Portfolio Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                activeTab === category.id
                  ? "bg-ninja-purple text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl cursor-pointer h-[350px] animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image (Placeholder) */}
              <div className={`absolute inset-0 ${project.image} group-hover:scale-105 transition-transform duration-500`}></div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Project Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-white/20 text-white rounded-full mb-3">
                  {categories.find(cat => cat.id === project.category)?.label}
                </span>
                <h3 className="text-xl font-bold text-white mb-2 font-display">{project.title}</h3>
                <p className="text-white/80 mb-4">Client: {project.client}</p>
                <button className="inline-flex items-center text-white font-medium text-sm gap-1 group-hover:gap-2 transition-all duration-300">
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="/portfolio" 
            className="inline-flex items-center border border-ninja-purple text-ninja-purple hover:bg-ninja-purple hover:text-white px-8 py-3 rounded-full transition-all duration-300 font-medium"
          >
            <span>View All Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
