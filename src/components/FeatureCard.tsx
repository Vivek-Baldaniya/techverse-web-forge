
import React from 'react';
import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
}

export const FeatureCard = ({ icon: Icon, title, description, color = "from-blue-100 to-purple-100" }: FeatureCardProps) => {
  return (
    <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 group border-0 shadow-lg bg-white/80 backdrop-blur-sm">
      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${color} rounded-full mb-4 group-hover:scale-110 transition-transform`}>
        <Icon className="h-8 w-8 text-blue-600 group-hover:text-purple-600 transition-colors" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </Card>
  );
};
