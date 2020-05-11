import axios from "axios";
import { actionTypes } from "./actionTypes";

const { productsActions } = actionTypes;

export const fetchProducts = () => async dispatch => {
  dispatch({ type: productsActions.FETCH_PRODUCTS_STARTED });

  try {
    const response = await axios.get(
      "http://www.mocky.io/v2/5e9ebdaa2d00007800cb7697"
    );
    dispatch({
      type: productsActions.SET_PRODUCTS,
      payload: response.data.products
    });
    setTimeout(
      () => dispatch({ type: productsActions.FETCH_PRODUCTS_SUCCESS }),
      2000
    );
  } catch (e) {
    console.log(e);
    dispatch({ type: productsActions.FETCH_PRODUCTS_FAILED });
  }
};

export const selectProduct = product => ({
  type: productsActions.ADD_TO_SELECTED_PRODUCTS,
  payload: product
});

export const removeProduct = product => ({
  type: productsActions.REMOVE_FROM_SELECTED_PRODUCTS,
  payload: product
});

export const toggleShowOnlyDifferences = () => (dispatch, getState) => {
  dispatch({
    type: productsActions.TOGGLE_SHOW_ONLY_DIFFERENCES,
    payload: !getState().products.showOnlyDifferences
  });
};
