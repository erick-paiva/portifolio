import { Center, Img, keyframes } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useIntersection } from "../../hooks/v";

interface CardMyProjectsProps {
  img: string;
  name: string;
  time: number;
}

const CardHardSkills = ({ img, name, time }: CardMyProjectsProps) => {
  const ref = useRef() as any;
  const inViewport = useIntersection(ref, "30px");

  const [inView, serInView] = useState(false);

  const animation = keyframes`
    0% {
      filter: opacity(0);
      left: -50px;
      z-index: 20;
      transform: rotate(100deg)
    }
    100%{
      filter: opacity(1);
      left: 0px;
      z-index: 20;
      transform: rotate(360deg)
    }
  `;

  const newTime = time > 4 ? 4 : time;
  useEffect(() => {
    if (!inView && inViewport) serInView(true);
  }, [inViewport, inView]);

  return (
    <Center
      padding={img ? "0" : "15px"}
      {...(inView && { position: "relative" })}
      animation={inView ? `${animation} ${newTime}s ease-in-out normal` : ""}
      ref={ref}
    >
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
