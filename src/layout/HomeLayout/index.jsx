import React from "react";
import Topbar from "./Topbar";
import { Box } from "@mui/material";
import Footer from "./Footer";

export default function HomeLayout({ children }) {
  return (
    <>
      <div className="mainLayout">
        <Topbar />
        <Box>{children}</Box>
        <Footer />
      </div>
    </>
  );
}
