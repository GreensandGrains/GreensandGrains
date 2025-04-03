import { AboutSection } from "@/components/about/about-section";
import MainLayout from "@/layouts/MainLayout";
import { ScrollEffect } from "@/components/layout/scroll-effect";

export default function About() {
  return (
    <MainLayout>
      <ScrollEffect type="fadeIn" delay={0.1}>
        <section className="bg-gradient-to-b from-green-50 to-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="font-heading font-bold text-4xl text-center mb-4 relative inline-block w-full">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-500">Us</span>
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-green-600 to-green-400 rounded-full"></span>
            </h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mt-6">
              Learn more about our mission, values, and commitment to providing the highest quality organic grains.
            </p>
          </div>
        </section>
      </ScrollEffect>
      
      <ScrollEffect type="slideLeft" delay={0.2}>
        <AboutSection />
      </ScrollEffect>
      
      <ScrollEffect type="fadeIn" delay={0.3}>
        <section className="py-16 bg-gradient-to-b from-white to-green-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-3xl mb-6 text-gray-800">Our <span className="text-green-600">Story</span></h2>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  Greens & Grain was founded in 2013 with a simple mission: to make high-quality, organic grains accessible to health-conscious consumers while supporting sustainable farming practices.
                </p>
                <p>
                  What began as a small family operation has grown into a trusted supplier of premium organic grains, serving customers nationwide. Our founder, an agricultural expert with over 20 years of experience, recognized the growing demand for healthier food options and the importance of sustainable farming methods.
                </p>
                <p>
                  Today, we work directly with a network of certified organic farms across the country, carefully selecting each grain variety for its nutritional value, flavor, and environmental impact. We take pride in our rigorous quality control processes and our commitment to transparency in every step of our supply chain.
                </p>
                <p>
                  As we continue to grow, our core values remain unchanged: integrity, sustainability, quality, and community. We're not just selling grains; we're promoting a healthier lifestyle and a more sustainable food system for future generations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollEffect>
      
      <ScrollEffect type="slideUp" delay={0.2}>
        <section className="py-16 bg-gradient-to-b from-green-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-3xl mb-6 text-gray-800">Our <span className="text-green-600">Values</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-green-100 hover:border-green-300 transform hover:-translate-y-1">
                  <h3 className="font-heading font-semibold text-xl mb-3 text-green-700">Sustainability</h3>
                  <p className="text-gray-600">
                    We're committed to environmentally responsible farming practices that preserve soil health, conserve water, and reduce carbon emissions.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-green-100 hover:border-green-300 transform hover:-translate-y-1">
                  <h3 className="font-heading font-semibold text-xl mb-3 text-green-700">Quality</h3>
                  <p className="text-gray-600">
                    From seed selection to packaging, we maintain the highest standards to ensure our products exceed your expectations.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-green-100 hover:border-green-300 transform hover:-translate-y-1">
                  <h3 className="font-heading font-semibold text-xl mb-3 text-green-700">Transparency</h3>
                  <p className="text-gray-600">
                    We believe in honest, clear communication about our products, practices, and partnerships.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-green-100 hover:border-green-300 transform hover:-translate-y-1">
                  <h3 className="font-heading font-semibold text-xl mb-3 text-green-700">Community</h3>
                  <p className="text-gray-600">
                    We support local farmers and contribute to food security initiatives in underserved communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollEffect>
    </MainLayout>
  );
}
