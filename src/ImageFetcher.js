// src/ImageFetcher.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ImageFetcher = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=10'); // Use a public API
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) return <p>Loading images...</p>;

  return (
    <div>
      {images.map((image) => (
        <img key={image.id} src={image.download_url} alt={image.author} style={{ width: '200px', margin: '10px' }} />
      ))}
    </div>
  );
};

export default ImageFetcher;
