import React from "react";
// import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Search() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Search</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Search;