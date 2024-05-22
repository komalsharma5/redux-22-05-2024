import { configureStore } from "@reduxjs/toolkit";
import reducers from "./Action/Reducer/Index";

const Store = configureStore({
    reducer: reducers
})

export default Store;