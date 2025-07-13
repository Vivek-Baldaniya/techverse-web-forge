
import React from 'react';

interface LogoGProps {
  className?: string;
}

const LogoG = ({ className = "h-6 w-6" }: LogoGProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.5 0 4.8-.93 6.5-2.45l-1.4-1.4C15.8 19.25 14 20 12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8v1c0 1.1-.9 2-2 2s-2-.9-2-2v-1c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.63-.56 3.54-1.46.65.89 1.77 1.46 3.46 1.46 2.21 0 4-1.79 4-4v-1c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
        fill="url(#logoGradient)"
      />
      <circle cx="12" cy="12" r="2" fill="currentColor" fillOpacity="0.3" />
    </svg>
  );
};

export default LogoG;
