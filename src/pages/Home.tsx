
import React from 'react';
import { ArrowRight, Download, Github, Briefcase, Contact, Code, Database, Palette, Star, GraduationCap, MapPin, Calendar, Award, ExternalLink, Mail, Phone, User, BookOpen, Globe, BarChart3, Linkedin } from 'lucide-react';

const Home = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Designed and developed a personal portfolio showcasing projects and skills with contact forms and social media links.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      icon: User,
      gradient: 'from-indigo-600 to-blue-600'
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
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-xl animate-drift"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/15 rounded-full filter blur-xl animate-float delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-10">
            <div className="w-full h-full bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full filter blur-2xl animate-glow"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Hi, I'm{' '}
                  <span className="blue-gradient-text animate-glow">
                    Sri Datta Sai Vithal
                  </span>
                </h1>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  <span className="px-4 py-2 glass-morphism rounded-full text-blue-300 text-sm font-medium border border-blue-400/30 hover-lift">
                    Data Science Student
                  </span>
                  <span className="px-4 py-2 glass-morphism rounded-full text-indigo-300 text-sm font-medium border border-indigo-400/30 hover-lift">
                    Frontend Developer
                  </span>
                  <span className="px-4 py-2 glass-morphism rounded-full text-cyan-300 text-sm font-medium border border-cyan-400/30 hover-lift">
                    Python Developer
                  </span>
                </div>
              </div>
              
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
                Aspiring Computer Science Engineering student eager to leverage foundational knowledge in software development and data science. Building real-world applications with passion and precision.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="group inline-flex items-center px-8 py-4 blue-gradient-bg hover:opacity-90 text-white font-semibold rounded-full transition-all duration-300 hover-lift hover-glow"
                >
                  <Briefcase size={20} className="mr-3" />
                  Explore My Work
                  <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <a
                  href="https://drive.google.com/file/d/1FVE9qc_gME7SC5gEVTh4uNjtrr-EPLZP/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 glass-morphism border border-blue-400/30 text-white font-semibold rounded-full hover:bg-blue-500/20 transition-all duration-300 hover-lift"
                >
                  <Download size={20} className="mr-3" />
                  View Resume
                </a>
              </div>
            </div>

            {/* Profile Image Side */}
            <div className="relative flex justify-center lg:justify-end animate-scale-in">
              <div className="relative">
                <div className="w-80 h-80 sm:w-96 sm:h-96">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                      <img 
                        src="https://iili.io/FH2CXIa.jpg" 
                        alt="Sri Datta Sai Vithal" 
                        className="w-full h-full object-cover object-center-top hover:scale-105 transition-transform duration-700" 
                        style={{ objectPosition: 'center 20%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 dark:from-blue-900 dark:via-indigo-900 dark:to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold blue-gradient-text mb-6">
              About Me
            </h2>
            <div className="w-24 h-2 mx-auto rounded-full blue-gradient-bg mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Passionate about leveraging technology to build innovative solutions and enhance technical expertise
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <h3 className="text-2xl font-bold blue-gradient-text mb-4">Career Objective</h3>
                <p className="mb-6">
                  Aspiring Computer Science Engineering (AI & Data Science) student eager to leverage foundational 
                  knowledge in software development and data science. Skilled in HTML, CSS, Python, Java, SQL, and basic C, 
                  with a strong interest in building real-world applications.
                </p>
                <p>
                  Seeking opportunities to contribute to innovative projects, enhance technical expertise, and grow as a 
                  professional in a dynamic tech environment.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 glass-morphism rounded-lg border border-blue-200/30">
                  <MapPin className="text-blue-600 mb-2" size={20} />
                  <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                  <p className="font-semibold">Bhimavaram, AP</p>
                </div>
                <div className="p-4 glass-morphism rounded-lg border border-blue-200/30">
                  <Phone className="text-blue-600 mb-2" size={20} />
                  <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                  <p className="font-semibold">8074684409</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold blue-gradient-text mb-6">Technical Skills</h3>
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Icon className="text-blue-600 mr-2" size={18} />
                        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-blue-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full blue-gradient-bg transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="grid md:grid-cols-4 gap-6">
            {['Communication', 'Collaboration', 'Creativity', 'Leadership'].map((skill, index) => (
              <div key={index} className="text-center p-6 glass-morphism rounded-lg border border-blue-200/30 hover-lift">
                <div className="w-12 h-12 mx-auto rounded-full blue-gradient-bg flex items-center justify-center mb-4">
                  <Star className="text-white" size={20} />
                </div>
                <h3 className="font-semibold blue-gradient-text">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold blue-gradient-text mb-6">
              Education
            </h2>
            <div className="w-24 h-2 mx-auto rounded-full blue-gradient-bg"></div>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-500"></div>
            
            <div className="space-y-8">
              {education.map((edu, index) => {
                const Icon = edu.icon;
                return (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover-lift">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                          {edu.period}
                        </span>
                        <Icon className="text-blue-600" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-blue-600 font-medium mb-2">{edu.institution}</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-100 dark:from-indigo-900 dark:via-blue-900 dark:to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold blue-gradient-text mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-2 mx-auto rounded-full blue-gradient-bg"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div key={index} className={`glass-morphism rounded-2xl p-8 border border-blue-200/30 hover-lift hover-glow animate-scale-in`}>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mr-6 animate-glow`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold blue-gradient-text">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold blue-gradient-text mb-6">
              Certifications & Achievements
            </h2>
            <div className="w-24 h-2 mx-auto rounded-full blue-gradient-bg"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center hover-lift">
                <div className="w-16 h-16 mx-auto rounded-full blue-gradient-bg flex items-center justify-center mb-4">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-blue-600 font-medium">{cert.provider}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate and bring innovative ideas to life through the power of technology and data science.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <a href="mailto:kaligotlasridattasai18@gmail.com" className="flex flex-col items-center p-6 glass-morphism rounded-lg border border-blue-400/30 hover-lift">
                <Mail className="text-blue-400 mb-2" size={24} />
                <span className="text-white font-medium">Email</span>
                <span className="text-gray-300 text-sm">kaligotlasridattasai18@gmail.com</span>
              </a>
              <a href="tel:8074684409" className="flex flex-col items-center p-6 glass-morphism rounded-lg border border-blue-400/30 hover-lift">
                <Phone className="text-blue-400 mb-2" size={24} />
                <span className="text-white font-medium">Phone</span>
                <span className="text-gray-300 text-sm">8074684409</span>
              </a>
              <a href="https://www.linkedin.com/in/kaligotla-sri-datta-sai-vithal-01bb2a321" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 glass-morphism rounded-lg border border-blue-400/30 hover-lift">
                <Linkedin className="text-blue-400 mb-2" size={24} />
                <span className="text-white font-medium">LinkedIn</span>
                <span className="text-gray-300 text-sm">Connect with me</span>
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/Sridattasai18"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover-lift hover:shadow-xl"
              >
                <Github size={20} className="mr-3" />
                View GitHub
              </a>
              <a
                href="https://drive.google.com/file/d/1FVE9qc_gME7SC5gEVTh4uNjtrr-EPLZP/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 hover-lift"
              >
                <Download size={20} className="mr-3" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
