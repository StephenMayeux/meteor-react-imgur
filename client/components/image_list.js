// Steps for making a React Component
// 1 - import React
import React from 'react';
import ImageDetail from './image_detail';

// 2 - create Component
const ImageList = (props) => {
  const ValidImages = props.images.filter(image => {
    return !image.is_album;
  });

  const RenderedImages = ValidImages.map((image) => {
    return <ImageDetail key={image.title} image={image}/>
  });

  return (
    <ul className="media-list media-group">
      {RenderedImages}
    </ul>
  );
};

// 3 - export component
export default ImageList;
