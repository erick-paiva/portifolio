import { Box, Text, Img, Heading, Center, keyframes } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MyAvatar from "../../assets/home/my_avatar.png";

interface SessionAboutMeProps {}

const SessionAboutMe = ({}: SessionAboutMeProps) => {
  const [lengthText, setLengthText] = useState(0);
  const text = `I am currently Full stack developer and front end developer at Loomi 🧑‍💻​`;

  const [textExibition, setTextExibition] = useState("");
  const pause = lengthText % 100 === 0;

  useEffect(() => {
    setTimeout(
      () => {
        if (textExibition.length < text.length) {
          setTextExibition(text.slice(0, lengthText + 2) + " |");

          setLengthText(lengthText + 1);
        } else {
          setTextExibition(text);
        }
      },
      pause ? 1000 : 100
    );
    if (pause) {
      setTextExibition(textExibition.replace(" |", ""));
    }
  }, [text, lengthText, pause, textExibition]);

  const animation = keyframes`
    0%{
      opacity: 0;
      position: relative;
      left: 60vw;
    }
    50%{
      opacity: 0.5;
      position: relative;
      left: -15vw;
    }
    100%{
      opacity: 1;
      position: relative;
      left: 0;
    }
  `;

  return (
    <Center
      color="white"
      id="aboutMe"
      w="100%"
      animation={`${animation} 2s ease-in-out`}
    >
      <Box minW="50%">
        <Box
          position="relative"
          margin="0 10px 10px 0"
          css={{
            shapeOutside: "circle()",
          }}
          overflow="hidden"
          float="left"
          borderRadius="100%"
        >
          <Img
            w={{
              xs: "170px",
              lg: "200px",
              xl: "300px",
              "2xl": "350px",
            }}
            borderRadius="10px"
            src={MyAvatar}
            alt="erick"
          />
        </Box>
        <Heading
          fontSize={{
            xs: "20px",
            lg: "35px",
            xl: "40px",
            "2xl": "45px",
          }}
          fontWeight="bold"
        >
          Hi, my name is Erick! 👽​
        </Heading>
        <Text
          textAlign="justify"
          w="100%"
          minH="100px"
          fontSize={{
            xs: "13px",
            lg: "18px",
            xl: "25px",
            "2xl": "30px",
          }}
          fontWeight="300"
        >
          {textExibition}
        </Text>
      </Box>
    </Center>
  );
};

export default SessionAboutMe;
