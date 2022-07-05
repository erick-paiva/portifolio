import { Box, Center, Heading, keyframes } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import MyProjects from "../../components/myProjects";
import SessionAboutMe from "../../components/sessionAboutMe";
import { effect } from "./backgroundEffect";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  const [scroll, setScroll] = useState(false);
  const [offY, setOffY] = useState(0);
  const handleScroll = () => {
    setOffY(window.scrollY);
    if (window.scrollY > 0) {
      setScroll(true);
    }
  };
  const animation = keyframes`
  from{
    filter: blur(10px);
  }to{
    filter: blur(0);
  }
`;

  const scrollYEffect = {
    transform: `translateY(${offY * 0.1}px)`,
    transition: "0.2s ease-in-out",
  };

  const scrollYEffect05 = {
    transform: `translateY(${offY * 0.2}px)`,
    transition: "0.1s ease-in-out",
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (window.scrollY === offY) {
        setScroll(false);
      }
    }, 100);
  }, [scroll, offY]);

  useEffect(() => {
    effect();
  }, []);

  return (
    <Center
      w="100vw"
      minH="100vh"
      flexDirection="column"
      justifyContent="flex-start"
      animation={`${animation} 0.3s ease-in`}
      filter={`${scroll ? "blur(2px)" : ""}`}
    >
      <Header />
      <Box paddingX="5%" paddingY="50px" h="100%" w="100%">
        <canvas
          id="backgrounEffect"
          style={{
            position: "fixed",
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

        <Box css={scrollYEffect05} w="100%">
          <MyProjects />
        </Box>
      </Box>
      <Footer />
    </Center>
  );
};

export default Home;
