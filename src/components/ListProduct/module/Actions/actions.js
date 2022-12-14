import API from "../../../../Axios/API";
import * as ActionType from "../Contant/contants";

export const createAction = ({ type, payload }) => {
    return {
        type,
        payload,
    }
}
export const actionGetProductAPI = (gender, typeProduct) => {
    return async (dispatch) => {
        try {

            dispatch(createAction({ type: ActionType.IS_LOADING_LIST_Product, payload: true }))
            const res = await API(
                `product/?gender=${gender}&typeProduct=${typeProduct}`,
                "GET"
            );
            dispatch(createAction({
                type: ActionType.FETCH_API_LIST_PRODUCT,
                payload: res.data
            }))
            dispatch(createAction({ type: ActionType.IS_LOADING_LIST_Product, payload: false }))
            localStorage.setItem("GenderAndTypeProduct", JSON.stringify({ gender: gender, typeProduct: typeProduct }))
        } catch (error) {
            console.log({ ...error });
        }
    }
}