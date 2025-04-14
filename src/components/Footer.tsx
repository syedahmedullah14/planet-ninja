
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-ninja-dark-purple text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold font-display text-white inline-block">
              Planet<span className="text-ninja-purple">Ninja</span>
            </Link>
            <p className="text-gray-300 mt-4">
              Creating digital experiences that transform brands, engage audiences, and drive meaningful results.
            </p>
            <div className="flex space-x-4 mt-6">
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <a 
                  key={social}
                  href={`https://${social}.com`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label={social}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    className="w-5 h-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {["Web Design", "Brand Strategy", "SEO Optimization", "Content Marketing", "Social Media", "UI/UX Design"].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-gray-300 hover:text-white transition-colors duration-200 block py-1"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Portfolio", "Blog", "Careers", "Contact"].map((page) => (
                <li key={page}>
                  <Link 
                    to={page === "Home" ? "/" : `/${page.toLowerCase().replace(" ", "-")}`} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 block py-1"
                  >
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold">Contact Us</h3>
            <address className="not-italic">
              <div className="flex items-center space-x-3 text-gray-300 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-ninja-purple">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Digital Avenue, San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-ninja-purple">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hello@planetninja.com" className="hover:text-white transition-colors duration-200">hello@planetninja.com</a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-ninja-purple">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+15551234567" className="hover:text-white transition-colors duration-200">+1 (555) 123-4567</a>
              </div>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Planet Ninja. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">Terms of Service</Link>
            <Link to="/sitemap" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
