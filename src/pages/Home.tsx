
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { ArrowRight, Download, Github, Briefcase, Contact, Code, Database, Palette, Star } from 'lucide-react';

const Home = () => {
  const { primaryColor } = useTheme();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section with Modern Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/20 rounded-full filter blur-xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                    Sri Datta Sai Vithal
                  </span>
                </h1>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-cyan-300 text-sm font-medium border border-white/20">
                    AI Enthusiast
                  </span>
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-purple-300 text-sm font-medium border border-white/20">
                    Data Scientist
                  </span>
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-pink-300 text-sm font-medium border border-white/20">
                    Front End Developer
                  </span>
                </div>
              </div>
              
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
                Passionate B.Tech student crafting intelligent solutions through AI, Data Science, and modern web technologies. 
                Building the future, one algorithm at a time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  to="/projects" 
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-purple-500/25"
                >
                  <Briefcase size={20} className="mr-3" />
                  Explore My Work
                  <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <Contact size={20} className="mr-3" />
                  Let's Connect
                </Link>
              </div>
            </div>

            {/* Profile Image Side */}
            <div className="relative flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                {/* Floating Elements */}
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl rotate-12 animate-bounce opacity-80"></div>
                <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl -rotate-12 animate-bounce delay-1000 opacity-80"></div>
                
                {/* Main Profile Container */}
                <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                  {/* Animated Ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 p-1 animate-spin-slow">
                    <div className="w-full h-full rounded-full bg-slate-900"></div>
                  </div>
                  
                  {/* Profile Image */}
                  <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-2xl">
                    <img 
                      src="https://iili.io/FH2CXIa.jpg" 
                      alt="Sri Datta Sai Vithal" 
                      className="w-full h-full object-cover object-center-top hover:scale-110 transition-transform duration-500" 
                      style={{ objectPosition: 'center 20%' }}
                    />
                  </div>
                  
                  {/* Floating Skill Badges */}
                  <div className="absolute -top-8 left-8 px-3 py-2 bg-blue-500/90 backdrop-blur-md rounded-lg text-white text-sm font-medium animate-float">
                    <Code size={16} className="inline mr-1" />
                    Python
                  </div>
                  <div className="absolute top-16 -right-12 px-3 py-2 bg-green-500/90 backdrop-blur-md rounded-lg text-white text-sm font-medium animate-float delay-500">
                    <Database size={16} className="inline mr-1" />
                    AI/ML
                  </div>
                  <div className="absolute -bottom-8 right-8 px-3 py-2 bg-purple-500/90 backdrop-blur-md rounded-lg text-white text-sm font-medium animate-float delay-1000">
                    <Palette size={16} className="inline mr-1" />
                    React
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Years of Study', value: '3+', icon: '🎓' },
              { label: 'Projects Built', value: '5+', icon: '🚀' },
              { label: 'Internships', value: '2', icon: '💼' },
              { label: 'Tech Stack', value: '10+', icon: '⚡' }
            ].map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-2xl flex items-center justify-center text-2xl group-hover:rotate-12 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: primaryColor }}>
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Showcase */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technology Arsenal
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: primaryColor }}></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Python', color: 'from-blue-500 to-blue-600' },
              { name: 'JavaScript', color: 'from-yellow-500 to-yellow-600' },
              { name: 'React', color: 'from-cyan-500 to-cyan-600' },
              { name: 'SQL', color: 'from-green-500 to-green-600' },
              { name: 'Pandas', color: 'from-purple-500 to-purple-600' },
              { name: 'Java', color: 'from-red-500 to-red-600' }
            ].map((skill, index) => (
              <div key={index} className="group">
                <div className={`relative bg-gradient-to-r ${skill.color} p-6 rounded-2xl text-white text-center font-semibold hover:scale-105 transition-all duration-300 hover:shadow-xl cursor-pointer`}>
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative z-10">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="flex justify-center">
              <Star className="w-16 h-16 text-yellow-400 animate-pulse" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate and bring innovative ideas to life through the power of AI and modern technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/Sridattasai18"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Github size={20} className="mr-3" />
                View GitHub
              </a>
              <button className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105">
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
