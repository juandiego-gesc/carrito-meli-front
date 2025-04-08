import React, {useContext} from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import CartTab from './cartTab'
import { CartContext } from '../contexts/cartContext'

const Layout = () => {
  const { cartOpen } = useContext(CartContext);

  return (
    <div className = "bg-zinc-200">
      <main className={`w-[1200px] max-w-full m-auto p-5 transform transition-transform duration-500
        ${cartOpen === false ? "" : "-translate-x-56" }`}>
        <Header />
        <Outlet />
      </main>
      <CartTab />
    </div>
  )
}

export default Layout