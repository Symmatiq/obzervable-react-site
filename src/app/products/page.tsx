import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products - Obzervable',
  description: 'Explore Obzervable\'s product offerings including data monitoring, flow builder, and AI-powered development tools.',
};

export default function ProductsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-12 lg:p-24">
      <div className="max-w-7xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">Our Products</h1>
        
        <p className="text-xl mb-12">
          Obzervable offers a comprehensive suite of tools designed to simplify real-time data processing 
          and monitoring while leveraging domain-driven design, data mesh architecture, and event-driven principles.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Product 1 */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-primary mb-4">Enhanced Monitoring</h2>
            <p className="text-gray-700 mb-4">
              Gain deep insights into your data flows with real-time monitoring, alerts, and comprehensive dashboards.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Real-time metrics and visualization</li>
              <li>Customizable alert thresholds</li>
              <li>Historical data analysis</li>
            </ul>
            <a href="#" className="text-primary font-medium hover:underline">Learn more →</a>
          </div>
          
          {/* Product 2 */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-primary mb-4">Data Flow Builder</h2>
            <p className="text-gray-700 mb-4">
              Design and implement complex data flows with our intuitive in-browser builder.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Drag-and-drop interface</li>
              <li>Pre-built connectors and templates</li>
              <li>Real-time validation and testing</li>
            </ul>
            <a href="#" className="text-primary font-medium hover:underline">Learn more →</a>
          </div>
          
          {/* Product 3 */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-primary mb-4">AI-Powered Development</h2>
            <p className="text-gray-700 mb-4">
              Accelerate your development with AI-assisted flow generation and optimization.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Automated flow suggestions</li>
              <li>Pattern recognition and optimization</li>
              <li>Natural language interface</li>
            </ul>
            <a href="#" className="text-primary font-medium hover:underline">Learn more →</a>
          </div>
        </div>
        
        <div className="bg-accent p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
          <p className="mb-6">
            Schedule a demo to see how Obzervable can transform your data architecture.
          </p>
          <a 
            href="http://app.obzervable.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-md inline-block transition-colors"
          >
            Schedule a Demo
          </a>
        </div>
      </div>
    </main>
  );
} 