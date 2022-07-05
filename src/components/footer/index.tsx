import { Box, Center, HStack, Img, Text } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { socialmedias } from "./data";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <Center bg="blue.500" h="111px" w="100%" flexDirection="column">
      <HStack mb="15px" spacing="50px">
        {socialmedias.map(({ img, link, ...rest}) => (
          <Box as="a" href={link} target="_blank">
            <Img src={img} alt="" h="23px" w="23px" {...rest} />
          </Box>
        ))}
      </HStack>
      <Text color="white" fontWeight="bold" fontSize="15px">
        © Erick Paiva - 2022 - Phone: +55 92 99531-3336
      </Text>
      {/* <Link
        to="header"
        style={{
          height: "80px",
          width: "100%",
          background: "red",
        }}
        smooth={true}
        duration={300}
      ></Link> */}
    </Center>
  );
};

export default Footer;
