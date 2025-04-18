import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Resources - Obzervable',
  description: 'Explore our library of resources including blog posts, whitepapers, case studies, and knowledge base articles about data mesh, event-driven architecture, and real-time streaming.',
};

const featuredResources = [
  {
    title: 'The Complete Guide to Data Mesh Architecture',
    description: 'Learn everything you need to know about implementing data mesh in your organization to improve governance and data quality.',
    image: '/images/resource-guide.jpg',
    type: 'Guide',
    url: '/resources/complete-guide-data-mesh',
  },
  {
    title: 'Event-Driven vs. Batch Processing: When to Choose Each',
    description: 'Our comprehensive analysis of streaming vs. batch architectures with performance benchmarks and use case examples.',
    image: '/images/resource-report.jpg',
    type: 'Report',
    url: '/resources/event-driven-vs-batch',
  },
  {
    title: 'Data Streaming ROI Calculator',
    description: 'Calculate the potential ROI of implementing real-time data streaming in your organization, including cost comparison with data lakes.',
    image: '/images/resource-calculator.jpg',
    type: 'Tool',
    url: '/resources/roi-calculator',
  },
];

const blogPosts = [
  {
    title: 'Why Data Mesh is the Future of Data Management',
    summary: 'Explore how data mesh principles can transform your organization by enabling decentralized data ownership with domain-driven pipelines.',
    date: 'April 12, 2023',
    author: 'Sarah Johnson',
    authorRole: 'Chief Data Architect',
    image: '/images/blog-data-mesh.jpg',
    url: '/blog/why-data-mesh-future',
    readTime: '8 min read',
  },
  {
    title: 'Event Sourcing 101: Build Resilient Systems with Obzervable',
    summary: 'Learn how event sourcing enables you to capture and replay events for robust, auditable systems with reliable historical data access.',
    date: 'March 28, 2023',
    author: 'Michael Chen',
    authorRole: 'Lead Data Engineer',
    image: '/images/blog-event-sourcing.jpg',
    url: '/blog/event-sourcing-101',
    readTime: '7 min read',
  },
  {
    title: 'Streaming vs. Batch: Why Obzervable Wins for Real-Time Needs',
    summary: 'Discover why streaming-first design outperforms batch-heavy platforms in latency-sensitive scenarios and when to choose each approach.',
    date: 'February 15, 2023',
    author: 'Emily Rodriguez',
    authorRole: 'Data Engineering Manager',
    image: '/images/blog-streaming-vs-batch.jpg',
    url: '/blog/streaming-vs-batch',
    readTime: '6 min read',
  },
  {
    title: 'How Obzervable Cuts Data Costs Without Sacrificing Power',
    summary: 'Understand the financial benefits of processing only necessary data to reduce storage costs compared to data lakes while maintaining high performance.',
    date: 'January 30, 2023',
    author: 'David Wilson',
    authorRole: 'Chief Data Officer',
    image: '/images/blog-cost-reduction.jpg',
    url: '/blog/cut-data-costs',
    readTime: '9 min read',
  },
  {
    title: 'How to Implement DDD with Obzervable for Better Data Alignment',
    summary: 'A practical guide to building pipelines tailored to business domains, ensuring data reflects real-world processes for simpler integrations.',
    date: 'December 18, 2022',
    author: 'Priya Sharma',
    authorRole: 'Solutions Architect',
    image: '/images/blog-ddd-implementation.jpg',
    url: '/blog/ddd-implementation-guide',
    readTime: '10 min read',
  },
  {
    title: "How Obzervable's Playground Simplifies Pipeline Design",
    summary: "See how the Playground's visual flow visualization enhances debugging, collaboration, and overall developer experience.",
    date: 'November 5, 2022',
    author: 'Alex Thompson',
    authorRole: 'Principal Developer Advocate',
    image: '/images/blog-playground.jpg',
    url: '/blog/playground-simplifies-design',
    readTime: '5 min read',
  },
];

