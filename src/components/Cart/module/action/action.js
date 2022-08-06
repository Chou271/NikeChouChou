import API from "../../../../Axios/API";
import * as ActionType from "../contant/contant"

export const createAction = ({ type, payload }) => {
    return {
        type,
        payload
    }
}
export const postAPICart = (data, token, history) => {
    return async (dispatch) => {
        try {
            const res = await API("/cart/create", "POST", data, token);
            setTimeout(() => {
                alert("success")
                localStorage.removeItem("cart")
                history("/user/order")
                dispatch(createAction({ type: ActionType.ADD_TO_CARD, payload: [] }))
            }, 2000)
        } catch (error) {
            alert("Order fail");
            console.log({ ...error });

        }
    }
}