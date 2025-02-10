import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Linkedin, Twitter } from "lucide-react";

interface LeaderProfile {
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  linkedin?: string;
  twitter?: string;
}

const leaders: LeaderProfile[] = [
  {
    name: "John Smith",
    role: "Chief Executive Officer",
    bio: "With over 15 years of experience in technology education, John leads our vision to transform IT training. Previously led successful EdTech startups and holds an MBA from Stanford.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    email: "john@techtraining.com",
    linkedin: "johnsmith",
    twitter: "johnsmith"
  },
  {
    name: "Sarah Johnson",
    role: "Chief Technology Officer",
    bio: "A former Google engineer with extensive experience in AI/ML and web technologies. Sarah ensures our curriculum stays cutting-edge and relevant to industry needs.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    email: "sarah@techtraining.com",
    linkedin: "sarahjohnson"
  },
  {
    name: "Michael Chen",
    role: "Head of Human Resources",
    bio: "Specializing in talent development and organizational culture, Michael creates an environment where both instructors and students can thrive and grow.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    email: "michael@techtraining.com",
    linkedin: "michaelchen",
    twitter: "michaelchen_hr"
  }
];

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Leadership Team</h1>
        <p className="text-lg text-muted-foreground">
          Meet the experts behind TechTraining's success in delivering
          high-quality IT education and professional development.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {leaders.map((leader) => (
          <Card key={leader.name} className="overflow-hidden">
            <CardHeader className="text-center">
              <div className="w-32 h-32 mx-auto mb-4">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <CardTitle>{leader.name}</CardTitle>
              <CardDescription>{leader.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{leader.bio}</p>
              <div className="flex justify-center gap-4">
                <a
                  href={`mailto:${leader.email}`}
                  className="text-muted-foreground hover:text-primary"
                  title="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                {leader.linkedin && (
                  <a
                    href={`https://linkedin.com/in/${leader.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                    title="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                {leader.twitter && (
                  <a
                    href={`https://twitter.com/${leader.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                    title="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
