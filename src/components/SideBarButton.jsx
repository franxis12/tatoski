import React from "react";

function SideBarButton() {
  return (
    <div>
      <button className="bg-(--BtnPrimary) hover:bg-(--BtnPrimary_Hover) rounded-lg px-5 py-2 transition-all duration-300 font-medium w-full">
        Add new Application
      </button>
    </div>
  );
}

export default SideBarButton;
