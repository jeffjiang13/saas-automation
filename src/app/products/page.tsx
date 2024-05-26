import React from 'react';
import Footer from '@/components/global/footer';
import Navbar from '@/components/global/NavbarWrapper';
import { products } from '@/lib/constant';

interface ProductCardProps {
  title: string;
  link: string;
  thumbnail: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, link, thumbnail }) => {
  return (
    <div className="p-4 border rounded shadow-md hover:shadow-xl transition-shadow transform hover:scale-105 hover:bg-accent">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={thumbnail} alt={title} className="w-full h-40 object-cover mb-4 rounded transition-transform duration-300" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </a>
    </div>
  );
};

const ProductsPage = () => {
  return (
    <main className="flex items-center justify-center flex-col mt-20">
      <Navbar />
      <div className="w-full max-w-6xl p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              link={product.link}
              thumbnail={product.thumbnail}
            />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ProductsPage;
