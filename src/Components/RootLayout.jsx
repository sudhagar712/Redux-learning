import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComponents from "./Navbar/Navbar";

const RootLayout = () => {
  return (
    <>
      <header>
        <NavbarComponents />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
