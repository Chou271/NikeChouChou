import React from 'react'
import { useSelector } from 'react-redux'

const CartSumary = () => {
    const products = useSelector((state) => state.reducerCart.products)
    const sumMoney = products.reduce((sum, item) => {
        return sum + (item.quantity * item.price);
    }, 0);
    return (
        <div>cartSumary</div>
    )
}

export default CartSumary