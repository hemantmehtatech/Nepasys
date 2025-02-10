import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  duration: text("duration").notNull(),
  curriculum: text("curriculum").array().notNull(),
  image: text("image").notNull(),
});

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  courseId: integer("course_id").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const newsletters = pgTable("newsletters", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertCourseSchema = createInsertSchema(courses).omit({ id: true });
export const insertInquirySchema = createInsertSchema(inquiries).omit({ id: true, createdAt: true });
export const insertNewsletterSchema = createInsertSchema(newsletters).omit({ id: true, createdAt: true });

export type Course = typeof courses.$inferSelect;
export type Inquiry = typeof inquiries.$inferSelect;
export type Newsletter = typeof newsletters.$inferSelect;

export type InsertCourse = z.infer<typeof insertCourseSchema>;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type InsertNewsletter = z.infer<typeof insertNewsletterSchema>;
