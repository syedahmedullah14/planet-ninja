import React from 'react';
import ContactItem from './ContactItem';
import OfficeHours from './OfficeHours';
import SocialLinks from './SocialLinks';
import { Image } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-8 relative">
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2400&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div>
        <h3 className="text-2xl font-display font-bold mb-6">Contact Information</h3>
        <p className="text-gray-600 mb-8">
          If you prefer, you can reach out to us directly using the contact information below.
          We're always eager to hear about your projects and help you achieve your digital goals.
        </p>
        
        <div className="space-y-5">
          <ContactItem
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
            title="Address"
            content={
              <div className="flex items-center space-x-4">
                <span>123 Digital Avenue, San Francisco, CA 94107</span>
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&q=80" 
                  alt="Office Location"
                  className="w-16 h-16 rounded-lg object-cover hidden md:block"
                />
              </div>
            }
          />
          
          <ContactItem
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
            title="Email"
            content={<a href="mailto:hello@planetninja.com" className="text-ninja-purple hover:underline">hello@planetninja.com</a>}
          />
          
          <ContactItem
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            }
            title="Phone"
            content={
              <div className="flex items-center space-x-4">
                <a href="tel:+15551234567" className="text-ninja-purple hover:underline">+1 (555) 123-4567</a>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&q=80" 
                  alt="Customer Support"
                  className="w-16 h-16 rounded-lg object-cover hidden md:block"
                />
              </div>
            }
          />
        </div>
      </div>
      
      <OfficeHours />
      <SocialLinks />
    </div>
  );
};

export default ContactInfo;
