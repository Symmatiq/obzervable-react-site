import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Resources - Obzervable',
  description: 'Explore our library of resources including blog posts, whitepapers, case studies, and webinars about data observability and best practices.',
};

const featuredResources = [
  {
    title: 'The Complete Guide to Data Observability',
    description: 'Learn everything you need to know about implementing data observability in your organization.',
    image: '/images/resource-guide.jpg',
    type: 'Guide',
    url: '/resources/complete-guide-data-observability',
  },
  {
    title: 'The State of Data Quality in 2023',
    description: 'Our annual report on data quality trends, challenges, and solutions.',
    image: '/images/resource-report.jpg',
    type: 'Report',
    url: '/resources/state-of-data-quality-2023',
  },
  {
    title: 'Data Observability ROI Calculator',
    description: 'Calculate the potential ROI of implementing data observability in your organization.',
    image: '/images/resource-calculator.jpg',
    type: 'Tool',
    url: '/resources/roi-calculator',
  },
];

const blogPosts = [
  {
    title: 'How to Build a Data Quality Monitoring Strategy',
    summary: 'A comprehensive guide to building an effective data quality monitoring strategy for your organization.',
    date: 'April 12, 2023',
    author: 'Sarah Johnson',
    authorRole: 'Data Scientist',
    image: '/images/blog-data-quality.jpg',
    url: '/blog/data-quality-monitoring-strategy',
    readTime: '8 min read',
  },
  {
    title: 'Understanding Data Lineage: A Comprehensive Guide',
    summary: 'Learn how data lineage helps you track data throughout its lifecycle and why it matters for data governance.',
    date: 'March 28, 2023',
    author: 'Michael Chen',
    authorRole: 'Lead Data Engineer',
    image: '/images/blog-data-lineage.jpg',
    url: '/blog/understanding-data-lineage',
    readTime: '6 min read',
  },
  {
    title: '5 Common Data Pipeline Failures and How to Prevent Them',
    summary: 'Discover the most common causes of data pipeline failures and strategies to prevent them from happening.',
    date: 'February 15, 2023',
    author: 'Emily Rodriguez',
    authorRole: 'Data Engineering Manager',
    image: '/images/blog-pipeline-failures.jpg',
    url: '/blog/common-data-pipeline-failures',
    readTime: '7 min read',
  },
  {
    title: 'The Business Case for Data Observability',
    summary: 'Understand the business value of data observability and how to make the case to your organization.',
    date: 'January 30, 2023',
    author: 'David Wilson',
    authorRole: 'Chief Data Officer',
    image: '/images/blog-business-case.jpg',
    url: '/blog/business-case-for-data-observability',
    readTime: '10 min read',
  },
];

const whitepapers = [
  {
    title: 'The Hidden Costs of Poor Data Quality',
    description: 'This whitepaper explores the financial and operational impacts of poor data quality on businesses.',
    image: '/images/whitepaper-data-quality.jpg',
    url: '/resources/whitepaper-hidden-costs',
    downloadLabel: 'Download PDF',
  },
  {
    title: 'Data Observability Architecture Guide',
    description: 'A technical guide to implementing and scaling data observability architecture in modern data stacks.',
    image: '/images/whitepaper-architecture.jpg',
    url: '/resources/whitepaper-architecture-guide',
    downloadLabel: 'Download PDF',
  },
  {
    title: 'Data Governance in the Age of AI',
    description: 'Best practices for maintaining strong data governance while implementing AI/ML initiatives.',
    image: '/images/whitepaper-governance.jpg',
    url: '/resources/whitepaper-data-governance',
    downloadLabel: 'Download PDF',
  },
];

const caseStudies = [
  {
    title: 'How Fintech Leader Reduced Data Incidents by 78%',
    description: 'Learn how a leading fintech company implemented Obzervable to significantly reduce data incidents.',
    company: 'PayTech Solutions',
    industry: 'Financial Services',
    image: '/images/case-study-fintech.jpg',
    url: '/resources/case-study-paytech',
  },
  {
    title: 'E-commerce Giant Saves $2M with Data Observability',
    description: 'See how one of the world\'s largest e-commerce companies saved millions by improving data reliability.',
    company: 'ShopGlobal',
    industry: 'E-commerce',
    image: '/images/case-study-ecommerce.jpg',
    url: '/resources/case-study-shopglobal',
  },
  {
    title: 'Healthcare Provider Improves Data Trust by 94%',
    description: 'Discover how a major healthcare provider dramatically improved data trust across the organization.',
    company: 'MediCare Plus',
    industry: 'Healthcare',
    image: '/images/case-study-healthcare.jpg',
    url: '/resources/case-study-medicare-plus',
  },
];

const webinars = [
  {
    title: 'Building a Data Quality Culture',
    description: 'Learn how to build a culture of data quality throughout your organization.',
    date: 'May 18, 2023',
    duration: '45 minutes',
    image: '/images/webinar-culture.jpg',
    url: '/resources/webinar-data-quality-culture',
    watchLabel: 'Watch Now',
  },
  {
    title: 'Modern Data Stack Observability',
    description: 'Best practices for implementing observability across your modern data stack.',
    date: 'April 27, 2023',
    duration: '60 minutes',
    image: '/images/webinar-modern-stack.jpg',
    url: '/resources/webinar-modern-data-stack',
    watchLabel: 'Watch Now',
  },
  {
    title: 'Data Testing Strategies for Reliable Pipelines',
    description: 'Learn effective testing strategies to ensure your data pipelines deliver reliable results.',
    date: 'March 15, 2023',
    duration: '50 minutes',
    image: '/images/webinar-testing.jpg',
    url: '/resources/webinar-testing-strategies',
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
            Explore our library of guides, reports, blog posts, and more to learn about data observability 
            and how to improve the reliability of your data.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#blog" className="text-primary font-medium hover:underline">Blog Posts</a>
            <span className="text-gray-300">•</span>
            <a href="#whitepapers" className="text-primary font-medium hover:underline">Whitepapers</a>
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
          <h2 className="text-3xl font-bold mb-12 text-center">Whitepapers & Research</h2>
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
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    {whitepaper.downloadLabel}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Case Studies</h2>
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
                </div>
                <div className="p-6">
                  <div className="flex mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-gray-600 text-sm mb-1">{study.company}</p>
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
      <section id="webinars" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Webinars & Events</h2>
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
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-white opacity-70">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                    <span className="text-sm text-gray-500">{webinar.date}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{webinar.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{webinar.title}</h3>
                  <p className="text-gray-600 mb-6">{webinar.description}</p>
                  <Link 
                    href={webinar.url} 
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                    {webinar.watchLabel}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-white/80 mb-8">
            Subscribe to our newsletter to receive the latest resources, blog posts, and updates.
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Join Our Newsletter</h3>
              <p className="text-gray-600">Get the latest data observability insights delivered to your inbox.</p>
            </div>
            <form className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <Button type="submit" variant="primary">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
} 