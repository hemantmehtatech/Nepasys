import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div 
      className="relative h-[600px] flex items-center justify-center text-center bg-gradient-to-r from-primary/90 to-primary text-white"
    >
      <div className="container px-4">
        <h1 className="text-5xl font-bold mb-6">
          Master the Latest Tech Skills
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join our professional training programs in Web Development, AI/ML, DevOps, and more. 
          Learn from industry experts and advance your career.
        </p>
        <Button 
          asChild
          size="lg" 
          variant="secondary"
        >
          <Link href="#courses">
            Explore Courses
          </Link>
        </Button>
      </div>
    </div>
  );
}
