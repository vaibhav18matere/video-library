import React from "react";
import { Navbar } from "../navbar/Navbar";
import { AsideNavigation } from "../asideNavigation/AsideNavigation";
import "./pageContainer.css";

function PageContainer({ children }) {
  return (
    <div>
      <Navbar />
      <div className="main_container">
        <AsideNavigation />
        <div className="page_container">{children}</div>
      </div>
    </div>
  );
}

export { PageContainer };
