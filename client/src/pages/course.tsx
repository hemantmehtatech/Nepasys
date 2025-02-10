import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { type Course } from "@shared/schema";
import CourseCurriculum from "@/components/course-curriculum";
import ContactForm from "@/components/contact-form";

export default function CoursePage() {
  const { slug } = useParams();
  const { data: course, isLoading } = useQuery<Course>({ 
    queryKey: [`/api/courses/${slug}`]
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 animate-pulse">
        <div className="h-8 bg-muted w-1/2 mb-4" />
        <div className="h-4 bg-muted w-full mb-8" />
        <div className="h-64 bg-muted rounded-lg" />
      </div>
    );
  }

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
          <p className="text-lg text-muted-foreground mb-6">{course.description}</p>
          
          <div className="flex gap-4 mb-8">
            <div>
              <h3 className="font-semibold">Duration</h3>
              <p>{course.duration}</p>
            </div>
            <div>
              <h3 className="font-semibold">Category</h3>
              <p>{course.category}</p>
            </div>
          </div>

          <CourseCurriculum curriculum={course.curriculum} />
        </div>

        <div>
          <ContactForm courseId={course.id} />
        </div>
      </div>
    </div>
  );
}