const whitepapers = [
  {
    title: 'Data Mesh vs Data Fabric: Key Differences & Proven Benefits',
    description: 'This whitepaper compares data mesh and data fabric architectures, highlighting the advantages of domain-driven data ownership.',
    image: '/images/whitepaper-data-mesh.jpg',
    url: '/resources/whitepaper-mesh-vs-fabric',
    downloadLabel: 'Download PDF',
  },
  {
    title: 'Best Practices for Real-Time Stream Processing',
    description: 'A technical guide to implementing and scaling real-time stream processing with event sourcing and rewindable queues.',
    image: '/images/whitepaper-streaming.jpg',
    url: '/resources/whitepaper-stream-processing',
    downloadLabel: 'Download PDF',
  },
  {
    title: 'Data Lakes vs. Data Streams: Know the Difference to Save on Storage Costs',
    description: 'Analyze the cost implications of different data architectures and understand when streaming is more cost-effective than lake storage.',
    image: '/images/whitepaper-cost-analysis.jpg',
    url: '/resources/whitepaper-lakes-vs-streams',
    downloadLabel: 'Download PDF',
  },
];

const knowledgeBase = [
  {
    title: "How Obzervable's Durable Queues Prevent Data Loss",
    description: 'Learn how our persistent, replayable event logs ensure no data is lost while maintaining high performance.',
    category: 'Technical Guides',
    image: '/images/kb-durable-queues.jpg',
    url: '/resources/kb-durable-queues',
  },
  {
    title: "Understanding Obzervable's Pay-as-You-Go Pricing",
    description: 'A detailed explanation of our consumption-based pricing model and how it integrates with AWS billing for transparency.',
    category: 'Pricing',
    image: '/images/kb-pricing.jpg',
    url: '/resources/kb-pay-as-you-go',
  },
  {
    title: 'Getting Started with Python and Node.js in Obzervable',
    description: 'Step-by-step guide to writing data pipelines in Python and Node.js with Obzervable.',
    category: 'Tutorials',
    image: '/images/kb-languages.jpg',
    url: '/resources/kb-python-nodejs',
  },
  {
    title: 'Building IoT Pipelines with Obzervable',
    description: 'Learn how to process high-volume sensor data in real-time using our pre-built connectors and templates.',
    category: 'Use Cases',
    image: '/images/kb-iot.jpg',
    url: '/resources/kb-iot-pipelines',
  },
];

const caseStudies = [
  {
    title: 'How Fintech Leader Reduced Data Incidents by 78%',
    description: 'Learn how a leading fintech company implemented Obzervable to significantly reduce data incidents using real-time monitoring.',
    company: 'PayTech Solutions',
    industry: 'Financial Services',
    image: '/images/case-study-fintech.jpg',
    url: '/resources/case-study-paytech',
  },
  {
    title: 'E-commerce Giant Saves $2M with Data Streaming Architecture',
    description: 'See how one of the world\'s largest e-commerce companies saved millions by switching from batch processing to real-time streams.',
    company: 'ShopGlobal',
    industry: 'E-commerce',
    image: '/images/case-study-ecommerce.jpg',
    url: '/resources/case-study-shopglobal',
  },
  {
    title: 'Startup Scales Transaction Processing from Prototype to Enterprise',
    description: 'Discover how a fintech startup scaled their transaction processing from MVP to enterprise-grade using Obzervable\'s zero-to-scale pipelines.',
    company: 'FinanceFlow',
    industry: 'Financial Services',
    image: '/images/case-study-financeflow.jpg',
    url: '/resources/case-study-financeflow',
  },
];

