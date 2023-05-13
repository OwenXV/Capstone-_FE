import { Button, Container, Card, Col, Row, Form } from "react-bootstrap";

const Sell = () => {
  return (
    <div className="sellPage">
      <Container className="justify-content-center">
        <h3 className="text-center pt-5 mb-4">
          What do you want to sell today?
        </h3>
        <div className="d-flex justify-content-center pb-5">
          <Card style={{ width: "50rem" }}>
            <Card.Body>
              <Form>
                <Row>
                  <Col lg={12}>
                    <Form.Group className="mb-3" controlId="formProductName">
                      <Form.Label>Product Name:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter a Product name."
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group className="mb-3" controlId="formPrice">
                      <Form.Label>Price:</Form.Label>
                      <Form.Control
                        type="number"
                        min="0"
                        max="999999"
                        placeholder="PHP 0.00"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group className="mb-3" controlId="formProductName">
                      <Form.Label>Product Name:</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Describe your product."
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Button type="submit" className="btn-sell">
                      {" "}
                      Post
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Sell;
