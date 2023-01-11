import { useState } from "react";
import { get as getUnsplashImages } from "./clients/unsplashClient";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const results = await getUnsplashImages(term);
    setImages(results);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
