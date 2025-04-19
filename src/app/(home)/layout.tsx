import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Obzervable - Event-Driven Data Platform',
  description: 'The most powerful platform for building, monitoring, and scaling event-driven and real-time streaming data infrastructures.',
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 