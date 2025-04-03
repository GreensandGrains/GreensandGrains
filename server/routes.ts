import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body against schema
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Log the contact form submission and save to storage
      console.log("Contact form submission received:");
      console.log(`Name: ${validatedData.name}`);
      console.log(`Email: ${validatedData.email}`);
      console.log(`Phone: ${validatedData.phone || 'Not provided'}`);
      console.log(`Subject: ${validatedData.subject}`);
      console.log(`Message: ${validatedData.message}`);
      
      // Save the message to our storage
      const savedMessage = await storage.createContactMessage(validatedData);
      
      res.status(201).json({ message: "Contact message received successfully" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        console.error("Error processing contact form:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Get all contact messages endpoint
  app.get("/api/contact/messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.status(200).json(messages);
    } catch (error) {
      console.error("Error getting contact messages:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Export contact messages as CSV
  app.get("/api/contact/export", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      
      // Generate CSV content
      const csvHeader = "id,name,email,phone,subject,message,createdAt\n";
      const csvRows = messages.map(message => {
        // Escape fields with quotes if they contain commas
        const escapedName = `"${message.name.replace(/"/g, '""')}"`;
        const escapedEmail = `"${message.email.replace(/"/g, '""')}"`;
        const escapedPhone = message.phone ? `"${message.phone.replace(/"/g, '""')}"` : '""';
        const escapedSubject = `"${message.subject.replace(/"/g, '""')}"`;
        const escapedMessage = `"${message.message.replace(/"/g, '""')}"`;
        
        return `${message.id},${escapedName},${escapedEmail},${escapedPhone},${escapedSubject},${escapedMessage},${message.createdAt}`;
      }).join('\n');
      
      const csvContent = csvHeader + csvRows;
      
      // Set response headers for file download
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename=contact_messages.csv');
      
      res.status(200).send(csvContent);
    } catch (error) {
      console.error("Error exporting contact messages:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}