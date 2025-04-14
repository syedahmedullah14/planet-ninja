
import { useState } from "react";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section id="portfolio" className="py-24">
      <motion.div 
        className="container mx-auto px-4 md:px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.span 
            className="inline-block px-3 py-1 text-sm font-medium bg-ninja-purple/10 text-ninja-purple rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Work
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Showcasing our creative excellence
          </h2>
          <p className="text-gray-600">
            Browse through our collection of projects that demonstrate our expertise, creativity, and dedication to delivering exceptional results.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                activeTab === category.id
                  ? "bg-ninja-purple text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl cursor-pointer h-[350px]"
              variants={projectVariants}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className={`absolute inset-0 ${project.image}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="inline-block px-3 py-1 text-xs font-medium bg-white/20 text-white rounded-full mb-3">
                  {categories.find(cat => cat.id === project.category)?.label}
                </span>
                <h3 className="text-xl font-bold text-white mb-2 font-display">
                  {project.title}
                </h3>
                <p className="text-white/80 mb-4">Client: {project.client}</p>
                <motion.button 
                  className="inline-flex items-center text-white font-medium text-sm gap-2"
                  whileHover={{ x: 5 }}
                >
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a 
            href="/portfolio" 
            className="inline-flex items-center border border-ninja-purple text-ninja-purple hover:bg-ninja-purple hover:text-white px-8 py-3 rounded-full transition-all duration-300 font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}