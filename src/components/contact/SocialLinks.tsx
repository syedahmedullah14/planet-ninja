
import React from 'react';

const SocialLinks = () => {
  return (
    <div>
      <h3 className="text-2xl font-display font-bold mb-4">Follow Us</h3>
      <div className="flex space-x-4">
        {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
          <a 
            key={social}
            href={`https://${social}.com`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-ninja-purple/10 hover:bg-ninja-purple text-ninja-purple hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
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
  );
};

export default SocialLinks;
