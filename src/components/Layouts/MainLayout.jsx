import { lazy } from "react";
import { Outlet } from "react-router";
const Navbar = lazy(() => import("../Navbar"));

const MainLayout = () => {
  return (
    <div className="dark:bg-main-dark h-full transition-all duration-300 dark:text-slate-50 text-main-dark bg-slate-50">
      <div className="container">
        <Navbar />
        <main className="flex flex-col gap-10 min-h-screen py-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
