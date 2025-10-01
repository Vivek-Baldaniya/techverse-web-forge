import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Calendar,
  CheckCircle,
  Sparkles,
  User,
  Building,
  DollarSign,
  Briefcase,
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    budget: "",
  });

  const services = [
    "Web Development",
    "Mobile App Development",
    "E-commerce Solutions",
    "AI & Automation",
    "Digital Marketing",
    "IT Consulting",
    "Other",
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000 - $100,000",
    "Over $100,000",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
        budget: "",
      });

      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "getintotechverse@gmail.com",
      subtitle: "We respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 83202 38938, +91 97126 48322",
      subtitle: "Mon-Sat",
    },
    // {
    //   icon: MapPin,
    //   title: "Visit Us",
    //   details: "123 Tech Street, Digital City, DC 12345",
    //   subtitle: "Schedule an appointment",
    // },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Saturday: 9AM - 9PM",
      subtitle: "Weekend consultations available",
    },
  ];

  const faqs = [
    {
      question: "What's the typical project timeline?",
      answer:
        "Project timelines vary based on complexity, but most projects are completed within 6-12 weeks.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, we offer comprehensive maintenance and support packages for all our solutions.",
    },
    {
      question: "Can you work with our existing systems?",
      answer:
        "Absolutely! We specialize in integrating new solutions with existing business systems.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We use modern, industry-standard technologies including React, Node.js, Python, AWS, and more.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-purple-200 rounded-full opacity-50 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-green-200 rounded-full opacity-60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">
                Let's Build Something Amazing
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get In
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge technology?
              Let's discuss your project and create a solution that drives real
              results.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Modern Contact Form */}
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl opacity-70"></div>

              <Card className="relative shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader className="text-center pb-8">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-gray-900">
                    Start Your Project
                  </CardTitle>
                  <p className="text-gray-600 mt-2">
                    Tell us about your vision and we'll bring it to life
                  </p>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label
                          htmlFor="name"
                          className="flex items-center text-sm font-semibold text-gray-700 mb-3"
                        >
                          <User className="h-4 w-4 mr-2 text-blue-600" />
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="h-12 border-2 border-gray-200 focus:border-blue-500 rounded-xl transition-all duration-200"
                        />
                      </div>
                      <div className="group">
                        <label
                          htmlFor="email"
                          className="flex items-center text-sm font-semibold text-gray-700 mb-3"
                        >
                          <Mail className="h-4 w-4 mr-2 text-blue-600" />
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@company.com"
                          className="h-12 border-2 border-gray-200 focus:border-blue-500 rounded-xl transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Phone and Company Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label
                          htmlFor="phone"
                          className="flex items-center text-sm font-semibold text-gray-700 mb-3"
                        >
                          <Phone className="h-4 w-4 mr-2 text-blue-600" />
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 123-4567"
                          className="h-12 border-2 border-gray-200 focus:border-blue-500 rounded-xl transition-all duration-200"
                        />
                      </div>
                      <div className="group">
                        <label
                          htmlFor="company"
                          className="flex items-center text-sm font-semibold text-gray-700 mb-3"
                        >
                          <Building className="h-4 w-4 mr-2 text-blue-600" />
                          Company Name
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your Company"
                          className="h-12 border-2 border-gray-200 focus:border-blue-500 rounded-xl transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Service and Budget Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label
                          htmlFor="service"
                          className="flex items-center text-sm font-semibold text-gray-700 mb-3"
                        >
                          <Briefcase className="h-4 w-4 mr-2 text-blue-600" />
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="h-12 w-full px-4 border-2 border-gray-200 focus:border-blue-500 rounded-xl transition-all duration-200 bg-white text-gray-900"
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="group">
                        <label
                          htmlFor="budget"
                          className="flex items-center text-sm font-semibold text-gray-700 mb-3"
                        >
                          <DollarSign className="h-4 w-4 mr-2 text-blue-600" />
                          Project Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="h-12 w-full px-4 border-2 border-gray-200 focus:border-blue-500 rounded-xl transition-all duration-200 bg-white text-gray-900"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range, index) => (
                            <option key={index} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="group">
                      <label
                        htmlFor="message"
                        className="flex items-center text-sm font-semibold text-gray-700 mb-3"
                      >
                        <MessageSquare className="h-4 w-4 mr-2 text-blue-600" />
                        Project Details *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                        rows={6}
                        className="border-2 border-gray-200 focus:border-blue-500 rounded-xl transition-all duration-200 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Sending Your Message...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-3" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Information Cards */}
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-r from-gray-50 to-gray-100"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-2xl">
                        <info.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 text-lg">
                          {info.title}
                        </h3>
                        <p className="text-gray-900 mb-1 font-medium">
                          {info.details}
                        </p>
                        <p className="text-sm text-gray-600">{info.subtitle}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Quick Actions */}
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-6 flex items-center text-lg">
                    <Calendar className="h-5 w-5 mr-3 text-blue-600" />
                    Quick Actions
                  </h3>
                  <div className="space-y-4">
                    <Button
                      variant="outline"
                      className="w-full justify-start h-12 border-2 border-gray-200 text-gray-700 hover:bg-white hover:border-blue-300 transition-all duration-200"
                    >
                      Schedule Free Consultation
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-12 border-2 border-gray-200 text-gray-700 hover:bg-white hover:border-blue-300 transition-all duration-200"
                    >
                      Request Project Quote
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-12 border-2 border-gray-200 text-gray-700 hover:bg-white hover:border-blue-300 transition-all duration-200"
                    >
                      View Our Portfolio
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get quick answers to common questions about our services and
              process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-0 bg-white"
              >
                <CardContent className="p-8">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-start text-lg">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-8">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-gray-600">
              Visit our office or schedule a virtual meeting
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-64 rounded-2xl flex items-center justify-center shadow-lg">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <p className="text-gray-700 font-medium">
                Interactive Map Coming Soon
              </p>
              <p className="text-sm text-gray-500 mt-2">
                123 Tech Street, Digital City, DC 12345
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;
