import { Metadata } from 'next';
// import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Blog - Obzervable',
  description: 'Insights, guides, and best practices on data observability, data quality, and analytics. Stay up to date with the latest trends in the industry.',
};

const categories = [
  { name: 'Data Observability', slug: 'data-observability', count: 12 },
  { name: 'Best Practices', slug: 'best-practices', count: 8 },
  { name: 'Product Updates', slug: 'product-updates', count: 5 },
  { name: 'Case Studies', slug: 'case-studies', count: 4 },
  { name: 'Tutorials', slug: 'tutorials', count: 7 },
  { name: 'Industry Insights', slug: 'industry-insights', count: 6 },
];

const featuredPosts = [
  {
    id: 'data-observability-in-2023',
    title: 'The State of Data Observability in 2023',
    excerpt: 'An in-depth analysis of how data observability has evolved over the past year and what to expect in the coming years.',
    coverImage: '/images/blog/data-observability-2023.jpg',
    date: 'May 15, 2023',
    author: {
      name: 'Sarah Johnson',
      avatar: '/images/team/sarah-johnson.jpg',
      title: 'Chief Data Scientist'
    },
    category: 'Industry Insights',
    readTime: '8 min read',
    featured: true
  },
  {
    id: 'ml-monitoring',
    title: 'Best Practices for Monitoring ML Models in Production',
    excerpt: 'Learn how to effectively monitor your machine learning models in production environments to ensure reliability and performance.',
    coverImage: '/images/blog/ml-monitoring.jpg',
    date: 'April 28, 2023',
    author: {
      name: 'Michael Chen',
      avatar: '/images/team/michael-chen.jpg',
      title: 'ML Engineer'
    },
    category: 'Best Practices',
    readTime: '6 min read',
    featured: true
  },
  {
    id: 'data-quality-metrics',
    title: '5 Essential Data Quality Metrics You Should Be Tracking',
    excerpt: 'Discover the key metrics that will help you maintain high data quality and identify issues before they impact your business.',
    coverImage: '/images/blog/data-quality-metrics.jpg',
    date: 'April 10, 2023',
    author: {
      name: 'Emma Davis',
      avatar: '/images/team/emma-davis.jpg',
      title: 'Data Quality Lead'
    },
    category: 'Data Observability',
    readTime: '5 min read',
    featured: true
  }
];

