import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import iconCart from '../assets/images/ligth_mode/CartIcon.png'


import { CartContext } from '../contexts/cartContext'

const Header = () => {
    const [totalQuantity, setTotalQuantity] = useState(0);
    // Access the cart items and methods from context
    const { items, toggleStatusTab } = useContext(CartContext);

    useEffect(() => {
        let total = 0;
        items.forEach(item => total += item.quantity);
        setTotalQuantity(total);
    }, [items])

    const handleOpenTabCart = () => {
      toggleStatusTab();
    }
    
    return (
        <header className='flex justify-between items-center mb-5'>
            <Link to="/" className='text-xl font-semibold'>Home.</Link>
            <div className='w-10 h-10 bg-gray-100 rounded-full
            flex justify-center items-center relative' onClick={handleOpenTabCart}>
                <img src={iconCart} alt="" className='w-6'/>
                <span className='absolute top-2/3 right-1/2 bg-red-500 text-white text-sm
                w-5 h-5 rounded-full flex justify-center items-center'>{totalQuantity}</span>
            </div>
        </header>
    )
}

export default Header