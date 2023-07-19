import React from "react";
import Cabecera from "../components/Home/Cabecera";
import { GlobalLayoutProps } from "model/GlobalLayoutProps";

const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => {
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
