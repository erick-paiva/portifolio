import { Center, CloseButton, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-scroll";
import {
  RiHome7Fill,
  RiUser2Fill,
  RiBriefcaseFill,
  RiCompasses2Fill,
} from "react-icons/ri";
import { useHistory } from "react-router-dom";

interface SidebarProps {
  open?: boolean;
  callback: () => void;
}

const Sidebar = ({ open = true, callback }: SidebarProps) => {
  const history = useHistory();

  const {
    location: { pathname },
  } = history;

  const endPoints = [
    {
      Icon: <RiHome7Fill />,
      name: "Home",
      url: pathname !== "/" ? "/" : "header",
      route: pathname !== "/",
    },
    {
      Icon: <RiUser2Fill />,
      name: "About me",
      url: "aboutMe",
      route: false,
    },
    {
      Icon: <RiBriefcaseFill />,
      name: "Hard skills",
      url: "/hardskills",
      route: true,
    },
    {
      Icon: <RiCompasses2Fill />,
      name: "Projects",
      url: "projects",
      route: false,
    },
  ];

  return (
    <Center
      w="65%"
      h="100vh"
      position="fixed"
      right="0"
      bg="blue.500"
      transition="ease-in-out"
      transitionDuration="0.5s"
      css={{
        transform: open ? "" : "translateX(100%)",
      }}
      zIndex="999"
      maxW="330px"
      px="20px"
      flexDirection="column"
      color="white"
      justifyContent="space-between"
      py="10vh"
    >
      <CloseButton alignSelf="flex-end" fontSize="30px" onClick={callback} />
      <VStack w="100%" mb="60%">
        {endPoints.map(({ name, Icon, url, route }) => (
          <Center
            key={name}
            fontSize="30px"
            justifyContent="flex-start"
            w="100%"
            as={Link}
            offset={-100}
            cursor="pointer"
            to={url}
            smooth={true}
            duration={800}
            {...(route && { onClick: () => history.push(url) })}
          >
            {Icon}
            <Text ml="5%">{name}</Text>
          </Center>
        ))}
      </VStack>
    </Center>
  );
};

export default Sidebar;
