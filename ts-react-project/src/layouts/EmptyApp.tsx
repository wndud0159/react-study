import React, { FC } from "react";
import { Outlet } from "react-router-dom";

const EmptyApp: FC = () => {
  return (
    <>
      <div>비어있는페이지</div>
      <Outlet />
    </>
  );
};

export default EmptyApp;
