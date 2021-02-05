import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

import Sidebar from "../Sidebar";

const Layout = ({ children }) => {
  return (
    <Flex direction="column">
      <Box
        bg="#101010"
        w="100%"
        p={4}
        color="white"
        fontFamily="Monda"
        d="flex"
        alignItems="center">
        <Link href="/">
          <Text ml="24" cursor="pointer" fontSize="3xl" userSelect="none">
            notesbin
          </Text>
        </Link>
      </Box>
      <Flex>
        <Sidebar />
        <Box w="100%">{children}</Box>
      </Flex>
    </Flex>
  );
};

export default Layout;
