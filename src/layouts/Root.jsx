import React from "react";
import { Outlet } from "react-router";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <main className="mt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
