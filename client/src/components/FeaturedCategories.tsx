import React from 'react';
import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { Category } from '@shared/schema';
import { Skeleton } from '@/components/ui/skeleton';

const FeaturedCategories = () => {
  const { data: categories, isLoading } = useQuery<Category[]>({
    queryKey: ['/api/categories'],
  });

  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Grain Categories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer four main categories of grains, with hundreds of varieties in each group to meet your specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {isLoading ? (
            // Loading skeletons
            Array(4).fill(0).map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <div className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            ))
          ) : categories && categories.length > 0 ? (
            // Render actual categories
            categories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div 
                  className="h-48 bg-cover bg-center" 
                  style={{ backgroundImage: `url('${category.imageUrl}')` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Link href="/varieties" className="inline-block text-primary hover:text-secondary font-medium transition-colors">
                    View {category.varietyCount}+ Varieties <i className="fas fa-arrow-right ml-1"></i>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            // Fallback categories if API fails or returns empty
            <div className="col-span-full text-center text-gray-500">
              <p>No categories available at the moment. Please check back later.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
