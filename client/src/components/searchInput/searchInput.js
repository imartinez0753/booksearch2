import React from "react"
import { Form } from 'react-bootstrap';

function SearchInput (props) {
    return (
        <div>
            
            <Form.Control size="sm" type="text" 
            placeholder="Search for a book"
            onChange={props.handleInputChange}
          value={props.value}
          name="search"
          className="form-control"
          id="search" />
          <br />
           <button onClick={props.handleFormSubmit} >
           Search
         </button>

        </div>
    )
}
export default SearchInput;

// 