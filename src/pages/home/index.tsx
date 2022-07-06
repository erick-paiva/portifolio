import { Box, Center, keyframes } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import MyProjects from "../../components/myProjects";
import SessionAboutMe from "../../components/sessionAboutMe";
import Sidebar from "../../components/sidebar";
import { effect } from "./backgroundEffect";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  const [openSideBar, setOpenSideBar] = useState(false);
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
    transition: "0.15s ease-in-out",
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
      animation={`${animation} 0.7s ease-in`}
    >
      <Sidebar
        open={openSideBar}
        callback={() => setOpenSideBar(!openSideBar)}
      />
      <Header callback={() => setOpenSideBar(!openSideBar)} />
      <Box
        paddingX="5%"
        paddingY="50px"
        h="100%"
        w="100%"
        onClick={() => setOpenSideBar(false)}
      >
        <Box
          id="backgrounEffect"
          position="fixed"
          top={0}
          left={0}
          zIndex="-1"
          w="100%"
          minH="100%"
          as="canvas"

        />
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
