import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Img,
  Text,
} from "@chakra-ui/react";
import ImgFront from "../../assets/home/front-end.png";
import ImgBack from "../../assets/home/back-end.png";
import { myProjectsBack, myProjectsFront } from "./data";
import CardMyProjects from "../cardMyProjects";
interface MyProjectsProps {}

const MyProjects = ({}: MyProjectsProps) => {
  return (
    <Flex
      w="100%"
      minH="100px"
      bg="white"
      mt="50px"
      borderRadius="10px"
      flexDirection="column"
      padding={{
        xs: "10px 15px",
        xl: "30px 35px",
      }}
      mb={{
        xs: "500px",
        lg: "250px",
        xl: "230px",
      }}
      id="projects"
    >
      <Heading fontSize="25px">Some of my projects</Heading>
      <Center
        px="10px"
        w="130px"
        color="white"
        bg="primary"
        borderRadius="5px"
        border="2px solid black"
        my="15px"
      >
        <Text>Front-end</Text>
        <Img src={ImgFront} alt="Front-end" h="20px" w="20px" ml="10px" />
      </Center>

      <HStack flexWrap="wrap" justifyContent="space-between" spacing="10px">
        {myProjectsFront.map(
          ({ name, repo, description, img, site }, index) => (
            <Box key={name + index}>
              <CardMyProjects
                site={site}
                name={name}
                img={img}
                link={repo}
                description={description}
              />
            </Box>
          )
        )}
      </HStack>

      <Center
        px="10px"
        w="130px"
        color="white"
        bg="primary"
        borderRadius="5px"
        border="2px solid black"
        my="15px"
      >
        <Text>Back-end</Text>
        <Img src={ImgBack} alt="Back-end" h="20px" w="20px" ml="10px" />
      </Center>

      <HStack
        flexWrap="wrap"
        justifyContent="space-between"
        spacing={{
          xs: "0",
          lg: "15px",
          xl: "18px",
          "2xl": "20px",
        }}
      >
        {myProjectsBack.map(({ name, repo, description }, index) => (
          <Box key={name + index}>
            <CardMyProjects name={name} link={repo} description={description} />
          </Box>
        ))}
      </HStack>
    </Flex>
  );
};

export default MyProjects;
