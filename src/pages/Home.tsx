
import React from 'react';
import { ArrowRight, Download, Github, Briefcase, Contact, Code, Database, Palette, Star, GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const Home = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full filter blur-xl animate-drift"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/15 rounded-full filter blur-xl animate-float delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-10">
            <div className="w-full h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full filter blur-2xl animate-glow"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Hi, I'm{' '}
                  <span className="purple-gradient-text animate-glow">
                    Sri Datta Sai Vithal
                  </span>
                </h1>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  <span className="px-4 py-2 glass-morphism rounded-full text-purple-300 text-sm font-medium border border-purple-400/30 hover-lift">
                    Data Scientist
                  </span>
                  <span className="px-4 py-2 glass-morphism rounded-full text-pink-300 text-sm font-medium border border-pink-400/30 hover-lift">
                    Front End Developer
                  </span>
                  <span className="px-4 py-2 glass-morphism rounded-full text-violet-300 text-sm font-medium border border-violet-400/30 hover-lift">
                    Python Developer
                  </span>
                </div>
              </div>
              
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
                Passionate B.Tech student crafting intelligent solutions through Data Science and modern web technologies. 
                Building the future, one algorithm at a time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="group inline-flex items-center px-8 py-4 purple-gradient-bg hover:opacity-90 text-white font-semibold rounded-full transition-all duration-300 hover-lift hover-glow"
                >
                  <Briefcase size={20} className="mr-3" />
                  Explore My Work
                  <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center px-8 py-4 glass-morphism border border-purple-400/30 text-white font-semibold rounded-full hover:bg-purple-500/20 transition-all duration-300 hover-lift"
                >
                  <Contact size={20} className="mr-3" />
                  Let's Connect
                </button>
              </div>
            </div>

            {/* Profile Image Side */}
            <div className="relative flex justify-center lg:justify-end animate-scale-in">
              <div className="relative">
                <div className="w-80 h-80 sm:w-96 sm:h-96">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
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
      <section id="about" className="section-padding lavender-gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold purple-gradient-text mb-4">
              About Me
            </h2>
            <div className="w-24 h-2 mx-auto rounded-full purple-gradient-bg"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="mb-4">
                  I'm a passionate B.Tech student specializing in Data Science and web development. 
                  My journey combines analytical thinking with creative problem-solving to build 
                  innovative solutions that make a difference.
                </p>
                <p>
                  With expertise in Python, JavaScript, and modern frameworks, I focus on creating 
                  data-driven applications and engaging user experiences. I'm always eager to learn 
                  new technologies and tackle challenging projects.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 glass-morphism rounded-lg border border-purple-200/30">
                  <MapPin className="text-purple-600 mb-2" size={20} />
                  <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                  <p className="font-semibold">India</p>
                </div>
                <div className="p-4 glass-morphism rounded-lg border border-purple-200/30">
                  <Calendar className="text-purple-600 mb-2" size={20} />
                  <p className="text-sm text-gray-600 dark:text-gray-400">Experience</p>
                  <p className="font-semibold">3+ Years</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                { skill: 'Python', level: 90 },
                { skill: 'JavaScript', level: 85 },
                { skill: 'Data Science', level: 88 },
                { skill: 'SQL', level: 82 },
                { skill: 'Web Development', level: 87 }
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{item.skill}</span>
                    <span className="text-purple-600">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full purple-gradient-bg transition-all duration-1000"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold purple-gradient-text mb-4">
              Education & Experience
            </h2>
            <div className="w-24 h-2 mx-auto rounded-full purple-gradient-bg"></div>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
            
            <div className="space-y-8">
              {[
                {
                  year: "2022 - Present",
                  title: "B.Tech in Computer Science",
                  institution: "University",
                  description: "Specializing in Data Science and Software Development"
                },
                {
                  year: "2023",
                  title: "Frontend Development Internship",
                  institution: "Tech Company",
                  description: "Developed responsive web applications using modern frameworks"
                },
                {
                  year: "2024",
                  title: "Data Science Internship",
                  institution: "Analytics Firm",
                  description: "Worked on machine learning models and data visualization"
                }
              ].map((item, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover-lift">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                        {item.year}
                      </span>
                      <GraduationCap className="text-purple-600" size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-purple-600 font-medium mb-2">{item.institution}</p>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding violet-gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-2 mx-auto rounded-full bg-white/30"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Data Analytics Dashboard",
                description: "Interactive dashboard for data visualization and analysis",
                tech: ["Python", "Pandas", "JavaScript"],
                status: "Completed"
              },
              {
                title: "E-commerce Web App",
                description: "Modern e-commerce platform with responsive design",
                tech: ["JavaScript", "HTML/CSS", "SQL"],
                status: "In Progress"
              },
              {
                title: "Machine Learning Model",
                description: "Predictive model for business analytics",
                tech: ["Python", "Data Science", "SQL"],
                status: "Completed"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover-lift hover-glow">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-300' 
                        : 'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-300">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300">
                  View Project
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gradient-to-r from-purple-900 via-slate-900 to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="flex justify-center">
              <Star className="w-16 h-16 text-yellow-400 animate-glow" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate and bring innovative ideas to life through the power of Data Science and modern technology.
            </p>
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
              <button className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 hover-lift">
                <Download size={20} className="mr-3" />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
