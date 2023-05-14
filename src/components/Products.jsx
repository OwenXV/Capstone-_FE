import React from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Products({ productName, price, productImage, id }) {
  return (
    <>
      <Card style={{ width: "21rem" }} className="text-center px-0">
        <Card.Img
          className="d-flex justify-content-center"
          id="product-img"
          variant="top"
          src={`http://localhost:8000/api/image/${productImage}`}
        />
        <Card.Body>
          <Card.Title>
            <p className="fw-bold">
              <Link to={`/${id}`}></Link>
              {productName}
            </p>
          </Card.Title>
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
