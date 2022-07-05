import { Box, Text, Img } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface SessionAboutMeProps {}

const SessionAboutMe = ({}: SessionAboutMeProps) => {
  const [lengthText, setLengthText] = useState(0);
  const text = `Is simply dummy text of the printing and typesetting industry. Lorem
  Ipsum has been the industry's standard dummy text ever since the
  1500s, when an unknown printer took a galley of type and scrambled it
  to make a type specimen book. It has survived not only five centuries,
  but also the leap into electronic typesetting, remaining essentially
  unchanged. It was popularised in the 1960s with the release of
  Letraset sheets containing Lorem Ipsum passages, and more recently
  with desktop publishing software like Aldus PageMaker including
  versions of Lorem Ipsum.`;

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
      pause ? 1000 : 20
    );
  }, [text, lengthText, pause, textExibition]);

  useEffect(() => {
    setTimeout(() => {
      if (pause) {
        if (textExibition.includes(" |")) {
          setTextExibition(textExibition.replace(" |", ""));
        } else {
          setTextExibition(textExibition + " |");
        }
      }
    }, 500);
  }, [lengthText, pause, textExibition]);

  return (
    <Box
      color="white"
      w="100%"
      id="aboutMe"
    >
      <Box
        position="relative"
        margin="0 10px 10px 0"
        h="180px"
        w="180px"
        css={{
          shapeOutside: "circle()",
        }}
        overflow="hidden"
        float="left"
        borderRadius="100%"
      >
        <Img
          w="180px"
          borderRadius="10px"
          src="https://ca.slack-edge.com/TQZR39SET-U0279QYHPPS-3a14e2e110b0-512"
          alt="erick"
        />
      </Box>
      <Text textAlign="justify" w="100%" minH="200px">
        {textExibition}
      </Text>
    </Box>
  );
};

export default SessionAboutMe;
