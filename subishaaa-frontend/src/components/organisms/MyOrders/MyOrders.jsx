import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrders } from "../../../redux/actions";
import { OrderCard } from "../../molecules/OrderCard/OrderCard";
import LoaderDialog from "../LoaderDialog/LoaderDialog";
import { LabelStyle, MyOrdersContainer } from "./MyOrders.styles";

const OrderContainer = () => {
    const myOrders = useSelector((state) => state.users.myOrders);
    return (
        <MyOrdersContainer>
            {myOrders.orders.length > 0 ? (
                myOrders.orders.map((order, idx) => (
                    <div key={idx}>
                        <OrderCard order={order} />
                        <br />
                    </div>
                ))
            ) : (
                <LabelStyle>No Orders Found</LabelStyle>
            )}
        </MyOrdersContainer>
    );
};

export const MyOrders = () => {
    const dispatch = useDispatch();
    const myOrders = useSelector((state) => state.users.myOrders)

    useEffect(() => {
        let json = JSON.parse(localStorage.getItem("json"));
        if (json.id) {
            dispatch(getMyOrders(json.id, json.token));
        }
    }, [dispatch]);
    return myOrders.loading ? <LoaderDialog /> : <OrderContainer />;
};
