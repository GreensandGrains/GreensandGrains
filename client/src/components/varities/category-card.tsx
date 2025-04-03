import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Link } from "wouter";

interface Variety {
  id: number;
  name: string;
  description: string;
  imageUrl?: string;
}

interface CategoryCardProps {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  varieties: Variety[];
}

export function CategoryCard({ id, name, description, imageUrl, varieties }: CategoryCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="w-full h-48 overflow-hidden">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="font-heading font-semibold text-xl mb-3">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button 
          className="text-primary hover:text-primary-dark font-medium transition-colors inline-flex items-center"
          onClick={toggleExpand}
        >
          {isExpanded ? "Hide Varieties " : "View Varieties "}
          {isExpanded ? <ChevronDown className="ml-2 h-5 w-5" /> : <ChevronRight className="ml-2 h-5 w-5" />}
        </button>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <h4 className="font-heading font-medium text-lg mb-3">Popular Varieties</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {varieties.slice(0, 6).map((variety) => (
                <div key={variety.id} className="bg-gray-50 p-3 rounded-lg flex flex-col">
                  <div className="w-full h-24 bg-green-100 rounded-md mb-2 flex items-center justify-center overflow-hidden">
                    <img 
                      src={variety.imageUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(variety.name)}&background=4CAF50&color=fff&size=128`} 
                      alt={variety.name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <h5 className="font-medium text-gray-800">{variety.name}</h5>
                  <p className="text-sm text-gray-600 mt-1">{variety.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link 
                href={`/varieties?category=${id}`} 
                className="inline-flex items-center text-primary hover:text-primary-dark"
              >
                View all {varieties.length} {name.toLowerCase()} varieties
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
