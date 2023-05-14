import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../lib/http";

function item() {
  const { id } = useParams();
  const [items, setItems] = useState({});

  async function getItems() {
    const res = await http.get(`/items/${id}`);
    getItems(res.data);
    console.log(getItems);
  }
  useEffect(() => {
    getItems();
    return;
  }, []);
  return (
    <div>
      {item && (
        <>
          <h1>{items.name}</h1>
        </>
      )}
    </div>
  );
}

export default item;
