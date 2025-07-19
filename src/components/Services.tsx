import { 
  Palette, 
  Code2, 
  Settings, 
  Smartphone,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Brand Identity Development",
      description: "Creating compelling brand identities that resonate with your target audience and stand out in the marketplace.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Marketing Materials"],
      color: "text-red-400",
      bgColor: "bg-red-500/10",
    },
    {
      icon: Code2,
      title: "Web Design & Development",
      description: "Building responsive, fast, and user-friendly websites that convert visitors into customers.",
      features: ["Responsive Design", "E-commerce", "CMS Integration", "SEO Optimization"],
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Settings,
      title: "Custom Software Development",
      description: "Developing tailored software solutions that streamline your business processes and boost productivity.",
      features: ["Custom Applications", "API Development", "Database Design", "System Integration"],
      color: "text-green-400",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Smartphone,
      title: "Mobile Application Development",
      description: "Creating intuitive mobile apps for iOS and Android that engage users and drive business growth.",
      features: ["iOS & Android", "Cross-platform", "UI/UX Design", "App Store Publishing"],
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass-card border-border/50 hover:border-primary/30 group glow-on-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 spring-transition`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <CardTitle className="text-2xl mb-2 group-hover:text-primary smooth-transition">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full group glass-card border-border/50 hover:border-primary/50"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;