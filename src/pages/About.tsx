
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Code, Database, Palette, Users, Clock, Target } from 'lucide-react';

const About = () => {
  const { primaryColor } = useTheme();

  const skills = [
    {
      category: 'Programming Languages',
      items: ['Python', 'Java', 'C', 'JavaScript', 'SQL'],
      icon: Code
    },
    {
      category: 'Web Development',
      items: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design'],
      icon: Palette
    },
    {
      category: 'Data Science',
      items: ['Pandas', 'Data Analysis', 'SQL', 'Jupyter Notebooks'],
      icon: Database
    },
    {
      category: 'Tools & Platforms',
      items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Canva'],
      icon: Target
    }
  ];

  const softSkills = [
    { name: 'Time Management', icon: Clock },
    { name: 'Problem Solving', icon: Target },
    { name: 'Team Collaboration', icon: Users },
    { name: 'Decision Making', icon: Target }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>
          <div className="w-24 h-1 mx-auto rounded-full mb-8" style={{ backgroundColor: primaryColor }}></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Professional Summary */}
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Professional Summary
            </h2>
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                I am a motivated and detail-oriented B.Tech student specializing in Artificial Intelligence 
                and Data Science at Vishnu Institute of Technology. My academic journey is complemented by 
                hands-on experience gained through virtual internships in both data science and front-end 
                web development.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                With a strong foundation in programming languages like Python, Java, and JavaScript, 
                I've developed proficiency in data analysis using Pandas and SQL, while also building 
                responsive web applications. My experience with tools like GitHub, VS Code, Figma, 
                and Canva has equipped me with both technical and design capabilities.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I maintain consistent learning habits through competitive coding and personal projects, 
                always eager to apply my technical and analytical skills to solve real-world challenges 
                in collaborative environments.
              </p>
            </div>
          </div>

          {/* Personal Info Card */}
          <div className="animate-fade-in">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Sri Datta Sai Vithal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Kaligotla Sri Datta Sai Vithal
                </h3>
                <p className="text-gray-600 dark:text-gray-400">AI & Data Science Student</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Location:</span>
                  <span className="text-gray-600 dark:text-gray-400">Andhra Pradesh, India</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Education:</span>
                  <span className="text-gray-600 dark:text-gray-400">B.Tech (2027)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Specialization:</span>
                  <span className="text-gray-600 dark:text-gray-400">AI & Data Science</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Experience:</span>
                  <span className="text-gray-600 dark:text-gray-400">2 Internships</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div
                      className="p-3 rounded-lg mr-3"
                      style={{ backgroundColor: `${primaryColor}20` }}
                    >
                      <Icon size={24} style={{ color: primaryColor }} />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm">
                      {skillGroup.category}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-lg"
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
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Soft Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div
                    className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${primaryColor}20` }}
                  >
                    <Icon size={24} style={{ color: primaryColor }} />
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white text-sm">
                    {skill.name}
                  </h3>
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
