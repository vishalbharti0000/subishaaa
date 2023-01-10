import { ActionTypes } from "../constants/action-types";
import axios from "axios";

const REACT_APP_BASEURL = process.env.REACT_APP_BASEURL;

export const getPersons = () =>
    async function (dispatch) {
        const response = await axios
            .get(`${REACT_APP_BASEURL}/admin/customers`)
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

export const sendProductForm = (testDriveData) =>
    async function (dispatch) {
        const response = await axios
            .post(`${REACT_APP_BASEURL}/admin/add/product/yash/yash`, testDriveData)
            .catch((err) => console.error(err));
        dispatch({
            type: ActionTypes.SEND_PRODUCT_FORM,
            payload: response,
        });
    };