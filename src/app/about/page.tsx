import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'About Us - Obzervable',
  description: 'Learn about Obzervable\'s mission, vision, values, and the team behind our innovative data observability platform.',
};

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Co-Founder & CEO',
    bio: 'Former VP of Data at Snowflake with 15+ years of experience in data engineering and analytics. Sarah founded Obzervable to solve the data reliability challenges she faced throughout her career.',
    image: '/images/team/sarah.jpg',
    linkedin: 'https://linkedin.com/in/',
    twitter: 'https://twitter.com/'
  },
  {
    name: 'Michael Chen',
    role: 'Co-Founder & CTO',
    bio: 'Previously led engineering teams at Databricks and Netflix. Michael brings deep expertise in distributed systems and data architecture to help organizations maintain data quality at scale.',
    image: '/images/team/michael.jpg',
    linkedin: 'https://linkedin.com/in/',
    github: 'https://github.com/'
  },
  {
    name: 'Priya Patel',
    role: 'VP of Product',
    bio: 'Product leader with experience at MongoDB and Tableau. Priya is passionate about building intuitive products that solve complex data problems while prioritizing user experience.',
    image: '/images/team/priya.jpg',
    linkedin: 'https://linkedin.com/in/'
  },
  {
    name: 'David Müller',
    role: 'VP of Engineering',
    bio: 'Scaled engineering teams at Datadog and Elastic. David specializes in building high-performance systems that can handle massive data volumes while maintaining reliability.',
    image: '/images/team/david.jpg',
    linkedin: 'https://linkedin.com/in/',
    github: 'https://github.com/'
  },
  {
    name: 'Sophia Rodriguez',
    role: 'Head of Customer Success',
    bio: 'Customer success leader from Looker and ThoughtSpot. Sophia ensures our customers achieve their data quality and observability goals through best practices and implementation support.',
    image: '/images/team/sophia.jpg',
    linkedin: 'https://linkedin.com/in/'
  },
  {
    name: 'James Wilson',
    role: 'Head of Sales',
    bio: 'Enterprise sales veteran from Snowflake and Fivetran. James helps organizations understand how Obzervable can transform their data reliability and governance practices.',
    image: '/images/team/james.jpg',
    linkedin: 'https://linkedin.com/in/'
  }
];

const values = [
  {
    title: 'Data-Driven Integrity',
    description: 'We believe in the power of reliable data to drive better decisions. We are committed to providing solutions that ensure data integrity at every step of the pipeline.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    )
  },
  {
    title: 'Customer Obsession',
    description: 'We put our customers at the center of everything we do. Their success is our success, and we\'re committed to building long-term partnerships that deliver real value.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    )
  },
  {
    title: 'Innovation',
    description: 'We continuously push the boundaries of what\'s possible in data observability, investing in research and development to solve tomorrow\'s data challenges today.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    )
  },
  {
    title: 'Transparency',
    description: 'We believe in open and honest communication with our customers, partners, and within our team. We share our successes and our learnings with equal candor.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    )
  }
];

const investors = [
  { name: 'Sequoia Capital', logo: '/images/investors/sequoia.svg' },
  { name: 'Andreessen Horowitz', logo: '/images/investors/a16z.svg' },
  { name: 'Accel', logo: '/images/investors/accel.svg' },
  { name: 'Benchmark', logo: '/images/investors/benchmark.svg' },
  { name: 'Y Combinator', logo: '/images/investors/yc.svg' }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Mission</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Empowering organizations to trust their data through comprehensive observability and quality solutions.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Obzervable was founded in 2020 by Sarah Johnson and Michael Chen, who experienced firsthand the challenges of maintaining data quality and reliability at scale while working at some of the world&apos;s leading data companies.
                </p>
                <p>
                  As organizations increasingly rely on data to drive critical business decisions, the cost of unreliable data has skyrocketed. Yet, the tools to effectively monitor and maintain data quality have lagged behind.
                </p>
                <p>
                  Sarah and Michael set out to build the comprehensive data observability platform they wished they had—one that proactively identifies issues before they impact downstream consumers, provides context to quickly resolve problems, and ensures data teams can confidently stand behind their data.
                </p>
                <p>
                  Today, Obzervable serves hundreds of data-driven organizations across industries, helping them transform how they monitor, troubleshoot, and maintain their data ecosystems.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Get to Know Us
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/office-team.jpg"
                alt="Obzervable team at work"
                fill
                style={{ objectFit: 'cover' }}
                className="bg-gray-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md">
                <div className="inline-flex items-center justify-center bg-primary/10 text-primary rounded-full w-16 h-16 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Our Leadership Team</h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Meet the experienced team driving Obzervable&apos;s mission to transform how organizations understand and trust their data.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="bg-gray-200"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    )}
                    {member.twitter && (
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.053 10.053 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/careers" className="text-primary font-medium hover:underline text-lg">
              Join our team →
            </Link>
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Backed By</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {investors.map((investor, index) => (
              <div key={index} className="flex justify-center">
                <div className="h-12 relative w-36">
                  <Image
                    src={investor.logo}
                    alt={investor.name}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your data reliability?</h2>
          <p className="text-xl mb-10 text-white/80 max-w-3xl mx-auto">
            Join the hundreds of organizations using Obzervable to monitor, troubleshoot, and improve their data quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/demo" variant="primary">
              Request a Demo
            </Button>
            <Button href="/pricing" variant="outline">
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
} 