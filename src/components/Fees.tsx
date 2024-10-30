import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Divider } from '@mui/material';

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}));

const BodyText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
  marginRight: theme.spacing(5),
}));

const Fees: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ maxWidth: '100%', overflow: 'hidden' }}>
      <Title variant={isMobile ? "h6" : "h5"}>Fees</Title>
      
      <Title variant="body1"><u>Initial Consultations:</u></Title>
      <BodyText>
        <ul>
          <li>Adults - $240 for a 75-90 minute session</li>
          <li>Children - $195 for a 75-90 minute session</li>
        </ul>
      </BodyText>

      <Title variant="body1"><u>Follow-Up Consultations:</u></Title>
      <BodyText>
        <ul>
          <li>Adults & Children - $100 for a 30-45 minute session</li>
          <li>1st Follow-Up is 5 weeks from the initial visit and maintenance follow-ups are every 2-3 months after the first follow-up.</li>
        </ul>
      </BodyText>

      <Title variant="body1"><u>Acute Care Consultations:</u></Title>
      <BodyText sx={{ marginLeft: theme.spacing(3) }}>
        Adults & Children - $65 for 2 x 15 minute sessions - Colds, Flu, Bladder Infection, etc. (acute short term illnesses)
      </BodyText>

      <Title variant="body1"><u>Bach Flower consultation:</u></Title>
      <BodyText sx={{ marginLeft: theme.spacing(3) }}>
        $45 per Bach Flower mixture
      </BodyText>

      <BodyText>
        You can purchase the suggested remedies from Hahneman Labs, Boiron or Whole Foods.
      </BodyText>

      <Divider variant="thick" />

      <BodyText>
        Payment is due at the time of service. Checks, Cash, Venmo and PayPal are accepted.
      </BodyText>

      <BodyText>
        Please send an email with a list of all medications and supplements that you are currently taking.
      </BodyText>

      <BodyText>
        Please allow at least 24 hours in advance if you need to cancel or reschedule your appointment.
      </BodyText>

      <BodyText>
        All patient information forms must be signed and emailed to me BEFORE the first appointment.
      </BodyText>
      
      <Divider variant="thick" />

      <Title variant="h6" sx={{ mt: 4 }}>
        My practice is currently remote only via phone, Facetime or Skype.
      </Title>

      <Box textAlign={'center'}>
      <Button 
        variant="contained"
        color="primary" 
        sx={{ mt: 2 }}
        href="/files/Patient%20Disclosure%202014.pdf"
        target="_blank"
      >
        Download Patient Disclosure Form
      </Button>
      </Box>
    </Box>
  );
};

export default Fees;