import { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Solutions - Obzervable',
  description: 'Explore Obzervable solutions for event-driven architectures, data mesh implementation, and real-time streaming across industries and use cases.',
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
    title: 'Real-Time Analytics',
    description: 'Process and visualize live data streams with sub-second latency for immediate business insights, ideal for finance, retail, and time-sensitive decision making.',
    icon: (
      <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
        <path d="M16 6l2-2 2 2-2 2z" />
      </svg>
    )
  },
  {
    title: 'Event-Driven Microservices',
    description: 'Build responsive, decoupled applications triggered by events with microservices that leverage serverless compute on AWS Lambda for auto-scaling.',
    icon: (
      <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 6v6c0 1.1.9 2 2 2h1v7c0 .55.45 1 1 1s1-.45 1-1V3.13c0-.65-.61-1.13-1.24-.98C17.6 2.68 16 4.51 16 6zm-5 3H9V3c0-.55-.45-1-1-1s-1 .45-1 1v6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2z" />
      </svg>
    )
  },
  {
    title: 'IoT Data Collection',
    description: 'Aggregate and process high-volume sensor data in real-time at scale with polyglot data handling for various formats, supporting smart cities and manufacturing.',
    icon: (
      <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 5h10v2h2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v4h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17L6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17zM17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z" />
      </svg>
    )
  },
  {
    title: 'Data Mesh Implementation',
    description: 'Create a decentralized data architecture that enables domain-driven ownership where each domain publishes and consumes data as a product with improved governance.',
    icon: (
      <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 20.1v1.9c-2.5 0-4.71-1.28-6-3.22.64-.59 1-1.36 1-2.23 0-1.55-1.14-2.84-2.64-3.05.18-.83.45-1.63.8-2.38 1.94.96 3.34 2.76 3.74 4.93.27-.25.54-.49.81-.73-.29-2.11-1.34-3.82-2.81-5 2.58-2.26 6.08-2.82 9.1-1.8v1.79c-.94-.39-1.95-.6-3-6-3 0h1c-1.52 0-2.86.78-3.65 1.95-.24.36-.43.75-.6 1.17 1.62.67 2.88 1.98 3.32 3.7.79-.82 1.59-1.62 2.32-2.38-1.53-1.58-3.54-2.62-5.78-2.86 1.37-.73 2.94-.99 4.53-.65v-1.95c-5.22-.44-9.9 3.5-9.9 8.72 0 1.21.25 2.37.7 3.43 1.89 1.32 4.28 2.1 6.87 2.1zm2-13.1c-1.6 0-2.89 1.28-2.89 2.87 0 1.6 1.29 2.9 2.89 2.9 1.59 0 2.89-1.3 2.89-2.9 0-1.59-1.3-2.87-2.89-2.87z" />
      </svg>
    )
  },
  {
    title: 'AI Retrieval-Augmented Generation',
    description: 'Enhance AI models with real-time data for dynamic responses, perfect for chatbots, recommendation engines, and contextual applications requiring fresh information.',
    icon: (
      <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 11.18V9.72c0-.47-.16-.92-.46-1.28L16.6 3.72c-.38-.46-.94-.72-1.54-.72H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2v-3.08c.58-.21 1-.76 1-1.41v-1.89c0-.66-.42-1.21-1-1.42zM17.71 9.4l-4.59-2.3c-.38-.19-.83-.19-1.21 0l-4.59 2.3c-.38.19-.63.58-.63 1.01v4.2c0 .42.25.8.62.99l4.6 2.3c.37.2.82.2 1.2 0l4.6-2.3c.37-.19.62-.57.62-.99V10.4c0-.42-.24-.81-.62-1z" />
      </svg>
    )
  },
  {
    title: 'System Integration',
    description: 'Connect disparate systems like CRM, ERP, and databases for unified data flows that enhance operational efficiency and provide a single source of truth.',
    icon: (
      <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    )
  }
];

