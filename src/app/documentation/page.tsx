// pages/documentation.tsx
import React from 'react';
import Link from 'next/link';
import Footer from '@/components/global/footer';
import Navbar from '@/components/global/NavbarWrapper';

const DocumentationPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center mt-20">
      <Navbar />
      <div className="w-full max-w-6xl p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Documentation</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="mb-4">Learn how to get started with ZapFlow, from setting up your account to creating your first automation flow.</p>
          <h3 className="text-xl font-semibold mb-2">Account Setup</h3>
          <p>To get started with ZapFlow, you need to create an account. Visit our sign-up page and provide the necessary information. Once your account is created, you can log in and start using the platform.</p>

          <h3 className="text-xl font-semibold mb-2">Creating Your First Automation</h3>
          <p>Creating your first automation in ZapFlow is simple. Follow these steps:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Log in to your ZapFlow account.</li>
            <li>Navigate to the &apos;Automations&apos; section from the dashboard.</li>
            <li>Click on &apos;Create New Automation&apos;.</li>
            <li>Select a trigger event from the list of available options.</li>
            <li>Add actions to be performed when the trigger event occurs.</li>
            <li>Save your automation and activate it.</li>
          </ol>

          <h3 className="text-xl font-semibold mb-2">Connecting Services</h3>
          <p>ZapFlow allows you to connect various services like Google Drive, Slack, Discord, and Notion. To connect a service:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Go to the &apos;Integrations&apos; section in the dashboard.</li>
            <li>Select the service you want to connect.</li>
            <li>Follow the on-screen instructions to authenticate and authorize the connection.</li>
            <li>Once connected, you can use the service in your automations.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
          <p className="mb-4">Explore our comprehensive API documentation to integrate ZapFlow with your own applications and services.</p>

          <h3 className="text-xl font-semibold mb-2">Authentication</h3>
          <p>To use the ZapFlow API, you need to authenticate using an API key. Include the API key in the header of your requests as follows:</p>
          <pre className="bg-accent p-4 rounded-md mb-4"><code>Authorization: Bearer YOUR_API_KEY</code></pre>

          <h3 className="text-xl font-semibold mb-2">API Endpoints</h3>
          <p>ZapFlow provides various API endpoints to manage your automations, integrations, and more. Here are some common endpoints:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>GET /automations</strong>: Retrieve a list of all automations.</li>
            <li><strong>POST /automations</strong>: Create a new automation.</li>
            <li><strong>GET /integrations</strong>: Get the status of all connected integrations.</li>
            <li><strong>POST /integrations</strong>: Connect a new integration.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Rate Limiting</h3>
          <p>To ensure fair usage, our API has rate limits. You can make up to 100 requests per minute. If you exceed this limit, you will receive a 429 Too Many Requests response. Plan your API calls accordingly to avoid hitting the rate limit.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Integration Guides</h2>
          <p className="mb-4">Detailed guides on how to integrate ZapFlow with various services and tools.</p>

          <h3 className="text-xl font-semibold mb-2">Google Drive Integration</h3>
          <p>To integrate Google Drive with ZapFlow:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Go to the &apos;Integrations&apos; section in the dashboard.</li>
            <li>Select &apos;Google Drive&apos; from the list of available integrations.</li>
            <li>Authenticate with your Google account and grant necessary permissions.</li>
            <li>Once connected, you can use Google Drive triggers and actions in your automations.</li>
          </ol>

          <h3 className="text-xl font-semibold mb-2">Slack Integration</h3>
          <p>To integrate Slack with ZapFlow:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Go to the &apos;Integrations&apos; section in the dashboard.</li>
            <li>Select &apos;Slack&apos; from the list of available integrations.</li>
            <li>Authenticate with your Slack account and grant necessary permissions.</li>
            <li>Once connected, you can use Slack triggers and actions in your automations.</li>
          </ol>

          <h3 className="text-xl font-semibold mb-2">Discord Integration</h3>
          <p>To integrate Discord with ZapFlow:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Go to the &apos;Integrations&apos; section in the dashboard.</li>
            <li>Select &apos;Discord&apos; from the list of available integrations.</li>
            <li>Authenticate with your Discord account and grant necessary permissions.</li>
            <li>Once connected, you can use Discord triggers and actions in your automations.</li>
          </ol>

          <h3 className="text-xl font-semibold mb-2">Notion Integration</h3>
          <p>To integrate Notion with ZapFlow:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Go to the &apos;Integrations&apos; section in the dashboard.</li>
            <li>Select &apos;Notion&apos; from the list of available integrations.</li>
            <li>Authenticate with your Notion account and grant necessary permissions.</li>
            <li>Once connected, you can use Notion triggers and actions in your automations.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
          <p className="mb-4">Follow these best practices to ensure optimal performance and security of your automation flows.</p>

          <h3 className="text-xl font-semibold mb-2">Security Best Practices</h3>
          <p>Ensure your automations are secure by following these best practices:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use strong, unique passwords for your accounts.</li>
            <li>Enable two-factor authentication (2FA) wherever possible.</li>
            <li>Regularly review and update your API keys and tokens.</li>
            <li>Monitor your account activity for any suspicious behavior.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
          <p>To ensure your automations run efficiently, consider the following tips:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Avoid unnecessary steps in your automation flows.</li>
            <li>Use bulk actions where possible to reduce the number of API calls.</li>
            <li>Regularly review and optimize your workflows.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Maintenance Tips</h3>
          <p>Maintain your automations and integrations with these tips:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Regularly test your automations to ensure they are working as expected.</li>
            <li>Update your integrations and API keys as needed.</li>
            <li>Keep your documentation up to date for easy reference.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <p className="mb-4">Frequently asked questions about ZapFlow and its features.</p>

          <h3 className="text-xl font-semibold mb-2">General Questions</h3>
          <p><strong>Q: What is ZapFlow?</strong></p>
          <p>A: ZapFlow is a SaaS Automation Builder that helps you automate and streamline your business processes.</p>

          <h3 className="text-xl font-semibold mb-2">Billing Questions</h3>
          <p><strong>Q: How does billing work?</strong></p>
          <p>A: We use Stripe to handle all our payments. You can manage your subscriptions and payments through the billing section in your dashboard.</p>

          <h3 className="text-xl font-semibold mb-2">Technical Questions</h3>
          <p><strong>Q: How do I integrate new services?</strong></p>
          <p>A: You can integrate new services by navigating to the &apos;Integrations&apos; section in your dashboard and following the on-screen instructions.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Support</h2>
          <p className="mb-4">If you need further assistance, please visit our support page or contact us directly.</p>
          <p>Email: <Link href="mailto:support@yourproject.com"><span className="text-blue-500 hover:underline">support@yourproject.com</span></Link></p>
          <p>Phone: <Link href="tel:+1234567890"><span className="text-blue-500 hover:underline">+1 (234) 567-890</span></Link></p>
          <p>Support Center: <Link href="https://support.yourproject.com" passHref><span className="text-blue-500 hover:underline"  rel="noopener noreferrer">Visit our Support Center</span></Link></p>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default DocumentationPage;
