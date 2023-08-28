/* eslint-disable react/jsx-no-undef */
import { useColorMode } from "@chakra-ui/color-mode";
import { Stack, Circle, Flex, Box, Text, Button } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      />

      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing={isNotSmallerScreen ? "200px" : "0"}
        alignSelf="flex-start"
        p={isNotSmallerScreen ? 32 : "0"}
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hai, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Aldi Balkar
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>Web Developer</Text>
          <Button
            mt={8}
            colorScheme="blue"
            onClick={() => window.open("https://gagitualdi.com")}
          >
            Hire Me
          </Button>
        </Box>
      </Flex>
    </Stack>
  );
}

export default Header;
