// GalleryModal.js
import React from "react";

const GalleryModal = ({ images, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-4 shadow-lg w-full max-w-lg">
        <button onClick={onClose} className="text-right text-black mb-3">X</button>
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Gallery item ${index + 1}`} className="w-full h-auto rounded" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
