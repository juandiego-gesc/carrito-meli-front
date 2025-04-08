import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import iconCart from '../assets/images/ligth_mode/CartIcon.png'
import { CartContext } from '../contexts/cartContext';
import imagePlaceHolder from '../assets/images/ligth_mode/ProductPH.png'
const Product = (props) => {
    const { addToCart } = useContext(CartContext);

    const { id, name, price, image = imagePlaceHolder } = props.data;
    const handleAddToCart = () => {
        addToCart({
            product_id: id,
            quantity: 1
        });
    };
    return (
        <div className='bg-white p-5 rounded-xl shadow-sm'>
            <img src={image} alt={name} className='w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007]' />
            <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>
            <div className='flex justify-between items-center'>
                <p>
                    $<span className='text-2xl font-medium'>{price}</span>
                </p>
                <button className='bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2' onClick={handleAddToCart}>
                    <img src={iconCart} alt="" className='w-5' />
                    Add To Cart
                </button>
            </div>
        </div>
    )
}

export default Product