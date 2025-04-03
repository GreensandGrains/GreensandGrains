import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Category, Product } from '@shared/schema';
import CategoryFilters from '@/components/CategoryFilters';
import ProductGrid from '@/components/ProductGrid';

const VarietiesPage = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  
  const { data: categories, isLoading: categoriesLoading } = useQuery<Category[]>({
    queryKey: ['/api/categories'],
  });
  
  const { data: products, isLoading: productsLoading } = useQuery<Product[]>({
    queryKey: ['/api/products', selectedCategoryId],
    queryFn: async ({ queryKey }) => {
      const categoryId = queryKey[1];
      const url = categoryId 
        ? `/api/products?categoryId=${categoryId}`
        : '/api/products';
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch products');
      return res.json();
    }
  });
  
  const handleCategoryChange = (categoryId: number | null) => {
    setSelectedCategoryId(categoryId);
  };
  
  const isLoading = categoriesLoading || productsLoading;
  
  return (
    <section id="varieties" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Grain Varieties</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Browse through our extensive collection of grain varieties to find exactly what you need.
          </p>
        </div>
        
        <CategoryFilters 
          categories={categories || []}
          selectedCategoryId={selectedCategoryId}
          onCategoryChange={handleCategoryChange}
          isLoading={categoriesLoading}
        />
        
        <ProductGrid 
          products={products || []}
          isLoading={isLoading}
        />
        
        <div className="text-center mt-10">
          <a 
            href="/contact" 
            className="inline-block bg-primary hover:bg-secondary text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Request Full Catalog
          </a>
        </div>
      </div>
    </section>
  );
};

export default VarietiesPage;
