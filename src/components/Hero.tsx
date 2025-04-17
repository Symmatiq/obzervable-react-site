import { ReactNode } from 'react';
import Button from './Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  primaryCTA?: {
    text: string;
    href: string;
    external?: boolean;
  };
  secondaryCTA?: {
    text: string;
    href: string;
    external?: boolean;
  };
  image?: ReactNode;
  className?: string;
}

export default function Hero({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  image,
  className = '',
}: HeroProps) {
  return (
    <div className={`w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="lg:w-1/2 lg:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h1>
            
            {subtitle && (
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                {subtitle}
              </p>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {primaryCTA && (
                <Button
                  variant="primary"
                  size="lg"
                  href={primaryCTA.href}
                  external={primaryCTA.external}
                >
                  {primaryCTA.text}
                </Button>
              )}
              
              {secondaryCTA && (
                <Button
                  variant="outline"
                  size="lg"
                  href={secondaryCTA.href}
                  external={secondaryCTA.external}
                >
                  {secondaryCTA.text}
                </Button>
              )}
            </div>
          </div>
          
          {image && (
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              {image}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 