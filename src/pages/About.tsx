
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Code, Database, Palette, Users, Clock, Target, BookOpen, Calendar, MapPin } from 'lucide-react';

const About = () => {
  const { primaryColor } = useTheme();

  const skills = [
    {
      category: 'Programming Languages',
      items: ['Python', 'Java', 'C', 'JavaScript', 'SQL'],
      icon: Code,
      progress: 85
    },
    {
      category: 'Web Development',
      items: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      icon: Palette,
      progress: 80
    },
    {
      category: 'Data Science',
      items: ['Pandas', 'Data Analysis', 'SQL', 'Jupyter Notebooks'],
      icon: Database,
      progress: 90
    },
    {
      category: 'Tools & Platforms',
      items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Canva'],
      icon: Target,
      progress: 75
    }
  ];

  const timeline = [
    {
      year: '2021',
      title: 'Started B.Tech Journey',
      description: 'Began my studies in Artificial Intelligence and Data Science at Vishnu Institute of Technology',
      icon: BookOpen
    },
    {
      year: '2022',
      title: 'First Programming Projects',
      description: 'Developed foundational skills in Python and Java, creating my first data analysis projects',
      icon: Code
    },
    {
      year: '2023',
      title: 'Web Development & Internships',
      description: 'Completed virtual internships in Data Science and Front-end Development',
      icon: Palette
    },
    {
      year: '2024',
      title: 'Advanced Projects',
      description: 'Building comprehensive portfolio projects and preparing for industry challenges',
      icon: Target
    }
  ];

  const softSkills = [
    { name: 'Time Management', icon: Clock, level: 90 },
    { name: 'Problem Solving', icon: Target, level: 85 },
    { name: 'Team Collaboration', icon: Users, level: 80 },
    { name: 'Decision Making', icon: Target, level: 85 }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 dark:from-gray-900 dark:via-blue-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Quote Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-bold blue-gradient-text mb-8 leading-tight">
              About Me
            </h1>
            <div className="absolute -top-4 -left-4 text-6xl text-blue-200 dark:text-blue-800 opacity-50">"</div>
            <div className="absolute -bottom-4 -right-4 text-6xl text-blue-200 dark:text-blue-800 opacity-50">"</div>
          </div>
          <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto italic leading-relaxed">
            I am a motivated and detail-oriented B.Tech student who believes in the power of technology 
            to solve real-world problems and create meaningful impact.
          </blockquote>
        </div>

        {/* Main Bio Section */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Personal Info Card */}
          <div className="lg:col-span-1 animate-slide-up">
            <div className="glass-morphism rounded-3xl p-8 border border-blue-200/30 hover-lift">
              <div className="text-center mb-8">
                <div className="w-24 h-24 mx-auto rounded-full blue-gradient-bg flex items-center justify-center mb-6 animate-glow">
                  <span className="text-2xl font-bold text-white">SD</span>
                </div>
                <h3 className="text-2xl font-bold blue-gradient-text mb-2">
                  Kaligotla Sri Datta Sai Vithal
                </h3>
                <p className="text-gray-600 dark:text-gray-400">AI & Data Science Student</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin size={20} className="text-blue-500 mr-3" />
                  <div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Location</span>
                    <p className="text-gray-600 dark:text-gray-400">Andhra Pradesh, India</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <BookOpen size={20} className="text-teal-500 mr-3" />
                  <div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Education</span>
                    <p className="text-gray-600 dark:text-gray-400">B.Tech AI & Data Science (2027)</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar size={20} className="text-cyan-500 mr-3" />
                  <div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Experience</span>
                    <p className="text-gray-600 dark:text-gray-400">2 Virtual Internships</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="lg:col-span-2 animate-fade-in">
            <div className="space-y-8">
              <div className="glass-morphism rounded-3xl p-8 border border-blue-200/30 hover-lift">
                <h2 className="text-3xl font-bold blue-gradient-text mb-6">
                  Professional Journey
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    My academic journey at Vishnu Institute of Technology is complemented by hands-on experience 
                    gained through virtual internships in both data science and front-end web development. 
                    This combination has given me a unique perspective on bridging the gap between data insights 
                    and user-friendly applications.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    With a strong foundation in programming languages like Python, Java, and JavaScript, 
                    I've developed proficiency in data analysis using Pandas and SQL. My experience with 
                    modern development tools has equipped me with both analytical and technical capabilities 
                    essential for today's data-driven world.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    I maintain consistent learning habits through personal projects and competitive coding, 
                    always eager to apply my technical and analytical skills to solve real-world challenges 
                    in collaborative environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center blue-gradient-text mb-16">
            My Journey
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full blue-gradient-bg rounded-full"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-slide-up`} style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="glass-morphism rounded-2xl p-6 border border-blue-200/30 hover-lift">
                        <div className="text-2xl font-bold blue-gradient-text mb-2">{item.year}</div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                      </div>
                    </div>
                    
                    <div className="relative z-10 w-16 h-16 mx-auto rounded-full blue-gradient-bg flex items-center justify-center animate-glow">
                      <Icon size={24} className="text-white" />
                    </div>
                    
                    <div className="w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Technical Skills with Progress */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center blue-gradient-text mb-16">
            Technical Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon;
              return (
                <div
                  key={index}
                  className="glass-morphism rounded-2xl p-8 border border-blue-200/30 hover-lift animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-xl blue-gradient-bg flex items-center justify-center mr-4">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold blue-gradient-text">
                      {skillGroup.category}
                    </h3>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="blue-gradient-bg h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skillGroup.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 mt-1 block">{skillGroup.progress}% Proficiency</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="text-sm text-gray-700 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30 px-3 py-2 rounded-lg border border-blue-200/30"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h2 className="text-4xl font-bold text-center blue-gradient-text mb-16">
            Personal Strengths
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="glass-morphism rounded-2xl p-6 text-center border border-blue-200/30 hover-lift animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto rounded-full blue-gradient-bg flex items-center justify-center mb-4 animate-glow">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold blue-gradient-text mb-2">
                    {skill.name}
                  </h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                    <div 
                      className="blue-gradient-bg h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
