import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import ImageCard from "./components/ImageCard";
import { Container, Row, Col } from "react-bootstrap";
import Welcome from "./components/Welcome";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5050";

const App = () => {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${API_URL}/new-image?query=${word}`);
    const data = await response.json();
    if (data.errors) {
      alert(data.errors[0]);
      return;
    }
    setImages([{ ...data, title: word }, ...images]);
    setWord("");
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className="mt-4">
        {images.length ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((image, i) => (
              <Col key={i} className="pb-3">
                <ImageCard image={image} deleteImage={handleDeleteImage} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
};

export default App;
