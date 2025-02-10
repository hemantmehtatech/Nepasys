import { 
  type Course, type InsertCourse,
  type Inquiry, type InsertInquiry,
  type Newsletter, type InsertNewsletter
} from "@shared/schema";

export interface IStorage {
  // Courses
  getCourses(): Promise<Course[]>;
  getCourseBySlug(slug: string): Promise<Course | undefined>;
  
  // Inquiries  
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  
  // Newsletter
  createNewsletterSubscription(newsletter: InsertNewsletter): Promise<Newsletter>;
}

export class MemStorage implements IStorage {
  private courses: Map<number, Course>;
  private inquiries: Map<number, Inquiry>;
  private newsletters: Map<number, Newsletter>;
  private currentIds: { [key: string]: number };

  constructor() {
    this.courses = new Map();
    this.inquiries = new Map();
    this.newsletters = new Map();
    this.currentIds = { courses: 1, inquiries: 1, newsletters: 1 };

    // Seed initial courses data
    const initialCourses: InsertCourse[] = [
      {
        title: "MERN Stack Development",
        slug: "mern-stack",
        description: "Master MongoDB, Express.js, React and Node.js development",
        category: "Web Development",
        duration: "12 weeks",
        curriculum: ["MongoDB Basics", "Express.js", "React Fundamentals", "Node.js"],
        image: "https://images.unsplash.com/photo-1557804483-ef3ae78eca57"
      },
      {
        title: "Python Programming",
        slug: "python",
        description: "Learn Python programming from basics to advanced concepts",
        category: "Programming",
        duration: "8 weeks", 
        curriculum: ["Python Basics", "OOP", "Data Structures", "Web Frameworks"],
        image: "https://images.unsplash.com/photo-1526676537331-7747bf8278fc"
      },
      // Add more courses...
    ];

    initialCourses.forEach(course => {
      const id = this.currentIds.courses++;
      this.courses.set(id, { ...course, id });
    });
  }

  async getCourses(): Promise<Course[]> {
    return Array.from(this.courses.values());
  }

  async getCourseBySlug(slug: string): Promise<Course | undefined> {
    return Array.from(this.courses.values()).find(course => course.slug === slug);
  }

  async createInquiry(inquiry: InsertInquiry): Promise<Inquiry> {
    const id = this.currentIds.inquiries++;
    const newInquiry = { ...inquiry, id, createdAt: new Date() };
    this.inquiries.set(id, newInquiry);
    return newInquiry;
  }

  async createNewsletterSubscription(newsletter: InsertNewsletter): Promise<Newsletter> {
    const id = this.currentIds.newsletters++;
    const newNewsletter = { ...newsletter, id, createdAt: new Date() };
    this.newsletters.set(id, newNewsletter);
    return newNewsletter;
  }
}

export const storage = new MemStorage();
