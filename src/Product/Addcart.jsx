import React, { useContext, useState } from "react";
import { newcontext } from "../App";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function Addcart() {
  const [product, setProduct] = useContext(newcontext);

  const { id } = useParams();

  const found = product ? product.filter((found) => found.id == id) : [];

  return (
    <div>
      {found.map((item) => (
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.thumbnail} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>$ {item.price}</Card.Text>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text>{item.discountPercentage}</Card.Text>
              <Card.Text>{item.rating}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Addcart;
