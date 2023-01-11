import ImageShow from "./ImageShow";

import "../styles/ImageList.css";

function ImageList({ images }) {
  const renderImages = images.map((image, i) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return <div className="image-list">{renderImages}</div>;
}

export default ImageList;
