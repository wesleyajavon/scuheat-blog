import React, { useRef } from 'react';

const ImageUploader = ({ onUpload }) => {
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const imagePreviews = files.map(file => ({
      file,
      url: URL.createObjectURL(file)
    }));
    onUpload(imagePreviews);
  };

  return (
    <div className="mb-4">
      <input
        type="file"
        accept="image/*"
        multiple
        ref={fileInputRef}
        onChange={handleFileChange}
        className="block w-full"
      />
    </div>
  );
};

export default ImageUploader;
