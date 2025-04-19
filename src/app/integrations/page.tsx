import { Metadata } from 'next';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Integrations - Obzervable',
  description: 'Explore Obzervable\'s wide range of integrations with popular data sources, databases, messaging systems, and cloud platforms.',
};

const integrationCategories = [
  {
    name: 'Data Sources',
    description: 'Connect to various data sources to ingest data into your Obzervable pipelines.',
    integrations: [
      { name: 'MySQL', logo: '🔶' },
      { name: 'PostgreSQL', logo: '🐘' },
      { name: 'MongoDB', logo: '🍃' },
      { name: 'SQL Server', logo: '🔷' },
      { name: 'Oracle', logo: '🔴' },
      { name: 'Cassandra', logo: '👁️' },
      { name: 'DynamoDB', logo: '📊' },
      { name: 'Snowflake', logo: '❄️' },
    ]
  },
  {
    name: 'Messaging & Streaming',
    description: 'Integrate with messaging and streaming platforms for real-time data processing.',
    integrations: [
      { name: 'Kafka', logo: '📨' },
      { name: 'RabbitMQ', logo: '🐇' },
      { name: 'Amazon SQS', logo: '📩' },
      { name: 'Google Pub/Sub', logo: '📡' },
      { name: 'Azure Service Bus', logo: '🚌' },
      { name: 'Redis Streams', logo: '🔄' },
      { name: 'MQTT', logo: '📱' },
      { name: 'NATS', logo: '⚡' },
    ]
  },
  {
    name: 'Cloud Platforms',
    description: 'Seamlessly connect with major cloud providers for comprehensive data solutions.',
    integrations: [
      { name: 'AWS', logo: '☁️' },
      { name: 'Google Cloud', logo: '🌐' },
      { name: 'Microsoft Azure', logo: '📘' },
      { name: 'IBM Cloud', logo: '🔵' },
      { name: 'Oracle Cloud', logo: '🔶' },
      { name: 'Alibaba Cloud', logo: '🔸' },
      { name: 'DigitalOcean', logo: '💧' },
      { name: 'Heroku', logo: '🟣' },
    ]
  },
  {
    name: 'Analytics & Visualization',
    description: 'Connect your data to powerful analytics and visualization tools.',
    integrations: [
      { name: 'Tableau', logo: '📊' },
      { name: 'Power BI', logo: '📈' },
      { name: 'Grafana', logo: '📉' },
      { name: 'Kibana', logo: '🔍' },
      { name: 'Looker', logo: '👁️' },
      { name: 'Metabase', logo: '📋' },
      { name: 'QuickSight', logo: '⚡' },
      { name: 'DataStudio', logo: '📓' },
    ]
  },
];

const featuredIntegrations = [
  {
    name: 'Real-time Kafka Integration',
    description: 'Process streaming data from Kafka topics with our specialized connectors optimized for high throughput and low latency.',
    features: [
      'Automatic schema detection and mapping',
      'Topic filtering and transformation',
      'Dead-letter queue handling',
      'Consumer group management'
    ],
    cta: 'Learn More'
  },
  {
    name: 'Snowflake Data Pipeline',
    description: 'Seamlessly move data between Snowflake and your event-driven architecture with our bidirectional connectors.',
    features: [
      'Incremental data loading',
      'Advanced transformation capabilities',
      'Query result streaming',
      'Schema evolution support'
    ],
    cta: 'Explore Connector'
  },
  {
    name: 'AWS Suite Integration',
    description: 'Connect to the entire AWS ecosystem including S3, DynamoDB, Redshift, Kinesis, and more.',
    features: [
      'IAM role-based authentication',
      'Cross-region data transfer',
      'Event-driven triggers from AWS services',
      'Serverless integration options'
    ],
    cta: 'View AWS Integrations'
  }
];

const IntegrationCard = ({ name, logo }: { name: string; logo: string }) => (
  <div className="flex items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
    <div className="text-3xl mr-3">{logo}</div>
    <span className="font-medium">{name}</span>
  </div>
);

export default function IntegrationsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-12 lg:p-24">
      <div className="max-w-7xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">Integrations</h1>
        
        <p className="text-xl mb-12">
          Obzervable connects seamlessly with your existing data ecosystem. Our extensive 
          library of pre-built integrations allows you to start streaming and processing data 
          from virtually any source without complex coding or configuration.
        </p>
        
        {/* Featured Integrations */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Featured Integrations</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredIntegrations.map((integration, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white"
              >
                <h3 className="text-xl font-bold text-primary mb-3">{integration.name}</h3>
                <p className="text-gray-700 mb-4">{integration.description}</p>
                
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  {integration.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  href="#" 
                  className="mt-4"
                >
                  {integration.cta}
                </Button>
              </div>
            ))}
          </div>
        </section>
        
        {/* Integration Categories */}
        {integrationCategories.map((category, index) => (
          <section key={index} className="mb-16">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{category.name}</h2>
            <p className="text-gray-700 mb-6">{category.description}</p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {category.integrations.map((integration, idx) => (
                <IntegrationCard 
                  key={idx} 
                  name={integration.name} 
                  logo={integration.logo} 
                />
              ))}
            </div>
          </section>
        ))}
        
        {/* Custom Integration */}
        <section className="bg-accent p-8 rounded-lg mb-10">
          <div className="md:flex items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Need a Custom Integration?</h2>
              <p className="text-gray-700">
                Don&apos;t see the integration you need? Our team can develop custom connectors 
                for any data source or destination. Contact us to discuss your specific requirements.
              </p>
            </div>
            <div>
              <Button 
                href="http://app.obzervable.com/signup"
                external={true}
                variant="primary"
                size="lg"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 