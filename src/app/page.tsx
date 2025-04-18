import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import AnimatedElement from '@/components/AnimatedElement';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Obzervable - Real-time Data, Simplified',
  description: 'Obzervable empowers developers with domain-driven design, data mesh support, and event-driven architecture for better data observability.',
};

const features = [
  {
    title: 'Domain-Driven Design',
    description: 'Build systems that truly reflect your business with our domain-driven approach to data architecture.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
      </svg>
    ),
  },
  {
    title: 'Data Mesh Support',
    description: 'Embrace decentralized data ownership and governance with our comprehensive data mesh capabilities.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    title: 'Event-Driven Architecture',
    description: 'React to changes in real-time with our powerful event streaming and processing framework.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 0 1 0-5.303m5.304 0a3.75 3.75 0 0 1 0 5.303m-7.425 2.122a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
    ),
  },
];

const benefits = [
  {
    title: 'Enhanced Monitoring',
    description: 'Get comprehensive visibility into your data flows with real-time monitoring and alerts.',
    color: 'bg-blue-50',
    iconColor: 'text-primary',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
  },
  {
    title: 'Cloud-based Data Flow Builder',
    description: 'Visually design and deploy data pipelines with our intuitive drag-and-drop interface.',
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
    description: 'Leverage AI to generate data flows, detect anomalies, and optimize your data pipelines.',
    color: 'bg-violet-50',
    iconColor: 'text-violet-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
  {
    title: 'Data & Schema Validation',
    description: 'Ensure data quality with robust validation rules and real-time schema enforcement.',
    color: 'bg-amber-50',
    iconColor: 'text-amber-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <Hero
          title="Real-time Data, Simplified"
          subtitle="Empowering developers with domain-driven design, data mesh support, and event-driven architecture."
          primaryCTA={{
            text: "Schedule a Demo",
            href: "http://app.obzervable.com/signup",
            external: true
          }}
          secondaryCTA={{
            text: "Explore Features",
            href: "/products"
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
              Built for Modern Data Teams
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Obzervable provides the tools and insights you need to build reliable, scalable data systems.
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
              Key Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how Obzervable can transform your data observability
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

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedElement type="fadeIn" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Obzervable Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to data observability
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedElement type="slideUp" delay={0.1} className="text-center px-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Connect</h3>
              <p className="text-gray-600">
                Easily connect to your data sources and streaming platforms with our pre-built connectors.
              </p>
            </AnimatedElement>

            <AnimatedElement type="slideUp" delay={0.2} className="text-center px-6">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-secondary">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Configure</h3>
              <p className="text-gray-600">
                Set up monitoring rules, validation criteria, and alerting preferences to match your needs.
              </p>
            </AnimatedElement>

            <AnimatedElement type="slideUp" delay={0.3} className="text-center px-6">
              <div className="w-20 h-20 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-violet-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Observe</h3>
              <p className="text-gray-600">
                Gain real-time insights into your data flows, quality metrics, and system health.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <AnimatedElement type="fadeIn" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by data teams worldwide
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
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden relative">
                    {/* Replace with actual image when available */}
                    {/* <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    /> */}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic">"{testimonial.quote}"</blockquote>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <AnimatedElement type="scale" className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your data observability?
          </h2>
          <p className="text-xl mb-10 text-white/80">
            Join the hundreds of organizations using Obzervable to build more reliable data systems.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              href="http://app.obzervable.com/signup" 
              variant="primary"
              className="bg-white text-primary hover:bg-gray-100"
              size="lg"
              external
            >
              Get Started Free
            </Button>
            <Button 
              href="/contact" 
              variant="outline" 
              className="text-white border-white hover:bg-primary-light"
              size="lg"
            >
              Contact Sales
            </Button>
          </div>
        </AnimatedElement>
      </section>
    </main>
  );
} 