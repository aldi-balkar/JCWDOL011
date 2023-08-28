/* eslint-disable react/jsx-no-undef */
import { Flex, Heading, IconButton, VStack, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social"

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex justify="space-between" align="center" w="100%">
        <Heading size="md" fontWeight="semibold" color="cyan.400">
          Portfolio
        </Heading>
        <Flex>
          <IconButton
          
            icon={<FaLinkedin />}
            isRound={true}
            onClick={toggleColorMode}
            ml="auto" // This will push the button to the right
          />
          <Flex>
            <IconButton
              ml={2}
              icon={<FaInstagram />}
              isRound={true}
              onClick={toggleColorMode}
            />
            <IconButton
              ml={2}
              icon={<FaGithub />}
              isRound={true}
              onClick={toggleColorMode}
            />
            <IconButton
              ml={8}
              icon={isDark ? <FaSun /> : <FaMoon />}
              isRound={true}
              onClick={toggleColorMode}
            />
          </Flex>
        </Flex>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export default App;
