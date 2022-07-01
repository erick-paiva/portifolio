import { Box, Center, Heading } from "@chakra-ui/react";
import { RiMenu3Line } from "react-icons/ri";
interface HeaderProps {
  callback?: () => void;
}

const Header = ({ callback }: HeaderProps) => {
  return (
    <Center
      as="header"
      w="100%"
      h="80px"
      color="white"
      paddingX="20px"
      justifyContent="space-between"
      fontSize="30px"
      borderBottom="2px solid black"
    >
      <Heading>Erick Paiva</Heading>
      <Box
        transition="ease-in 0.2s"
        _hover={{
          transform: "scale(1.1)",
        }}
        {...(callback && { onClick: callback })}
      >
        <RiMenu3Line cursor="pointer" />
      </Box>
    </Center>
  );
};

export default Header;
