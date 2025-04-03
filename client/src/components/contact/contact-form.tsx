import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";
import emailjs from '@emailjs/browser';
import { apiRequest } from "@/lib/queryClient";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { motion } from "framer-motion";

const formSchema = insertContactMessageSchema.extend({
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits").optional(),
});

type FormData = z.infer<typeof formSchema>;

// EmailJS constants from environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "vHydSwz7VhSWUBhkS";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Initialize EmailJS
  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      try {
        // Simple initialization with just the public key
        emailjs.init(EMAILJS_PUBLIC_KEY);
        console.log("EmailJS initialized successfully");
      } catch (error) {
        console.error("EmailJS initialization error:", error);
        setErrorMessage("Contact form initialization failed. Please try again later.");
      }
    } else {
      console.error("EmailJS Public Key is missing");
      setErrorMessage("Contact form is not configured properly. Please try again later.");
    }
  }, []);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  });



  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);
    
    // Check if EmailJS credentials are available
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error("EmailJS credentials are missing");
      setErrorMessage("Contact form is not configured properly. Please try again later.");
      setIsSubmitting(false);
      return;
    }
    
    try {
      console.log("Sending email with EmailJS:", {
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID,
        hasPublicKey: !!EMAILJS_PUBLIC_KEY
      });
      
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          phone: data.phone || "Not provided",
          subject: data.subject,
          message: data.message,
          to_email: "greensandgrains2025@gmail.com" // Specify the recipient email
        }
      );
      
      console.log("EmailJS result:", result);
      
      // Store the contact submission in the server
      try {
        await apiRequest("POST", "/api/contact", data);
        console.log("Contact form saved to database");
      } catch (serverError) {
        console.error("Failed to save contact form to database:", serverError);
        // We don't show an error to the user since the email was sent successfully
      }
      
      if (result.text === 'OK') {
        setIsSuccess(true);
        form.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setErrorMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setErrorMessage("Unable to send your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-green-50 p-6 rounded-lg border border-green-100 shadow-sm transition-all duration-300 hover:shadow-md">
      <h3 className="font-heading font-semibold text-2xl mb-4 text-green-800 border-b border-green-200 pb-2">Send us a message</h3>
      
      {isSuccess && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Alert className="mb-4 bg-green-100 text-green-800 border-green-300 animate-fadeIn">
            <AlertDescription className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              Thank you for your message! We'll get back to you soon.
            </AlertDescription>
          </Alert>
        </motion.div>
      )}
      
      {errorMessage && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Alert className="mb-4 bg-red-100 text-red-800 border-red-300">
            <AlertDescription className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              {errorMessage}
            </AlertDescription>
          </Alert>
        </motion.div>
      )}
      
      {/* Decorative green bubbles */}
      <div className="relative">
        <div className="absolute -top-16 -left-10 w-32 h-32 rounded-full bg-green-100 opacity-30 blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-16 -right-10 w-40 h-40 rounded-full bg-green-200 opacity-40 blur-2xl pointer-events-none"></div>
        
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`bubble-form-${i}`}
            className="absolute rounded-full bg-green-100 opacity-50 pointer-events-none"
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              zIndex: 1
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, Math.random() * 10 - 5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
        
        <Form {...form}>
          <motion.form 
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 animate-fadeIn bg-gradient-to-b from-green-50 to-green-100 p-8 rounded-lg border border-green-200 shadow-md relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">Full Name</FormLabel>
                  <FormControl>
                    <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                      <Input 
                        {...field} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-200"
                        disabled={isSubmitting}
                        required
                      />
                    </motion.div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">Email Address</FormLabel>
                  <FormControl>
                    <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                      <Input 
                        {...field} 
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-200"
                        disabled={isSubmitting}
                        required
                      />
                    </motion.div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">Phone Number</FormLabel>
                  <FormControl>
                    <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                      <Input 
                        {...field} 
                        type="tel"
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-200"
                        disabled={isSubmitting}
                      />
                    </motion.div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">Subject</FormLabel>
                  <FormControl>
                    <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                      <Input 
                        {...field} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-200"
                        disabled={isSubmitting}
                        required
                      />
                    </motion.div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">Message</FormLabel>
                  <FormControl>
                    <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                      <Textarea 
                        {...field} 
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-200"
                        disabled={isSubmitting}
                        required
                      />
                    </motion.div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button 
                type="submit" 
                className="bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-md w-full sm:w-auto flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                    Send Message
                  </>
                )}
              </Button>
            </motion.div>
            
            <div className="text-xs text-gray-500 text-center pt-3">
              Your information is secure and will never be shared with third parties.
            </div>
          </motion.form>
        </Form>
      </div>
    </div>
  );
}
