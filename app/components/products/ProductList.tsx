import React from 'react'
import { IProduct } from './ProductListContainer'
import Product from './Product';

 interface ProductListProps{
    products: IProduct[]
}

const ProductList: React.FC<ProductListProps> = ({products}) => {    
  console.log(products);
  
  return (
    <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-4'>
        {products.map((product) => (
          <Product key={product.id}  product={product}/>
      ))}
        
    </div>
  )
}

export default ProductList