import { actionTypes } from "../actions/actionTypes";

const { productsActions } = actionTypes;

const INITIAL_STATE = {
  products: null,
  selectedProducts: [],
  isFetching: false
};

export default function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case productsActions.FETCH_PRODUCTS_STARTED:
      return { ...state, isFetching: true };

    case productsActions.FETCH_PRODUCTS_FAILED:
    case productsActions.FETCH_PRODUCTS_SUCCESS:
      return { ...state, isFetching: false };

    case productsActions.SET_PRODUCTS:
      return { ...state, products: action.payload };

    case productsActions.ADD_TO_SELECTED_PRODUCTS: {
      let selectedProducts = [...state.selectedProducts];
      if (!selectedProducts.includes(action.payload)) {
        selectedProducts.push(action.payload);
      }
      return { ...state, selectedProducts };
    }

    case productsActions.REMOVE_FROM_SELECTED_PRODUCTS: {
      let selectedProducts = [...state.selectedProducts];
      let productIndex = selectedProducts.indexOf(action.payload);
      selectedProducts.splice(productIndex, 1);
      return { ...state, selectedProducts };
    }

    default:
      return state;
  }
}
