import React, { useState } from 'react';
import { ArrowRight, Download, Github, Briefcase, Contact, Code, Database, Palette, Star, GraduationCap, MapPin, Calendar, Award, ExternalLink, Mail, Phone, User, BookOpen, Globe, BarChart3, Linkedin, Send, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';
import { useTheme } from '../contexts/ThemeContext';

const Home = () => {
  const { toast } = useToast();
  const { theme, primaryColor } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive",
      });
      return;
    }

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

  const skills = [
    { name: 'Python', level: 85, icon: Code },
    { name: 'Java', level: 80, icon: Code },
    { name: 'JavaScript', level: 75, icon: Code },
    { name: 'HTML/CSS', level: 90, icon: Palette },
    { name: 'SQL', level: 80, icon: Database },
    { name: 'C Programming', level: 70, icon: Code }
  ];

  const projects = [
    {
      title: 'Amazon Website Clone',
      description: 'Developed a responsive website mimicking Amazon\'s layout with product listings, shopping cart UI, and basic user flow.',
      technologies: ['HTML', 'CSS'],
      icon: Globe,
      gradient: 'from-purple-600 to-indigo-600'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Designed and developed a personal portfolio showcasing projects and skills with contact forms and social media links.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      icon: User,
      gradient: 'from-indigo-600 to-purple-600'
    }
  ];

  const education = [
    {
      degree: 'B.Tech - CSE (AI & Data Science)',
      institution: 'Vishnu Institute of Technology, Bhimavaram',
      period: '2023-2027',
      cgpa: '8.09',
      icon: GraduationCap
    },
    {
      degree: 'Intermediate - MPC',
      institution: 'Sri Chaitanya Junior College, Chittoor',
      period: '2021-2023',
      percentage: '85.1%',
      icon: BookOpen
    },
    {
      degree: '10th Class',
      institution: 'Apollo EM High School, Palakollu',
      period: '2021',
      percentage: '92%',
      icon: Award
    }
  ];

  const certifications = [
    { title: 'Programming in Java', provider: 'NPTEL' },
    { title: 'Python and Pandas', provider: 'Kaggle' },
    { title: 'HTML CSS Bootcamp', provider: 'Lets Upgrade' },
    { title: 'Data Science Master Virtual Internship', provider: 'Altair' },
    { title: 'Web Full Stack Developer Virtual Internship', provider: 'Various Platforms' }
  ];

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'JavaScript', 'C Programming']
    },
    {
      title: 'Frontend Technologies',
      skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Database',
      skills: ['SQL']
    },
    {
      title: 'Soft Skills',
      skills: ['Communication', 'Collaboration', 'Creativity', 'Leadership']
    }
  ];
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`} style={{ '--primary-color': primaryColor } as React.CSSProperties}>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className={`text-lg flex items-center gap-2 transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  Hey, I'm <span className="text-2xl">👋</span>
                </p>
                
                <div className="space-y-3">
                  <h2 className="text-4xl font-extrabold mb-2" style={{ color: primaryColor }}>
                    Kaligotla Sri Datta Sai Vithal
                  </h2>
                  <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                    <span style={{ color: primaryColor }}>Front-End</span>
                  </h1>
                  <h1 className={`text-6xl lg:text-7xl font-bold transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Developer
                  </h1>
                </div>
                
                <p className={`text-lg max-w-xl leading-relaxed transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  I'm a Computer Science Engineering student based in India, I'll help you 
                  build beautiful websites your users will love.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300"
                  style={{ backgroundColor: primaryColor }}
                >
                  Get In Touch
                </button>
                
                <button 
                  onClick={() => scrollToSection('projects')}
                  className={`px-8 py-4 border-2 font-medium rounded-lg transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'border-gray-600 text-gray-300 hover:border-gray-500' 
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  Browse Projects
                </button>
              </div>
            </div>

            {/* Profile Image Side */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className={`w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 transition-colors ${
                  theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                }`}>
                  <img 
                    src="https://iili.io/FH2CXIa.jpg" 
                    alt="Kaligotla Sri Datta Sai Vithal" 
                    className="w-full h-full object-cover object-center-top hover:scale-105 transition-transform duration-700" 
                    style={{ objectPosition: 'center 20%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className={`text-5xl font-bold mb-4 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Projects<span style={{ color: primaryColor }}>.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div key={index} className={`rounded-2xl p-8 relative overflow-hidden group transition-colors ${
                  theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                }`}>
                  {/* Accent shapes */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20" style={{ backgroundColor: primaryColor }}></div>
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: primaryColor }}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <h3 className={`text-xl font-bold flex items-center gap-2 transition-colors ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {project.title}
                        <ExternalLink size={16} style={{ color: primaryColor }} />
                      </h3>
                    </div>
                    
                    <p className={`mb-6 leading-relaxed transition-colors ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className={`px-3 py-1 rounded-full text-sm transition-colors ${
                          theme === 'dark' ? 'bg-gray-600 text-gray-200' : 'bg-white text-gray-700'
                        }`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education/Experience Section */}
      <section id="education" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Education */}
            <div>
              <h2 className={`text-5xl font-bold mb-12 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Education<span style={{ color: primaryColor }}>.</span>
              </h2>
              
              <div className="space-y-8">
                {education.map((edu, index) => {
                  const Icon = edu.icon;
                  return (
                    <div key={index} className="border-l-4 pl-8 relative" style={{ borderColor: primaryColor }}>
                      <div className="absolute -left-2 w-4 h-4 rounded-full" style={{ backgroundColor: primaryColor }}></div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-medium" style={{ color: primaryColor }}>
                          <Icon size={16} />
                          {edu.period}
                        </div>
                        <h3 className={`text-xl font-bold transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {edu.degree}
                        </h3>
                        <p className={`transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{edu.institution}</p>
                        <p className={`text-sm transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                          {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className={`text-5xl font-bold mb-12 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Certifications<span style={{ color: primaryColor }}>.</span>
              </h2>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className={`rounded-lg p-6 border transition-colors ${
                    theme === 'dark' 
                      ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
                      : 'bg-white border-gray-200 hover:border-gray-300'
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: primaryColor }}></div>
                      <div>
                        <h3 className={`font-semibold transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{cert.title}</h3>
                        <p className={`text-sm transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{cert.provider}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-5xl font-bold mb-16 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Skills<span style={{ color: primaryColor }}>.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className={`text-lg font-bold transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className={`transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About/My Story Section */}
      <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-5xl font-bold mb-12 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            My Story<span style={{ color: primaryColor }}>.</span>
          </h2>
          
          <div className={`prose prose-lg leading-relaxed space-y-6 transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            <p>
              My journey as a Computer Science Engineering student started in 2023, focusing on Artificial Intelligence and Data Science. 
              I'm passionate about <span className="font-medium" style={{ color: primaryColor }}>front-end development</span> and building user-friendly applications.
            </p>
            
            <p>
              After learning the fundamentals of programming with languages like Python, Java, and web technologies, 
              I decided to focus on creating beautiful, functional websites that users love to interact with.
            </p>
            
            <p>
              My <span className="font-medium" style={{ color: primaryColor }}>goal</span> is to leverage my technical skills in software development and data science 
              to contribute to innovative projects and grow as a professional in the dynamic tech environment.
            </p>
            
            <p>
              I believe in continuous learning and collaboration, and I'm always excited to take on new challenges that push me to grow as a developer.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-5xl font-bold mb-8 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Let's Work Together
            </h2>
            <p className={`text-xl max-w-2xl mx-auto transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing together.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className={`rounded-3xl p-8 lg:p-12 transition-colors ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h3 className={`text-3xl font-bold mb-8 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-semibold mb-3 transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Your Name
                  </label>
                  <div className="relative">
                    <User size={20} className={`absolute left-4 top-4 transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-gray-400'}`} />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className={`w-full pl-12 pr-4 py-4 border rounded-xl transition-all duration-300 disabled:opacity-50 ${
                        errors.name 
                          ? 'border-red-500 focus:ring-red-500' 
                          : `focus:ring-2 focus:border-transparent ${
                              theme === 'dark' 
                                ? 'border-gray-600 bg-gray-800 text-white focus:ring-gray-500' 
                                : 'border-gray-300 bg-white text-gray-900'
                            }`
                      }`}
                      style={{ focusRingColor: !errors.name ? primaryColor : undefined }}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={`block text-sm font-semibold mb-3 transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail size={20} className={`absolute left-4 top-4 transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-gray-400'}`} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className={`w-full pl-12 pr-4 py-4 border rounded-xl transition-all duration-300 disabled:opacity-50 ${
                        errors.email 
                          ? 'border-red-500 focus:ring-red-500' 
                          : `focus:ring-2 focus:border-transparent ${
                              theme === 'dark' 
                                ? 'border-gray-600 bg-gray-800 text-white focus:ring-gray-500' 
                                : 'border-gray-300 bg-white text-gray-900'
                            }`
                      }`}
                      style={{ focusRingColor: !errors.email ? primaryColor : undefined }}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className={`block text-sm font-semibold mb-3 transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
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
                    className={`w-full px-4 py-4 border rounded-xl transition-all duration-300 disabled:opacity-50 ${
                      errors.subject 
                        ? 'border-red-500 focus:ring-red-500' 
                        : `focus:ring-2 focus:border-transparent ${
                            theme === 'dark' 
                              ? 'border-gray-600 bg-gray-800 text-white focus:ring-gray-500' 
                              : 'border-gray-300 bg-white text-gray-900'
                          }`
                    }`}
                    style={{ focusRingColor: !errors.subject ? primaryColor : undefined }}
                    placeholder="What's this about?"
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className={`block text-sm font-semibold mb-3 transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare size={20} className={`absolute left-4 top-4 transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-gray-400'}`} />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      rows={6}
                      className={`w-full pl-12 pr-4 py-4 border rounded-xl transition-all duration-300 resize-none disabled:opacity-50 ${
                        errors.message 
                          ? 'border-red-500 focus:ring-red-500' 
                          : `focus:ring-2 focus:border-transparent ${
                              theme === 'dark' 
                                ? 'border-gray-600 bg-gray-800 text-white focus:ring-gray-500' 
                                : 'border-gray-300 bg-white text-gray-900'
                            }`
                      }`}
                      style={{ focusRingColor: !errors.message ? primaryColor : undefined }}
                      placeholder="Tell me about your project, collaboration ideas, or just say hello!"
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 hover:opacity-90 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: primaryColor }}
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

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className={`text-3xl font-bold mb-8 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Get In Touch</h3>
                <p className={`text-lg mb-12 transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology and development.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:kaligotlasridattasai18@gmail.com"
                  className={`group flex items-center p-6 rounded-2xl transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mr-6 group-hover:opacity-90 transition-all duration-300" style={{ backgroundColor: primaryColor }}>
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className={`font-bold mb-1 text-lg transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Email</h4>
                    <p className={`transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>kaligotlasridattasai18@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/kaligotla-sri-datta-sai-vithal-01bb2a321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center p-6 rounded-2xl transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center mr-6 group-hover:bg-blue-700 transition-colors">
                    <Linkedin size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className={`font-bold mb-1 text-lg transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>LinkedIn</h4>
                    <p className={`transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Connect with me professionally</p>
                  </div>
                </a>
              </div>

              <div className="pt-8">
                <a
                  href="https://drive.google.com/file/d/1FVE9qc_gME7SC5gEVTh4uNjtrr-EPLZP/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 border-2 font-medium rounded-xl transition-colors duration-300"
                  style={{ 
                    borderColor: primaryColor, 
                    color: primaryColor 
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = primaryColor;
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = primaryColor;
                  }}
                >
                  <Download size={20} className="mr-3" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className={`flex flex-col sm:flex-row justify-between items-center pt-16 mt-16 border-t transition-colors ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <div className="flex gap-6 mb-4 sm:mb-0">
              <button onClick={() => scrollToSection('home')} className="font-medium transition-colors hover:opacity-80" style={{ color: primaryColor }}>Home</button>
              <button onClick={() => scrollToSection('projects')} className={`transition-colors hover:opacity-80 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Projects</button>
              <button onClick={() => scrollToSection('about')} className={`transition-colors hover:opacity-80 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>About</button>
              <button onClick={() => scrollToSection('contact')} className={`transition-colors hover:opacity-80 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Contact</button>
            </div>
            
            <div className="flex gap-4">
              <a href="https://github.com/Sridattasai18" target="_blank" rel="noopener noreferrer" className={`transition-colors hover:opacity-80 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-400'}`}>
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/kaligotla-sri-datta-sai-vithal-01bb2a321" target="_blank" rel="noopener noreferrer" className={`transition-colors hover:opacity-80 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-400'}`}>
                <Linkedin size={20} />
              </a>
              <a href="mailto:kaligotlasridattasai18@gmail.com" className={`transition-colors hover:opacity-80 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-400'}`}>
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className={`text-center mt-8 text-sm transition-colors ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
            ©2025 All Rights Reserved<br />
            Made by Kaligotla Sri Datta Sai Vithal
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
