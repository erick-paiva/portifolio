import { Box, Center, HStack, Img, Text } from "@chakra-ui/react";
import { socialmedias } from "./data";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <Center bg="blue.500" h="111px" w="100%" flexDirection="column">
      <HStack mb="15px" spacing="50px">
        {socialmedias.map(({ img, link, ...rest}) => (
          <Box as="a" href={link} target="_blank" key={link}>
            <Img src={img} alt="" h="23px" w="23px" {...rest} />
          </Box>
        ))}
      </HStack>
      <Text color="white" fontWeight="bold" fontSize="15px">
        © Erick Paiva - 2022 - Phone: +55 92 99531-3336
      </Text>
    </Center>
  );
};

export default Footer;
