import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Documentation - Obzervable',
  description: 'Comprehensive documentation for Obzervable including guides, tutorials, API references, and best practices.',
};

const docCategories = [
  {
    title: 'Getting Started',
    description: 'Learn the basics of Obzervable and get up and running quickly.',
    icon: (
      <svg 
        className="w-10 h-10 text-primary" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M13 10V3L4 14h7v7l9-11h-7z" 
        />
      </svg>
    ),
    links: [
      { text: 'Quick Start Guide', href: '#' },
      { text: 'Core Concepts', href: '#' },
      { text: 'Architecture Overview', href: '#' },
      { text: 'Installation & Setup', href: '#' },
    ]
  },
  {
    title: 'Data Sources',
    description: 'Connect to a variety of data sources and manage your data inputs.',
    icon: (
      <svg 
        className="w-10 h-10 text-primary" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" 
        />
      </svg>
    ),
    links: [
      { text: 'Supported Data Sources', href: '#' },
      { text: 'Connector Configuration', href: '#' },
      { text: 'Schema Management', href: '#' },
      { text: 'Data Validation', href: '#' },
    ]
  },
  {
    title: 'Data Flow Builder',
    description: 'Design and implement data flows with our intuitive visual builder.',
    icon: (
      <svg 
        className="w-10 h-10 text-primary" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" 
        />
      </svg>
    ),
    links: [
      { text: 'Builder Interface Guide', href: '#' },
      { text: 'Data Transformations', href: '#' },
      { text: 'Flow Templates', href: '#' },
      { text: 'Testing & Debugging', href: '#' },
    ]
  },
  {
    title: 'Monitoring & Alerts',
    description: 'Set up comprehensive monitoring and alerting for your data flows.',
    icon: (
      <svg 
        className="w-10 h-10 text-primary" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
        />
      </svg>
    ),
    links: [
      { text: 'Metrics & Dashboards', href: '#' },
      { text: 'Alert Configuration', href: '#' },
      { text: 'Log Management', href: '#' },
      { text: 'Health Checks', href: '#' },
    ]
  },
  {
    title: 'AI Integration',
    description: 'Leverage AI capabilities to enhance your data processing workflows.',
    icon: (
      <svg 
        className="w-10 h-10 text-primary" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
        />
      </svg>
    ),
    links: [
      { text: 'AI-Assisted Flow Generation', href: '#' },
      { text: 'Pattern Recognition', href: '#' },
      { text: 'Anomaly Detection', href: '#' },
      { text: 'Natural Language Interface', href: '#' },
    ]
  },
  {
    title: 'API Reference',
    description: 'Complete API documentation for developers integrating with Obzervable.',
    icon: (
      <svg 
        className="w-10 h-10 text-primary" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" 
        />
      </svg>
    ),
    links: [
      { text: 'REST API', href: '#' },
      { text: 'GraphQL API', href: '#' },
      { text: 'SDK Documentation', href: '#' },
      { text: 'Webhooks', href: '#' },
    ]
  },
];

export default function DocPage() {
  return (
    <main className="min-h-screen p-4 md:p-12 lg:p-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Documentation</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Everything you need to know about Obzervable. From getting started guides to advanced
            API references, find all the resources you need to be successful.
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-150 ease-in-out"
              placeholder="Search documentation..."
            />
          </div>
        </div>
        
        {/* Documentation Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {docCategories.map((category, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                {category.icon}
              </div>
              <h2 className="text-2xl font-bold text-primary mb-2">{category.title}</h2>
              <p className="text-gray-700 mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.links.map((link, idx) => (
                  <li key={idx}>
                    <Link 
                      href={link.href} 
                      className="text-blue-600 hover:text-blue-800 hover:underline flex items-center"
                    >
                      <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Additional Resources */}
        <div className="bg-gradient-to-r from-primary-light to-primary text-white rounded-lg p-8">
          <div className="md:flex items-center">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Need Additional Help?</h2>
              <p className="opacity-90">
                Our support team is ready to assist you with any questions or issues you may have.
                You can also join our community forum to connect with other Obzervable users.
              </p>
            </div>
            <div className="md:w-1/3 md:pl-8 flex flex-col space-y-3">
              <a 
                href="#" 
                className="inline-block bg-white text-primary px-6 py-3 rounded-md font-medium text-center hover:bg-gray-100 transition-colors"
              >
                Contact Support
              </a>
              <a 
                href="#" 
                className="inline-block bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium text-center hover:bg-white/10 transition-colors"
              >
                Join Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 