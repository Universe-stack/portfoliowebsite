'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Your WhatsApp number (include country code, no + or spaces)
    // Example: For +1 234 567 8900, use '12345678900'
    const whatsappNumber = '2348109371584'; // Replace with your actual number
    
    // Construct the message from form data
    const message = `Hi! I'm ${formData.name}
    
Email: ${formData.email}

Message: ${formData.message}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with pre-filled message
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
    
    // Optional: Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="bg-[#f5f5f5] py-16 sm:py-20 lg:py-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Social Icons */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <Link 
              href="https://github.com" 
              target="_blank"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0f0f0f] flex items-center justify-center hover:bg-[#2a2a2a] transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-white" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link 
              href="https://linkedin.com" 
              target="_blank"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0f0f0f] flex items-center justify-center hover:bg-[#2a2a2a] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
            <Link 
              href="https://twitter.com" 
              target="_blank"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0f0f0f] flex items-center justify-center hover:bg-[#2a2a2a] transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
            <Link 
              href="https://dribbble.com" 
              target="_blank"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0f0f0f] flex items-center justify-center hover:bg-[#2a2a2a] transition-colors"
              aria-label="Dribbble"
            >
              <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm8.66 6.85c1.41 1.72 2.26 3.92 2.33 6.31-2.19-.47-4.29-.47-6.1-.18.18-.44.35-.88.5-1.33 1.87-.78 3.45-1.97 4.77-3.43.2-.26.37-.54.5-.82zM12 2.25c2.45 0 4.68.89 6.4 2.36a12.2 12.2 0 01-4.33 3.1c-1.58-2.91-3.39-5.16-5.09-6.71A9.74 9.74 0 0112 2.25zM7.14 2.08c1.66 1.5 3.46 3.73 5.05 6.62-2.68.79-5.65 1.19-8.67 1.19h-.27C3.75 7.13 5.15 4.3 7.14 2.08zM2.25 12v-.32c3.22 0 6.4-.45 9.28-1.31.21.42.41.85.59 1.28-3.87 1.21-7.05 3.69-9.28 6.84A9.74 9.74 0 012.25 12zm1.6 7.45c2.04-2.87 4.94-5.15 8.48-6.28 1.09 2.83 1.87 5.88 2.24 9.08a9.71 9.71 0 01-5.57 1.5c-2.08 0-4-.65-5.58-1.75.14-.52.28-1.03.43-1.55zm13.06.93c-.41-2.97-1.16-5.8-2.18-8.42 1.59-.25 3.41-.23 5.43.18-.55 3.54-2.49 6.59-5.25 8.24z"/>
              </svg>
            </Link>
          </div>

          {/* Heading */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#0f0f0f] leading-tight">
              Want to work with me? <br /> Drop me a line
            </h2>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold tracking-[0.08em] uppercase text-[#4a4a4a] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 sm:px-5 sm:py-3.5 bg-white border border-gray-200 rounded-lg text-[#0f0f0f] text-sm sm:text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0f0f0f] focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold tracking-[0.08em] uppercase text-[#4a4a4a] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 sm:px-5 sm:py-3.5 bg-white border border-gray-200 rounded-lg text-[#0f0f0f] text-sm sm:text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0f0f0f] focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-xs font-semibold tracking-[0.08em] uppercase text-[#4a4a4a] mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                required
                rows={6}
                className="w-full px-4 py-3 sm:px-5 sm:py-3.5 bg-white border border-gray-200 rounded-lg text-[#0f0f0f] text-sm sm:text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0f0f0f] focus:border-transparent transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-3.5 sm:px-10 sm:py-4 bg-[#0f0f0f] text-white text-sm sm:text-base font-semibold rounded-full shadow-[0_14px_30px_rgba(0,0,0,0.2)] hover:bg-[#2a2a2a] hover:shadow-[0_18px_40px_rgba(0,0,0,0.25)] transition-all duration-300 transform hover:scale-[1.02]"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
