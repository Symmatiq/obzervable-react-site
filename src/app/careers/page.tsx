import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Careers - Obzervable',
  description: 'Join our team and help build the future of data observability. Explore open positions and learn about our company culture and benefits.',
};

const benefits = [
  {
    title: 'Remote-First Work',
    description: 'Work from anywhere with flexible hours. We believe great work happens when people have the freedom to work where they\'re most productive.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
      </svg>
    )
  },
  {
    title: 'Competitive Compensation',
    description: 'We offer top-market salaries, equity packages, and performance bonuses to ensure our team members share in our success.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    )
  },
  {
    title: 'Health & Wellness',
    description: 'Comprehensive health, dental, and vision insurance, plus wellness perks including mental health support and fitness reimbursements.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    )
  },
  {
    title: 'Learning & Development',
    description: 'Annual education stipend, conference attendance, and internal learning opportunities to continually grow your skills and career.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    )
  },
  {
    title: 'Unlimited PTO',
    description: 'Take the time you need to rest, recharge, and bring your best self to work. We focus on results, not hours in the office.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
      </svg>
    )
  },
  {
    title: 'Parental Leave',
    description: 'Generous parental leave for all new parents, regardless of gender, with a flexible return-to-work program to support your transition.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
      </svg>
    )
  }
];

const cultureValues = [
  {
    title: 'Ownership',
    description: 'We approach every task with an owner\'s mindset, taking responsibility for outcomes and making decisions that drive our mission forward.'
  },
  {
    title: 'Transparency',
    description: 'We share information openly, communicate directly, and ensure everyone has the context they need to do their best work.'
  },
  {
    title: 'Customer Focus',
    description: 'We obsess over our customers\' problems and needs, building solutions that deliver measurable value and consistently exceed expectations.'
  },
  {
    title: 'Continuous Improvement',
    description: 'We embrace a growth mindset, seeking feedback, learning from failures, and constantly evolving our processes and products.'
  }
];

const jobOpenings = [
  {
    title: 'Senior Backend Engineer',
    department: 'Engineering',
    location: 'Remote (US/Canada)',
    type: 'Full-time',
    description: 'We\'re looking for a seasoned backend engineer to help scale our data processing infrastructure and build robust APIs that power our data observability platform.',
    requirements: [
      'Experience building scalable distributed systems',
      'Proficiency in Go, Rust, or Java',
      'Experience with cloud infrastructure (AWS/GCP/Azure)',
      'Knowledge of database technologies (SQL and NoSQL)',
      'Understanding of data processing frameworks'
    ],
    link: '/careers/senior-backend-engineer'
  },
  {
    title: 'Machine Learning Engineer',
    department: 'Data Science',
    location: 'Remote (US/Europe)',
    type: 'Full-time',
    description: 'Join our data science team to build ML models that detect anomalies, predict data quality issues, and help customers maintain reliable data ecosystems.',
    requirements: [
      'Strong background in machine learning and statistical modeling',
      'Experience with Python and ML frameworks (PyTorch, TensorFlow)',
      'Knowledge of time-series analysis and anomaly detection',
      'Familiarity with data engineering principles',
      'Experience deploying ML models to production'
    ],
    link: '/careers/machine-learning-engineer'
  },
  {
    title: 'Product Marketing Manager',
    department: 'Marketing',
    location: 'Remote (Global)',
    type: 'Full-time',
    description: 'Help us tell the Obzervable story and communicate the value of our platform to technical audiences through compelling messaging, content, and campaigns.',
    requirements: [
      'Experience marketing technical products to data engineers or analytics professionals',
      'Strong storytelling abilities and messaging development skills',
      'Knowledge of data engineering, analytics, or related fields',
      'Ability to translate technical concepts into business benefits',
      'Experience with product launches and go-to-market strategies'
    ],
    link: '/careers/product-marketing-manager'
  },
  {
    title: 'Technical Account Manager',
    department: 'Customer Success',
    location: 'Remote (US/EMEA)',
    type: 'Full-time',
    description: 'Be the bridge between our customers and product team, helping organizations implement best practices and get maximum value from our platform.',
    requirements: [
      'Customer-facing experience in a technical role',
      'Understanding of data platforms and data quality concepts',
      'Strong communication and relationship building skills',
      'Problem-solving abilities and technical aptitude',
      'Project management experience'
    ],
    link: '/careers/technical-account-manager'
  }
];

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Join Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 mb-10">
            Help us build the future of data observability and empower organizations to trust their data.
          </p>
          <Button href="#openings" variant="primary">
            See Open Positions
          </Button>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  At Obzervable, we&apos;re building a team of exceptional individuals who are passionate about solving complex data challenges and helping organizations build trust in their data.
                </p>
                <p>
                  We believe the best products are built by diverse teams that bring different perspectives and experiences to the table. We strive to create an inclusive environment where everyone feels valued and empowered to do their best work.
                </p>
                <p>
                  As a remote-first company, we focus on results and impact rather than hours worked. We value clear communication, thoughtful documentation, and asynchronous collaboration that enables our global team to work effectively across time zones.
                </p>
              </div>
              <div className="mt-8 space-y-6">
                {cultureValues.map((value, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/team-culture.jpg"
                alt="Obzervable team collaborating"
                fill
                style={{ objectFit: 'cover' }}
                className="bg-gray-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md">
                <div className="inline-flex items-center justify-center bg-primary/10 text-primary rounded-full w-16 h-16 mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Open Positions</h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Explore our current opportunities and find where your skills and passion align with our mission.
          </p>
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <p className="text-primary font-medium">{job.department}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mt-4 lg:mt-0">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                      {job.location}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                      {job.type}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <h4 className="font-bold text-gray-800 mb-2">Requirements:</h4>
                <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-1">
                  {job.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
                <Link 
                  href={job.link} 
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  View Full Description
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Don&apos;t see a position that matches your skills?</p>
            <Button href="/contact" variant="primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Team Says</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/images/team/alex.jpg"
                    alt="Alex"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="bg-gray-200"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Alex Rivera</h3>
                  <p className="text-primary">Frontend Engineer</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;I&apos;ve worked at several tech companies, but Obzervable stands out for truly embodying its values. The team is collaborative, the problems are challenging, and I&apos;m constantly learning from brilliant colleagues while having the flexibility to work on my own terms.&quot;
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/images/team/taylor.jpg"
                    alt="Taylor"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="bg-gray-200"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Taylor Kim</h3>
                  <p className="text-primary">Data Scientist</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;Joining Obzervable was the best career decision I&apos;ve made. The problems we&apos;re tackling are at the cutting edge of data science, and I get to work directly with customers to understand their needs. The remote-first culture gives me the flexibility I need while still feeling connected to an amazing team.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to join our mission?</h2>
          <p className="text-xl mb-10 text-white/80 max-w-3xl mx-auto">
            Explore our open positions and help us build the future of data observability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#openings" variant="primary">
              View Open Positions
            </Button>
            <Button href="/about" variant="outline">
              Learn About Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
} 