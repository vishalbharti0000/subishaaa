import { ActionTypes } from "../constants/action-types";
import axios from "axios";

const REACT_APP_BASEURL = process.env.REACT_APP_BASEURL;

export const getPersons = (token) =>
    async function (dispatch) {
        const response = await axios
            .get(`${REACT_APP_BASEURL}/admin/customers`, { headers: { Authorization: "Bearer " + token } })
            .catch((err) => console.error(err));
        dispatch({
            type: ActionTypes.GET_PERSONS,
            payload: response,
        });
    };

export const getCarouselItems = () =>
    async function (dispatch) {
        const response = await axios
            .get(`${REACT_APP_BASEURL}/products/carousel`)
            .catch((err) => console.error(err));
        dispatch({
            type: ActionTypes.GET_CAROUSEL_ITEMS,
            payload: response,
        });
    };

export const getProducts = (product) =>
    async function (dispatch) {
        const response = await axios
            .get(`${REACT_APP_BASEURL}/products/${product}`)
            .catch((err) => console.error(err));
        dispatch({
            type: ActionTypes.GET_PRODUCTS,
            payload: response,
        });
    };

export const sendContactForm = (testDriveData) =>
    async function (dispatch) {
        const response = await axios
            .post(`${REACT_APP_BASEURL}/add/customer`, testDriveData)
            .catch((err) => console.error(err));
        dispatch({
            type: ActionTypes.SEND_CONTACT_FORM,
            payload: response,
        });
    };

export const sendProductForm = (testDriveData, token) =>
    async function (dispatch) {
        const response = await axios
            .post(`${REACT_APP_BASEURL}/admin/add/product/yash/yash`, testDriveData, { headers: { Authorization: "Bearer " + token } })
            .catch((err) => console.error(err));
        dispatch({
            type: ActionTypes.SEND_PRODUCT_FORM,
            payload: response,
        });
    };

export const sendRegistrationForm = (data) =>
    async function (dispatch) {
        const response = await axios
            .post(`${REACT_APP_BASEURL}/free/registration`, data)
            .catch((err) => {   dispatch({
                                    type: ActionTypes.SEND_REGISTRATION_FORM,
                                    payload: err.response,
                                });
                                console.error(err);
                            });
        if(response?.status === 200){
            dispatch({
                type: ActionTypes.SEND_REGISTRATION_FORM,
                payload: response,
            });
        }
    };

export const sendLoginForm = (data) =>
    async function (dispatch) {
        const response = await axios
            .post(`${REACT_APP_BASEURL}/free/login`, data)
            .catch((err) => { 
                dispatch({
                    type: ActionTypes.SEND_LOGIN_FORM,
                    payload: err.response,
                });
                console.error(err) });
            if(response?.status === 200){
                dispatch({
                    type: ActionTypes.SEND_LOGIN_FORM,
                    payload: response,
                });
            }
    };

export const sendOrderDetails = (customerId, productId, amount, paymentMode, data, token) =>
    async function (dispatch) {
        const response = await axios
            .post(`${REACT_APP_BASEURL}/order/${customerId}/${productId}/${amount}/${paymentMode}`, data, { headers: { Authorization: "Bearer " + token } })
            .catch((err) => { console.error(err) });
            dispatch({
                type: ActionTypes.SEND_ORDER_FORM,
                payload: response,
            });
    };

export const getMyOrders = (customerId, token) =>
    async function (dispatch) {
        const response = await axios
            .get(`${REACT_APP_BASEURL}/getOrder/${customerId}`, { headers: { Authorization: "Bearer " + token } })
            .catch((err) => { console.error(err) });
            dispatch({
                type: ActionTypes.GET_MY_ORDERS,
                payload: response,
            });
    };

export const getProduct = (productId) =>
    async function (dispatch) {
        const response = await axios
            .get(`${REACT_APP_BASEURL}/product/${productId}`)
            .catch((err) => { console.error(err) });
            dispatch({
                type: ActionTypes.GET_PRODUCT,
                payload: response,
            });
    };

export const getAllOrders = (status, token) =>
    async function (dispatch) {
        const response = await axios
            .get(`${REACT_APP_BASEURL}/admin/getAllOrders/${status}`, { headers: { Authorization: "Bearer " + token } })
            .catch((err) => { console.error(err) });
            dispatch({
                type: ActionTypes.GET_ALL_ORDERS,
                payload: response,
            });
    };

export const sendPaymentDone = (orderId, token) =>
    async function (dispatch) {
        const response = await axios
            .post(`${REACT_APP_BASEURL}/admin/paymentDone/${orderId}`, {}, { headers: { Authorization: "Bearer " + token } })
            .catch((err) => { console.error(err) });
            dispatch({
                type: ActionTypes.SEND_PAYMENT_DONE,
                payload: response.status,
            });
    };

export const sendStatusChange = (orderId, sts, token) =>
    async function (dispatch) {
        let xsrf = sessionStorage.getItem('XSRF-TOKEN');
        const headers = {
            'Authorization': "Bearer " + token,
            'X-XSRF-TOKEN': xsrf
        }
        const response = await axios
            .post(`${REACT_APP_BASEURL}/admin/updateOrderStatus/${orderId}/${sts}`, {}, { headers: headers })
            .catch((err) => { console.error(err) });
            dispatch({
                type: ActionTypes.SEND_STATUS_CHANGE,
                payload: response.status,
            });
    };