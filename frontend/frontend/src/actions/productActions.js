import Axios from 'axios';
import {
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_SUCCESS,
} from '../constants/productConstants';

//all the business logic 
export const listProducts = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,  //type:'asdbhad'
  });
  try {
    const { data } = await Axios.get('http://localhost:8080/products');  //state manipulation
    
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

export const detailsProduct = (productId) => async (dispatch) => {
  
  dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
  try {
    const { data } = await Axios.get(`http://localhost:8080/products/${productId}`);
    
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createProduct = () => async (dispatch, getState) => {
  console.log("In details product")
  dispatch({ type: PRODUCT_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {

    // const { data } = await Axios.post(
    //   'http://localhost:8080/products',
    //   {},
    //   {
    //     headers: { Authorization: `Bearer ${userInfo.token}` },
    //   }
    // );
    // console.log(data.product);
    // dispatch({
    //   type: PRODUCT_CREATE_SUCCESS,
    //   payload: data,
    // });
    Axios.post(
      'http://localhost:8080/products',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    ).then(res=>{
      console.log(res.data);
      dispatch({
        type: PRODUCT_CREATE_SUCCESS,
        payload: res.data,
      });
    })
    
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCT_CREATE_FAIL, payload: message });
  }
};
export const updateProduct = (product) => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_UPDATE_REQUEST, payload: product });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`http://localhost:8080/products/${product._id}`, product, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCT_UPDATE_FAIL, error: message });
  }
};

export const deleteProduct = (productId) => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    // const { data } = Axios.delete(`http://localhost:8080/products/${productId}`, {
    //   headers: { Authorization: `Bearer ${userInfo.token}` },
    // });
    // dispatch({ type: PRODUCT_DELETE_SUCCESS });
    Axios.delete(`http://localhost:8080/products/${productId}`, {
       headers: { Authorization: `Bearer ${userInfo.token}` },
    }).then(res=>{
      dispatch({ type: PRODUCT_DELETE_SUCCESS });
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCT_DELETE_FAIL, payload: message });
  }
};
