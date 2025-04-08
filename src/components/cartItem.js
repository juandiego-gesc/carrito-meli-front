import React, {useState, useEffect} from 'react' 
import { useContext } from 'react'
import { CartContext } from '../contexts/cartContext'
// import { products } from '../products';
import {getProduct} from '../service/productService'
import productImagePH from '../assets/images/ligth_mode/ProductPH.png'

const CartItem = (props) => {
    const { changeQuantity} = useContext(CartContext);
    const {id, product_id, quantity} = props.data;
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        const findDetail = async () => {
            const product = await getProduct(product_id);
            setDetail(product);
        };
        findDetail();
    }, [product_id])
    const handleMinusQuantity = () => {
        changeQuantity({
            id: id,
            product_id: product_id,
            quantity: quantity - 1
        });
    }
    const handlePlusQuantity = () => {
        console.log(props.data);
        changeQuantity({
            id: id,
            product_id: product_id,
            quantity: quantity + 1
        });
    }
    return (
        <div className='flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md'>
            <img 
                src={detail.image || productImagePH} 
                alt={detail.name || 'No image available'} 
                className='w-12'
            />
            <h3>{detail.name}</h3>
            <p>${(detail.price * quantity).toFixed(2)}</p>
            <div className='w-20 flex justify-between gap-2'>
                <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handleMinusQuantity}>-</button>
                <span>{quantity}</span>
                <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handlePlusQuantity}>+</button>
            </div>
        </div>
      )


}
export default CartItem