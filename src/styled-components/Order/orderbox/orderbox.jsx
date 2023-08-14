import styled from "styled-components";
import pb_1 from "./pb-1.jpg"

const OrderBox = styled.div `
    background-image: url(${pb_1});
    background-size: cover;
    background-position: center;
    height: 360px;
    width: 464px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 5px;
    border-radius: 8px;
`

export default OrderBox