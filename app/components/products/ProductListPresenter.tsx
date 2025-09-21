import React from 'react'
import { IProduct } from './ProductListContainer'
import ProductList from './ProductList';

interface ProductListPresenterProps{
    products: IProduct[]
}

//? This is a presenter component that handles all the smaller components to return products or tsx/jsx. In my case it is returning a product list.

const ProductListPresenter: React.FC<ProductListPresenterProps> = ({products}) => {
    // console.log(products);
    
  return (
    <div>
        <div className='mt-20 font-bold text-4xl'>
            <h1>My All Products</h1>
        </div>
        <ProductList products={products}/>
    </div>
  )
}

export default ProductListPresenter