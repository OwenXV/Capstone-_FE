import React, { useState, useEffect } from "react";
import http from "../lib/http";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import Products from "../components/Products";

const Shop = () => {
  const [items, setItems] = useState([]);

  async function getItems() {
    const res = await http.get("/items");
    setItems(res.data.data);
    console.log(res.data);
  }
  useEffect(() => {
    getItems();
    return;
  }, []);
  return (
    <div>
      <Container className="pt-4 mb-5">
        <Row
          className="gap-4 d-flex justify-content-center"
          xs={1}
          md={2}
          lg={3}
        >
          {items.map((item, index) => {
            return (
              <Products
                key={index}
                id={item.id}
                productImage={item.image}
                productName={item.name}
                price={item.price}
              />
            );
          })}
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
