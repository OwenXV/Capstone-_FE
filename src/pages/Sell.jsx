import { Button, Container, Card, Col, Row, Form } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import http from "../lib/http";

const Sell = () => {
  const [validated, setValidated] = useState(false);
  const [productPhoto, setProductPhoto] = useState();
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");

  async function postItem(e) {
    e.preventDefault();
    e.stopPropagation();

    setValidated(true);

    if (
      !productPhoto ||
      !productName ||
      !productCategory ||
      !productDescription ||
      !productPrice ||
      !productPhoto
    ) {
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", productPhoto);

      const imageRes = await http.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (imageRes.status == 201) {
        const postBody = {
          name: productName,
          category: productCategory,
          image: imageRes.data.image_name,
          description: productDescription,
          price: productPrice,
        };

        const res = await http.post("/items", postBody, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
      }

      navigate(`/${res.data.id}`);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="sellPage">
      <Container className="justify-content-center">
        <h3 className="text-center pt-5 mb-4">
          What do you want to sell today?
        </h3>
        <div className="d-flex justify-content-center pb-5">
          <Card style={{ width: "50rem" }}>
            <Card.Body>
              <Form onSubmit={postItem}>
                <Row>
                  <Col lg={12} className="d-flex justify-content-center">
                    <Form.Group className="mb-3" controlId="ProductPicture">
                      <Form.Control
                        required
                        type="file"
                        placeholder="Product Picture"
                        onChange={(e) => setProductPhoto(e.target.files[0])}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group className="mb-3" controlId="formProductName">
                      <Form.Label>Product Name:</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter a Product name."
                        onChange={(e) => setProductName(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="formProductCategory"
                    >
                      <Form.Label>Category:</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter a Product Category."
                        onChange={(e) => setProductCategory(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group className="mb-3" controlId="formPrice">
                      <Form.Label>Price:</Form.Label>
                      <Form.Control
                        required
                        type="number"
                        min="0"
                        max="999999"
                        placeholder="PHP 0.00"
                        onChange={(e) => setProductPrice(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group className="mb-3" controlId="formProductName">
                      <Form.Label>Product Description:</Form.Label>
                      <Form.Control
                        required
                        as="textarea"
                        rows={4}
                        placeholder="Describe your product."
                        onChange={(e) => setProductDescription(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={12} className="d-flex justify-content-end">
                    <Button type="submit" className="btn-sell">
                      {" "}
                      Post Item
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
