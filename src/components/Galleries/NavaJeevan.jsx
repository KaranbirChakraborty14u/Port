import React from 'react';
import img1 from "../Photos/Naba Jeevan/Naba_Jeevan_Children.jpeg";

const NavaJeevan = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Nava Jeevan</h1>
      <div className="rounded-xl overflow-hidden shadow-xl bg-black">
        <img
          src={img1}
          alt="Naba Jeevan Children"
          className="w-full h-[500px] object-contain"
        />
      </div>
    </div>
  );
};

export default NavaJeevan;
