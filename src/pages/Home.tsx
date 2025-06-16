import React, { useState } from 'react';
import { ArrowRight, Download, Github, Briefcase, Contact, Code, Database, Palette, Star, GraduationCap, MapPin, Calendar, Award, ExternalLink, Mail, Phone, User, BookOpen, Globe, BarChart3, Linkedin, Send, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

const Home = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
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
        'service_imvnq2vll',
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
    { title: 'Chatbot Creation', provider: 'Various Platforms' }
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 flex items-center gap-2">
                  Hey, I'm Kaligotla Sri Datta Sai Vithal <span className="text-2xl">👋</span>
                </p>
                
                <div className="space-y-2">
                  <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                    <span className="text-purple-600">Front-End</span>
                  </h1>
                  <h1 className="text-6xl lg:text-7xl font-bold text-gray-900">
                    Developer
                  </h1>
                </div>
                
                <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                  I'm a Computer Science Engineering student based in India, I'll help you 
                  build beautiful websites your users will love.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Get In Touch
                </button>
                
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 transition-colors"
                >
                  Browse Projects
                </button>
              </div>
            </div>

            {/* Profile Image Side */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gray-200">
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
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Projects<span className="text-purple-600">.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div key={index} className="bg-gray-100 rounded-2xl p-8 relative overflow-hidden group hover:bg-gray-200 transition-colors">
                  {/* Purple accent shapes */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-600 rounded-full opacity-20"></div>
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-600 rounded-full opacity-10"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        {project.title}
                        <ExternalLink size={16} className="text-purple-600" />
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm">
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
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Education */}
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-12">
                Education<span className="text-purple-600">.</span>
              </h2>
              
              <div className="space-y-8">
                {education.map((edu, index) => {
                  const Icon = edu.icon;
                  return (
                    <div key={index} className="border-l-4 border-purple-600 pl-8 relative">
                      <div className="absolute -left-2 w-4 h-4 bg-purple-600 rounded-full"></div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-purple-600 font-medium">
                          <Icon size={16} />
                          {edu.period}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {edu.degree}
                        </h3>
                        <p className="text-gray-600">{edu.institution}</p>
                        <p className="text-gray-500 text-sm">
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
              <h2 className="text-5xl font-bold text-gray-900 mb-12">
                Certifications<span className="text-purple-600">.</span>
              </h2>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{cert.title}</h3>
                        <p className="text-gray-600 text-sm">{cert.provider}</p>
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
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-16">
            Skills<span className="text-purple-600">.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-gray-600">
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
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-12">
            My Story<span className="text-purple-600">.</span>
          </h2>
          
          <div className="prose prose-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              My journey as a Computer Science Engineering student started in 2023, focusing on Artificial Intelligence and Data Science. 
              I'm passionate about <span className="text-purple-600 font-medium">front-end development</span> and building user-friendly applications.
            </p>
            
            <p>
              After learning the fundamentals of programming with languages like Python, Java, and web technologies, 
              I decided to focus on creating beautiful, functional websites that users love to interact with.
            </p>
            
            <p>
              My <span className="text-purple-600 font-medium">goal</span> is to leverage my technical skills in software development and data science 
              to contribute to innovative projects and grow as a professional in the dynamic tech environment.
            </p>
            
            <p>
              I believe in continuous learning and collaboration, and I'm always excited to take on new challenges that push me to grow as a developer.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing together.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
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
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900 transition-all duration-300 disabled:opacity-50"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
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
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900 transition-all duration-300 disabled:opacity-50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-3">
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
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900 transition-all duration-300 disabled:opacity-50"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
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
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900 transition-all duration-300 resize-none disabled:opacity-50"
                      placeholder="Tell me about your project, collaboration ideas, or just say hello!"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-8 py-4 rounded-xl text-white font-semibold bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-purple-600"
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
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h3>
                <p className="text-lg text-gray-600 mb-12">
                  I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology and development.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:kaligotlasridattasai18@gmail.com"
                  className="group flex items-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="w-16 h-16 rounded-xl bg-purple-600 flex items-center justify-center mr-6 group-hover:bg-purple-700 transition-colors">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 text-lg">Email</h4>
                    <p className="text-gray-600">kaligotlasridattasai18@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/kaligotla-sri-datta-sai-vithal-01bb2a321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center mr-6 group-hover:bg-blue-700 transition-colors">
                    <Linkedin size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 text-lg">LinkedIn</h4>
                    <p className="text-gray-600">Connect with me professionally</p>
                  </div>
                </a>
              </div>

              <div className="pt-8">
                <a
                  href="https://drive.google.com/file/d/1FVE9qc_gME7SC5gEVTh4uNjtrr-EPLZP/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-medium rounded-xl hover:bg-purple-600 hover:text-white transition-colors duration-300"
                >
                  <Download size={20} className="mr-3" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-16 mt-16 border-t border-gray-200">
            <div className="flex gap-6 mb-4 sm:mb-0">
              <button onClick={() => scrollToSection('home')} className="text-purple-600 hover:text-purple-700 font-medium">Home</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-gray-700">Projects</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-700">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-700">Contact</button>
            </div>
            
            <div className="flex gap-4">
              <a href="https://github.com/Sridattasai18" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/kaligotla-sri-datta-sai-vithal-01bb2a321" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:kaligotlasridattasai18@gmail.com" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="text-center mt-8 text-gray-500 text-sm">
            ©2024 All Rights Reserved<br />
            Made by Kaligotla Sri Datta Sai Vithal
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
