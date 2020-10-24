import React from "react";
import { Button } from "react-bootstrap";

function SearchButton ({children, OnClick, type = "default", className}) {
    return (
        <div>
            <Button variant="light"
            id={children}
            onClick={OnClick}
            className={[
                `btn-${type}`,
                className
              ].join(" ")}
            >
                Fav
                </Button> 
        </div>
    )
}
export default SearchButton;