const webinars = [
  {
    title: "Turn Your Data into Products with Obzervable's Data Mesh",
    description: 'Learn how to implement data mesh architecture and enable departments to own and share data products.',
    date: 'May 18, 2023',
    duration: '45 minutes',
    image: '/images/webinar-data-mesh.jpg',
    url: '/resources/webinar-data-products',
    watchLabel: 'Watch Now',
  },
  {
    title: 'How Obzervable Makes Data Engineering Accessible to All',
    description: 'Discover how our platform democratizes data engineering and empowers non-experts to build pipelines.',
    date: 'April 27, 2023',
    duration: '60 minutes',
    image: '/images/webinar-democratized.jpg',
    url: '/resources/webinar-accessible-engineering',
    watchLabel: 'Watch Now',
  },
  {
    title: 'Building a CDP with Obzervable for Smarter Marketing',
    description: 'Learn how to unify customer data for personalized marketing by leveraging real-time streams.',
    date: 'March 15, 2023',
    duration: '50 minutes',
    image: '/images/webinar-cdp.jpg',
    url: '/resources/webinar-cdp-marketing',
    watchLabel: 'Watch Now',
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Resources</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 mb-10">
            Explore our library of guides, reports, blog posts, and more to learn about data mesh, 
            event-driven architecture, and how to build modern real-time data systems.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#blog" className="text-primary font-medium hover:underline">Blog Posts</a>
            <span className="text-gray-300">•</span>
            <a href="#whitepapers" className="text-primary font-medium hover:underline">Whitepapers</a>
            <span className="text-gray-300">•</span>
            <a href="#knowledge-base" className="text-primary font-medium hover:underline">Knowledge Base</a>
            <span className="text-gray-300">•</span>
            <a href="#case-studies" className="text-primary font-medium hover:underline">Case Studies</a>
            <span className="text-gray-300">•</span>
            <a href="#webinars" className="text-primary font-medium hover:underline">Webinars</a>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="bg-gray-200"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {resource.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-6">{resource.description}</p>
                  <Link href={resource.url} className="text-primary font-medium hover:underline">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section id="blog" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Latest Blog Posts</h2>
            <Link href="/blog" className="text-primary font-medium hover:underline">
              View All Blog Posts →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="relative md:w-1/3 h-48 md:h-auto">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="bg-gray-200"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <Link href={post.url}>
                      <h3 className="text-xl font-bold mb-3 hover:text-primary">{post.title}</h3>
                    </Link>
                    <p className="text-gray-600 mb-4">{post.summary}</p>
                    <div className="flex items-center">
                      <div className="mr-3 bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-gray-600 font-bold">
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{post.author}</p>
                        <p className="text-sm text-gray-500">{post.authorRole}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers */}
      <section id="whitepapers" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Whitepapers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whitepapers.map((whitepaper, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={whitepaper.image}
                    alt={whitepaper.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="bg-gray-200"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{whitepaper.title}</h3>
                  <p className="text-gray-600 mb-6">{whitepaper.description}</p>
                  <Link 
                    href={whitepaper.url} 
                    className="inline-flex items-center px-4 py-2 border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white transition-colors"
                  >
                    {whitepaper.downloadLabel}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section id="knowledge-base" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Knowledge Base</h2>
            <Link href="/knowledge-base" className="text-primary font-medium hover:underline">
              View All Articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {knowledgeBase.map((article, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="relative md:w-1/3 h-48 md:h-auto">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="bg-gray-200"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium mb-3">
                      {article.category}
                    </span>
                    <Link href={article.url}>
                      <h3 className="text-xl font-bold mb-3 hover:text-primary">{article.title}</h3>
                    </Link>
                    <p className="text-gray-600 mb-4">{article.description}</p>
                    <Link href={article.url} className="text-primary font-medium hover:underline">
                      Read Article →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="bg-gray-200"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                  <p className="text-gray-500 font-medium mb-3">{study.company}</p>
                  <p className="text-gray-600 mb-6">{study.description}</p>
                  <Link href={study.url} className="text-primary font-medium hover:underline">
                    Read Case Study →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars */}
      <section id="webinars" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Webinars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={webinar.image}
                    alt={webinar.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="bg-gray-200"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="text-sm text-gray-500">{webinar.date}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{webinar.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{webinar.title}</h3>
                  <p className="text-gray-600 mb-6">{webinar.description}</p>
                  <Link 
                    href={webinar.url} 
                    className="inline-flex items-center px-4 py-2 border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white transition-colors"
                  >
                    {webinar.watchLabel}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to see Obzervable in action?</h2>
          <p className="text-xl opacity-90 mb-8">
            Schedule a demo to see how our platform can help you build better data systems faster.
          </p>
          <Button 
            href="http://app.obzervable.com/signup"
            variant="secondary"
            size="lg"
            external={true}
          >
            Schedule a Demo
          </Button>
        </div>
      </section>
    </main>
  );
} 