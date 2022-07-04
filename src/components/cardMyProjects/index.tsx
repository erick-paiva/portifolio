import { Center, Flex, Img, Text } from "@chakra-ui/react";
import ImgDefault from "../../assets/home/github.png";

interface CardMyProjectsProps {
  img?: string;
  name: string;
  link: string;
  description: string;
}

const CardMyProjects = ({
  img = ImgDefault,
  name,
  link,
  description,
}: CardMyProjectsProps) => {
  return (
    <Center
      minW="100px"
      flexDirection="column"
      border="2px solid blue"
      borderRadius="10px"
    >
      <Flex
        as="a"
        href={link}
        target="_blank"
        w="80px"
        h="80px"
        margin="15px 20px"
      >
        <Img src={img} alt={name} cursor="pointer" w="80px" h="80px" />
      </Flex>

      <Flex px="15px" maxW="135px" py="10px" borderTop="2px solid blue">
        <Text>
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </Text>
      </Flex>
      <Flex w="100%" px="15px" mb="10px">
        <Center
          minW="50px"
          h="20px"
          borderRadius="5px"
          padding="5px 10px"
          bg="white"
          color="blue"
          fontSize="10px"
        >
          Repository
        </Center>
      </Flex>
    </Center>
  );
};

export default CardMyProjects;
