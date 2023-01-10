import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import Typography from '../../atoms/Typography/Typography';
import { useNavigate } from "react-router-dom";
import Card from '../../atoms/Card/Card';
import { useDispatch, useSelector } from "react-redux";
import { getCarouselItems } from "../../../redux/actions";

export default function CustomizedCarousel(props){
    const dispatch = useDispatch();

    const carouselProducts = useSelector((state) => state.products.carouselProducts);

    React.useEffect(() => {
        dispatch(getCarouselItems());
    }, [dispatch])


    // var items = [
    //     {
    //         name: "Random Name #1",
    //         description: "Probably the most random thing you have ever seen!",
    //         image: "https://media.istockphoto.com/id/154960096/photo/six-diamond-rings-isolated-on-white.jpg?b=1&s=170667a&w=0&k=20&c=fqH06eh3KiKDPCmrxwiEqUaoCFdjTq1WOptuQkZPYOA=",
    //         rate: 10000
    //     },
    //     {
    //         name: "Random Name #2",
    //         description: "Hello World!",
    //         image: "https://media.istockphoto.com/id/471712723/photo/watch.jpg?b=1&s=170667a&w=0&k=20&c=UjZBYrQTAZIjCm819LAJ1N6Oe9hnTCfe60swtfD9A_E=",
    //         rate: 100000
    //     }
    // ]

    return (
        <>
        {props.mobile ? 
        <Carousel >
            {
                carouselProducts.map( (item, i) => <Item key={i} item={item} mobile={props.mobile} /> )
            }
        </Carousel> 
        :
        <Carousel >
            {
                carouselProducts.map( (item, i) => <Item key={i} item={item} mobile={props.mobile} /> )
            }
        </Carousel> 
        }
        </>
    )
}

function Item(props)
{
    const navigate = useNavigate();
    return (
        <Paper>
            {props.mobile ?
            <img width="100%" height="300px" alt="aLt" src={props.item.image} />
                :
            <img width="80%" height="500vh" alt="aLt" src={props.item.image} style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
            }    
            <Card onClick={() => navigate("", { replace: true })}>    
                <Typography style={{ color: "#d5bf6e" }}>{props.item.name}</Typography>
                <Typography style={{ color: "#d5bf6e" }}>{props.item.description}</Typography>
                <Typography style={{ color: "#1A5D2F" }}>₹{props.item.rate}</Typography>
            </Card>
        </Paper>
    )
}