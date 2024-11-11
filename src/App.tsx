import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from './styles/theme';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import Treatments from './components/Treatments';
import Fees from './components/Fees';
import Disclosures from './components/Disclosures';
import SB77 from './components/SB77';
import Links from './components/Links';
import Footer from './components/Footer';
import LoginModal from './clientPortal/Auth/LoginModal';
import Dashboard from './clientPortal/Dashboard/Dashboard';
import { ProtectedRoute } from './utils/protectedRoute';
import { useAuthStore } from './store/useAuthStore';

const HEADER_HEIGHT = 64;
const FOOTER_HEIGHT = 100;

const App: React.FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  const handleLoginModalOpen = () => setLoginModalOpen(true);
  const handleLoginModalClose = () => setLoginModalOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <Header onLoginClick={handleLoginModalOpen} />
          <Box sx={{ 
            display: 'flex', 
            flexGrow: 1,
            overflow: 'hidden',
          }}>
            {!isMobile && (
              <Box sx={{ 
                width: '25%', 
                flexShrink: 0,
                overflowY: 'auto',
                height: `calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px)`,
                position: 'sticky',
                top: HEADER_HEIGHT,
                bottom: FOOTER_HEIGHT,
              }}>
                <Navigation onLoginClick={handleLoginModalOpen} />
              </Box>
            )}
            <Box sx={{ 
              flexGrow: 1, 
              overflowY: 'auto',
              height: `calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px)`,
              padding: theme.spacing(2),
              paddingTop: isMobile ? 0 : theme.spacing(2),
              marginRight: isMobile ? 0 : theme.spacing(2),
            }}>
              {isMobile && (
                <Box sx={{ marginBottom: theme.spacing(2) }}>
                  <Navigation onLoginClick={handleLoginModalOpen} />
                </Box>
              )}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/treatments" element={<Treatments />} />
                <Route path="/fees" element={<Fees />} />
                <Route path="/disclosures" element={<Disclosures />} />
                <Route path="/sb77" element={<SB77 />} />
                <Route path="/links" element={<Links />} />
                <Route 
                  path="/clientPortal/*" 
                  element={
                    <ProtectedRoute>
                      <Routes>
                        <Route path="dashboard" element={<Dashboard />} />
                        {/* Add more client portal routes here */}
                      </Routes>
                    </ProtectedRoute>
                  } 
                />
                <Route path="*" element={<Navigate replace to="/" />} />
              </Routes>
            </Box>
          </Box>
          <Footer />
        </Box>
        <LoginModal open={loginModalOpen} onClose={handleLoginModalClose} />
      </Router>
    </ThemeProvider>
  );
};

export default App;