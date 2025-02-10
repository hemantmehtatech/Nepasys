import { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertInquirySchema, insertNewsletterSchema } from "@shared/schema";

export function registerRoutes(app: Express) {
  // Get all courses
  app.get("/api/courses", async (req, res) => {
    const courses = await storage.getCourses();
    res.json(courses);
  });

  // Get course by slug
  app.get("/api/courses/:slug", async (req, res) => {
    const course = await storage.getCourseBySlug(req.params.slug);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(course);
  });

  // Create inquiry
  app.post("/api/inquiries", async (req, res) => {
    try {
      const data = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(data);
      res.status(201).json(inquiry);
    } catch (error) {
      res.status(400).json({ message: "Invalid inquiry data" });
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const data = insertNewsletterSchema.parse(req.body);
      const newsletter = await storage.createNewsletterSubscription(data);
      res.status(201).json(newsletter);
    } catch (error) {
      res.status(400).json({ message: "Invalid email" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
