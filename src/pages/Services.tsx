import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Smartphone,
  Zap,
  Database,
  Palette,
  ShoppingCart,
  Search,
  Settings,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HeroSection } from "@/components/HeroSection";

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "IT Consulting & Project Management",
      description:
        "Strategic technology consulting and end-to-end project management to ensure successful digital transformation initiatives.",
      features: [
        "Technology Strategy & Planning",
        "Digital Transformation Consulting",
        "Project Management & Delivery",
        "Risk Assessment & Mitigation",
        "Vendor Selection & Management",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Code,
      title: "Website & Software Development",
      description:
        "Custom web applications and software solutions built with modern technologies and best practices.",
      features: [
        "Custom Web Applications",
        "Enterprise Software Solutions",
        "Progressive Web Apps (PWA)",
        "Cloud-Native Development",
        "Legacy System Modernization",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Zap,
      title: "API & System Integration",
      description:
        "Seamless integration of systems and third-party services to create unified, efficient workflows.",
      features: [
        "RESTful API Development",
        "Third-party Integrations",
        "Microservices Architecture",
        "Data Synchronization",
        "Legacy System Integration",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Zap,
      title: "AI & Business Automation",
      description:
        "Intelligent automation solutions that streamline processes and enhance decision-making capabilities.",
      features: [
        "Process Automation",
        "AI/ML Model Development",
        "Chatbots & Virtual Assistants",
        "Predictive Analytics",
        "Workflow Optimization",
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Database,
      title: "Database Management & Analytics",
      description:
        "Comprehensive data solutions from database design to advanced analytics and business intelligence.",
      features: [
        "Database Design & Optimization",
        "Data Migration & Integration",
        "Business Intelligence Dashboards",
        "Real-time Analytics",
        "Data Security & Backup",
      ],
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description:
        "Creative design solutions that enhance brand identity and improve user experience across all touchpoints.",
      features: [
        "Brand Identity Design",
        "UI/UX Design",
        "Marketing Materials",
        "Website Graphics",
        "Print & Digital Design",
      ],
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description:
        "Complete e-commerce platforms built on Shopify, Magento, and custom solutions to maximize online sales.",
      features: [
        "Shopify Store Development",
        "Magento Customization",
        "Payment Gateway Integration",
        "Inventory Management",
        "Multi-channel Selling",
      ],
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Search,
      title: "Digital Marketing & SEO",
      description:
        "Comprehensive digital marketing strategies to increase online visibility and drive qualified traffic.",
      features: [
        "Search Engine Optimization",
        "Pay-Per-Click Advertising",
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing Campaigns",
      ],
      color: "from-red-500 to-red-600",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
      features: [
        "Native iOS & Android Apps",
        "Cross-platform Development",
        "App Store Optimization",
        "Mobile Backend Services",
        "App Maintenance & Updates",
      ],
      color: "from-cyan-500 to-cyan-600",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We analyze your requirements and create a detailed project roadmap.",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description:
        "Our team creates wireframes and prototypes for your approval.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "We build your solution using agile methodology with rigorous testing.",
    },
    {
      step: "04",
      title: "Launch & Support",
      description:
        "We deploy your solution and provide ongoing maintenance and support.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Our"
        highlightText="Services"
        description="Comprehensive technology solutions designed to accelerate your business growth and digital transformation journey."
      />

      {/* Services Grid */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your project is delivered
              on time, within budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-xl transition-all duration-300 relative border-0 bg-white/80 backdrop-blur-sm"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>

                {/* Arrow for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-gray-300" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and frameworks to build
              robust, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "React", logo: "⚛️" },
              { name: "Node.js", logo: "🟢" },
              { name: "Python", logo: "🐍" },
              { name: "AWS", logo: "☁️" },
              { name: "Docker", logo: "🐳" },
              { name: "MongoDB", logo: "🍃" },
              { name: "PostgreSQL", logo: "🐘" },
              { name: "GraphQL", logo: "🔷" },
              { name: "TypeScript", logo: "📘" },
              { name: "Next.js", logo: "▲" },
              { name: "Firebase", logo: "🔥" },
              { name: "Kubernetes", logo: "☸️" },
            ].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg transition-all group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-purple-50 border border-gray-100">
                  <div className="text-4xl mb-3">{tech.logo}</div>
                  <div className="font-medium text-gray-900">{tech.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a tailored
            solution that drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Link to="/contact" className="flex items-center">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Link to="/projects">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
