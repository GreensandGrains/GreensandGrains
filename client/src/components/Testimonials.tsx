import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Organic Bakery Owner',
      image: 'https://randomuser.me/api/portraits/women/43.jpg',
      quote: "Greens & Grain has been our trusted supplier for over three years. Their ancient grain selection is unmatched, and their delivery is always on time.",
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Restaurant Chain Director',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      quote: "We source all our specialty rice varieties from Greens & Grain. Their consistent quality and competitive pricing keep us coming back.",
      rating: 4.5
    },
    {
      name: 'Emma Chen',
      role: 'Health Food Manufacturer',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      quote: "The quality control at Greens & Grain is exceptional. We've never had issues with their organic grains, and our customers love the end products.",
      rating: 5
    }
  ];

  // Helper function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }
    
    // Add empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }
    
    return stars;
  };

  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We take pride in serving businesses of all sizes with the highest quality grains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <img 
                  className="h-12 w-12 rounded-full object-cover" 
                  src={testimonial.image} 
                  alt={`${testimonial.name} profile photo`} 
                />
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic text-gray-600">
                "{testimonial.quote}"
              </p>
              <div className="flex mt-4 text-emerald-600">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
