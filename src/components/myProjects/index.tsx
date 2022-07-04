import {
  Box,
  Center,
  Flex,
  Heading,
  Img,
  Text,
} from "@chakra-ui/react";
import ImgFront from "../../assets/home/front-end.png";
import ImgBack from "../../assets/home/back-end.png";
import { myProjects } from "./data";
import CardMyProjects from "../cardMyProjects";
interface MyProjectsProps {
  area?: string;
}

const MyProjects = ({ area = "front-end" }: MyProjectsProps) => {
  const img = area === "front-end" ? ImgFront : ImgBack;
  const name = area === "front-end" ? "Front-end" : "Back-end";

  return (
    <Flex
      w="100%"
      minH="100px"
      bg="white"
      mt="50px"
      borderRadius="10px"
      flexDirection="column"
      padding="10px 15px"
    >
      <Heading fontSize="25px">Some of my projects</Heading>
      <Center
        px="10px"
        w="130px"
        color="white"
        bg="blue"
        borderRadius="5px"
        border="2px solid black"
        my="15px"
      >
        <Text>{name}</Text>
        <Img src={img} alt={name} h="20px" w="20px" ml="10px" />
      </Center>

      <Center flexWrap="wrap" justifyContent="space-between">
        {myProjects.map(({ name, repo, description }, index) => (
          <Box
            ml={(index + 1) % 2 === 0 ? "10px" : "0"}
            mb="10px"
            key={name + index}
          >
            <CardMyProjects name={name} link={repo} description={description} />
          </Box>
        ))}
      </Center>
    </Flex>
  );
};

export default MyProjects;
