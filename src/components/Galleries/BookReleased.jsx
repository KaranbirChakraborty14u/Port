import React from 'react';
import img1 from "../Photos/Book released/book.jpeg";

const BookReleased = () => {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Book Released</h1>
      <div className="w-full aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden shadow-md flex items-center justify-center">
        <img
          src={img1}
          alt="Book Released"
          className="max-h-full max-w-full object-contain"
        />
      </div>
    </div>
  );
};

export default BookReleased;
