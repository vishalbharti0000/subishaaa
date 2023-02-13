import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../../redux/actions";
import { OrderCardAdmin } from "../../molecules/OrderCardAdmin/OrderCardAdmin";
import LoaderDialog from "../LoaderDialog/LoaderDialog";
import { LabelStyle, MyOrdersContainer } from "./OrdersAdmin.styles";
import { useParams } from 'react-router-dom';

const OrderContainer = () => {
    const orders = useSelector((state) => state.users.orders);
    return (
        <MyOrdersContainer>
            {orders.orders.length > 0 ? (
                orders.orders.map((order, idx) => (
                    <div key={idx}>
                        <OrderCardAdmin order={order} />
                        <br />
                    </div>
                ))
            ) : (
                <LabelStyle>No Orders Found</LabelStyle>
            )}
        </MyOrdersContainer>
    );
};

export const OrdersAdmin = () => {
    const { sts } = useParams();
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.users.orders)

    useEffect(() => {
        let json = JSON.parse(sessionStorage.getItem("json"));
        if (json.id) {
            if(sts === "ALL")
                dispatch(getAllOrders("", json.token));
            else
                dispatch(getAllOrders(sts, json.token));

        }
    }, [dispatch, sts]);
    return orders.loading ? <LoaderDialog /> : <OrderContainer />;
};