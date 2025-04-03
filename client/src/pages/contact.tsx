import { ContactSection } from "@/components/contact/contact-section";
import MainLayout from "@/layouts/MainLayout";
import { ScrollEffect } from "@/components/layout/scroll-effect";

export default function Contact() {
  return (
    <MainLayout>
      <ScrollEffect type="fadeIn" delay={0.1}>
        <section className="bg-gradient-to-b from-green-50 to-white pt-4 pb-2">
          <div className="container mx-auto px-4">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-center mb-4 relative inline-block w-full">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-500">Us</span>
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-green-600 to-green-400 rounded-full"></span>
            </h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mt-6">
              Get in touch with our team for inquiries, orders, or any questions about our products.
            </p>
          </div>
        </section>
      </ScrollEffect>

      <ScrollEffect type="slideUp" delay={0.2}>
        <ContactSection />
      </ScrollEffect>
    </MainLayout>
  );
}