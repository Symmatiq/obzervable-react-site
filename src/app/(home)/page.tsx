'use client';

import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import AnimatedElement from '@/components/AnimatedElement';
// import { CodeBlock } from '@/components/CodeBlock';

const features = [
  {
    title: 'Data Mesh Architecture',
    description: 'Embrace decentralized data ownership with domain-driven pipelines, enabling teams to treat data as a product while improving governance and quality.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
      </svg>
    ),
  },
  {
    title: 'Self-Serve Data Consumption',
    description: 'Empower teams to consume data for their specific needs without concerning themselves with the technical complexity of the data origin.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
      </svg>
    ),
  },
  {
    title: 'Domain-Driven Design',
    description: 'Build pipelines tailored to business domains, ensuring data reflects real-world processes for simpler complex integrations and better business alignment.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    title: 'Event-Driven Architecture',
    description: 'Capture and replay events for robust, auditable systems with durable, rewindable queues that ensure historical data access and real-time processing.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 0 1 0-5.303m5.304 0a3.75 3.75 0 0 1 0 5.303m-7.425 2.122a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
    ),
  },
];

const benefits = [
  {
    title: 'Enhanced Monitoring & Alerts',
    description: 'Gain granular insights with function-level monitoring and receive instant alerts for anomalies, ensuring proactive issue resolution.',
    color: 'bg-blue-50',
    iconColor: 'text-primary',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
  },
  {
    title: 'Self-Serve Data Infrastructure',
    description: 'Enable teams to access, discover, and utilize data autonomously without depending on centralized data teams or specialized knowledge.',
    color: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    title: 'In-browser Data Flow Builder',
    description: 'Visually design and deploy data pipelines with our intuitive drag-and-drop interface, reducing development time from days to hours.',
    color: 'bg-teal-50',
    iconColor: 'text-secondary',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
      </svg>
    ),
  },
  {
    title: 'AI-Powered Development',
    description: 'Automate pipeline creation with AI, generating optimized code for bots and flows to accelerate development compared to manual setups.',
    color: 'bg-violet-50',
    iconColor: 'text-violet-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
  {
    title: 'Data Validation & Quality',
    description: 'Ensure data quality with robust validation rules and schema enforcement from the source, improving your overall data reliability and trust.',
    color: 'bg-amber-50',
    iconColor: 'text-amber-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
];

const useCases = [
  {
    title: "Real-Time Analytics",
    description: "Power dashboards and insights with sub-second latency, ideal for finance, retail, and time-sensitive business decisions."
  },
  {
    title: "Event-Driven Microservices",
    description: "Build responsive applications with microservices triggered by events, perfect for order processing in e-commerce."
  },
  {
    title: "IoT Data Collection",
    description: "Process high-volume sensor data in real-time, supporting smart cities, manufacturing, and connected devices."
  },
  {
    title: "AI Retrieval-Augmented Generation",
    description: "Enhance AI models with real-time data for dynamic responses, perfect for chatbots and recommendation engines."
  },
  {
    title: "System Integration",
    description: "Connect disparate systems (CRM, ERP) for unified data flows, enhancing operational efficiency across your business."
  },
  {
    title: "Customer Data Platform",
    description: "Unify customer data for personalized marketing, leveraging real-time streams for better customer experiences."
  }
];

const testimonials = [
  {
    quote: "Obzervable has transformed how we monitor our data pipelines. We've reduced incidents by 70% and our team is more productive than ever.",
    author: "Sarah Chen",
    role: "CTO, TechNova",
    avatar: "/images/avatars/sarah-chen.jpg"
  },
  {
    quote: "The data flow builder is a game-changer. What used to take days now takes hours, and our engineers love the intuitive interface.",
    author: "Marcus Johnson",
    role: "Data Engineering Lead, DataFlex",
    avatar: "/images/avatars/marcus-johnson.jpg"
  },
  {
    quote: "Using Obzervable's domain-driven approach has allowed us to better align our data architecture with our business needs.",
    author: "Priya Sharma",
    role: "VP of Engineering, CloudScale",
    avatar: "/images/avatars/priya-sharma.jpg"
  }
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <Hero
          title="Build. Stream. <span class='text-primary'>Observe.</span>"
          subtitle="The most powerful platform for building, monitoring, and scaling event-driven and real-time streaming data infrastructures."
          primaryCTA={{
            text: "Get Started Free",
            href: "http://app.obzervable.com/signup",
            external: true
          }}
          secondaryCTA={{
            text: "Explore Features",
            href: "/features"
          }}
          image={
            <div className="relative h-96 w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg shadow-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-32 h-32 text-primary/30">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 0 1 0-5.303m5.304 0a3.75 3.75 0 0 1 0 5.303m-7.425 2.122a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </div>
            </div>
          }
        />
      </section>

      {/* Core Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedElement type="fadeIn" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Excellence by Design
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Obzervable provides enterprise-grade data architecture that aligns with modern data mesh principles.
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <AnimatedElement 
                key={feature.title}
                type="slideUp"
                delay={index * 0.1}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-primary mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedElement type="fadeIn" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Development Advantages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Accelerate your data engineering with powerful, developer-friendly tools
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedElement 
                key={benefit.title}
                type="slideLeft"
                delay={index * 0.1}
                className={`${benefit.color} rounded-xl p-6 flex items-start`}
              >
                <div className={`${benefit.iconColor} flex-shrink-0 mr-6`}>
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700">
                    {benefit.description}
                  </p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedElement type="fadeIn" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how Obzervable can transform your business across multiple domains
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <AnimatedElement 
                key={useCase.title}
                type="slideUp"
                delay={index * 0.1}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-700">
                  {useCase.description}
                </p>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Advantages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedElement type="fadeIn" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Operational Advantages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Run with confidence on enterprise-grade infrastructure
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedElement type="fadeIn" delay={0.1} className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fully Managed Infrastructure</h3>
              <p className="text-gray-600">
                Eliminate server management with AWS-backed, serverless operations for zero-maintenance deployment.
              </p>
            </AnimatedElement>

            <AnimatedElement type="fadeIn" delay={0.2} className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Seamless Scaling</h3>
              <p className="text-gray-600">
                Scale up/out automatically with serverless compute, handling traffic spikes without manual intervention.
              </p>
            </AnimatedElement>

            <AnimatedElement type="fadeIn" delay={0.3} className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">AWS-Integrated Security</h3>
              <p className="text-gray-600">
                Leverage AWS&apos;s encryption and IAM for enterprise-grade security with simpler setup and management.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedElement type="fadeIn" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from teams that have transformed their data architecture with Obzervable
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedElement
                key={index}
                type="fadeIn"
                delay={index * 0.1}
                className="bg-white rounded-xl shadow-md p-8"
              >
                <p className="text-gray-700 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 mr-4">
                    {testimonial.avatar && (
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedElement type="fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Data Architecture?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get started today with Obzervable and unlock the full potential of your data.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="http://app.obzervable.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Free
              </a>
              <Link
                href="/features"
                className="bg-primary-light text-white font-semibold px-8 py-3 rounded-lg border border-white/30 hover:bg-primary-dark transition-colors"
              >
                Explore Features
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </main>
  );
} 