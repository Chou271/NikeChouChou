import { combineReducers } from "redux"
import reducerCart from "../../components/Cart/module/reducer/reducer"
import reducerURL from "../../components/ListProduct/module/Reducers/reducer"

const rootReducer = combineReducers({
    reducerURL,
    reducerCart
})

export default rootReducer