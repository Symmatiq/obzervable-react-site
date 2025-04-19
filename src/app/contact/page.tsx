import { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/Button';
import AnimatedElement from '@/components/AnimatedElement';

export const metadata: Metadata = {
  title: 'Contact Us - Obzervable',
  description: 'Get in touch with the Obzervable team. We\'re here to help with your data observability needs.',
};

const contactMethods = [
  {
    name: 'Sales',
    description: 'Interested in how Obzervable can help your organization? Our sales team is ready to answer your questions.',
    email: 'sales@obzervable.com',
    phone: '+1 (800) 555-1234',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    )
  },
  {
    name: 'Support',
    description: 'Need technical assistance or have questions about your Obzervable implementation? Our support team is here to help.',
    email: 'support@obzervable.com',
    phone: '+1 (800) 555-5678',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
      </svg>
    )
  },
  {
    name: 'Partnerships',
    description: 'Interested in partnering with Obzervable? Let\'s explore how we can work together to create value for our customers.',
    email: 'partners@obzervable.com',
    phone: '+1 (800) 555-9012',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    )
  }
];

const offices = [
  {
    city: 'San Francisco',
    address: ['123 Market Street', 'Suite 400', 'San Francisco, CA 94105'],
    country: 'United States'
  },
  {
    city: 'New York',
    address: ['456 Broadway', '8th Floor', 'New York, NY 10013'],
    country: 'United States'
  },
  {
    city: 'London',
    address: ['789 Oxford Street', 'Soho', 'London, W1D 3QG'],
    country: 'United Kingdom'
  }
];

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedElement type="fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Get in Touch</h1>
          </AnimatedElement>
          <AnimatedElement type="fadeIn" delay={0.2}>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              Have questions or ready to get started? We&apos;re here to help you achieve data quality and reliability at scale.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <AnimatedElement key={index} type="slideUp" delay={0.1 * index}>
                <div className="bg-white p-8 rounded-2xl shadow-md">
                  <div className="inline-flex items-center justify-center bg-primary/10 text-primary rounded-full w-16 h-16 mb-6">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{method.name}</h3>
                  <p className="text-gray-600 mb-6">{method.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                      <a href={`mailto:${method.email}`} className="text-gray-700 hover:text-primary">{method.email}</a>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                      <a href={`tel:${method.phone.replace(/\D/g, '')}`} className="text-gray-700 hover:text-primary">{method.phone}</a>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedElement type="slideRight">
              <div>
                <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form and our team will get back to you within 24 hours. 
                  We&apos;re excited to learn more about your data observability needs.
                </p>
                
                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-6">Our Offices</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {offices.map((office, index) => (
                      <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                        <h4 className="font-bold text-lg mb-2">{office.city}</h4>
                        <div className="text-gray-600">
                          {office.address.map((line, i) => (
                            <p key={i}>{line}</p>
                          ))}
                          <p className="mt-1">{office.country}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement type="slideLeft">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                      <input 
                        type="text" 
                        id="first-name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                      <input 
                        type="text" 
                        id="last-name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                      placeholder="yourname@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input 
                      type="text" 
                      id="company" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">What can we help you with?</label>
                    <select 
                      id="topic" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                    >
                      <option value="">Select a topic</option>
                      <option value="product-demo">Request a product demo</option>
                      <option value="pricing">Pricing information</option>
                      <option value="technical-support">Technical support</option>
                      <option value="partnership">Partnership opportunities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start">
                    <input 
                      id="privacy" 
                      type="checkbox" 
                      className="h-4 w-4 text-primary border-gray-300 rounded mt-1"
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                      By submitting this form, I agree to Obzervable&apos;s <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                    </label>
                  </div>
                  
                  <div>
                    <Button type="submit" variant="primary" className="w-full">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedElement type="fadeIn">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          </AnimatedElement>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[0, 1, 2, 3].map((i) => (
              <AnimatedElement key={i} type="slideUp" delay={0.1 * i}>
                <div className="bg-white p-8 rounded-2xl shadow-md">
                  {i === 0 && (
                    <>
                      <h3 className="text-xl font-bold mb-4">How quickly can I get started with Obzervable?</h3>
                      <p className="text-gray-600">
                        Most customers can get up and running with Obzervable in just a few hours. Our guided onboarding process helps you connect your data sources and configure your first monitoring rules quickly. Enterprise deployments with custom integrations may take 1-2 weeks.
                      </p>
                    </>
                  )}
                  {i === 1 && (
                    <>
                      <h3 className="text-xl font-bold mb-4">Do you offer custom implementation services?</h3>
                      <p className="text-gray-600">
                        Yes, our professional services team can provide custom implementation, configuration, and training services tailored to your organization&apos;s specific needs. Contact us for more information about our professional services offerings.
                      </p>
                    </>
                  )}
                  {i === 2 && (
                    <>
                      <h3 className="text-xl font-bold mb-4">How does your support work?</h3>
                      <p className="text-gray-600">
                        All customers receive access to our knowledge base and community forums. Growth and Business plans include email support with guaranteed response times. Enterprise customers receive 24/7 priority support with dedicated customer success managers.
                      </p>
                    </>
                  )}
                  {i === 3 && (
                    <>
                      <h3 className="text-xl font-bold mb-4">Can I schedule a demo before purchasing?</h3>
                      <p className="text-gray-600">
                        Absolutely! We recommend scheduling a demo with our team to see Obzervable in action and discuss your specific use cases. You can request a demo through the form on this page or contact our sales team directly.
                      </p>
                    </>
                  )}
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedElement type="scale">
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
          </AnimatedElement>
        </div>
      </section>
    </main>
  );
} 