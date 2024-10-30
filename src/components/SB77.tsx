import React from 'react';
import { Box, Typography } from '@mui/material';
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
  marginRight: theme.spacing(5),
}));

const SB77: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ maxWidth: '100%', overflow: 'hidden' }}>
      <Title variant={isMobile ? "h6" : "h5"}>California Senate Bill SB-577</Title>
      
      <BodyText>
        California Senate Bill SB-577, which was signed by the governor in September 2002, has profound implications for the practice of alternative forms of health care in California. SB-577 enables alternative and complementary health care practitioners to provide and advertise their services legally. However, they must also comply with certain requirements specified within the bill.
      </BodyText>

      <Title variant="body1"><u>What does Senate Bill SB-577 mean for you, the patient?</u></Title>
      <BodyText>
        SB-577 gives you access to alternative and complementary health care practitioners. You must be given information about the nature of treatment and the practitioner's qualifications. Feel free to ask a practitioner any question you might have about your treatment. Check to see if your practitioner has been certified by a professional membership society. In addition, tell your doctor about any alternative treatment you are pursuing. You can also request that your licensed and unlicensed health care providers communicate with each other and work collaboratively to meet your health care needs.
      </BodyText>

      <Title variant="body1"><u>SB-577 helps to protect you</u></Title>
      <BodyText>
        SB-577 requires unlicensed alternative health care practitioners to follow certain guidelines and restrictions. Here are the things that unlicensed alternative practitioners are NOT allowed to do:
      </BodyText>
      <BodyText>
      <ul>
        <li>Perform any form of surgery or any procedure that punctures your skin or harmfully invades your body.</li>
        <li>Use X-ray radiation.</li>
        <li>Prescribe prescription drugs, or recommending that you discontinue drugs that were prescribed by a licensed physician.</li>
        <li>Set fractures.</li>
        <li>Treat wounds with electrotherapy.</li>
        <li>Put you at risk of great bodily harm, serious physical or mental illness, or death.</li>
        <li>Imply in any way that they are licensed physicians.</li>
      </ul>
      </BodyText>

      <BodyText>
        In addition, an unlicensed alternative practitioner MUST DO the following things:
      </BodyText>

      <BodyText>
        <ul>
          <li>Provide you with a statement, written in plain language that includes the following information:</li>
          <ul>
            <li>That they are not a licensed physician and that their services are not licensed by the state;</li>
            <li>A brief and clear description of the kind of services they provide and the reasoning behind it;</li>
            <li>A description of their education, training, and experience.</li>
          </ul>
          <li>Ask you to sign an acknowledgement that you received the above written statement, and provide you with a copy of it.</li>
          <li>They must also keep a copy of your signed acknowledgement for three years.</li>
        </ul>
      </BodyText>
    </Box>
  );
};

export default SB77;