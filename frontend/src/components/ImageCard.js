import React from "react";
import { Card, Button } from "react-bootstrap";

const ImageCard = ({ image, deleteImage }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image.urls.small} />
      <Card.Body>
        <Card.Title style={{ textTransform: "capitalize" }}>
          {image.title}
        </Card.Title>
        <Card.Text>{image.description || image.alt_description}</Card.Text>
        <Button onClick={() => deleteImage(image.id)} variant="primary">
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
