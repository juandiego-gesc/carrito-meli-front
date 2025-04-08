import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../contexts/cartContext'
import CartItem from './cartItem'
import { getProduct } from '../service/productService'

const CartTab = () => {
  const { cartOpen, toggleStatusTab, items } = useContext(CartContext);
  const [totalCost, setTotalCost] = useState(0);

  const handleCloseTabCart = () => {
    toggleStatusTab();
  };

  useEffect(() => {
    const calculateTotal = async () => {
      try {
        const totals = await Promise.all(
          items.map(async (item) => {
            const product = await getProduct(item.product_id)
            return product.price * item.quantity
          })
        )
        const total = totals.reduce((acc, cost) => acc + cost, 0)
        setTotalCost(total)
      } catch (error) {
        console.error('Error calculating total cost:', error)
      }
    }
    
    if (items.length > 0) {
      calculateTotal()
    } else {
      setTotalCost(0)
    }
  }, [items])

  return (
    <div className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_100px] 
      transform transition-transform duration-500
      ${cartOpen === false ? "translate-x-full" : ""}
      `}>
      <h2 className='p-5 text-white text-2xl'>Shopping Cart</h2>
      <div className='p-5 overflow-auto'>
        {items.map((item, key) => 
          <CartItem key={key} data={item}/>
        )}
      </div>
      <div className='p-5 bg-gray-800 text-white flex flex-col gap-4'>
        <div className='flex justify-between'>
          <span>Total:</span>
          <span>${totalCost.toFixed(2)}</span>
        </div>
        <div className='grid grid-cols-2 gap-2'>
          <button className='bg-black text-white p-2 rounded' onClick={handleCloseTabCart}>CLOSE</button>
          <button className='bg-amber-600 text-white p-2 rounded'>CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}

export default CartTab