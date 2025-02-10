import { type Course } from "@shared/schema";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card>
      <CardContent className="p-0">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
          <div className="flex justify-between text-sm">
            <span>{course.duration}</span>
            <span>{course.category}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full">
          <Link href={`/courses/${course.slug}`}>
            Learn More
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
