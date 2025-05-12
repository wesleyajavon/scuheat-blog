import React from 'react';

const Gallery = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((img, idx) => (
        <div key={idx} className="border rounded overflow-hidden">
          <img src={img.url} alt={`upload-${idx}`} className="portrait" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
