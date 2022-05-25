import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CountrieCard = ({countrie}) => {
  const navigate=useNavigate();
  return (
    <div>
      <Card style={{ width: "18rem", borderRadius:"30px solid grey"}}>
        <Card.Img variant="top" src={countrie.image_url} />
        <Card.Body>
          <Card.Title>{countrie.name}</Card.Title>
          <Card.Text>
          {countrie.desc}
          </Card.Text>
          <Button variant="primary" onClick={()=>navigate(`/details/${countrie.id}`)}>Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CountrieCard;
