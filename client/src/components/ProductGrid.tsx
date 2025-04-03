import React from 'react';
import { Product } from '@shared/schema';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Link } from 'wouter';

interface ProductGridProps {
  products: Product[];
  isLoading: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, isLoading }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array(8).fill(0).map((_, index) => (
          <Card key={index} className="overflow-hidden">
            <Skeleton className="h-48 w-full" />
            <CardContent className="p-4">
              <Skeleton className="h-5 w-20 mb-2" />
              <Skeleton className="h-6 w-3/4 mb-1" />
              <Skeleton className="h-4 w-full mb-3" />
              <div className="flex justify-between items-center">
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-9 w-20" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500 mb-4">No products found matching your criteria.</p>
        <Link href="/contact">
          <Button>Contact Us for Custom Requests</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="border border-neutral-200/80 overflow-hidden hover:shadow-md transition-shadow">
          <div 
            className="h-48 bg-cover bg-center" 
            style={{ backgroundImage: `url('${product.imageUrl}')` }}
          ></div>
          <CardContent className="p-4">
            <span className="inline-block px-2 py-1 text-xs rounded-full bg-secondary/20 text-secondary mb-2">
              {product.categoryId === 1 ? 'Organic' : 
               product.categoryId === 2 ? 'Ancient' : 
               product.categoryId === 3 ? 'Specialty' : 'Commercial'}
            </span>
            <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-3">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="font-medium text-primary">{product.availability}</span>
              <Link href="/contact">
                <Button size="sm" className="text-sm px-3 py-1.5 bg-primary text-white rounded hover:bg-secondary transition-colors">
                  Inquire
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductGrid;
