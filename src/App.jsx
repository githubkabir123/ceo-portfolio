
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Globe,
  Award,
  Users,
  TrendingUp,
  Newspaper,
  Play,
  Download,
  ExternalLink,
  Star,
  Calendar,
  Building
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'achievements', 'vision', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });

      // Reveal animations
      const reveals = document.querySelectorAll('.scroll-reveal');
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    toast({
      title: "🚧 Contact feature coming soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleDownloadCV = () => {
    toast({
      title: "🚧 CV Download coming soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleSocialClick = (platform) => {
    toast({
      title: `🚧 ${platform} integration coming soon!`,
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Toaster />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold gradient-text"
            >
              TheDhakaXpress CEO
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Achievements', 'Vision', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-white hover:text-purple-300 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-purple-300' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden glass-effect"
          >
            <div className="px-4 py-2 space-y-2">
              {['Home', 'About', 'Achievements', 'Vision', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-white hover:text-purple-300 py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 news-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="mt-[100px] floating-animation">
              <img  
                className="w-48 h-48 rounded-full mx-auto border-4 border-purple-400 pulse-glow object-cover"
                alt="CEO of TheDhakaXpress"
               src="https://images.unsplash.com/photo-1585066039196-e30d097340be" />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                Leading Digital News
                <span className="block gradient-text typing-animation">in Dhaka</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                CEO & Visionary behind TheDhakaXpress - Transforming how Dhaka stays informed through innovative digital journalism
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3"
                onClick={handleDownloadCV}
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>

            <div className="flex justify-center space-x-6 pt-8">
              {[
                { icon: Linkedin, name: 'LinkedIn' },
                { icon: Twitter, name: 'Twitter' },
                { icon: Globe, name: 'Website' }
              ].map(({ icon: Icon, name }) => (
                <button
                  key={name}
                  onClick={() => handleSocialClick(name)}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Icon size={24} />
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="space-y-6 text-gray-300 text-lg">
                <p>
                  As the CEO of TheDhakaXpress, I lead one of Dhaka's most innovative digital news platforms, 
                  committed to delivering accurate, timely, and impactful journalism to our community.
                </p>
                <p>
                  With a passion for digital transformation and media innovation, I've spearheaded initiatives 
                  that have revolutionized how news is consumed and shared in Bangladesh's capital city.
                </p>
                <p>
                  My vision extends beyond traditional journalism - we're building a platform that empowers 
                  citizens, promotes transparency, and drives positive change in our society.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  { icon: Users, label: 'Team Members', value: '50+' },
                  { icon: Newspaper, label: 'Articles Published', value: '10K+' },
                  { icon: TrendingUp, label: 'Monthly Readers', value: '500K+' },
                  { icon: Award, label: 'Industry Awards', value: '15+' }
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="text-center p-4 glass-effect rounded-lg">
                    <Icon className="mx-auto mb-2 text-purple-400" size={32} />
                    <div className="text-2xl font-bold text-white">{value}</div>
                    <div className="text-sm text-gray-400">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="scroll-reveal">
              <div className="relative">
                <img  
                  className="rounded-2xl shadow-2xl w-full object-cover"
                  alt="CEO working at TheDhakaXpress office"
                 src="https://images.unsplash.com/photo-1574311382329-80bcc540bd52" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gradient-to-l from-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Key <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Milestones that define our journey in transforming digital journalism in Dhaka
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                year: '2024',
                title: 'Digital Innovation Award',
                description: 'Recognized for pioneering mobile-first journalism in Bangladesh',
                icon: Award
              },
              {
                year: '2023',
                title: 'Media Excellence Recognition',
                description: 'Outstanding contribution to digital media transformation',
                icon: Star
              },
              {
                year: '2023',
                title: 'Community Impact Leader',
                description: 'Leading social change through responsible journalism',
                icon: Users
              },
              {
                year: '2022',
                title: 'Tech Innovation in Media',
                description: 'Implementing AI-driven content curation systems',
                icon: TrendingUp
              },
              {
                year: '2022',
                title: 'Startup of the Year',
                description: 'TheDhakaXpress recognized as fastest-growing news platform',
                icon: Building
              },
              {
                year: '2021',
                title: 'Journalism Excellence',
                description: 'Setting new standards for digital news delivery',
                icon: Newspaper
              }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center mb-4">
                  <achievement.icon className="text-purple-400 mr-3" size={24} />
                  <span className="text-purple-300 font-semibold">{achievement.year}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Future <span className="gradient-text">Vision</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Shaping the future of digital journalism and media innovation in Bangladesh
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <img  
                className="rounded-2xl shadow-2xl w-full object-cover"
                alt="Future vision of digital newsroom"
               src="https://images.unsplash.com/photo-1678995635432-d9e89c7a8fc5" />
            </div>

            <div className="scroll-reveal space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white">Transforming Digital Media</h3>
                <p className="text-gray-300 text-lg">
                  Our vision extends beyond traditional news delivery. We're building an ecosystem 
                  that leverages cutting-edge technology to create immersive, interactive, and 
                  personalized news experiences.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  'AI-powered personalized news curation',
                  'Real-time citizen journalism platform',
                  'Multilingual content accessibility',
                  'Interactive data visualization',
                  'Community-driven fact-checking',
                  'Mobile-first video journalism'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                onClick={() => handleSocialClick('Vision Details')}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Learn More About Our Vision
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to collaborate, discuss opportunities, or learn more about TheDhakaXpress? 
              Let's connect and explore possibilities together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="scroll-reveal space-y-8">
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: 'Email',
                    content: 'ceo@thedhakaxpress.com',
                    description: 'Drop me a line anytime'
                  },
                  {
                    icon: Phone,
                    title: 'Phone',
                    content: '+880 1XXX-XXXXXX',
                    description: 'Available during business hours'
                  },
                  {
                    icon: MapPin,
                    title: 'Office',
                    content: 'Dhaka, Bangladesh',
                    description: 'TheDhakaXpress Headquarters'
                  }
                ].map(({ icon: Icon, title, content, description }) => (
                  <div key={title} className="flex items-start space-x-4">
                    <div className="bg-purple-600 p-3 rounded-lg">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{title}</h3>
                      <p className="text-purple-300 font-medium">{content}</p>
                      <p className="text-gray-400">{description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Follow Our Journey</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Linkedin, name: 'LinkedIn' },
                    { icon: Twitter, name: 'Twitter' },
                    { icon: Globe, name: 'Website' }
                  ].map(({ icon: Icon, name }) => (
                    <button
                      key={name}
                      onClick={() => handleSocialClick(name)}
                      className="bg-slate-800 hover:bg-purple-600 p-3 rounded-lg transition-colors"
                    >
                      <Icon className="text-white" size={20} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="scroll-reveal">
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleContactClick(); }}>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Tell me about your project or inquiry..."
                    ></textarea>
                  </div>
                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text mb-4">TheDhakaXpress CEO</div>
            <p className="text-gray-400 mb-6">
              Leading digital journalism innovation in Dhaka, Bangladesh
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              {[
                { icon: Linkedin, name: 'LinkedIn' },
                { icon: Twitter, name: 'Twitter' },
                { icon: Globe, name: 'Website' },
                { icon: Mail, name: 'Email' }
              ].map(({ icon: Icon, name }) => (
                <button
                  key={name}
                  onClick={() => handleSocialClick(name)}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Icon size={20} />
                </button>
              ))}
            </div>
            <div className="border-t border-slate-800 pt-8">
              <p className="text-gray-500">
                © 2024 TheDhakaXpress. All rights reserved. | Transforming digital journalism in Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
