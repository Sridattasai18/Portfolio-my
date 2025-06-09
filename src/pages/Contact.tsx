
import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Mail, Phone, MapPin, Github, Send, User, MessageSquare, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { primaryColor } = useTheme();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      emailjs.init('pOUfh8E8pljYvgbxP');

      const result = await emailjs.send(
        'service_imvnq2v',
        'template_enwc15q',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'kaligotlasridattasai18@gmail.com',
        }
      );

      console.log('Email sent successfully:', result);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kaligotlasridattasai18@gmail.com',
      href: 'mailto:kaligotlasridattasai18@gmail.com',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8074684409',
      href: 'tel:+918074684409',
      gradient: 'from-teal-500 to-teal-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pamulaparru, West Godavari, AP',
      href: '#',
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Sridattasai18',
      href: 'https://github.com/Sridattasai18',
      gradient: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50 dark:from-blue-900 dark:via-teal-900 dark:to-cyan-900">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full filter blur-xl animate-drift"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/15 rounded-full filter blur-xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-400/10 rounded-full filter blur-2xl animate-glow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold blue-gradient-text mb-6">
            Get In Touch
          </h1>
          <div className="w-32 h-2 mx-auto rounded-full blue-gradient-bg mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm always excited to connect with fellow developers, potential collaborators, or anyone interested in Data Science. 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold blue-gradient-text mb-12">
              Contact Information
            </h2>
            
            <div className="space-y-8 mb-16">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : '_self'}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="group flex items-center p-8 glass-morphism rounded-2xl border border-blue-200/30 hover-lift hover-glow transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${info.gradient} flex items-center justify-center mr-8 group-hover:scale-110 transition-transform animate-glow`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                        {info.label}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Professional Links */}
            <div className="glass-morphism rounded-3xl p-8 border border-blue-200/30 bg-gradient-to-r from-blue-50/50 to-teal-50/50 dark:from-blue-900/30 dark:to-teal-900/30">
              <h3 className="text-2xl font-bold blue-gradient-text mb-8">
                Professional Profiles
              </h3>
              <div className="space-y-6">
                <a
                  href="https://www.linkedin.com/in/kaligotla-sri-datta-sai-vithal-01bb2a321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-6 glass-morphism rounded-2xl border border-blue-200/30 hover-lift transition-all duration-300"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mr-4">
                      <Linkedin size={24} className="text-white" />
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white">LinkedIn Profile</span>
                  </div>
                  <span className="text-blue-600 text-2xl group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a
                  href="https://github.com/Sridattasai18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-6 glass-morphism rounded-2xl border border-blue-200/30 hover-lift transition-all duration-300"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center mr-4">
                      <Github size={24} className="text-white" />
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white">GitHub Repository</span>
                  </div>
                  <span className="text-gray-600 text-2xl group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-scale-in">
            <div className="glass-morphism rounded-3xl p-10 border border-blue-200/30 bg-gradient-to-br from-white/80 to-blue-50/80 dark:from-gray-800/80 dark:to-blue-900/80">
              <h2 className="text-4xl font-bold blue-gradient-text mb-10">
                Send Me a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Your Name
                  </label>
                  <div className="relative">
                    <User size={20} className="absolute left-4 top-4 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full pl-12 pr-4 py-4 border border-blue-200/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent glass-morphism text-gray-900 dark:text-white transition-all duration-300 disabled:opacity-50 hover-lift"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail size={20} className="absolute left-4 top-4 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full pl-12 pr-4 py-4 border border-blue-200/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent glass-morphism text-gray-900 dark:text-white transition-all duration-300 disabled:opacity-50 hover-lift"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-4 border border-blue-200/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent glass-morphism text-gray-900 dark:text-white transition-all duration-300 disabled:opacity-50 hover-lift"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare size={20} className="absolute left-4 top-4 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      rows={6}
                      className="w-full pl-12 pr-4 py-4 border border-blue-200/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent glass-morphism text-gray-900 dark:text-white transition-all duration-300 resize-none disabled:opacity-50 hover-lift"
                      placeholder="Tell me about your project, collaboration ideas, or just say hello!"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-8 py-4 rounded-2xl text-white font-semibold blue-gradient-bg hover:opacity-90 transition-all duration-300 hover-lift hover-glow disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-3" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Quick Response Info */}
            <div className="mt-8 p-8 glass-morphism rounded-2xl border border-blue-200/30 bg-gradient-to-r from-green-50/80 to-blue-50/80 dark:from-green-900/30 dark:to-blue-900/30">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
                Quick Response Guarantee
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I typically respond to all messages within 24 hours. For urgent matters, 
                feel free to reach out via phone or connect with me on LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
