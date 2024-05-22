import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductAction from './Action/ProductAction'


const SubChild = () => {
    const product_state = useSelector (state => state.product)
    const dispatch = useDispatch()
  return (
    <div>
      <h1>{product_state.product_name}</h1>
      <h1>{product_state.product_price}</h1>
      <button onClick={() => { dispatch(ProductAction.product_price_add(100)) }}>Increase +</button>
      <button onClick={() => { dispatch(ProductAction.product_price_minus(100)) }}>Deacrese -</button>
    </div>
  )
}

export default SubChild
