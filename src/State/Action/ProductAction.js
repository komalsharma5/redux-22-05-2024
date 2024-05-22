
const product_price_add = (data) => {
    return(dispatch) => {
        dispatch({
            type:"ADD",
            payload:data
        })
    }
}

const product_price_minus = (data) => {
    return(dispatch) => {
        dispatch({
            type:"MINUS",
            payload:data
        })
    }
}

export default {
    product_price_add,
    product_price_minus
}
