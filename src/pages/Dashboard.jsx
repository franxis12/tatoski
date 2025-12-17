import React, { useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Content from "../components/Content";
import AddApplication from "../components/AddApplication";

function Dashboard() {
  const [active, setActive] = useState(true);

  return (
    <div className="grid h-screen w-screen grid-cols-12 grid-rows-[80px_1fr] bg-(--PrimaryColor)">
      <Header />
      <SideBar />
      <Content />
      {/*This component is absolute and is not part of layout change variable active to true for preview*/}
      {active && <AddApplication />}
    </div>
  );
}

export default Dashboard;
