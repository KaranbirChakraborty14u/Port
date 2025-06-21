const FlagWave = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <svg
        viewBox="0 0 1440 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-[100px] animate-wave"
        preserveAspectRatio="none"
      >
        <path
          d="M0 60 C 180 120, 360 0, 540 60 C 720 120, 900 0, 1080 60 C 1260 120, 1440 0, 1440 0 L 1440 150 L 0 150 Z"
          fill="#FF9933" // Saffron
        />
        <path
          d="M0 90 C 180 150, 360 30, 540 90 C 720 150, 900 30, 1080 90 C 1260 150, 1440 30, 1440 30 L 1440 150 L 0 150 Z"
          fill="white"
        />
        <path
          d="M0 120 C 180 180, 360 60, 540 120 C 720 180, 900 60, 1080 120 C 1260 180, 1440 60, 1440 60 L 1440 150 L 0 150 Z"
          fill="#138808" // Green
        />
      </svg>
    </div>
  );
};

export default FlagWave;
