
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { ArrowRight, Download, Github, Briefcase, Contact, Code, Database, Palette, Star } from 'lucide-react';

const Home = () => {
  const { primaryColor } = useTheme();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section with Blue Theme */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-xl animate-drift"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/15 rounded-full filter blur-xl animate-float delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-10">
            <div className="w-full h-full bg-gradient-to-r from-blue-400 to-teal-400 rounded-full filter blur-2xl animate-glow"></div>
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
                    Data Scientist
                  </span>
                  <span className="px-4 py-2 glass-morphism rounded-full text-teal-300 text-sm font-medium border border-teal-400/30 hover-lift">
                    Front End Developer
                  </span>
                  <span className="px-4 py-2 glass-morphism rounded-full text-cyan-300 text-sm font-medium border border-cyan-400/30 hover-lift">
                    Python Developer
                  </span>
                </div>
              </div>
              
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
                Passionate B.Tech student crafting intelligent solutions through Data Science and modern web technologies. 
                Building the future, one algorithm at a time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  to="/projects" 
                  className="group inline-flex items-center px-8 py-4 blue-gradient-bg hover:opacity-90 text-white font-semibold rounded-full transition-all duration-300 hover-lift hover-glow"
                >
                  <Briefcase size={20} className="mr-3" />
                  Explore My Work
                  <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-8 py-4 glass-morphism border border-blue-400/30 text-white font-semibold rounded-full hover:bg-blue-500/20 transition-all duration-300 hover-lift"
                >
                  <Contact size={20} className="mr-3" />
                  Let's Connect
                </Link>
              </div>
            </div>

            {/* Elegant Profile Image Side */}
            <div className="relative flex justify-center lg:justify-end animate-scale-in">
              <div className="relative">
                {/* Glass Morphism Container */}
                <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                  {/* Elegant Glass Frame */}
                  <div className="absolute inset-0 glass-morphism rounded-3xl shadow-2xl border border-blue-400/30 animate-glow"></div>
                  
                  {/* Profile Image */}
                  <div className="absolute inset-4 rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://iili.io/FH2CXIa.jpg" 
                      alt="Sri Datta Sai Vithal" 
                      className="w-full h-full object-cover object-center-top hover:scale-105 transition-transform duration-700" 
                      style={{ objectPosition: 'center 20%' }}
                    />
                  </div>
                  
                  {/* Elegant Skill Indicators */}
                  <div className="absolute -top-6 left-8 px-4 py-2 glass-morphism rounded-xl text-white text-sm font-medium border border-blue-400/30 animate-float">
                    <Code size={16} className="inline mr-2" />
                    Python
                  </div>
                  <div className="absolute top-16 -right-8 px-4 py-2 glass-morphism rounded-xl text-white text-sm font-medium border border-teal-400/30 animate-float delay-500">
                    <Database size={16} className="inline mr-2" />
                    Data Science
                  </div>
                  <div className="absolute -bottom-6 right-8 px-4 py-2 glass-morphism rounded-xl text-white text-sm font-medium border border-cyan-400/30 animate-float delay-1000">
                    <Palette size={16} className="inline mr-2" />
                    JavaScript
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Blue Theme */}
      <section className="py-20 sage-gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Years of Study', value: '3+', icon: '🎓' },
              { label: 'Projects Built', value: '5+', icon: '🚀' },
              { label: 'Internships', value: '2', icon: '💼' },
              { label: 'Tech Stack', value: '8+', icon: '⚡' }
            ].map((stat, index) => (
              <div key={index} className="text-center group hover-lift">
                <div className="w-20 h-20 mx-auto mb-4 glass-morphism rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform border border-blue-400/20">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold mb-2 blue-gradient-text">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Showcase with Blue Theme */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold blue-gradient-text mb-4">
              Technology Arsenal
            </h2>
            <div className="w-24 h-2 mx-auto rounded-full blue-gradient-bg"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Python', gradient: 'from-blue-500 to-blue-600' },
              { name: 'JavaScript', gradient: 'from-teal-500 to-teal-600' },
              { name: 'SQL', gradient: 'from-cyan-500 to-cyan-600' },
              { name: 'Pandas', gradient: 'from-blue-600 to-purple-600' },
              { name: 'Java', gradient: 'from-indigo-500 to-blue-600' },
              { name: 'HTML/CSS', gradient: 'from-teal-600 to-blue-500' }
            ].map((skill, index) => (
              <div key={index} className="group">
                <div className={`relative bg-gradient-to-r ${skill.gradient} p-6 rounded-2xl text-white text-center font-semibold hover-lift hover-glow cursor-pointer`}>
                  <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative z-10">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Blue Theme */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-slate-900 to-blue-800 relative overflow-hidden">
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
