import React from "react";

function Button() {
  return (
    <div>
      <button className="bg-(--BtnPrimary) hover:bg-(--BtnPrimary_Hover) rounded-lg px-5 py-2 transition-all duration-300 font-medium">
        Click!
      </button>
    </div>
  );
}

export default Button;
