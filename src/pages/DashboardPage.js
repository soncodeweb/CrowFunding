import React from "react";
import { Outlet } from "react-router-dom";
import LayoutDashboard from "../layout/LayoutDashboard";

const DashboardPage = () => {
  return (
    <LayoutDashboard>
      <Outlet />
    </LayoutDashboard>
  );
};

export default DashboardPage;
