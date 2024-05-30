import React from 'react';
import Link from 'next/link';
import Footer from '@/components/global/footer';
import Navbar from '@/components/global/NavbarWrapper';

const ResourcesPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center mt-20">
      <Navbar />
      <div className="w-full max-w-6xl p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Resources</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Documentation</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link href="/documentation">
                <span className="text-blue-500 hover:underline" rel="noopener noreferrer">
                  Getting Started
                </span>
              </Link>
            </li>
            <li>
              <Link href="/documentation">
                <span className="text-blue-500 hover:underline" rel="noopener noreferrer">
                  API Reference
                </span>
              </Link>
            </li>
            <li>
              <Link href="/documentation">
                <span className="text-blue-500 hover:underline" rel="noopener noreferrer">
                  Integration Guides
                </span>
              </Link>
            </li>
            <li>
              <Link href="/privacy">
                <span className="text-blue-500 hover:underline" rel="noopener noreferrer">
                  Privacy Policy
                </span>
              </Link>
            </li>
            <li>
              <Link href="/terms">
                <span className="text-blue-500 hover:underline" rel="noopener noreferrer">
                  Terms of Service
                </span>
              </Link>
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tutorials</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link href="/documentation">
                <span className="text-blue-500 hover:underline" rel="noopener noreferrer">
                  Create Your First Automation
                </span>
              </Link>
            </li>
            <li>
              <Link href="/documentation">
                <span className="text-blue-500 hover:underline" rel="noopener noreferrer">
                  Advanced Features
                </span>
              </Link>
            </li>
            <li>
              <Link href="/documentation">
                <span className="text-blue-500 hover:underline" rel="noopener noreferrer">
                  Best Practices
                </span>
              </Link>
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Support</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link href="https://jeff-jiang.com/#contact">
                <span className="text-blue-500 hover:underline" rel="noopener noreferrer">
                  Support Center
                </span>
              </Link>
            </li>
            <li>
              <Link href="https://jeff-jiang.com/#contact">
                <span className="text-blue-500 hover:underline" rel="noopener noreferrer">
                  Community Forums
                </span>
              </Link>
            </li>
            <li>
              <Link href="https://jeff-jiang.com/#contact">
                <span className="text-blue-500 hover:underline" rel="noopener noreferrer">
                  Contact Us
                </span>
              </Link>
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Other Resources</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link href="https://jeff-jiang.com">
                <span className="text-blue-500 hover:underline" rel="noopener noreferrer">
                  Blog
                </span>
              </Link>
            </li>
            <li>
              <Link href="https://jeff-jiang.com">
                <span className="text-blue-500 hover:underline" rel="noopener noreferrer">
                  News & Updates
                </span>
              </Link>
            </li>
            <li>
              <Link href="https://jeff-jiang.com">
                <span className="text-blue-500 hover:underline" rel="noopener noreferrer">
                  Events & Webinars
                </span>
              </Link>
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default ResourcesPage;
