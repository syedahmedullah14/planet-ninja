
export default function Blog() {
  const blogPosts = [
    {
      title: "The Future of Web Design: Trends to Watch in 2025",
      excerpt: "Explore the emerging web design trends that will shape the digital landscape in the coming year.",
      date: "April 10, 2025",
      category: "Web Design",
      image: "bg-gradient-to-br from-blue-100 to-blue-200",
      author: "Alex Johnson",
    },
    {
      title: "Why Strategic SEO is Essential for Business Growth",
      excerpt: "Learn how a well-planned SEO strategy can drive sustainable organic growth for your business.",
      date: "April 5, 2025",
      category: "SEO",
      image: "bg-gradient-to-br from-green-100 to-green-200",
      author: "Sarah Miller",
    },
    {
      title: "The Psychology of Brand Colors: Choosing the Right Palette",
      excerpt: "Understand how color choices affect consumer perception and how to select colors that align with your brand values.",
      date: "March 28, 2025",
      category: "Branding",
      image: "bg-gradient-to-br from-purple-100 to-purple-200",
      author: "Michael Chang",
    },
  ];

  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-ninja-purple/10 text-ninja-purple rounded-full mb-4">
            Our Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Insights and perspectives
          </h2>
          <p className="text-gray-600">
            Stay updated with the latest trends, insights, and tips from our digital experts to help your business thrive online.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              {/* Image Placeholder */}
              <div className={`h-48 relative ${post.image} group-hover:scale-105 transition-transform duration-500`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-0">
                  <span className="sr-only">Featured image for {post.title}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span className="text-ninja-purple">{post.category}</span>
                </div>
                
                <h3 className="font-display font-bold text-xl mb-3 group-hover:text-ninja-purple transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-ninja-purple/20 flex items-center justify-center text-ninja-purple text-xs font-medium">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm font-medium ml-3">{post.author}</span>
                  </div>
                  
                  <a 
                    href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-ninja-purple text-sm font-medium hover:opacity-80 transition-opacity"
                  >
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-1 group-hover:ml-2 transition-all duration-300">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="/blog" 
            className="inline-flex items-center border border-ninja-purple text-ninja-purple hover:bg-ninja-purple hover:text-white px-6 py-3 rounded-full transition-all duration-300 font-medium"
          >
            <span>View All Articles</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
