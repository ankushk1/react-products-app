import { getAllProducts } from "../utils/ApiUtils";
import { GET_PRODUCTS } from "./constants";


export const AllProducts = () => async (dispatch) => {
  const res = await getAllProducts();
  dispatch({ 
    type:GET_PRODUCTS,
    payload: res
  })
}