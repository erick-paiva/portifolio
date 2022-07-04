import { Box, Center, Heading, keyframes } from "@chakra-ui/react";
import { RiMenu3Line } from "react-icons/ri";
interface HeaderProps {
  callback?: () => void;
}

const Header = ({ callback }: HeaderProps) => {
  const blink = keyframes`
    from {
      border-right: 2px solid white;
    }
    to {
      border-right: 2px solid transparent;
    }
  `

  const typewriter = keyframes`
    from {
      width: 0%;
    }
    to {
      width: 58%;
    }
  `;

  return (
    <Center
      as="header"
      w="100%"
      h="80px"
      color="white"
      paddingX="20px"
      justifyContent="space-between"
      fontSize="30px"
      borderBottom="2px solid blue"
      bg="#00000035"
    >
      <Heading
        animation={`${typewriter} 800ms steps(15) normal, ${blink} 800ms infinite normal`}
        transition="ease-in-out"
        overflow="hidden"
        whiteSpace="nowrap"
        borderRightWidth="2px"
        paddingRight="10px"
      >
        Erick Paiva
      </Heading>
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
