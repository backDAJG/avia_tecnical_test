import { Outlet } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" fontWeight="bold">
            AVIATUR
          </Typography>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
};
