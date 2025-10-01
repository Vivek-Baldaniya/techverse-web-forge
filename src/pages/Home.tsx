import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Smartphone,
  Globe,
  Zap,
  Users,
  Trophy,
  Star,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Cpu,
  Database,
  Shield,
} from "lucide-react";
import LogoSlider from "@/components/LogoSlider";

const Home = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Modern online store with AI-powered recommendations",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      tech: "React, Node.js, AI/ML",
    },
    {
      title: "Healthcare Management System",
      description: "Complete patient management with telemedicine features",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center",
      tech: "Next.js, PostgreSQL, WebRTC",
    },
    {
      title: "FinTech Mobile App",
      description: "Secure banking app with biometric authentication",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center",
      tech: "React Native, Blockchain, AI",
    },
    {
      title: "AI Analytics Dashboard",
      description: "Real-time business intelligence and predictive analytics",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      tech: "Python, TensorFlow, React",
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: Trophy },
    { number: "30+", label: "Happy Clients", icon: Users },
    { number: "5+", label: "Years Experience", icon: Star },
    { number: "24/7", label: "Support Available", icon: Zap },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [projects.length]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-40 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-200 rounded-full opacity-50"></div>
          <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-orange-200 rounded-full opacity-60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Transform Your Business with
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  Cutting-Edge Technology
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We help startups and enterprises build innovative digital
                solutions that drive growth, enhance efficiency, and create
                exceptional user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  <Link to="/contact" className="flex items-center">
                    Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  <Link to="/projects">View Our Work</Link>
                </Button>
              </div>
            </div>

            {/* Visual Elements Instead of Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-2xl">
                {/* Tech Icons Grid */}
                <div className="grid grid-cols-3 gap-6 mb-6">
                  <div
                    className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <Code className="h-8 w-8 text-blue-600 mx-auto" />
                  </div>
                  <div
                    className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <Smartphone className="h-8 w-8 text-green-600 mx-auto" />
                  </div>
                  <div
                    className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <Database className="h-8 w-8 text-purple-600 mx-auto" />
                  </div>
                  <div
                    className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <Globe className="h-8 w-8 text-orange-600 mx-auto" />
                  </div>
                  <div
                    className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <Cpu className="h-8 w-8 text-red-600 mx-auto" />
                  </div>
                  <div
                    className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <Shield className="h-8 w-8 text-indigo-600 mx-auto" />
                  </div>
                </div>

                {/* Central Element */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl text-center">
                  <Sparkles className="h-12 w-12 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold mb-2">
                    Innovation Powered
                  </h3>
                  <p className="text-sm opacity-90">
                    Building Tomorrow's Solutions Today
                  </p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 p-3 rounded-full shadow-lg animate-bounce">
                <Zap className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 p-3 rounded-full shadow-lg animate-pulse">
                <CheckCircle className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Slider */}
      <LogoSlider />

      {/* Projects Slider */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations
              through innovative technology solutions
            </p>
          </div>

          <div className="relative">
            <Card className="overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-80 lg:h-96 overflow-hidden">
                  <img
                    src={projects[currentProject].image}
                    alt={projects[currentProject].title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {projects[currentProject].tech}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {projects[currentProject].title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {projects[currentProject].description}
                  </p>
                  <Button
                    asChild
                    className="self-start bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Link to="/projects">View All Projects</Link>
                  </Button>
                </CardContent>
              </div>
            </Card>

            {/* Navigation Buttons */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentProject
                      ? "bg-gradient-to-r from-blue-600 to-purple-600"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                title: "Web Development",
                desc: "Custom websites and web applications",
              },
              {
                icon: Smartphone,
                title: "Mobile Apps",
                desc: "iOS and Android app development",
              },
              {
                icon: Globe,
                title: "Digital Marketing",
                desc: "SEO, social media, and online campaigns",
              },
              {
                icon: Zap,
                title: "AI Automation",
                desc: "Intelligent business process automation",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow p-6 text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4 group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                  <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can help you achieve your
            goals and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Link to="/contact" className="flex items-center">
                Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-blue-600 border-white hover:bg-gray-100 hover:text-blue-600"
            >
              <Link to="/projects">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
