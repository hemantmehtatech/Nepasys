import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Globe,
  Server,
  Shield,
  Cloud,
  Smartphone,
  Monitor,
  Settings,
  BarChart
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
}

const services: Service[] = [
  {
    title: "Web Development",
    description: "Custom web applications, responsive websites, and progressive web apps built with modern technologies and best practices.",
    icon: Globe
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android platforms.",
    icon: Smartphone
  },
  {
    title: "Network Solutions",
    description: "Network design, implementation, and optimization for businesses of all sizes.",
    icon: Settings
  },
  {
    title: "Security Services",
    description: "Comprehensive cybersecurity solutions including penetration testing, security audits, and threat prevention.",
    icon: Shield
  },
  {
    title: "Cloud Services",
    description: "Cloud migration, management, and optimization across major cloud platforms.",
    icon: Cloud
  },
  {
    title: "Server Management",
    description: "Server deployment, maintenance, and monitoring for optimal performance and reliability.",
    icon: Server
  },
  {
    title: "Hardware Solutions",
    description: "Hardware deployment, maintenance, and support for your IT infrastructure needs.",
    icon: Monitor
  },
  {
    title: "Digital Marketing",
    description: "Strategic digital marketing services including SEO, social media marketing, and content strategy.",
    icon: BarChart
  }
];

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive technology solutions to help your business grow and succeed
          in the digital age.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Card key={service.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 flex items-center justify-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
