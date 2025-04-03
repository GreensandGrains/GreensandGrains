import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: 'fas fa-leaf',
      title: 'Premium Quality',
      description: 'Carefully selected grains that meet our rigorous quality standards.'
    },
    {
      icon: 'fas fa-globe',
      title: 'Global Sourcing',
      description: 'We work with top farms worldwide to bring you the best varieties.'
    },
    {
      icon: 'fas fa-truck',
      title: 'Reliable Delivery',
      description: 'Efficient logistics ensuring your orders arrive on time, every time.'
    },
    {
      icon: 'fas fa-seedling',
      title: 'Sustainability',
      description: 'Committed to environmentally friendly farming and business practices.'
    }
  ];

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Greens & Grain</h2>
          <p className="text-lg max-w-3xl mx-auto">
            We pride ourselves on providing the highest quality grains with exceptional service to match.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <i className={`${feature.icon} text-3xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
