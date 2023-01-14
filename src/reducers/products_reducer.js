import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const products_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOPen: true }
  }

  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOPen: false }
  }

  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, productsLoading: true }
  }

  if (action.type === GET_PRODUCTS_SUCCESS) {
    let featuredProducts = action.payload.filter((product) => product.featured === true)
    return { ...state, productsLoading: false, products: action.payload, featuredProducts }
  }

  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, productsLoading: false, productsError: true }
  }

  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return { ...state, singleProductLoading: true }
  }

  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return { ...state, singleFeaturedProduct: action.payload, singleProductLoading: false }
  }

  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return { ...state, singleProductError: true, singleProductLoading: false }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
