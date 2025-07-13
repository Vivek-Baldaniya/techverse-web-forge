
import React from 'react';

interface Stat {
  value: string;
  label: string;
}

interface StatsGridProps {
  stats: Stat[];
}

export const StatsGrid = ({ stats }: StatsGridProps) => {
  return (
    <div className="relative">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-1">
        <div className="bg-white rounded-xl p-8">
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
