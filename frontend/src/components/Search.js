import React from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";

const Search = ({ handleSubmit, word, setWord }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Col xs={9}>
                <Form.Control
                  placeholder="Search for Image..."
                  type="text"
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                />
              </Col>
              <Col>
                <Button varient="primary" type="submit">
                  Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
