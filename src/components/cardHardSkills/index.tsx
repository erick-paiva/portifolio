import { Box, Center, Img, keyframes, Tooltip } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface CardMyProjectsProps {
  img: string;
  name: string;
  time: number;
}

const CardHardSkills = ({ img, name, time }: CardMyProjectsProps) => {
  const [activeAnimation, setActiveAnimation] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [inViewPort, setInViewPort] = useState(inView);

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

  const animationImg = keyframes`
  from{
    transform: rotate(0deg)
  }to{
    transform: rotate(360deg)
  }

`;

  const newTime = time > 4 ? 4 : time;
  useEffect(() => {
    if (inView && !inViewPort) setInViewPort(true);
  }, [inViewPort, inView]);

  return (
    <Center
      padding={img ? "0" : "15px"}
      {...(inViewPort && { position: "relative" })}
      animation={
        inViewPort ? `${animation} ${newTime}s ease-in-out normal` : ""
      }
      ref={ref}
      userSelect="none"
    >
      <Tooltip label={name}>
        <Box
          minH={{
            xs: "30px",
            lg: "50px",
            xl: "80px",
            "2xl": "100px",
          }}
        >
          {inViewPort && (
            <Img
              sx={{
                userSelect: "none",
              }}
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
              _hover={{
                transform: "scale(1.1)",
              }}
              onClick={() => {
                setActiveAnimation(true);
                if (!activeAnimation)
                  setTimeout(() => {
                    setActiveAnimation(false);
                  }, 2000);
              }}
              {...(activeAnimation && { animation: `${animationImg} 2s ease` })}
              transitionDuration="0.5s"
            />
          )}
        </Box>
      </Tooltip>
    </Center>
  );
};

export default CardHardSkills;
