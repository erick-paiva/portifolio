import { Center, Heading } from "@chakra-ui/react";
import Header from "../../components/header";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <Center
      w="100vw"
      h="100vh"
      bg="blue"
      flexDirection="column"
      justifyContent="flex-start"
    >
      <Header />
      <Heading>home</Heading>
    </Center>
  );
};

export default Home;
