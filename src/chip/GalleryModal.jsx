import React, { useState } from "react";

const GalleryModal = ({ images, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  // Functions to navigate images
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className="bg-white rounded-lg p-4 shadow-lg relative"
        style={{
          width: "80%", // Width of the gallery modal
          maxWidth: "600px", // Max width for large screens
          textAlign: "center",
          overflowY:"scroll"
        }}
      >

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 hover:text-black"
        >
          X
        </button>


        {/* Display current image */}
        <div className="flex items-center justify-center mt-6">
          <img
            src={images[currentIndex]}
            alt={`Gallery item ${currentIndex + 1}`}
            className="w-full h-auto rounded"
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-4">
          <button
            onClick={goToPrevious}
            className="bg-gray-300 rounded-full p-2 px-4 text-black hover:bg-gray-400"
          >
            Previous
          </button>
          <button
            onClick={goToNext}
            className="bg-gray-300 rounded-full p-2 px-4 text-black hover:bg-gray-400"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
