import React from "react";

function Button({ children, onClick }) {
  return (
    //This button needs more features like icons and type of button
    <div>
      <button
        onClick={onClick}
        className="bg-(--BtnPrimary)  hover:bg-(--BtnPrimary_Hover) rounded-lg px-5 py-2 transition-all duration-300 font-medium"
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
