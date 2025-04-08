import React, { createContext, useState, useEffect } from 'react';
import { addCartItem, updateCartItem, getUserCart } from '../service/cartService';
import { useContext } from 'react';
import { AuthContext } from './authContext';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);
    const { token } = useContext(AuthContext);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const data = await getUserCart(token);
                setItems(data);
            } catch (error) {
                console.error('Error fetching cart:', error);
            }
        };

        if (token) {  // solo si hay token (usuario logueado)
            fetchCart();
        }
    }, [token]);

    const addToCart = async ({ product_id, quantity }) => {
        const cartItemData = { product_id, quantity };
        try {
            await addCartItem(cartItemData, token);
            const updatedCart = await getUserCart(token);
            setItems(updatedCart);
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    const changeQuantity = async ({ id, product_id, quantity }) => {
        const cartItemData = { id, product_id, quantity };
        try {
            await updateCartItem(cartItemData, token);
            // Replace the updated item in the cart
            const updatedCart = await getUserCart(token);
            setItems(updatedCart);
        } catch (error) {
            console.error('Error updating cart quantity:', error);
        }
    };

    const toggleStatusTab = () => {
        setCartOpen(!cartOpen);
    };

    return (
        <CartContext.Provider
            value={{
                items,
                addToCart,
                changeQuantity,
                cartOpen,
                toggleStatusTab,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};