import React, { Component } from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import API from "../../utils/API"


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      bookRes: []
    };
  }
 

  getFav = () => {
    API. getFavBooks().then((res) => {
      console.log(res.data);
      this.setState({...this.state, bookRes: res.data})
    })
    .catch((err) => console.log(err))
  }
  handleButtonClick = (event) => {
    event.preventDefault();
    this.getFav()

  }
  render () {

    return(
      <div>
        <Button
        onClick = {this.handleButtonClick}
        >find favs</Button>
      <Container>
        <Row>
          <Col>
            <Card>
              {this.state.bookRes.map((book) => {
                return (
                  <div>
                    <ul>
                      <li>
                        <Card>
                          <Card.Img style={{ width: '8rem', height: '8rem' }}     
                            src={book.pic} /> 
                              <Card.Title>{book.name}</Card.Title>      
                                <Card.Body>{book.descript}</Card.Body>
                                  
                          </Card>        
                       </li>      
                    </ul>
                    <br />
                  </div>    
                        )
                    })}
                </Card>
              </Col>
            </Row>
        </Container> 

  </div>
    )
   



  }
    
    
}   

    

export default Search;

