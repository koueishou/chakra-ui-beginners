import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      as="section"
      color="gray.50"
      bg="purple.600"
      textAlign={["left", "left", "center"]}
      pt="90px"
      pb="198px"
      px="8"
    >
      <Heading fontWeight="extrabold" fontSize={["3xl", "3xl", "5xl"]} mb="4">
        Simple pricing for your business
      </Heading>
      <Text fontWeight="medium" fontSize={["lg", "lg", "2xl"]}>
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
  );
};

export default Header;
