import React from "react";
import { images } from "../imports/images_import";

function Header() {
  return (
    <header className="col-span-12 row-start-1 row-end-2 bg-(--PrimaryColor) h-20 flex items-center px-10">
      <img src={images.logo} className="h-15 " />
    </header>
  );
}

export default Header;
