// pages/enterprise.tsx
import React from 'react';
import Link from 'next/link';
import Footer from '@/components/global/footer';
import Navbar from '@/components/global/NavbarWrapper';

const EnterprisePage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center mt-20">
      <Navbar />
      <div className="w-full max-w-6xl p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Enterprise Solutions</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Enterprise Features</h2>
          <p className="mb-4">Our Enterprise plan offers a comprehensive suite of features tailored for large businesses and organizations.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Advanced Security Features</li>
            <li>Priority Support</li>
            <li>Custom Integrations</li>
            <li>Dedicated Account Manager</li>
            <li>Enhanced Performance and Scalability</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <p className="mb-4">Leverage the full potential of ZapFlow to streamline your business processes and drive productivity.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Increased Efficiency: Automate repetitive tasks and focus on strategic initiatives.</li>
            <li>Scalability: Seamlessly scale your automation as your business grows.</li>
            <li>Customization: Tailor the platform to meet your specific business needs.</li>
            <li>Security: Benefit from advanced security protocols and data protection measures.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <p className="mb-4">Our Enterprise pricing is flexible and designed to suit the needs of large organizations. Contact us for a custom quote.</p>
          <p className="mb-4">For more details on pricing, please visit our <Link href="/pricing"><span className="text-blue-500 hover:underline">Pricing Page</span></Link>.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">Interested in our Enterprise plan? Get in touch with us to discuss your requirements and get a personalized demo.</p>
          <p className="mb-4">Email: <Link href="mailto:jeff.jiang13@gmail.com"><span className="text-blue-500 hover:underline">jeff.jiang13@gmail.com</span></Link></p>
          <p className="mb-4">Phone: <Link href="tel:+1234567890"><span className="text-blue-500 hover:underline">+1 (234) 567-890</span></Link></p>
          <p className="mb-4">Or fill out our <Link href="https://jeff-jiang.com/#contact" passHref><span className="text-blue-500 hover:underline" rel="noopener noreferrer">contact form</span></Link> and we will get back to you shortly.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Case Studies</h2>
          <p className="mb-4">See how our Enterprise clients are using ZapFlow to transform their business operations.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link href="https://jj-tailortech.vercel.app/" passHref>
                <span className="text-blue-500 hover:underline" rel="noopener noreferrer">TailerTech</span>
              </Link>
            </li>
            <li>
              <Link href="https://jj-newsletter.vercel.app/" passHref>
                <span className="text-blue-500 hover:underline" rel="noopener noreferrer">BeeClone</span>
              </Link>
            </li>
            <li>
              <Link href="https://jj-matrix-ai.vercel.app/" passHref>
                <span className="text-blue-500 hover:underline" rel="noopener noreferrer">MatrixAI</span>
              </Link>
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default EnterprisePage;
