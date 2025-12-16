import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Content from "../components/Content";

function Dashboard() {
  return (
    <div className="grid h-screen w-screen grid-cols-12 grid-rows-[80px_1fr] bg-(--PrimaryColor)">
      <Header />
      <SideBar />
      <Content />
    </div>
  );
}

export default Dashboard;
