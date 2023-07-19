import React from "react";
import Cabecera from "../components/Home/Cabecera";

const GlobalLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <div className="container">
        <Cabecera />
        {children}
      </div>
    </>
  );
};

export default GlobalLayout;
