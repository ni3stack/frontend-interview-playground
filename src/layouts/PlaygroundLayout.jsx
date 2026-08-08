
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import "./PlaygroundLayout.css";
function PlaygroundLayout() {
  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default PlaygroundLayout;