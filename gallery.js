// src/components/Gallery.js
import React, { useState } from 'react';
import Image from './Image';
import Modal from './Modal';
import './Gallery.css';

const images = [
  { src: 'path/to/image1.jpg', alt: 'Image 1' },
  { src: 'path/to/image2.jpg', alt: 'Image 2' },
  // Add more images here
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <Image key={index} image={image} openModal={openModal} />
      ))}
      {selectedImage && (
        <Modal image={selectedImage} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Gallery;
