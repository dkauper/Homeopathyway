import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// import List from '@mui/material/List';
// import ListItemText from '@mui/material/ListItemText';

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}));

const BodyText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
  marginLeft: theme.spacing(5),
  marginRight: theme.spacing(5),
}));

const Treatments: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    // <>
    <Box sx={{ maxWidth: '100%', overflow: 'hidden' }}>
      <Title variant={isMobile ? "h6" : "h5"}>Homeopathic and Bachflower treatments</Title>
      
      <BodyText sx={{ marginLeft: theme.spacing(0) }}>
        Patients beginning homeopathic treatment often have many questions regarding their therapy and the steps that will help them regain health or freedom from discomfort. Some of the most commonly asked questions are included here to guide you through your experience with homeopathy.
      </BodyText>

      <Title variant="h6"><u>What is the goal of homeopathic treatment?</u></Title>
      <BodyText>
        The goal is to help you to attain a level of health that includes not only symptomatic relief, but also a sense of well-being and freedom. The homeopathic remedy initiates a spontaneous process of healing in the body.
      </BodyText>

      <Title variant="h6"><u>What is acute Homeopathic treatment?</u></Title>
      <BodyText>
        Acute Homeopathy treats health problems such as flus, colds, coughs, stomach ailments, bladder infections, headaches, sinus conditions, ear infections, and sports injuries. These are often conditions that would eventually resolve themselves without treatment. Homeopathy can enhance and speed the healing process. Once you are under constitutional treatment, your body can often fight off acute symptoms without further treatment. Always contact me first to determine what action needs to be taken.
      </BodyText>

      <Title variant="h6"><u>What is constitutional Homeopathic treatment?</u></Title>
      <BodyText>
        Constitutional Homeopathy is the treatment of long-term health problems or recurrent problems, including recurrent ear infections, bronchitis, bladder problems, skin rashes, etc. Homeopathy strengthens the immune system to prevent further infections. In cases of chronic diseases or symptoms that persist for a long time or recur over many years, constitutional Homeopathy provides a therapy that can address the underlying cause of the illness and help boost the body's defense system.
      </BodyText>

      <Title variant="h6"><u>How is Homeopathy usefull in First Aid treatment?</u></Title>
      <BodyText>
        Homeopathic remedies can be extremely effective in the treatment of common household injuries from falls, bruises, minor burns, bee stings and spider bites, skin rashes and infant teething and colic. First-aid remedies, when correctly chosen, can act quickly and safely but please call me before administering homeopathic remedies at home because remedies for acute conditions can alter or impair the effect of your constitutional remedy.
      </BodyText>
      
      <Title variant="h6"><u>What happens during a Homeopathic interview?</u></Title>
      <BodyText>
        To get to know you as a complete human being, it is important for me to ask you an extensive range of questions. I need to have a complete understanding of your physical, mental, and emotional health. I need to know your energy level and how your environment affects your well-being. Only when I have a clear picture of you and your limitations can I suggest the correct remedy for your symptoms.
      </BodyText>
      
      <Title variant="h6"><u>Do I need to believe in Homeopathy for it to work?</u></Title>
      <BodyText>
        Homeopathy is not a placebo treatment. In fact, infants are often treated as well as animals. All you need for homeopathy to work is to:
        <ul>
          <li>Be clear and complete about your symptoms.</li>
          <li>Be observant. Keep a weekly journal and note any general or specific changes that occur.</li>
          <li>Be candid about anything you may have done to compromise the remedy. See the sheet ‘How to Keep Your Remedy Working.’</li>
          <li>Be committed to the process and patient. Your full participation is essential to improve your well-being. Changes don’t occur overnight. The process of healing is full of ups and downs.</li>
          <li>Be willing to be patient and give the remedy time to work</li>
          <li>I’m here to help you. Be as open with me as you can. The more information I have, the better I can match a remedy to you.</li>
        </ul>
      </BodyText>
      
      <Title variant="h6"><u>Will I receive my remedy at the time of consultation?</u></Title>
      <BodyText>
        Once I decide on the correct remedy, it will need to be mailed from a homeopathic pharmacy. This process could take up to one week. The cost is roughly $35. Some remedies are available at Whole Foods and/or Capitol Drugs.
      </BodyText>
      
      <Title variant="h6"><u>Will there be side effects to the remedies?</u></Title>
      <BodyText>
        From a strictly pharmacological standpoint, there are no such things as side effects in homeopathic medicines. Sometimes you may initially feel worse or symptoms will worsen when, in fact, the overall situation is improving.
      </BodyText>

      <Title variant="h6"><u>How can I measure improvement?</u></Title>
      <BodyText>
        Homeopathic medicine has a sophisticated system for evaluating the success of individual cases: ‘Laws and Principles of Cure.’ You should be primarily concerned with how you feel. Have your symptoms cleared up? Has your energy improved? Has your mental and emotional health stabilized or improved.
      </BodyText>

    </Box>
  );
};

export default Treatments;
