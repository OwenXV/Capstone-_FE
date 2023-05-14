import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import http from "../../lib/http";

function Search() {
  const [meta, setMeta] = useState({});
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <Container>
        <Row></Row>
      </Container>
    </div>
  );
}

export default Search;
