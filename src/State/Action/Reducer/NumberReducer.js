const number_reducer = (state = {number_name: "Golden",Number_value:100},action) => {
    if(action.type == "GET"){
        return state
    }
    else if(action.type == "CREATE"){

    }
    else{
        return state
    }
}
export default number_reducer