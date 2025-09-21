// 'use client'
import axios from 'axios'
import React from 'react'
import ProductListPresenter from './ProductListPresenter'

export interface IProduct {
    title:string,
    description: string,
    price: number,
    rating:number,
    thumbnail: string,
    id: number,
    brand: string,
    availabilityStatus: string,
    category: string,
    discountPercentage:number,
}

//? This is a container component that handles API call fetches and this component does not return anything or write tsx/jsx. It just returns a presenter component. 

const ProductListContainer = async () => {
    let data;
    try {
        const res = await axios.get('https://dummyjson.com/products')
        data = res.data.products        
    } catch (error) {
        console.log('product fetch error:', error);
    }


  return (
    <div>
        <ProductListPresenter products={data}/>
    </div>
  )
}

export default ProductListContainer