const technicalAdvantages = [
  {
    title: 'Streaming-First Design',
    description: 'Prioritize continuous data flows for real-time applications, outperforming batch-heavy platforms in latency-sensitive scenarios.',
  },
  {
    title: 'Serverless Compute',
    description: 'Leverage AWS Lambda for zero-management, auto-scaling pipelines with reduced operational overhead.',
  },
  {
    title: 'Durable & Rewindable Queues',
    description: 'Ensure no data loss with persistent, replayable event logs for reliable event sourcing and historical data access.',
  },
  {
    title: 'Polyglot Data Handling',
    description: 'Process diverse data formats (JSON, Avro, etc.) seamlessly with built-in schema validation.',
  },
  {
    title: 'Zero-to-Scale Simplicity',
    description: 'Launch scalable pipelines without writing infrastructure code, with AI-driven setup for accelerated deployment.',
  },
  {
    title: 'High Scalability',
    description: 'Handle massive data volumes with "Unlimited Listeners," supporting growing workloads without complex configurations.',
  },
];

const financialAdvantages = [
  {
    title: 'Lower Total Cost',
    description: 'Process only necessary data to reduce storage costs compared to data lakes while maintaining high performance.',
  },
  {
    title: 'Pay-as-You-Go Pricing',
    description: 'Pay only for compute and storage used, with transparent AWS integration for predictable billing.',
  },
  {
    title: 'Reduced Development Time',
    description: 'Cut development cycles with pre-built templates, AI-assisted coding, and visual flow builder.',
  },
  {
    title: 'Minimized Operational Overhead',
    description: 'Eliminate infrastructure management costs with fully managed serverless deployment.',
  },
];

export default function SolutionsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-12 lg:p-24">
      <div className="max-w-7xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">Solutions for Modern Data Challenges</h1>
        
        <p className="text-xl mb-12">
          Obzervable is a cloud-based platform empowering developers to build event-driven, 
          real-time streaming, microservice-based, and data mesh architectures on AWS. 
          Our solutions adapt to your specific needs while significantly reducing development time and operational complexity.
        </p>
        
        {/* Technical Advantages */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Technical Advantages</h2>
          <p className="text-lg mb-8 text-gray-700">
            Our platform combines cutting-edge architectural approaches with developer-friendly tools to deliver superior technical capabilities:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalAdvantages.map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                <h3 className="text-xl font-semibold text-primary mb-2">{advantage.title}</h3>
                <p className="text-gray-700">{advantage.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Industry Solutions */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Industry-Specific Solutions</h2>
          <p className="text-lg mb-8 text-gray-700">
            Obzervable provides tailored data processing and monitoring solutions to address the unique 
            challenges facing various industries:
          </p>
          
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
        
        {/* Financial Advantages */}
        <section className="mb-20 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Financial Advantages</h2>
          <p className="text-lg mb-8 text-gray-700">
            Our solutions deliver compelling financial benefits through optimized resources and simplified operations:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {financialAdvantages.map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-2">{advantage.title}</h3>
                <p className="text-gray-700">{advantage.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Use Cases */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Powerful Use Cases</h2>
          <p className="text-lg mb-8 text-gray-700">
            Obzervable supports a wide range of applications across industries:
          </p>
          
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
        
        {/* Deployment Options */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Flexible Deployment Options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-primary mb-4">Hosted Multitenant</h3>
              <p className="text-gray-700 mb-4">
                A fully managed SaaS offering hosted on Obzervable's AWS infrastructure with high availability and enterprise-grade security.
              </p>
              
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Zero infrastructure management</li>
                <li>Automatic updates and maintenance</li>
                <li>Pay-as-you-go pricing model</li>
                <li>Rapid onboarding process</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-primary mb-4">Self-Hosted Option</h3>
              <p className="text-gray-700 mb-4">
                Deploy Obzervable into your own AWS account using AWS Cloud Development Kit (CDK) templates for maximum control and customization.
              </p>
              
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Full control over your infrastructure</li>
                <li>Ability to add custom integrations</li>
                <li>Enhanced data sovereignty</li>
                <li>Seamless integration with existing AWS resources</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-primary-light text-white rounded-lg p-8 mb-12">
          <div className="md:flex items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Ready to transform your data architecture?</h2>
              <p className="text-lg opacity-90">
                Our experts will help you find the perfect solution for your specific needs. 
                Schedule a demo today and see how Obzervable can accelerate your development.
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