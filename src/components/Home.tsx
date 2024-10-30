import React from "react";
import { Box, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: "bold",
  marginBottom: theme.spacing(2),
}));

const BodyText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

const StyledImage = styled("img")({
  maxWidth: "100%",
  height: "auto",
  display: "block",
});

const Home: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ maxWidth: "100%", overflow: "hidden" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column-reverse" : "row",
          gap: 3,
          alignItems: isMobile ? "center" : "flex-start", // Center items in mobile view
          // paddingBottom: theme.spacing(12),
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Title variant={isMobile ? "h6" : "h5"}>Welcome To My Practice</Title>
          <BodyText>
            I am a classically trained homeopath practicing in Studio City,
            California since 1996. My services include constitutional and acute
            care offered through office visits, phone consultations or Skype
            communications. I'm a member of NASH (North American Society of
            Homeopaths) and NCH (National Center for Homeopathy). I teach and
            mentor at the Los Angeles School of Homeopathy (LASH). I've been
            practicing homeopathy for the past 30 years.
          </BodyText>
          <BodyText>I look forward to working with you.</BodyText>
          <Title variant={isMobile ? "h6" : "h5"}>What is Homeopathy?</Title>
          <BodyText>
            Homeopathic medicine is based on the principals of the "Law of
            Similars", also known as "like cures like." This, simply stated,
            means that a substance that can make you ill can also make you well.
            A remedy can treat an illness if it produces, in a healthy person,
            symptoms similar to those of the illness. The Law of Similars
            enables the homeopath to select one remedy that is needed by
            matching the symptoms of the individual to the symptoms the remedy
            induces. Homeopathy goes to the core of the person and to the core
            of the problem.
          </BodyText>
        </Box>
        <Box
          sx={{
            width: isMobile ? "40%" : "25%",
            mb: isMobile ? 2 : 0,
            textAlign: "center",
            alignSelf: isMobile ? "center" : "auto", // Center the box itself in mobile view
          }}
        >
          <StyledImage src="/images/Rose-3.png" alt="Rose Kauper" />
          <Typography variant="subtitle1" align="center" sx={{ mt: 1 }}>
            Rose Kauper HMC
            <br />
            Homeopathic Consultant
          </Typography>
        </Box>
      </Box>

      {/* <Title variant={isMobile ? "h6" : "h5"} sx={{ mt: 4 }}>
        What is Homeopathy?
      </Title>
      <BodyText>
        Homeopathic medicine is based on the principals of the "Law of
        Similars", also known as "like cures like." This, simply stated, means
        that a substance that can make you ill can also make you well. A remedy
        can treat an illness if it produces, in a healthy person, symptoms
        similar to those of the illness. The Law of Similars enables the
        homeopath to select one remedy that is needed by matching the symptoms
        of the individual to the symptoms the remedy induces. Homeopathy goes to
        the core of the person and to the core of the problem.
      </BodyText> */}
      <BodyText>
        The philosophy of homeopathy holds that the mind and body are not
        separate. The emotions affect the organs, the musculature, the hormonal
        cycles and the shifting processes of the body affect the mind and the
        emotions. Every human experience leaves some residue in the physical
        body and in the 'emotional body.' For this reason, the homeopathic
        process begins with a personal interview. During this initial interview,
        I will ask an extensive range of questions. It is important to achieve a
        complete understanding of the state of health on the physical, mental,
        and emotional planes.
      </BodyText>
      <BodyText>
        The homeopathic remedy is a highly diluted substance that is prepared by
        a series of dilutions and succussions (vigorous shaking). The remedy is
        prepared in a homeopathic pharmacy and is regulated by the FDA. The
        remedies are made from plants, minerals, and animal substances. The
        remedies are non-toxic and are safe for all ages.
      </BodyText>

      <Title variant={isMobile ? "h6" : "h5"} sx={{ mt: 4 }}>
        What conditions does Homeopathy address?
      </Title>
      <BodyText>
        Homeopathy is used on many levels, including Mental, Emotional and
        Physical. Examples are: Anxiety, fear, ADHD, skin problems, bladder
        problems, depression, headaches, IBS, chronic fatigue, allergies,
        children’s ailments, teething, colic and behavioral issues, hormonal
        issues, menopause, injuries, burns and arthritis, etc.
      </BodyText>

      <Title variant={isMobile ? "h6" : "h5"} sx={{ mt: 4 }}>
        What is the goal of Homeopathic treatment?
      </Title>
      <BodyText>
        The goal of homeopathic treatment is to help attain a level of health
        that includes not only symptomatic relief, but also a sense of
        well-being. The homeopathic remedy initiates a spontaneous process of
        healing in the body. Instead of masking the problem, homeopathy
        initiates the healing process.
      </BodyText>
    </Box>
  );
};

export default Home;
