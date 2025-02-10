import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CourseCurriculumProps {
  curriculum: string[];
}

export default function CourseCurriculum({ curriculum }: CourseCurriculumProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Course Curriculum</h2>
      <Accordion type="single" collapsible>
        {curriculum.map((topic, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>
              Module {index + 1}: {topic}
            </AccordionTrigger>
            <AccordionContent>
              Detailed content for {topic} module will be provided during the course.
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
