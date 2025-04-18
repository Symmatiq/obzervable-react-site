import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features - Obzervable',
  description: 'Explore Obzervable\'s enterprise-grade platform for event-driven architectures, data mesh support, and real-time streaming data pipelines.',
};

export default function FeaturesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-12 lg:p-24">
      <div className="max-w-7xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">Our Features</h1>
        
        <p className="text-xl mb-8">
          Obzervable is a cloud-based platform designed to empower data and app developers to build 
          <span className="font-semibold"> event-driven, real-time streaming, microservice-based, and data mesh architectures</span> using 
          Amazon Web Services (AWS).
        </p>

        <p className="text-xl mb-12">
          Our platform simplifies the creation and management of real-time data pipelines through an intuitive user experience,
          powerful AI-assisted tools, and seamless AWS integration.
        </p>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-primary mb-4">Enhanced Monitoring</h3>
              <p className="text-gray-700 mb-4">
                Gain function-level insights into your data pipelines with real-time monitoring, alerts, and visualization.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Real-time statistics and alerts</li>
                <li>Customizable dashboards</li>
                <li>AWS CloudWatch integration</li>
                <li>Proactive issue resolution</li>
              </ul>
              <a href="#" className="text-primary font-medium hover:underline">Learn more →</a>
            </div>
            
            {/* Feature 2 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-primary mb-4">Data Flow Builder</h3>
              <p className="text-gray-700 mb-4">
                Design and deploy complex data flows with our intuitive cloud-based Playground.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Visual flow visualization</li>
                <li>Low-code/No-code interface</li>
                <li>GitHub synchronization</li>
                <li>Pre-built templates for common use cases</li>
              </ul>
              <a href="#" className="text-primary font-medium hover:underline">Learn more →</a>
            </div>
            
            {/* Feature 3 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-primary mb-4">AI-Powered Development</h3>
              <p className="text-gray-700 mb-4">
                Accelerate development with AI-assisted flow generation and natural language prompts.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Natural language flow definition</li>
                <li>AWS Bedrock integration</li>
                <li>MCP for AI agent integration</li>
                <li>Full code customization</li>
              </ul>
              <a href="#" className="text-primary font-medium hover:underline">Learn more →</a>
            </div>

            {/* Feature 4 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-primary mb-4">Data Streaming & Mesh</h3>
              <p className="text-gray-700 mb-4">
                Build robust data architecture with our event-driven streaming platform.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Built on open-source rstreams</li>
                <li>Domain-driven design approach</li>
                <li>Event sourcing and CQRS support</li>
                <li>Real-time processing</li>
              </ul>
              <a href="#" className="text-primary font-medium hover:underline">Learn more →</a>
            </div>

            {/* Feature 5 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-primary mb-4">Deployment Flexibility</h3>
              <p className="text-gray-700 mb-4">
                Choose the deployment model that fits your organization's needs.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Hosted multitenant architecture</li>
                <li>Self-hosted option in your AWS account</li>
                <li>AWS CDK deployment templates</li>
                <li>High availability by design</li>
              </ul>
              <a href="#" className="text-primary font-medium hover:underline">Learn more →</a>
            </div>

            {/* Feature 6 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-primary mb-4">GitHub Integration</h3>
              <p className="text-gray-700 mb-4">
                Sync your data pipeline configurations and code with GitHub repositories.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Version control for pipelines</li>
                <li>GitHub Actions integration</li>
                <li>Infrastructure-as-code</li>
                <li>CI/CD support</li>
              </ul>
              <a href="#" className="text-primary font-medium hover:underline">Learn more →</a>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Target Audience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Developers</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Data Engineers building optimized pipelines</li>
                <li>Full-stack & Backend Data Developers</li>
                <li>Multiple language support (Python, Node.js)</li>
                <li>Simplified developer onboarding</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Businesses</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Small and Medium-sized Businesses (SMBs)</li>
                <li>Enterprise organizations with complex data needs</li>
                <li>Startups focused on rapid development</li>
                <li>Industry-agnostic solution</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-3">Real-Time Analytics</h3>
              <p className="text-gray-700">
                Process and visualize live data streams for immediate business insights, ideal for finance and retail sectors.
              </p>
            </div>

            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-3">Event-Driven Microservices</h3>
              <p className="text-gray-700">
                Build responsive, decoupled applications triggered by events, perfect for modern application architectures.
              </p>
            </div>

            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-3">IoT Data Collection</h3>
              <p className="text-gray-700">
                Aggregate and manage data from IoT devices at scale, supporting smart cities and manufacturing applications.
              </p>
            </div>

            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-3">AI-Driven Workflows</h3>
              <p className="text-gray-700">
                Enable AI models to process and act on streaming data in real-time, enhancing dynamic response capabilities.
              </p>
            </div>

            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-3">Scalable Backend Applications</h3>
              <p className="text-gray-700">
                Support growing workloads with a modular, microservice-based architecture that scales automatically.
              </p>
            </div>

            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-3">Customer Data Platform</h3>
              <p className="text-gray-700">
                Centralize customer data for marketing, personalization, and analytics with real-time update capabilities.
              </p>
            </div>
          </div>
        </section>
        
        <div className="bg-accent p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
          <p className="mb-6">
            Schedule a demo to see how Obzervable can transform your data architecture and accelerate your development.
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