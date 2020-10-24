import React, { Component, useRef } from "react";
// import TextInput from "../../components/searchInput/searchInput"
// import SearchButton from "../../components/button/button"

import { Row, Col, Container, Card, Button } from "react-bootstrap";
import API from "../../utils/API"
import TextInput from "../../components/searchInput/searchInput"

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      bookRes: []
    };
    var bookFavs = []
  }
    searchForBook = (book) => {
      API.getBook(book).then((res) => {     
        var bookres=[];
        for (var i = 0; i < res.data.items.length; i++) {
          bookres.push({id: [i], name: res.data.items[i].volumeInfo.title, pic: res.data.items[i].volumeInfo.imageLinks.smallThumbnail, descript: res.data.items[i].volumeInfo.description, id: res.data.items[i].id})         
        }               
        this.setState({...this.state, bookRes: bookres})
        // console.log(this.state.bookRes)        
      })
      .catch((err) => console.log(err)) 
    }
      //=========================================================================
    //TODO
    favBook = (book) => {
      API.saveBook(book).then((res) => {
        var bookFav = {
          id: res.data.items[0].id,
          descript: res.data.items[0].volumeInfo.description,
          pic: res.data.items[0].volumeInfo.imageLinks.smallThumbnail,
          name: res.data.items[0].volumeInfo.title
        }
        console.log(bookFav)        
      })
      .catch((err) => console.log(err))     
    }
    postFav = (event) => {      
      console.log(event.target.id)
      API.getBook(event.target.id).then((res) => {
console.log(res)
API.saveBook({
  title: res.data.items[0].volumeInfo.title,
  descript: res.data.items[0].volumeInfo.description,
  pic: res.data.items[0].volumeInfo.imageLinks.smallThumbnail,
  id: res.data.items[0].id
}).then((res) => {
})
.catch((err) => console.log(err))
      })
      .catch((err) => console.log(err))     
    }
    //==================================================================================
    handleInputChange = (event) => {
      
      const value = event.target.value;     
      this.setState({
        ...this.state,
        search: value
      });      
    };
    handleButtonClick = (event) => {
      event.preventDefault();
      this.searchForBook();
    };
    handleFormSubmit = (event) => {
      // console.log("poop")
      this.searchForBook(this.state.search)
    }
render () {
    return (
      <div>
        <h1>Search books</h1>
      <Container>
<Row>
<Col>
<TextInput
    value={this.state.search}
    handleInputChange={this.handleInputChange}
    handleFormSubmit={(event) => this.handleFormSubmit(event)} 
    />    
</Col>
</Row>
</Container>  
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
   <Button 
   id={book.id}
   onClick={(event) => this.postFav(event)}
   variant="primary">Fav</Button>
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

