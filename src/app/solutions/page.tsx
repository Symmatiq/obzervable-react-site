import { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Solutions - Obzervable',
  description: 'Explore Obzervable solutions for various industries and use cases. Find the perfect data architecture for your specific business needs.',
};

const industries = [
  {
    title: 'Financial Services',
    description: 'Real-time transaction monitoring, fraud detection, and compliance reporting for financial institutions.',
    features: [
      'Regulatory compliance with comprehensive audit trails',
      'Real-time transaction monitoring and anomaly detection',
      'Secure data handling with role-based access controls',
      'AI-powered risk assessment and fraud prevention'
    ],
    linkText: 'Financial Services Solutions'
  },
  {
    title: 'Healthcare & Life Sciences',
    description: 'Secure patient data processing, clinical trials monitoring, and healthcare analytics solutions.',
    features: [
      'HIPAA-compliant data processing and storage',
      'Real-time patient monitoring systems integration',
      'Clinical trial data collection and analysis',
      'Healthcare analytics and predictive modeling'
    ],
    linkText: 'Healthcare Solutions'
  },
  {
    title: 'Retail & E-commerce',
    description: 'Customer journey tracking, inventory management, and personalized shopping experiences.',
    features: [
      'Real-time inventory management and stock alerts',
      'Customer behavior analytics and segmentation',
      'Personalized recommendation engines',
      'Omnichannel data synchronization'
    ],
    linkText: 'Retail Solutions'
  },
  {
    title: 'Manufacturing & IoT',
    description: 'Production line monitoring, quality control, and IoT device data integration solutions.',
    features: [
      'IoT device data collection and processing',
      'Predictive maintenance and machine health monitoring',
      'Quality control and defect detection systems',
      'Supply chain optimization and tracking'
    ],
    linkText: 'Manufacturing Solutions'
  }
];

const useCases = [
  {
    title: 'Data Integration Hub',
    description: 'Centralize and standardize data from multiple sources, creating a unified view across your organization.',
    icon: (
      <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    )
  },
  {
    title: 'Real-time Analytics',
    description: 'Process and analyze streaming data in real-time to make immediate business decisions.',
    icon: (
      <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
        <path d="M16 6l2-2 2 2-2 2z" />
      </svg>
    )
  },
  {
    title: 'Event-Driven Architecture',
    description: 'Build responsive systems that react to events in real-time with our event-driven framework.',
    icon: (
      <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 6v6c0 1.1.9 2 2 2h1v7c0 .55.45 1 1 1s1-.45 1-1V3.13c0-.65-.61-1.13-1.24-.98C17.6 2.68 16 4.51 16 6zm-5 3H9V3c0-.55-.45-1-1-1s-1 .45-1 1v6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2z" />
      </svg>
    )
  },
  {
    title: 'Data Mesh Implementation',
    description: 'Create a decentralized data architecture that enables domain-driven ownership and governance.',
    icon: (
      <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 20.1v1.9c-2.5 0-4.71-1.28-6-3.22.64-.59 1-1.36 1-2.23 0-1.55-1.14-2.84-2.64-3.05.18-.83.45-1.63.8-2.38 1.94.96 3.34 2.76 3.74 4.93.27-.25.54-.49.81-.73-.29-2.11-1.34-3.82-2.81-5 2.58-2.26 6.08-2.82 9.1-1.8v1.79c-.94-.39-1.95-.6-3-6-3 0h1c-1.52 0-2.86.78-3.65 1.95-.24.36-.43.75-.6 1.17 1.62.67 2.88 1.98 3.32 3.7.79-.82 1.59-1.62 2.32-2.38-1.53-1.58-3.54-2.62-5.78-2.86 1.37-.73 2.94-.99 4.53-.65v-1.95c-5.22-.44-9.9 3.5-9.9 8.72 0 1.21.25 2.37.7 3.43 1.89 1.32 4.28 2.1 6.87 2.1zm2-13.1c-1.6 0-2.89 1.28-2.89 2.87 0 1.6 1.29 2.9 2.89 2.9 1.59 0 2.89-1.3 2.89-2.9 0-1.59-1.3-2.87-2.89-2.87z" />
      </svg>
    )
  }
];

export default function SolutionsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-12 lg:p-24">
      <div className="max-w-7xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">Solutions for Every Industry</h1>
        
        <p className="text-xl mb-12">
          Obzervable provides tailored data processing and monitoring solutions to address the unique 
          challenges facing various industries and use cases. Our platform adapts to your specific needs,
          ensuring you get the most value from your data.
        </p>
        
        {/* Industry Solutions */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">Industry-Specific Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold text-primary mb-4">{industry.title}</h3>
                <p className="text-gray-700 mb-4">{industry.description}</p>
                
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  {industry.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                
                <Link href="#" className="text-primary font-medium hover:underline">
                  {industry.linkText} →
                </Link>
              </div>
            ))}
          </div>
        </section>
        
        {/* Use Cases */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">Common Use Cases</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-start p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 mr-4">
                  {useCase.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{useCase.title}</h3>
                  <p className="text-gray-700">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-primary-light text-white rounded-lg p-8 mb-12">
          <div className="md:flex items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Ready to solve your data challenges?</h2>
              <p className="text-lg opacity-90">
                Our experts will help you find the perfect solution for your specific needs. 
                Schedule a demo today and see Obzervable in action.
              </p>
            </div>
            <div>
              <Button 
                href="http://app.obzervable.com/signup"
                external={true}
                variant="secondary"
                size="lg"
                className="whitespace-nowrap"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 