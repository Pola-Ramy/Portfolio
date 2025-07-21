import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'POLA - Portfolio',
  description: 'Full-stack developer portfolio showcasing projects and skills',
  keywords: ['portfolio', 'developer', 'full-stack', 'react', 'nextjs','Frontend','Backend','Database','Nodejs','MongoDB','Express','React','Nextjs','Tailwind','HTML','CSS','JavaScript','TypeScript','Git','Docker','AWS','Vercel','Figma','Postman','REST APIs','GraphQL'],
  authors: [{ name: 'POLA' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50`}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 