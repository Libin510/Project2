import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link, json, useNavigate } from "react-router-dom";
import { newcontext } from "../App";
import { TbStarHalfFilled } from "react-icons/tb";
import "./produt.css";

import Cartpage from "./Cartpage";

function Prodctpage() {
  const [product, setProduct, cart, setCart, addtocart] =
    useContext(newcontext);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data.products);
      });
  }, []);

  return (
    <div>
      <div>
        {product ? (
          product.map((item) => {
            return (
              <Card style={{ width: "18rem" }} className="cartcard">
                <Card.Img variant="top" src={item.thumbnail} className="img" />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    $ {item.price}({item.discountPercentage}%off)
                  </Card.Text>
                  <Card.Text className="cardtextbg">
                    {" "}
                    <TbStarHalfFilled></TbStarHalfFilled>Rating: {item.rating}
                  </Card.Text>
                  <br />
                  <br />
                  <Button
                    variant="primary"
                    className="btnproduct"
                    onClick={() => addtocart(item)}
                  >
                    Add To Cart
                  </Button>
                </Card.Body>
              </Card>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Prodctpage;
