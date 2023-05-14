import React from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

function Products({ productName, price, productImage }) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={productImage} />
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
