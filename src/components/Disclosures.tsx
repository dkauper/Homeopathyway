import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}));

const BodyText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

const Disclosures: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ maxWidth: '100%', overflow: 'hidden' }}>
      <Title variant={isMobile ? "h6" : "h5"}>Patient Disclosure</Title>
      
      <BodyText>
        I have been practicing Homeopathy since 1996. My training and education is described below: I have studied with some of the most renowned, prominent homeopaths in the world, and my education is always on going. I am a member of National Center of Homeopathy & the North American Society of Homeopaths. I teach clinic at the Los Angeles School of Homeopathy. I am also trained in the mixture and treatment of Bach Flowers.
      </BodyText>

      <BodyText>
        I am not a licensed physician. Also, the State of California does not offer licenses in homeopathic medicine. Homeopathy is alternative and complementary to healing arts that are licensed by the State of California. Under Sections 2053.5 and 2053.6 of California's Business and Professions Code (commonly known as the Medical Practice Act) I may offer services in homeopathy as long as I meet certain requirements and restrictions, which are described on a separate page named SB-77.
      </BodyText>

      <BodyText>
        I recommend that you inform your medical doctor that you are receiving homeopathic treatment. If you have any concerns about your treatment, please feel free to discuss them with me.
      </BodyText>

      <BodyText>
        Prior to receiving my services, California state law requires that you receive the information provided in the form linked below, and acknowledge that you have received it. Please complete and sign the following statement. One copy is for you. I will keep a copy on file for three years.
      </BodyText>

      <Button 
        variant="contained" 
        color="primary" 
        sx={{ mt: 2 }}
        href="/files/Patient%20Disclosure%202014.pdf"
        target="_blank"
      >
        Download Acknowledgement Form
      </Button>
    </Box>
  );
};

export default Disclosures;