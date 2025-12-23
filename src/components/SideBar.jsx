import SideBarButton from "./SideBarButton";

function SideBar({ active, setActive }) {
  return (
    <aside className="col-span-2 row-start-2 row-end-3 h-full bg-(--PrimaryColor) p-2 pt-20">
      <h1 className="text-md">New Application </h1>
      <SideBarButton onClick={() => setActive(true)} />
    </aside>
  );
}

export default SideBar;
