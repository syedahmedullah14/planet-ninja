
import React from 'react';
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface MessageFormProps {
  onSubmit: (data: FormData) => Promise<void>;
  isSubmitting: boolean;
  isSuccess: boolean;
}

const MessageForm = ({ onSubmit, isSubmitting, isSuccess }: MessageFormProps) => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<FormData>();

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm">
      <h3 className="text-2xl font-display font-bold mb-6">Send us a message</h3>
      
      {isSuccess && (
        <div className="mb-6 bg-green-50 text-green-700 p-4 rounded-lg">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-ninja-purple/50`}
            placeholder="John Doe"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-ninja-purple/50`}
            placeholder="john@example.com"
            {...register("email", { 
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address"
              }
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-ninja-purple/50`}
            placeholder="How can we help?"
            {...register("subject", { required: "Subject is required" })}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
            Your Message
          </label>
          <textarea
            id="message"
            rows={5}
            className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-ninja-purple/50`}
            placeholder="Tell us about your project..."
            {...register("message", { required: "Message is required" })}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-ninja-purple hover:bg-ninja-purple/90 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default MessageForm;
