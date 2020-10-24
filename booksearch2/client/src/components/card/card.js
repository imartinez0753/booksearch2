import React from "react";
import { Card } from "react-bootstrap";
import TextInput from "../searchInput/searchInput"
import SearchButton from "../button/button"

function DisplayCard (props, onClick) {
    return (
        <div>
            <Card style={{ width: '36rem', height: '8rem' }}
            image={props.image}>
            {props.text}
           
            </Card>
            <button
            onClick={onClick}
            >fav</button>
        </div>
    )
}
export default DisplayCard;