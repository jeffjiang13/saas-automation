import React from 'react';
import Footer from '@/components/global/footer';
import Navbar from '@/components/global/NavbarWrapper';

const clients = [...new Array(10)].map((_, index) => ({
  href: `/${index + 1}.png`,
}));

const ClientsPage: React.FC = () => {
  return (
    <main className="flex items-center justify-center flex-col mt-20">
      <Navbar />
      <div className="w-full max-w-6xl p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Clients</h1>
        <div className="flex flex-wrap justify-center gap-4">
          {clients.map((client, index) => (
            <div key={index} className="p-7 w-100% h-30 bg-black rounded-lg overflow-hidden">
              <img
                src={client.href}
                alt={`Client ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ClientsPage;
