import React from "react";

function Button({ children, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-(--BtnPrimary) hover:bg-(--BtnPrimary_Hover) rounded-lg px-5 py-2 transition-all duration-300 font-medium"
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
