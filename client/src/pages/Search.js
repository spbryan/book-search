import React, { Component } from "react";
import API from "../utils/API";
// import Hero from "../components/Hero";
import { Input, FormBtn } from "../components/Form";
import SearchResults from "../components/SearchResults";
import { List, ListItem } from "../components/List";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";

class Search extends Component {
  state = {
    search: "",
    book: "",
    results: []
  }

  handleInputChange = event => {
    this.setState({ book: event.target.value });
    console.log("<debug>" + this.state.book);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("<debug 2>" + this.state.book);
    API.getBooks(this.state.book)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.items, error: "" });
        console.log("<debug>" + JSON.stringify(this.state.results));
      })
      .catch(err => this.setState({ error: err.message }));
  };

  render() {
    return (
      <Container style={{ marginTop: 10 }}>
        <Row>
          <Col size="md-12">
            <h1>Google Books Search</h1>
            <h2>Search For and Save Books of Interest</h2>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <form>
              <Input
                value={this.state.book}
                onChange={this.handleInputChange}
                name="book"
                placeholder="Book (required)"
              />
              <FormBtn
                disabled={!(this.state.book)}
                onClick={this.handleFormSubmit}
              >Submit</FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h1>Books on the list</h1>
            {this.state.results.length ? (
              <List>
                {this.state.results.map(book => (
                  <ListItem key={book.id}>
                    <Card
                      id={book.volumeInfo.id}
                      title={book.volumeInfo.title}
                      authors={book.volumeInfo.authors}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      link={book.volumeInfo.canonicalVolumeLink}
                    />
                    {/* <Link to={"/books/" + book._id}> */}
                      {/* <strong>
                        {book.volumeInfo.title} by {book.volumeInfo.authors}
                      </strong> */}
                    {/* </Link> */}
                    {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

// function Search() {
//   return (
//     <div>
//       <Container style={{ marginTop: 10 }}>
//         <Row>
//           <Col size="md-12">
//             <h1>Google Books Search</h1>
//             <h2>Search For and Save Books of Interest</h2>
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-12">
//             <SearchForm />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

export default Search;