import React from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

function Products({ productName, price, productImage }) {
  return (
    <>
      <Card style={{ width: "20rem" }}>
        <Card.Img
          id="product-img"
          variant="top"
          // style={{ height: "200px" }}
          src={`http://localhost:8000/api/image/${productImage}`}
        />
        <Card.Body>
          <Card.Title>{productName}</Card.Title>
          <Card.Text>
            Price: Php <span>{price}</span>.00
          </Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Products;
