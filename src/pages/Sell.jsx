import { Button, Container, Card, Col, Row, Form } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import http from "../lib/http";

const Sell = () => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [image, setImage] = useState();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  async function postItem(e) {
    e.preventDefault();
    e.stopPropagation();

    setValidated(true);

    if (!image || !name || !category || !description || !price) {
      return;
    }

    try {
      let imageRes;
      if (image) {
        const formData = new FormData();
        formData.append("image", image);

        const res = await http.post("/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        imageRes = res.data.image_name;
        console.log(res);
      }
      if (imageRes.status === 200) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token);
        const postData = {
          name: name,
          category: category,
          image: imageRes,
          description: description,
          price: price,
        };
        console.log(name, category, image, description, price);
        const res = await http.post("/items", postData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        
      }
      console.log(name, category, image, description, price);
      navigate("/");
          navigate(0);
      
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
                        type="file"
                        placeholder="Product Picture"
                        onChange={(e) => setImage(e.target.files[0])}
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
                        onChange={(e) => setName(e.target.value)}
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
                        onChange={(e) => setCategory(e.target.value)}
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
                        onChange={(e) => setPrice(e.target.value)}
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
                        onChange={(e) => setDescription(e.target.value)}
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
