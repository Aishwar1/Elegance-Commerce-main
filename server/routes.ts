import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { insertLeadSchema, insertBookingSchema } from "@shared/schema";
import { sendEmailNotification } from "./email";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Products
  app.get(api.products.list.path, async (req, res) => {
    try {
      const allProducts = await storage.getProducts();
      res.json(allProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });

  app.get(api.products.get.path, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid product ID" });
      }
      const product = await storage.getProduct(id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      console.error("Error fetching product:", error);
      res.status(500).json({ message: "Failed to fetch product" });
    }
  });

  // Leads
  app.post("/api/leads", async (req, res) => {
    try {
      const data = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(data);
      await sendEmailNotification('lead', data);
      res.json(lead);
    } catch (error) {
      res.status(400).json({ message: "Invalid lead data" });
    }
  });

  // Bookings
  app.post("/api/bookings", async (req, res) => {
    try {
      const data = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(data);
      await sendEmailNotification('booking', data);
      res.json(booking);
    } catch (error) {
      res.status(400).json({ message: "Invalid booking data" });
    }
  });

  // Orders
  app.post(api.orders.create.path, async (req, res) => {
    try {
      const input = api.orders.create.input.parse(req.body);
      const order = await storage.createOrder(input);
      await sendEmailNotification('order', input);
      res.status(201).json(order);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: error.errors[0].message,
          field: error.errors[0].path.join('.'),
        });
      }
      console.error("Error creating order:", error);
      res.status(500).json({ message: "Failed to create order" });
    }
  });

  // Seed data function to be called on startup
  async function seedDatabase() {
    try {
      const existingProducts = await storage.getProducts();
      if (existingProducts.length === 0) {
        const productData = [
          {
            title: "Ultimate Habit Tracker",
            description: "A comprehensive digital system to build lasting habits and track your progress with beautiful visualizations. Engineered for consistency and deep psychological triggers that ensure you never miss a day. The Ultimate Habit Tracker is not just a tool; it's a lifestyle architect designed for those who refuse to settle for mediocrity.",
            summary: "The definitive system for peak performance architecture.",
            price: 2900,
            imageUrls: [
              "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1584433144859-1fc3ab844153?auto=format&fit=crop&q=80&w=800"
            ],
            imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
            features: [
              "DAILY PROGRESS TRACKING",
              "MONTHLY ANALYTICS",
              "CUSTOMIZABLE CATEGORIES",
              "MOBILE SYNC",
              "PSYCHOLOGICAL TRIGGERS",
              "STREAK PROTECTION"
            ]
          },
          {
            title: "Focus Timer Pro",
            description: "Advanced pomodoro system designed for tech enthusiasts who need deep focus sessions. Eliminate distractions with precision and reclaim your most valuable asset: time. Focus Timer Pro integrates seamlessly with your existing stack to provide a frictionless transition into the flow state.",
            summary: "Precision engineering for the flow state.",
            price: 1900,
            imageUrls: [
              "https://images.unsplash.com/photo-1506784926709-22f1ec395907?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1495364141860-b0d03eedd045?auto=format&fit=crop&q=80&w=800"
            ],
            imageUrl: "https://images.unsplash.com/photo-1506784926709-22f1ec395907?auto=format&fit=crop&q=80&w=800",
            features: [
              "CUSTOM WORK CYCLES",
              "DISTRACTION BLOCKER",
              "PROJECT TRACKING",
              "INTEGRATIONS",
              "HAPTIC FEEDBACK",
              "DARK MODE OPTIMIZED"
            ]
          },
          {
            title: "Creative Workspace",
            description: "A minimalist workspace setup guide and digital planner for creative professionals. Curated resources for your best work, focused on aesthetics and ergonomics. This blueprint provides the foundation for an environment that inspires excellence and reduces cognitive load.",
            summary: "The blueprint for an inspired environment.",
            price: 4900,
            imageUrls: [
              "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800"
            ],
            imageUrl: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800",
            features: [
              "WORKSPACE BLUEPRINTS",
              "PRODUCTIVITY DASHBOARD",
              "TOOL DIRECTORY",
              "NOTION TEMPLATE",
              "LIGHTING GUIDES",
              "MINIMALIST PRINCIPLES"
            ]
          },
          {
            title: "Code Architect Blueprint",
            description: "An elite architectural design guide for full-stack systems. Build applications that scale with elegant structure and maintainable codebases. This is the culmination of years of high-fidelity engineering practices distilled into a single, actionable artifact.",
            summary: "Elite structural engineering for the modern web.",
            price: 8900,
            imageUrls: [
              "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800"
            ],
            imageUrl: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=800",
            features: [
              "SYSTEM ARCHITECTURE",
              "API DESIGN PATTERNS",
              "DATABASE SCHEMAS",
              "DEPLOYMENT PIPELINES",
              "SECURITY BEST PRACTICES",
              "PERFORMANCE TUNING"
            ]
          }
        ];

        for (const p of productData) {
          await storage.createProduct(p);
        }
        console.log("Database seeded successfully with multi-image products.");
      }
    } catch (err) {
      console.error("Error seeding database:", err);
    }
  }

  // Call seed on startup
  seedDatabase();

  return httpServer;
}
