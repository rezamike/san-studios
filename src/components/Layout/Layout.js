import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav"; // adjust path if Nav is elsewhere

export default function Layout() {
  return (
    <div className="main-layout flex flex-col sm:flex-row min-h-screen text-brand-light bg-brand-dark">
      <Nav />
      <div className="page-content flex-1 px-4 py-8 sm:p-8 sm:ml-64">
        <Outlet />
      </div>
    </div>
  );
}
