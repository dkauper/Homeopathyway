import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}));

const StyledLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.primary.main,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const LinkImage = styled('img')({
  marginRight: '10px',
  maxWidth: '50px',
  maxHeight: '50px',
});

const Links: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const linkItems = [
    { 
      url: "http://en.wikipedia.org/wiki/Homeopathy",
      image: "/images/WikiLogo.png",
      text: "Wikipedia article on Homeopathy"
    },
    {
      url: "http://www.homeopathic.org",
      image: "/images/NCHLogo.png",
      text: "National Center for Homeopathy"
    },
    {
      url: "http://www.homeopathy.org",
      image: "/images/NASH.png",
      text: "North American Society of Homeopaths"
    },
    {
      url: "http://nccam.nih.gov/health/homeopathy",
      image: "/images/NIH_NCCAM_WebsiteHeader.png",
      text: "National Center for Complementary and Alternative Medicine (NCCAM)"
    }
  ];

  return (
    <Box sx={{ maxWidth: '100%', overflow: 'hidden' }}>
      <Title variant={isMobile ? "h6" : "h5"}>Homeopathic Links and Articles</Title>
      
      <Box sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: theme.spacing(2),
        justifyContent: isMobile ? 'center' : 'flex-start'
      }}>
        {linkItems.map((item, index) => (
          <Box 
            key={index} 
            sx={{ 
              flexBasis: isMobile ? '100%' : 'calc(50% - 16px)',
              maxWidth: isMobile ? '100%' : 'calc(50% - 16px)',
            }}
          >
            <StyledLink href={item.url} target="_blank" rel="noopener noreferrer">
              <LinkImage src={item.image} alt={item.text} />
              <Typography>{item.text}</Typography>
            </StyledLink>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Links;