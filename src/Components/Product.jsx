import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Review from "./Review";

const Product = () => {
  const [products, setProducts] = useState([]);
  const getUrl = "https://fakestoreapi.com/products";

  useEffect(() => {
    //api
    const fetchProducts = async () => {
      try {
        const response = await axios.get(getUrl);
        setProducts(response.data);
      } catch (error) {
        console.log("Something error : ", error);
      }
    };
    fetchProducts();
  }, []);

  const cards = products.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card key={product.id} className="h-100">
        <div className="text-center mt-5 mb-3 ">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "190px", height: "150px" }}
          />
        </div>

        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <p>
            <Review value={product.rating.rate} />
          </p>
          <p>RatingCount:{product.rating.count}</p>

          <Card.Text>INR : {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button variant="success">Add to Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1 className="text-center mt-5">Product Dashboard</h1>
      <div className="container-fluid">
        <div className="row">
          {cards}
        </div>
      </div>
    </>
  );
};

export default Product;
