import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import useStore from "../store/useStore";
import LoginModal from "../clientPortal/Auth/LoginModal";
import { useAuthStore } from "../store/useAuthStore";

// Define the navigation items
const navItems = [
  {
    id: "home",
    label: "Home",
    path: "/",
    image: "/images/Bottle_Green.png",
    altImage: "/images/Bottle_Green_Alt.png",
  },
  {
    id: "treatments",
    label: "Treatments",
    path: "/treatments",
    image: "/images/Treatments.png",
    altImage: "/images/Treatments.png",
  },
  {
    id: "fees",
    label: "Fees",
    path: "/fees",
    image: "/images/Fees.png",
    altImage: "/images/Fees.png",
  },
  {
    id: "portal",
    label: "Portal",
    // path: "/login",
    image: "/images/ClientPortal.png",
    altImage: "/images/ClientPortal.png",
  },
  {
    id: "disclosures",
    label: "Disclosures",
    path: "/disclosures",
    image: "/images/Disclosure.png",
    altImage: "/images/Disclosure.png",
  },
  {
    id: "b77",
    label: "SB-77",
    path: "/sb77",
    image: "/images/B77.png",
    altImage: "/images/B77.png",
  },
  {
    id: "links",
    label: "Links",
    path: "/links",
    image: "/images/LinksAndArticles.png",
    altImage: "/images/LinksAndArticles.png",
  },
];

const NavButton = styled(Button)<{ $isMobile: boolean }>(
  ({ theme, $isMobile }) => ({
    width: $isMobile ? "100%" : "100%",
    height: $isMobile ? "100px" : "220px",
    padding: 0,
    marginBottom: $isMobile ? 0 : theme.spacing(2),
    marginRight: $isMobile ? theme.spacing(2) : 0,
    flexShrink: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  })
);

interface NavigationProps {
  onLoginClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onLoginClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();
  const { hoveredItem, setHoveredItem } = useStore();
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const handleItemClick =
    (item: (typeof navItems)[0]) => (event: React.MouseEvent) => {
      if (item.id === "portal" && !isAuthenticated) {
        event.preventDefault();
        onLoginClick();
      }
    };

  // const handleLoginClick = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   setLoginModalOpen(true);
  // };

  const handleLoginModalClose = () => {
    setLoginModalOpen(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: isMobile ? "row" : "column",
        overflowX: isMobile ? "auto" : "visible",
        overflowY: "hidden",
        WebkitOverflowScrolling: "touch",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {navItems.map((item) => (
        <Link
          key={item.id}
          to={item.id === "portal" && !isAuthenticated ? "#" : item.path || "/"}
          style={{
            textDecoration: "none",
            display: "block",
            width: isMobile ? "auto" : "100%",
            flexShrink: 0,
          }}
          onClick={handleItemClick(item)}
        >
          <NavButton
            $isMobile={isMobile}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <img
              src={
                hoveredItem === item.id || (item.id === 'portal' && isAuthenticated)
                  ? item.altImage
                  : location.pathname === item.path
                  ? item.altImage
                  : item.image
              }
              alt={item.label}
              style={{ 
                maxWidth: '100%', 
                height: '100%', 
                maxHeight: isMobile ? '100%' : '100%'
              }}
            />
          </NavButton>
        </Link>
      ))}
      <LoginModal open={loginModalOpen} onClose={handleLoginModalClose} />
    </Box>
  );
};

export default Navigation;
