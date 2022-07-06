import { Box, Center, Flex, Heading, Img, Text } from "@chakra-ui/react";
import ImgDefault from "../../assets/home/github.png";

interface CardMyProjectsProps {
  img?: string;
  name: string;
  site?: string;
  link: string;
  description: string;
}

const CardMyProjects = ({
  img = ImgDefault,
  name,
  link,
  site,
  description,
}: CardMyProjectsProps) => {
  return (
    <Center
      minH={{
        xs: "400px",
        lg: "180px",
        xl: "250px",
        "2xl": "410px",
      }}
      w={{
        xs: "140px",
        lg: "180px",
        xl: "250px",
        "2xl": "410px",
      }}
      flexDirection="column"
      border="2px solid blue"
      borderRadius="10px"
      justifyContent="space-between"
    >
      <Center
        w="100%"
        padding={img ? "0" : "15px"}
        borderBottom="2px solid blue"
      >
        <Box as="a" href={img !== ImgDefault ? site : link} target="_blank">
          <Img
            src={img}
            alt={name}
            cursor="pointer"
            objectFit="cover"
            borderRadius="10px 10px 0 0"
            w={
              img
                ? "100%"
                : {
                    xs: "80px",
                    lg: "100px",
                    xl: "150px",
                    "2xl": "300px",
                  }
            }
            h={{
              xs: "80px",
              lg: "100px",
              xl: "150px",
              "2xl": "300px",
            }}
          />
        </Box>
      </Center>

      <Flex
        minH="250px"
        flexDir="column"
        justifyContent="space-between"
        alignItems="center"
        py="15px"
      >
        <Heading
          fontSize={{
            xs: "15px",
            lg: "18px",
            xl: "20px",
            "2xl": "20px",
          }}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          w="80%"
        >
          {name}
        </Heading>
        <Text
          maxW={{
            xs: "135px",
            lg: "170px",
            xl: "250px",
            "2xl": "350px",
          }}
          px="15px"
        >
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </Text>
        <Flex w="100%" px="15px" mb="10px">
          <Center
            minW="50px"
            h="20px"
            borderRadius="5px"
            padding="5px 10px"
            bg="white"
            color="blue"
            fontSize="10px"
            as="a"
            href={link}
            target="_blank"
          >
            Repository
          </Center>
        </Flex>
      </Flex>
    </Center>
  );
};

export default CardMyProjects;
