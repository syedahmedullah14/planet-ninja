
import { useState } from "react";
import ContactInfo from "./contact/ContactInfo";
import MessageForm from "./contact/MessageForm";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form submitted successfully:", data);
      setIsSuccess(true);
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-ninja-light-purple/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-ninja-purple/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-ninja-purple/10 text-ninja-purple rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Ready to transform your digital presence?
          </h2>
          <p className="text-gray-600">
            Contact us today to discuss your project and discover how Planet Ninja can help you achieve your digital goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <MessageForm 
            onSubmit={onSubmit}
            isSubmitting={isSubmitting}
            isSuccess={isSuccess}
          />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
