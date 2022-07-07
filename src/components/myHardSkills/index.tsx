import {
  Box,
  Center,
  Flex,
  Heading,
  Img,
  Text,
  VStack,
} from "@chakra-ui/react";
import ImgFront from "../../assets/home/front-end.png";
import ImgBack from "../../assets/home/back-end.png";
import { myHardSkillsDataBack, myHardSkillsDataFront } from "./data";
import CardHardSkills from "../cardHardSkills";

const MyHardSkills = () => {
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
        xs: "20px",
        lg: "30px",
        xl: "50px",
      }}
      id="projects"
    >
      <Heading fontSize="25px">My Hard Skills</Heading>
      <Flex flexDir="column">
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

        <VStack
          alignItems="flex-start"
          spacing="15px"
          border="2px solid"
          borderColor="blue.400"
          borderRadius="10px"
          padding="15px 10px"
        >
          {myHardSkillsDataFront.map(({ title, data }, index) => (
            <Flex flexDir="column" key={`${title} ${index}`}>
              <Heading fontSize="18px" color="blue.400" mb="10px">
                {title}
              </Heading>
              <Flex
                flexWrap="wrap"
                justifyContent="flex-start"
                alignItems="center"
              >
                {data.map(({ name, img }, index) => (
                  <Box mr="15px" my="5px" key={`${name} ${index}`}>
                    <CardHardSkills name={name} img={img} time={index + 1} />
                  </Box>
                ))}
              </Flex>
            </Flex>
          ))}
        </VStack>
      </Flex>
      <Flex flexDir="column">
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

        <VStack
          alignItems="flex-start"
          spacing="15px"
          border="2px solid"
          borderColor="blue.400"
          borderRadius="10px"
          padding="15px 10px"
        >
          {myHardSkillsDataBack.map(({ title, data }, index) => (
            <Flex flexDir="column" key={`${title} ${index}02`}>
              <Heading fontSize="18px" color="blue.400" mb="10px">
                {title}
              </Heading>
              <Flex
                flexWrap="wrap"
                justifyContent="flex-start"
                alignItems="center"
              >
                {data.map(({ name, img }, index) => (
                  <Box mr="15px" my="5px" key={`${name} ${index}02`}>
                    <CardHardSkills name={name} img={img} time={index + 1} />
                  </Box>
                ))}
              </Flex>
            </Flex>
          ))}
        </VStack>
      </Flex>
    </Flex>
  );
};

export default MyHardSkills;