const recentPosts = [
  {
    id: 'dbt-integration',
    title: 'How to Integrate Obzervable with dbt for Better Data Quality Checks',
    excerpt: 'A step-by-step guide to setting up Obzervable with dbt to enhance your data quality testing capabilities.',
    coverImage: '/images/blog/dbt-integration.jpg',
    date: 'May 5, 2023',
    author: {
      name: 'Alex Rodriguez',
      avatar: '/images/team/alex-rodriguez.jpg',
      title: 'Solutions Architect'
    },
    category: 'Tutorials',
    readTime: '7 min read'
  },
  {
    id: 'real-time-dashboards',
    title: 'Building Real-time Data Quality Dashboards',
    excerpt: 'Learn how to create effective dashboards that provide instant visibility into your data health.',
    coverImage: '/images/blog/real-time-dashboards.jpg',
    date: 'April 22, 2023',
    author: {
      name: 'Priya Patel',
      avatar: '/images/team/priya-patel.jpg',
      title: 'Product Manager'
    },
    category: 'Best Practices',
    readTime: '5 min read'
  },
  {
    id: 'alert-fatigue',
    title: 'Combating Alert Fatigue in Data Teams',
    excerpt: 'Strategies to ensure your alerts are meaningful, actionable, and don\'t overwhelm your team.',
    coverImage: '/images/blog/alert-fatigue.jpg',
    date: 'April 17, 2023',
    author: {
      name: 'David Wilson',
      avatar: '/images/team/david-wilson.jpg',
      title: 'Customer Success Lead'
    },
    category: 'Best Practices',
    readTime: '4 min read'
  },
  {
    id: 'snowflake-case-study',
    title: 'Case Study: How Company X Reduced Data Incidents by 80% with Obzervable',
    excerpt: 'Discover how a leading fintech company transformed their data reliability using our platform.',
    coverImage: '/images/blog/case-study-fintech.jpg',
    date: 'April 8, 2023',
    author: {
      name: 'Jennifer Lee',
      avatar: '/images/team/jennifer-lee.jpg',
      title: 'Content Marketing'
    },
    category: 'Case Studies',
    readTime: '6 min read'
  },
  {
    id: 'new-anomaly-detection',
    title: 'Introducing Advanced Anomaly Detection in Obzervable 2.0',
    excerpt: 'Explore our new ML-powered anomaly detection features that help you catch data issues earlier than ever.',
    coverImage: '/images/blog/anomaly-detection.jpg',
    date: 'March 30, 2023',
    author: {
      name: 'Thomas Baker',
      avatar: '/images/team/thomas-baker.jpg',
      title: 'VP of Product'
    },
    category: 'Product Updates',
    readTime: '3 min read'
  },
  {
    id: 'data-governance',
    title: 'The Intersection of Data Observability and Data Governance',
    excerpt: 'How a strong data observability practice enhances your overall data governance strategy.',
    coverImage: '/images/blog/data-governance.jpg',
    date: 'March 25, 2023',
    author: {
      name: 'Sarah Johnson',
      avatar: '/images/team/sarah-johnson.jpg',
      title: 'Chief Data Scientist'
    },
    category: 'Industry Insights',
    readTime: '7 min read'
  }
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PostCard({ post, featured = false }: { post: any, featured?: boolean }) {
  return (
    <article className={`bg-white rounded-xl overflow-hidden ${featured ? 'shadow-lg' : 'shadow-md'}`}>
      <div className="relative h-48 md:h-60">
        <Link href={`/blog/${post.id}`} className="block w-full h-full">
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Image</span>
          </div>
          {/* Uncomment when images are available */}
          {/* <Image 
            src={post.coverImage} 
            alt={post.title} 
            fill
            className="object-cover"
          /> */}
        </Link>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className="text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1">
            {post.category}
          </span>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-xs text-gray-500">{post.readTime}</span>
        </div>
        <Link href={`/blog/${post.id}`} className="block">
          <h3 className={`font-bold text-gray-900 mb-2 ${featured ? 'text-2xl' : 'text-xl'} hover:text-primary transition-colors`}>
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 relative overflow-hidden">
            {/* Uncomment when images are available */}
            {/* <Image 
              src={post.author.avatar} 
              alt={post.author.name} 
              fill
              className="object-cover"
            /> */}
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-900">{post.author.name}</h4>
            <div className="flex items-center text-xs text-gray-500">
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Obzervable Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Insights, guides, and best practices on data observability, data quality, and analytics.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <PostCard key={post.id} post={post} featured={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Recent Posts */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {recentPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
              <div className="mt-12 text-center">
                <Button variant="outline">
                  Load More Articles
                </Button>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search */}
              <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Categories */}
              <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((category) => (
                    <li key={category.slug}>
                      <Link 
                        href={`/blog/category/${category.slug}`}
                        className="flex items-center justify-between text-gray-700 hover:text-primary transition-colors"
                      >
                        <span>{category.name}</span>
                        <span className="bg-gray-100 text-gray-600 text-xs font-medium rounded-full px-2.5 py-0.5">
                          {category.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Newsletter */}
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get the latest articles and industry updates delivered to your inbox.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  />
                  <Button type="submit" className="w-full">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary-dark text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to improve your data quality?</h2>
          <p className="text-xl mb-10 text-white/80 max-w-3xl mx-auto">
            Get started with Obzervable today and see the difference data observability can make for your organization.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary">
              Request a Demo
            </Button>
            <Button variant="outline">
              View Documentation
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
} 