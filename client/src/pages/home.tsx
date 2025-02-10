import { useQuery } from "@tanstack/react-query";
import Hero from "@/components/hero";
import CourseCard from "@/components/course-card";
import Newsletter from "@/components/newsletter";
import { type Course } from "@shared/schema";

export default function Home() {
  const { data: courses, isLoading } = useQuery<Course[]>({ 
    queryKey: ["/api/courses"]
  });

  return (
    <div className="min-h-screen">
      <Hero />
      
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Courses</h2>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-64 bg-muted animate-pulse rounded-lg" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses?.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </section>

      <Newsletter />
    </div>
  );
}
