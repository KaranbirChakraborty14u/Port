import React from "react";

const FlagWave = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <svg
        viewBox="0 0 1440 150"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-[120px] animate-flagWave"
        preserveAspectRatio="none"
      >
        {/* Saffron */}
        <path
          d="M0,60 C360,0 1080,120 1440,60 L1440,150 L0,150 Z"
          fill="#FF9933"
        />
        {/* White */}
        <path
          d="M0,90 C360,30 1080,150 1440,90 L1440,150 L0,150 Z"
          fill="white"
        />
        {/* Green */}
        <path
          d="M0,120 C360,60 1080,180 1440,120 L1440,150 L0,150 Z"
          fill="#138808"
        />
      </svg>

      {/* Optional Ashoka Chakra center (subtle) */}
      {/* <div className="absolute top-[48%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-6 h-6 rounded-full border-2 border-blue-600"></div>
      </div> */}
    </div>
  );
};

export default FlagWave;
