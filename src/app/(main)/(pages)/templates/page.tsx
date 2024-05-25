import React from 'react'
import { products } from '@/lib/constant'

const TemplatesPage = () => {
  return (
    <div className="flex flex-col gap-4 relative p-4 md:p-6">
      <h1 className="text-2xl md:text-4xl sticky top-0 z-[10] p-4 md:p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
        Templates
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <a
            key={product.title}
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 shadow rounded-lg hover:bg-accent hover:shadow-md transition-shadow duration-200"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-32 w-full object-cover rounded-t-lg"
            />
            <div className="p-2">
              <h3 className="text-lg font-semibold">{product.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default TemplatesPage
