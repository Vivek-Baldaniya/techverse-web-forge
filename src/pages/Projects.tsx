import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Eye } from 'lucide-react';
import { HeroSection } from '@/components/HeroSection';

const Projects = () => {
  const projects = [
    {
      title: "RuviTech",
      description: "End-to-end tech solutions designed for business transformation and growth. Expert guidance and support for IT projects, ensuring successful implementation and management.",
      image: "/images/ruvitech.png",
      technologies: ["React", "Node.js", "Cloud Services", "Salesforce"],
      liveUrl: "https://www.ruvitech.co/",
      features: ["Business Transformation", "IT Consulting", "Cloud Solutions", "Digital Modernization"]
    },
    {
      title: "Tint Wrap Protect",
      description: "Ultimate car protection services specializing in vehicle tinting, wrapping, and protection. Enhance your vehicle's style and protection with professional services.",
      image: "/images/tintwrapprotect.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      liveUrl: "https://www.tintwrapprotect.com/home",
      features: ["Car Tinting", "Vehicle Wrapping", "Paint Protection", "Professional Installation"]
    },
    {
      title: "Palace Dekho",
      description: "Comprehensive wedding planning platform connecting couples with palace venues across India. Plan your dream wedding with personalized services and venue management.",
      image: "/images/palacedekho.png",
      technologies: ["React", "PHP", "MySQL", "WordPress"],
      liveUrl: "https://palacedekho.com/",
      features: ["Venue Booking", "Wedding Planning", "Partner Network", "Event Management"]
    },
    {
      title: "Flying Eagle",
      description: "Innovative web development agency creating thoughtful and purposeful websites. Discover features that make your website beautiful and functional for global clients.",
      image: "/images/flying-eagle.png",
      technologies: ["React", "Firebase", "Modern Design", "Responsive Web"],
      liveUrl: "https://flying-eagle-56d1a.web.app/",
      features: ["Website Development", "Modern Design", "Client Portal", "Global Services"]
    },
    {
      title: "ClickShop Direct",
      description: "E-commerce platform offering personalized gifts and products with free next-day delivery. Complete online shopping experience with extensive gift categories.",
      image: "/images/clickshop.png",
      technologies: ["Shopify", "E-commerce", "Payment Gateway", "Inventory Management"],
      liveUrl: "https://clickshopdirect.co.uk/",
      features: ["Gift Personalization", "Next Day Delivery", "Multiple Categories", "Secure Payments"]
    },
    {
      title: "Mathak Primary School",
      description: "Educational institution website showcasing school facilities, activities, and information. Comprehensive platform for students, parents, and faculty communication.",
      image: "/images/mathak-school.png",
      technologies: ["HTML", "CSS", "JavaScript", "Educational CMS"],
      liveUrl: "https://vivek-baldaniya.github.io/Mathak-Primary-School-Website/",
      features: ["School Information", "Faculty Details", "Student Activities", "Contact Management"]
    }
  ];

  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" },
    { value: "15+", label: "Industries Served" },
    { value: "99%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection 
        title="Our"
        highlightText="Projects"
        description="Explore our portfolio of successful projects across various industries and technologies. Each project represents our commitment to excellence and innovation."
      >
        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </HeroSection>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-0 bg-white/80 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button asChild size="sm" variant="secondary" className="mr-2">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Eye className="h-4 w-4 mr-1" />
                        Preview
                      </a>
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Action Button */}
                  <div className="flex space-x-3">
                    <Button asChild size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Deliver Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven project delivery methodology ensures consistent results and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Planning & Strategy</h3>
              <p className="text-gray-600">
                We start with thorough requirement analysis and create a detailed project roadmap 
                that aligns with your business objectives.
              </p>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Development & Testing</h3>
              <p className="text-gray-600">
                Our agile development process includes continuous testing and regular client feedback 
                to ensure the highest quality deliverables.
              </p>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Launch & Support</h3>
              <p className="text-gray-600">
                We handle deployment and provide comprehensive support to ensure your solution 
                performs optimally in production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a solution that exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <a href="/contact">Get Free Quote</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              <a href="/services">View Services</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;