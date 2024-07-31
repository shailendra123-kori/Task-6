// src/components/Image.js
import React from 'react';
import './Image.css';

const Image = ({ image, openModal }) => {
  return (
    <div className="image-container" onClick={() => openModal(image)}>
      <img src={image.src} alt={image.alt} className="image" />
    </div>
  );
};

export default Image;
