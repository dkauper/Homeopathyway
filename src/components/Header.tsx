import React from "react";
import { AppBar, Toolbar, Box, useMediaQuery, Theme, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Divider } from '@mui/material';

interface HeaderProps {
  onLoginClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          {!isMobile && (
            <Box sx={{ flexGrow: 1 }}>
              <img
                src="/images/HWLogo2.png"
                alt="Homeopathy Way"
                width="90"
                height="73"
              />
            </Box>
          )}
          <Box
            sx={{
              flexGrow: isMobile ? 1 : 2,
              textAlign: "center",
              my: isMobile ? 2 : 0,
            }}
          >
            <img
              src="/images/RoseHeader2.png"
              alt="HomeopathyWay"
              style={{
                width: isMobile ? "100%" : "280px",
                height: "auto",
                maxWidth: "280px",
              }}
            />
            <Divider variant="thick" />
          </Box>
          {!isMobile && (
            <Box
              sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
            >
              <img
                src="/images/HWLogo2.png"
                alt="Homeopathy Way"
                width="90"
                height="73"
              />
              {/* <Button onClick={onLoginClick}>Login</Button> */}
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;