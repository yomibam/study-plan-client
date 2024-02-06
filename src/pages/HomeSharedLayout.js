import React from "react";
import { Outlet } from "react-router-dom";

export const HomeSharedLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
