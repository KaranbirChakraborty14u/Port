import React from 'react';
import img1 from "../Photos/Awareness Meeting with the Mayor, Deputy Mayor and Councilors/Awareness.jpeg";

const AwarenessMeetingMayor = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Awareness Meeting with the Mayor</h1>

      <div className="rounded-xl overflow-hidden shadow-xl aspect-[16/9]">
        <img
          src={img1}
          alt="Awareness Meeting"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default AwarenessMeetingMayor;
