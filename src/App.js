import React from 'react'
import { useDispatch } from 'react-redux'
import ProductAction from './State/Action/ProductAction'
import Child from './State/Child'


const App = () => {
  const dispatch = useDispatch ()

  return (
    <div>
      <h1>App</h1>
      <button onClick={()=>{ dispatch(ProductAction.product_price_add(100))}}>Increase + </button>
      <button onClick={()=>{ dispatch(ProductAction.product_price_minus(100))}}>Decrease - </button>
      <Child></Child>
    </div>
  )
}

export default App
