import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import { useDispatch, useSelector } from "react-redux";
import { getCarouselItems } from "../../../redux/actions";

export default function CustomizedCarousel(props) {
    const dispatch = useDispatch();

    const carouselProducts = useSelector((state) => state.products.carouselProducts);

    React.useEffect(() => {
        dispatch(getCarouselItems());
    }, [dispatch])

    return (
        <>
            {props.mobile ?
                <Carousel >
                    {
                        carouselProducts.map((item, i) => <Item key={i} item={item} mobile={props.mobile} />)
                    }
                </Carousel>
                :
                <Carousel >
                    {
                        carouselProducts.map((item, i) => <Item key={i} item={item} mobile={props.mobile} />)
                    }
                </Carousel>
            }
        </>
    )
}

function Item(props) {
    return (
        <>

            {props.mobile ?
                <Paper style={{
                    marginTop: 2,
                    padding: 0
                }}>
                    <img width="100%" height="230px" alt="aLt" src={props.item.image} />
                </Paper>
                :
                <Paper>
                    <img width="100%" height="650vh" alt="aLt" src={props.item.image} style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
                </Paper>
            }

        </>
    )
}