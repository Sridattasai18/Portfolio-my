
import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Home, User, BookOpen, Briefcase, Contact, Sun, Moon, Palette, Menu, X } from 'lucide-react';

const Navigation = () => {
  const { theme, toggleTheme, primaryColor, setPrimaryColor } = useTheme();
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { section: 'home', label: 'Home' },
    { section: 'projects', label: 'Projects' },
    { section: 'about', label: 'About' },
    { section: 'contact', label: 'Contact' },
  ];

  const colorOptions = [
    '#8b5cf6', '#ec4899', '#6366f1', '#f59e0b', '#10b981', '#ef4444', '#06b6d4', '#84cc16'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gray-900/90 border-gray-700' 
        : 'bg-white/90 border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="relative">
              <span className={`text-2xl font-black tracking-tight transition-colors duration-300 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent' 
                  : 'bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent'
              }`}>
                SDSV
              </span>
              <div 
                className="absolute -bottom-1 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ backgroundColor: primaryColor }}
              ></div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ section, label }) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`font-medium transition-colors duration-300 relative group ${
                  theme === 'dark' ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'
                }`}
                style={{
                  '--hover-color': primaryColor
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = primaryColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = theme === 'dark' ? '#d1d5db' : '#4b5563';
                }}
              >
                {label}
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: primaryColor }}
                ></span>
              </button>
            ))}
          </div>

          {/* Theme Controls */}
          <div className="flex items-center space-x-2">
            <div className="hidden md:flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  theme === 'dark' 
                    ? 'hover:bg-gray-700 text-gray-300' 
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              
              <div className="relative">
                <button
                  onClick={() => setShowColorPicker(!showColorPicker)}
                  className={`p-2 rounded-lg transition-colors duration-300 ${
                    theme === 'dark' 
                      ? 'hover:bg-gray-700 text-gray-300' 
                      : 'hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  <Palette size={18} />
                </button>
                
                {showColorPicker && (
                  <div className={`absolute right-0 mt-2 p-3 rounded-lg shadow-lg border transition-colors duration-300 ${
                    theme === 'dark' 
                      ? 'bg-gray-800 border-gray-700' 
                      : 'bg-white border-gray-200'
                  }`}>
                    <div className="grid grid-cols-4 gap-2">
                      {colorOptions.map((color) => (
                        <button
                          key={color}
                          onClick={() => {
                            setPrimaryColor(color);
                            setShowColorPicker(false);
                          }}
                          className={`w-8 h-8 rounded-full border-2 hover:scale-110 transition-transform ${
                            primaryColor === color 
                              ? theme === 'dark' ? 'border-gray-300' : 'border-gray-400'
                              : theme === 'dark' ? 'border-gray-600' : 'border-gray-200'
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                theme === 'dark' 
                  ? 'hover:bg-gray-700 text-gray-300' 
                  : 'hover:bg-gray-100 text-gray-600'
              }`}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className={`md:hidden py-4 border-t transition-colors duration-300 ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-100'
          }`}>
            {navItems.map(({ section, label }) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left px-3 py-2 font-medium transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'
                }`}
                style={{
                  '--hover-color': primaryColor
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = primaryColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = theme === 'dark' ? '#d1d5db' : '#4b5563';
                }}
              >
                {label}
              </button>
            ))}
            
            <div className={`flex items-center justify-between px-3 py-2 mt-4 border-t transition-colors duration-300 ${
              theme === 'dark' ? 'border-gray-700' : 'border-gray-100'
            }`}>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  theme === 'dark' 
                    ? 'hover:bg-gray-700 text-gray-300' 
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              
              <button
                onClick={() => setShowColorPicker(!showColorPicker)}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  theme === 'dark' 
                    ? 'hover:bg-gray-700 text-gray-300' 
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                <Palette size={18} />
              </button>
            </div>

            {/* Mobile Color Picker */}
            {showColorPicker && (
              <div className={`mt-4 mx-3 p-3 rounded-lg border transition-colors duration-300 ${
                theme === 'dark' 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-gray-50 border-gray-200'
              }`}>
                <div className="grid grid-cols-4 gap-2">
                  {colorOptions.map((color) => (
                    <button
                      key={color}
                      onClick={() => {
                        setPrimaryColor(color);
                        setShowColorPicker(false);
                      }}
                      className={`w-8 h-8 rounded-full border-2 hover:scale-110 transition-transform ${
                        primaryColor === color 
                          ? theme === 'dark' ? 'border-gray-300' : 'border-gray-400'
                          : theme === 'dark' ? 'border-gray-600' : 'border-gray-200'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
