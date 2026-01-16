import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

interface LabCardProps {
  name: string;
  pi: string;
  focus: string;
  imageUrl: string;
  link?: string;
}

export function LabCard({ name, pi, focus, imageUrl, link }: LabCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={`${name} research`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-gray-900 mb-2">{name}</h3>
        <p className="text-blue-600 mb-3">Principal Investigator: {pi}</p>
        <p className="text-gray-600 mb-4 line-clamp-3">{focus}</p>
        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
          Learn More
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
