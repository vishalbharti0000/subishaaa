import React from "react";
import Grid from "../../components/atoms/Grid/Grid";
import PersonCard from "../../components/organisms/PersonCard/PersonCard";
import { BoxStyle } from "./PersonTemplate.styles";
import { useDispatch, useSelector } from "react-redux";
import { getPersons } from "../../redux/actions";

const PersonTemplate = () => {
    const dispatch = useDispatch();

    const persons = useSelector((state) => state.persons.persons);
    console.log(persons);

    React.useEffect(() => {
        dispatch(getPersons());
    }, [dispatch])

    return (
        <BoxStyle >
            <Grid container spacing={2}>
                {persons.map((item) => (
                    <Grid key={item.id} item xs={12} md={4}>
                        <PersonCard item={item} />
                    </Grid>
                ))}
            </Grid>
        </BoxStyle>
    );
};

export default PersonTemplate;