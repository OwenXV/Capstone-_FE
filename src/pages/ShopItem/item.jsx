import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../lib/http";

function item() {
  const { id } = useParams();
  const [items, setItems] = useState({});

  async function getItem() {
    const res = await http.get(`/items/${id}`);
    getItem(res.data);
    console.log(res.data);
  }

  useEffect(() => {
    getItem();
    return;
  }, []);
  return (
    <div>
      single product page
      {items.name}
    </div>
  );
}

export default item;
