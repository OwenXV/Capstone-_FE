import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function item() {
  const { id } = useParams();
  const [item, setItem] = useState({});

  async function getItem() {
    const res = await http.get(`/item/${id}`);
    console.log(res.data);
  }
  useEffect(() => {
    getItem();
    return;
  }, []);
  return <div>Items</div>;
}

export default item;
