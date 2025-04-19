import { Metadata } from 'next';
// import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Features - Obzervable',
  description: 'Explore the key features of Obzervable that enable self-serve data infrastructure and consumption.',
};

export default function FeaturesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero section */}
      <section className="w-full flex flex-col items-center justify-center py-16 md:py-24 px-4 md:px-12 bg-gradient-to-b from-primary-light/10 to-white">
        <div className="max-w-7xl w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center">
            Platform Features
          </h1>
          <p className="text-xl text-gray-700 mb-8 text-center max-w-4xl mx-auto">
            Discover how Obzervable&apos;s platform empowers your organization with self-serve data infrastructure and consumption capabilities.
          </p>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="w-full py-16 md:py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Key Platform Capabilities
          </h2>

          {/* Feature 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Self-Serve Data Infrastructure
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Enable domain teams to independently build and manage their data workflows while maintaining unified governance and interoperability across your organization&apos;s data ecosystem.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-gray-700">Domain-driven design principles built into the platform architecture</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-gray-700">Decentralized data ownership with centralized governance</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-gray-700">Infrastructure-as-code templates for rapid deployment</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative h-[300px] md:h-[400px] w-full flex items-center justify-center p-4 bg-gray-50 rounded-lg shadow-inner">
              {/* SVG for Self-Serve Data Infrastructure */}
              <svg width="100%" height="100%" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" aria-labelledby="selfServeInfraTitle selfServeInfraDesc" role="img">
                <title id="selfServeInfraTitle">Self-Serve Data Infrastructure Diagram</title>
                <desc id="selfServeInfraDesc">Diagram showing three domain teams (Sales, Marketing, Product) managing their own pipelines, connected to a central governance hub.</desc>
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
                  </marker>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#bfdbfe', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#dbeafe', stopOpacity: 1}} />
                  </linearGradient>
                  <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#a7f3d0', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#d1fae5', stopOpacity: 1}} />
                  </linearGradient>
                   <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#fecaca', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#fee2e2', stopOpacity: 1}} />
                  </linearGradient>
                   <linearGradient id="gradGov" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#005f73', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#0a9396', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                {/* Central Governance Hub */}
                <circle cx="150" cy="100" r="35" fill="url(#gradGov)" stroke="#003f5c" strokeWidth="2" />
                <text x="150" y="100" textAnchor="middle" dy=".3em" fill="white" fontSize="10" fontWeight="bold">Governance</text>

                {/* Domain Team 1: Sales */}
                <rect x="20" y="20" width="80" height="40" rx="5" fill="url(#grad1)" stroke="#60a5fa" strokeWidth="1"/>
                <text x="60" y="40" textAnchor="middle" dy=".3em" fill="#1e3a8a" fontSize="10" fontWeight="medium">Sales Team</text>
                <path d="M 100 40 Q 125 50, 150 70" stroke="#6b7280" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)" />

                {/* Domain Team 2: Marketing */}
                 <rect x="20" y="140" width="80" height="40" rx="5" fill="url(#grad2)" stroke="#10b981" strokeWidth="1"/>
                 <text x="60" y="160" textAnchor="middle" dy=".3em" fill="#065f46" fontSize="10" fontWeight="medium">Marketing Team</text>
                 <path d="M 100 160 Q 125 150, 150 130" stroke="#6b7280" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)" />

                 {/* Domain Team 3: Product */}
                 <rect x="200" y="80" width="80" height="40" rx="5" fill="url(#grad3)" stroke="#f87171" strokeWidth="1"/>
                 <text x="240" y="100" textAnchor="middle" dy=".3em" fill="#991b1b" fontSize="10" fontWeight="medium">Product Team</text>
                 <path d="M 200 100 L 185 100" stroke="#6b7280" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)" />

                 {/* IaC Symbol (optional) */}
                 <text x="30" y="75" fontSize="12" fill="#60a5fa" fontFamily="monospace">{"</>"}</text>
                 <text x="30" y="130" fontSize="12" fill="#10b981" fontFamily="monospace">{"</>"}</text>
                 <text x="265" y="135" fontSize="12" fill="#f87171" fontFamily="monospace">{"</>"}</text>
              </svg>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center p-4 bg-gray-50 rounded-lg shadow-inner">
              {/* SVG for Data Mesh Architecture */}
              <svg width="100%" height="100%" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" aria-labelledby="dataMeshTitle dataMeshDesc" role="img">
                <title id="dataMeshTitle">Data Mesh Architecture Diagram</title>
                <desc id="dataMeshDesc">Diagram showing interconnected data domains (Customer, Orders, Inventory, Marketing) representing a data mesh.</desc>
                <defs>
                  <radialGradient id="gradNode1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" style={{stopColor: '#bae6fd', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#38bdf8', stopOpacity: 1}} />
                  </radialGradient>
                  <radialGradient id="gradNode2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" style={{stopColor: '#fcd34d', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#f59e0b', stopOpacity: 1}} />
                  </radialGradient>
                  <radialGradient id="gradNode3" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" style={{stopColor: '#a7f3d0', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#34d399', stopOpacity: 1}} />
                  </radialGradient>
                  <radialGradient id="gradNode4" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" style={{stopColor: '#fbcfe8', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#f472b6', stopOpacity: 1}} />
                  </radialGradient>
                  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.2"/>
                  </filter>
                </defs>

                {/* Nodes (Data Domains) */}
                <g filter="url(#shadow)">
                  <circle cx="70" cy="50" r="30" fill="url(#gradNode1)" stroke="#0ea5e9" strokeWidth="1.5" />
                  <text x="70" y="50" textAnchor="middle" dy=".3em" fontSize="10" fontWeight="bold" fill="#0c4a6e">Customer</text>

                  <circle cx="230" cy="50" r="30" fill="url(#gradNode2)" stroke="#d97706" strokeWidth="1.5" />
                  <text x="230" y="50" textAnchor="middle" dy=".3em" fontSize="10" fontWeight="bold" fill="#78350f">Orders</text>

                  <circle cx="70" cy="150" r="30" fill="url(#gradNode3)" stroke="#059669" strokeWidth="1.5" />
                  <text x="70" y="150" textAnchor="middle" dy=".3em" fontSize="10" fontWeight="bold" fill="#064e3b">Inventory</text>

                  <circle cx="230" cy="150" r="30" fill="url(#gradNode4)" stroke="#db2777" strokeWidth="1.5" />
                  <text x="230" y="150" textAnchor="middle" dy=".3em" fontSize="10" fontWeight="bold" fill="#831843">Marketing</text>
                </g>

                {/* Connections */}
                <line x1="100" y1="50" x2="200" y2="50" stroke="#9ca3af" strokeWidth="2" strokeDasharray="4 4"/>
                <line x1="70" y1="80" x2="70" y2="120" stroke="#9ca3af" strokeWidth="2" strokeDasharray="4 4"/>
                <line x1="230" y1="80" x2="230" y2="120" stroke="#9ca3af" strokeWidth="2" strokeDasharray="4 4"/>
                <line x1="100" y1="150" x2="200" y2="150" stroke="#9ca3af" strokeWidth="2" strokeDasharray="4 4"/>
                <line x1="95" y1="70" x2="205" y2="130" stroke="#9ca3af" strokeWidth="2" strokeDasharray="4 4"/>
                <line x1="95" y1="130" x2="205" y2="70" stroke="#9ca3af" strokeWidth="2" strokeDasharray="4 4"/>

                {/* Center Text (optional) */}
                <text x="150" y="100" textAnchor="middle" fill="#6b7280" fontSize="9" fontStyle="italic">Federated Governance & Interoperability</text>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Data Mesh Architecture
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Implement a true data mesh architecture with Obzervable&apos;s self-serve data infrastructure, enabling domain ownership while maintaining interoperability through federated governance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-gray-700">Domain-oriented data products with decentralized ownership</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-gray-700">Self-serve data platform that abstracts infrastructure complexity</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-gray-700">Federated computational governance to ensure quality and interoperability</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Event-Driven Architecture
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Leverage Obzervable&apos;s event-driven architecture to build loosely coupled, highly scalable systems that react to real-time data events across your organization.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-gray-700">Event sourcing and CQRS pattern support</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-gray-700">Real-time event processing and streaming analytics</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-gray-700">Event schema management and evolution</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative h-[300px] md:h-[400px] w-full flex items-center justify-center p-4 bg-gray-50 rounded-lg shadow-inner">
               {/* SVG for Event-Driven Architecture */}
              <svg width="100%" height="100%" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" aria-labelledby="eventDrivenTitle eventDrivenDesc" role="img">
                <title id="eventDrivenTitle">Event-Driven Architecture Diagram</title>
                <desc id="eventDrivenDesc">Diagram showing events flowing between different components: Source, Processor, and Sink.</desc>
                <defs>
                  <marker id="arrowheadEvent" markerWidth="10" markerHeight="7" refX="8" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#c026d3" />
                  </marker>
                  <linearGradient id="gradSource" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#ddd6fe', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#a78bfa', stopOpacity: 1}} />
                  </linearGradient>
                   <linearGradient id="gradProcessor" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#fef3c7', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#fcd34d', stopOpacity: 1}} />
                  </linearGradient>
                   <linearGradient id="gradSink" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#bfdbfe', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#60a5fa', stopOpacity: 1}} />
                  </linearGradient>
                  {/* Animation for events */}
                  <style>
                    {`.event-dot { animation: eventFlow 3s linear infinite; }
                    @keyframes eventFlow {
                      0% { offset-distance: 0%; opacity: 1; }
                      80% { opacity: 1; }
                      100% { offset-distance: 100%; opacity: 0; }
                    }`}
                  </style>
                </defs>

                {/* Components */}
                <rect x="20" y="80" width="70" height="40" rx="5" fill="url(#gradSource)" stroke="#8b5cf6" strokeWidth="1.5"/>
                <text x="55" y="100" textAnchor="middle" dy=".3em" fill="#5b21b6" fontSize="10" fontWeight="medium">Source</text>

                <rect x="115" y="80" width="70" height="40" rx="5" fill="url(#gradProcessor)" stroke="#f59e0b" strokeWidth="1.5"/>
                <text x="150" y="100" textAnchor="middle" dy=".3em" fill="#b45309" fontSize="10" fontWeight="medium">Processor</text>

                <rect x="210" y="80" width="70" height="40" rx="5" fill="url(#gradSink)" stroke="#3b82f6" strokeWidth="1.5"/>
                <text x="245" y="100" textAnchor="middle" dy=".3em" fill="#1e40af" fontSize="10" fontWeight="medium">Sink</text>

                {/* Event Flow Paths */}
                <path id="path1" d="M 90 100 H 115" stroke="none" fill="none"/>
                <path id="path2" d="M 185 100 H 210" stroke="none" fill="none"/>

                {/* Events (Animated Dots) */}
                <circle r="3" fill="#c026d3" className="event-dot" style={{animationDelay: '0s'}}>
                  <animateMotion dur="3s" repeatCount="indefinite" path="M 90 100 H 115" />
                </circle>
                 <circle r="3" fill="#c026d3" className="event-dot" style={{animationDelay: '0.5s'}}>
                  <animateMotion dur="3s" repeatCount="indefinite" path="M 90 100 H 115" />
                </circle>
                 <circle r="3" fill="#c026d3" className="event-dot" style={{animationDelay: '1s'}}>
                  <animateMotion dur="3s" repeatCount="indefinite" path="M 90 100 H 115" />
                </circle>

                 <circle r="3" fill="#c026d3" className="event-dot" style={{animationDelay: '0.2s'}}>
                   <animateMotion dur="3s" repeatCount="indefinite" path="M 185 100 H 210" />
                 </circle>
                  <circle r="3" fill="#c026d3" className="event-dot" style={{animationDelay: '0.7s'}}>
                   <animateMotion dur="3s" repeatCount="indefinite" path="M 185 100 H 210" />
                 </circle>
                  <circle r="3" fill="#c026d3" className="event-dot" style={{animationDelay: '1.2s'}}>
                   <animateMotion dur="3s" repeatCount="indefinite" path="M 185 100 H 210" />
                 </circle>

                {/* Static Arrows */}
                <line x1="90" y1="100" x2="110" y2="100" stroke="#c026d3" strokeWidth="2" markerEnd="url(#arrowheadEvent)" />
                <line x1="185" y1="100" x2="205" y2="100" stroke="#c026d3" strokeWidth="2" markerEnd="url(#arrowheadEvent)" />

                {/* Event Label */}
                 <text x="102" y="90" fill="#a21caf" fontSize="9" fontStyle="italic">Event</text>
                 <text x="197" y="90" fill="#a21caf" fontSize="9" fontStyle="italic">Event</text>
              </svg>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center p-4 bg-gray-50 rounded-lg shadow-inner">
              {/* SVG for Self-Serve Data Consumption */}
              <svg width="100%" height="100%" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" aria-labelledby="dataConsumptionTitle dataConsumptionDesc" role="img">
                 <title id="dataConsumptionTitle">Self-Serve Data Consumption Diagram</title>
                <desc id="dataConsumptionDesc">Diagram showing various users (analyst, developer, marketer) accessing data products from a central catalog/platform.</desc>
                <defs>
                  <marker id="arrowheadConsume" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#16a34a" />
                  </marker>
                   <linearGradient id="gradCatalog" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#f0fdf4', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#bbf7d0', stopOpacity: 1}} />
                  </linearGradient>
                  <filter id="shadowConsume" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="1" dy="1" stdDeviation="1.5" floodColor="#000" floodOpacity="0.15"/>
                  </filter>
                </defs>

                {/* Central Catalog/Platform */}
                <rect x="90" y="70" width="120" height="60" rx="10" fill="url(#gradCatalog)" stroke="#22c55e" strokeWidth="2" filter="url(#shadowConsume)"/>
                <text x="150" y="90" textAnchor="middle" fill="#15803d" fontSize="12" fontWeight="bold">Data Catalog</text>
                <text x="150" y="110" textAnchor="middle" fill="#16a34a" fontSize="10">Discover & Access</text>

                {/* User Icons */}
                {/* User 1: Analyst */}
                <g transform="translate(30, 20)">
                   <circle cx="20" cy="20" r="15" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1.5"/>
                   <path d="M 20 35 Q 20 45, 30 45 L 10 45 Q 20 45, 20 35 Z" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1.5"/> { /* Body */ }
                   <path d="M 12 18 L 28 18 M 20 12 V 28" stroke="#0ea5e9" strokeWidth="1.5"/> {/* Chart icon */}
                   <text x="20" y="55" textAnchor="middle" fontSize="9" fill="#6b7280">Analyst</text>
                </g>
                <path d="M 58 48 Q 80 60, 100 75" stroke="#16a34a" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadConsume)" strokeDasharray="3 3"/>

                {/* User 2: Developer */}
                <g transform="translate(220, 20)">
                   <circle cx="20" cy="20" r="15" fill="#fff7ed" stroke="#fb923c" strokeWidth="1.5"/>
                   <path d="M 20 35 Q 20 45, 30 45 L 10 45 Q 20 45, 20 35 Z" fill="#fff7ed" stroke="#fb923c" strokeWidth="1.5"/>
                   <text x="20" y="23" textAnchor="middle" fontSize="10" fill="#f97316" fontFamily="monospace">{"{;}"}</text> {/* Code icon */}
                   <text x="20" y="55" textAnchor="middle" fontSize="9" fill="#6b7280">Developer</text>
                </g>
                 <path d="M 230 48 Q 210 60, 190 75" stroke="#16a34a" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadConsume)" strokeDasharray="3 3"/>

                {/* User 3: Marketer */}
                <g transform="translate(130, 150)">
                  <circle cx="20" cy="20" r="15" fill="#fdf2f8" stroke="#f472b6" strokeWidth="1.5"/>
                   <path d="M 20 35 Q 20 45, 30 45 L 10 45 Q 20 45, 20 35 Z" fill="#fdf2f8" stroke="#f472b6" strokeWidth="1.5"/>
                   <path d="M 15 15 L 25 25 M 15 25 L 25 15" stroke="#db2777" strokeWidth="1.5"/> {/* Target icon */}
                   <circle cx="20" cy="20" r="3" fill="none" stroke="#db2777" strokeWidth="1.5"/>
                   <text x="20" y="55" textAnchor="middle" fontSize="9" fill="#6b7280">Marketer</text>
                </g>
                <path d="M 150 130 V 150" stroke="#16a34a" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadConsume)" strokeDasharray="3 3"/>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Self-Serve Data Consumption
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Enable all teams to discover, access, and utilize data products without technical barriers through Obzervable&apos;s intuitive self-serve interface.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-gray-700">Data product discovery and cataloging</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-gray-700">No-code data subscription and access management</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-gray-700">Automated documentation and lineage tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Additional Platform Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Dark Mode Support
              </h3>
              <p className="text-gray-600">
                Reduce eye strain with our fully-implemented dark mode interface, perfect for long development sessions.
              </p>
            </div>

            {/* Feature card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Responsive Interface
              </h3>
              <p className="text-gray-600">
                Access your data infrastructure from any device with our fully responsive, mobile-friendly interface.
              </p>
            </div>

            {/* Feature card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Real-Time Monitoring
              </h3>
              <p className="text-gray-600">
                Monitor your data flows in real-time with comprehensive metrics, logs, and visualizations.
              </p>
            </div>

            {/* Feature card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                One-Click Deployment
              </h3>
              <p className="text-gray-600">
                Deploy your data infrastructure to production environments with a single click, reducing operational overhead.
              </p>
            </div>

            {/* Feature card 5 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Event Schema Registry
              </h3>
              <p className="text-gray-600">
                Maintain data quality with our built-in schema registry for event validation and evolution management.
              </p>
            </div>

            {/* Feature card 6 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Role-Based Access Control
              </h3>
              <p className="text-gray-600">
                Secure your data infrastructure with fine-grained permissions and role-based access control mechanisms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Mesh Principles Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Built on Data Mesh Principles
          </h2>
          <p className="text-xl text-center text-gray-700 mb-16 max-w-4xl mx-auto">
            Obzervable implements the four key principles of data mesh architecture to help your organization scale its data infrastructure.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {/* Principle 1 */}
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-primary text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Domain Ownership</h3>
              </div>
              <p className="text-gray-700 pl-14">
                Obzervable empowers domain teams to own their data products end-to-end, from creation to consumption, fostering accountability and domain expertise in data management.
              </p>
            </div>
            
            {/* Principle 2 */}
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-primary text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Data as a Product</h3>
              </div>
              <p className="text-gray-700 pl-14">
                Our platform treats data as a first-class product, with built-in capabilities for discoverability, security, quality management, and documentation to maximize value.
              </p>
            </div>
            
            {/* Principle 3 */}
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-primary text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Self-Serve Platform</h3>
              </div>
              <p className="text-gray-700 pl-14">
                Obzervable&apos;s self-serve data platform abstracts infrastructure complexity, enabling domain teams to create, manage, and evolve data products independently.
              </p>
            </div>
            
            {/* Principle 4 */}
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-primary text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  4
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Federated Governance</h3>
              </div>
              <p className="text-gray-700 pl-14">
                Maintain global standards and interoperability with Obzervable&apos;s federated computational governance, balancing domain autonomy with organizational consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps Integration Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                DevOps Integration
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Obzervable seamlessly integrates with your existing DevOps toolchain, enabling a true &quot;shift-left&quot; approach for data infrastructure development.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-gray-700">CI/CD pipeline integration for automated testing and deployment</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-gray-700">Git-based workflow for infrastructure and data flow changes</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-gray-700">Infrastructure-as-code templates for consistent deployments</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-gray-700">Environment-based configuration management</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center p-4 bg-gray-50 rounded-lg shadow-inner">
              {/* SVG for DevOps Integration */}
              <svg width="100%" height="100%" viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg" aria-labelledby="devopsTitle devopsDesc" role="img">
                <title id="devopsTitle">DevOps Integration Diagram</title>
                <desc id="devopsDesc">Diagram showing a Git repository feeding into a CI/CD pipeline which then deploys to different environments (Dev, Staging, Prod).</desc>
                 <defs>
                  <marker id="arrowheadDevops" markerWidth="10" markerHeight="7" refX="8" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#4b5563" />
                  </marker>
                   <linearGradient id="gradGit" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#d1d5db', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#9ca3af', stopOpacity: 1}} />
                  </linearGradient>
                   <linearGradient id="gradPipeline" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#fde68a', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#fbbf24', stopOpacity: 1}} />
                  </linearGradient>
                  <linearGradient id="gradEnv" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#a5f3fc', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#22d3ee', stopOpacity: 1}} />
                  </linearGradient>
                   <filter id="shadowDevops" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.1"/>
                  </filter>
                 </defs>

                {/* Git Repository */}
                <g transform="translate(20, 80)" filter="url(#shadowDevops)">
                  <rect x="0" y="0" width="60" height="40" rx="5" fill="url(#gradGit)" stroke="#6b7280" strokeWidth="1"/>
                  <path d="M15 10 v20 M15 20 h30 M45 10 v20" stroke="#4b5563" strokeWidth="2"/>
                  <circle cx="15" cy="20" r="3" fill="#4b5563"/>
                  <circle cx="30" cy="10" r="3" fill="#4b5563"/>
                  <circle cx="45" cy="20" r="3" fill="#4b5563"/>
                  <text x="30" y="50" textAnchor="middle" fontSize="9" fill="#374151">Git Repo</text>
                </g>

                {/* CI/CD Pipeline */}
                <g transform="translate(100, 85)" filter="url(#shadowDevops)">
                  <rect x="0" y="0" width="150" height="30" rx="15" fill="url(#gradPipeline)" stroke="#f59e0b" strokeWidth="1"/>
                  <text x="75" y="15" textAnchor="middle" dy=".3em" fill="#92400e" fontSize="10" fontWeight="medium">CI / CD Pipeline</text>
                  {/* Pipeline stages */}
                  <circle cx="30" cy="15" r="5" fill="#fbbf24" stroke="#d97706" strokeWidth="1"/>
                  <circle cx="75" cy="15" r="5" fill="#fbbf24" stroke="#d97706" strokeWidth="1"/>
                  <circle cx="120" cy="15" r="5" fill="#fbbf24" stroke="#d97706" strokeWidth="1"/>
                </g>

                {/* Environments */}
                <g transform="translate(270, 30)" filter="url(#shadowDevops)">
                  <rect x="0" y="0" width="60" height="35" rx="5" fill="url(#gradEnv)" stroke="#06b6d4" strokeWidth="1"/>
                  <text x="30" y="18" textAnchor="middle" dy=".3em" fill="#0e7490" fontSize="10" fontWeight="medium">Dev</text>
                </g>
                <g transform="translate(270, 82.5)" filter="url(#shadowDevops)">
                  <rect x="0" y="0" width="60" height="35" rx="5" fill="url(#gradEnv)" stroke="#06b6d4" strokeWidth="1"/>
                  <text x="30" y="18" textAnchor="middle" dy=".3em" fill="#0e7490" fontSize="10" fontWeight="medium">Staging</text>
                </g>
                <g transform="translate(270, 135)" filter="url(#shadowDevops)">
                  <rect x="0" y="0" width="60" height="35" rx="5" fill="url(#gradEnv)" stroke="#06b6d4" strokeWidth="1"/>
                  <text x="30" y="18" textAnchor="middle" dy=".3em" fill="#0e7490" fontSize="10" fontWeight="medium">Prod</text>
                </g>

                {/* Arrows */}
                <line x1="80" y1="100" x2="95" y2="100" stroke="#4b5563" strokeWidth="1.5" markerEnd="url(#arrowheadDevops)"/>
                <path d="M 250 100 Q 260 100 265 90 L 265 70" stroke="#4b5563" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadDevops)"/>
                <line x1="250" y1="100" x2="265" y2="100" stroke="#4b5563" strokeWidth="1.5" markerEnd="url(#arrowheadDevops)"/>
                <path d="M 250 100 Q 260 100 265 110 L 265 130" stroke="#4b5563" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadDevops)"/>

                {/* IaC Text */}
                 <text x="175" y="130" textAnchor="middle" fontSize="9" fill="#6b7280" fontStyle="italic">Infrastructure as Code</text>

              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-12 bg-primary-light/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Data Infrastructure?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Start building powerful, event-driven data flows today with Obzervable&apos;s intuitive platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="http://app.obzervable.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-light text-white font-semibold px-8 py-4 rounded-md transition-colors text-lg"
            >
              Get Started Free
            </a>
            <a 
              href="https://calendly.com/obzervable/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-4 rounded-md transition-colors text-lg"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 