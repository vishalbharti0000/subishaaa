import styled from "@emotion/styled";
import Card from "../../atoms/Card/Card";

export const ImageCard = styled(Card)`
    position: inherit;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: white;
`;

export const OrderCardContainer = styled(Card)`
`;

export const VariantImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
    border-radius: 1px;
`;