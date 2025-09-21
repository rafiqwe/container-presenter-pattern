import React from 'react'
import { IProduct } from './ProductListContainer'
import { ShoppingCartIcon } from 'lucide-react';
import Image from 'next/image';

interface ProductProps {
  product: IProduct;
}

const Product: React.FC<ProductProps> = ({product}) => {
  return (
        <div className='px-4 py-5 relative w-full rounded-3xl bg-slate-50 text-black'>
            <div className='px-2 mb-4 '>
                <div className='w-full h-67 relative top-0 '>
                    <Image fill className='object-cover ' alt={product.title} src={product.thumbnail}/>
                </div>
            </div>
            <div className=' mb-1'>
                <h1 className='text-xl font-semibold '>{product.title}</h1>
            </div>
            <div className=''>
              {product.discountPercentage && (
                <div className='absolute top-3 flex items-center justify-center right-3 bg-green-200 w-20 h-10 rounded-full' >
                  <p className='text-sm text-gray-600 font-semibold'>
                    {product.discountPercentage}%
                  </p>
                </div>
              )}
            </div>
            <div className='flex items-center justify-between w-full'>
              <div>
                <h1 className='text-xl font-bold'>${product.price}</h1>
              </div>
              <div>
                  <div className='bg-blue-500 rounded-full w-20 h-8 flex items-center justify-center text-white cursor-pointer'>
                    <ShoppingCartIcon/>
                  </div>
              </div>
            </div>
        </div>
  )
}

export default Product