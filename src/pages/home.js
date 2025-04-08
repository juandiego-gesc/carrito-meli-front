import React, { useEffect, useState } from 'react';
// import { products } from '../products'
import {getAllProducts} from '../service/productService'
import Product from '../components/product'

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  
    getAllProducts()
      .then(data => {
        console.log('Products loaded:', data);
        setProducts(data);
      })
      .catch(error => {
        console.error('Error loading products:', error);
      });
  }, []);
  return (
    <div>
      <h1 className='text-3xl font-bold my-5'>Product List</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
        {products.map((product, key) =>
          <Product key={key} data={product} />
        )}
      </div>
    </div>
  )
}

export default Home