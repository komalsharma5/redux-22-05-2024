import React from "react"

const number_get = (data) => {
    return (dispatch) => {
        dispatch({
            type: "GET",
            payload: data
        })
    }
}

export {
    number_get
}