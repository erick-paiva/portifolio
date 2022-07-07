import { Center, Img } from "@chakra-ui/react";

interface CardMyProjectsProps {
  img: string;
  name: string;
}

const CardHardSkills = ({ img, name }: CardMyProjectsProps) => {
  return (
    <Center padding={img ? "0" : "15px"}>
      <Img
        src={img}
        alt={name}
        cursor="pointer"
        objectFit="contain"
        borderRadius="10px 10px 0 0"
        w={{
          xs: "30px",
          lg: "50px",
          xl: "80px",
          "2xl": "100px",
        }}
        h={{
          xs: "30px",
          lg: "50px",
          xl: "80px",
          "2xl": "100px",
        }}
      />
    </Center>
  );
};

export default CardHardSkills;
