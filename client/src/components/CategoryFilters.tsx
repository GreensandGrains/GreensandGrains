import React from 'react';
import { Category } from '@shared/schema';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

interface CategoryFiltersProps {
  categories: Category[];
  selectedCategoryId: number | null;
  onCategoryChange: (categoryId: number | null) => void;
  isLoading: boolean;
}

const CategoryFilters: React.FC<CategoryFiltersProps> = ({
  categories,
  selectedCategoryId,
  onCategoryChange,
  isLoading
}) => {
  if (isLoading) {
    return (
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {Array(5).fill(0).map((_, index) => (
          <Skeleton key={index} className="h-10 w-28 rounded-full" />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-10">
      <Button
        variant={selectedCategoryId === null ? "default" : "outline"}
        className="rounded-full"
        onClick={() => onCategoryChange(null)}
      >
        All Categories
      </Button>
      
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategoryId === category.id ? "default" : "outline"}
          className="rounded-full"
          onClick={() => onCategoryChange(category.id)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilters;
