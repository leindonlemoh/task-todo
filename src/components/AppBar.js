import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from "./Link";

const AppsBar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Link href="/">Thoughts</Link>
            <Link href="/todo">Todo</Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default AppsBar;
