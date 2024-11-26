import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const showTooltip = () => setIsHovered(true);
  const hideTooltip = () => setIsHovered(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}

      {/* Tooltip */}
      {isHovered && (
        <div className="fixed bottom-12 right-2 m-2 px-3 py-1 text-sm text-white bg-gray-700 rounded shadow-lg -z-50">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
