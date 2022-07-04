import { Box, Center, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "../../components/header";
import MyProjects from "../../components/myProjects";
import SessionAboutMe from "../../components/sessionAboutMe";
import { effect } from "./backgroundEffect";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  const [offY, setOffY] = useState(0);
  const handleScroll = () => {
    setOffY(window.scrollY);
  };
  const scrollYEffect = {
    transform: `translateY(${(offY * 0.3) * -1}px)`,
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    effect();
  }, []);

  return (
    <Center
      w="100vw"
      minH="100vh"
      flexDirection="column"
      justifyContent="flex-start"
    >
      <Header />
      <Box
        paddingX="5%"
        paddingY="50px"
        h="100%"
        w="100%"
      >
        <canvas
          id="backgrounEffect"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "-1",
            minHeight: "100%",
            width: "100%",
          }}
        ></canvas>
        <Box css={scrollYEffect} w="100%">
          <SessionAboutMe />
        </Box>

        <Box css={scrollYEffect}>
          <MyProjects />
        </Box>
      </Box>
    </Center>
  );
};

export default Home;
