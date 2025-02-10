import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Alex Thompson",
    role: "Software Engineer",
    company: "TechCorp Inc.",
    content: "The MERN stack course was incredibly comprehensive. I went from basic JavaScript knowledge to building full-stack applications. The instructors were knowledgeable and supportive throughout.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
  },
  {
    name: "Sarah Chen",
    role: "Data Scientist",
    company: "AI Solutions",
    content: "The AI/ML program exceeded my expectations. The hands-on projects and real-world applications helped me transition into a data science role. Highly recommended!",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
  },
  {
    name: "James Wilson",
    role: "Network Administrator",
    company: "SecureNet",
    content: "The networking and cybersecurity courses were exactly what I needed to advance my career. The practical labs and certification preparation were invaluable.",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-muted/50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-background">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center mb-4">
                  <Avatar className="h-16 w-16 mb-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
                <blockquote className="text-sm text-muted-foreground italic">
                  "{testimonial.content}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
