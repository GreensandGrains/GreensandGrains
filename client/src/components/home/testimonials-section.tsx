import { Star, StarHalf } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-green-100 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-green-100 to-transparent"></div>
      <div className="absolute -bottom-8 right-20 w-20 h-20 rounded-full bg-green-300/30 animate-float"></div>
      <div className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-green-400/20 animate-float delay-300"></div>
      <div className="absolute bottom-1/3 right-1/4 w-12 h-12 rounded-full bg-green-200/30 animate-float delay-500"></div>
      <div className="absolute top-1/2 right-10 w-10 h-10 rounded-full bg-green-500/20 animate-float delay-200"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-6 animate-scaleUp relative inline-block mx-auto w-full">
          What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-400 hover:from-green-600 hover:to-green-300 transition-all duration-500 px-1">Customers</span> Say
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 rounded-full"></span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 animate-fadeIn leading-relaxed">
          Hear from our satisfied customers who have experienced the <span className="text-green-600 font-medium">quality</span> and <span className="text-green-600 font-medium">benefits</span> of our organic grains.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 border border-green-100 hover:border-green-300 transform hover:-translate-y-2 group ${
                index === 0 ? "animate-slideInLeft" : 
                index === 1 ? "animate-fadeIn" : 
                "animate-slideInRight"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="text-yellow-500 flex group-hover:scale-110 transition-transform duration-300">
                  <Star className="fill-current group-hover:text-yellow-600" size={20} />
                  <Star className="fill-current group-hover:text-yellow-600" size={20} />
                  <Star className="fill-current group-hover:text-yellow-600" size={20} />
                  <Star className="fill-current group-hover:text-yellow-600" size={20} />
                  {testimonial.id === 3 ? 
                    <StarHalf className="fill-current group-hover:text-yellow-600" size={20} /> : 
                    <Star className="fill-current group-hover:text-yellow-600" size={20} />
                  }
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed group-hover:text-gray-700 transition-colors duration-300">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-300 hover:from-green-600 hover:to-green-400 rounded-full flex items-center justify-center mr-4 shadow-md transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                  <span className="font-medium text-white">{testimonial.initials}</span>
                </div>
                <div className="transition-transform duration-300 group-hover:translate-x-1">
                  <h4 className="font-medium text-gray-800 group-hover:text-green-700 transition-colors duration-300">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
