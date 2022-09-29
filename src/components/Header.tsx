import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      as="section"
      color="#F7FAFC"
      bg="#6B46C1"
      textAlign="center"
      pt="90px"
      pb="198px"
      px="2rem"
    >
      <Heading fontWeight={800} fontSize="3rem" mb="1rem">
        Simple pricing for your business
      </Heading>
      <Text fontWeight={500} fontSize="1.5rem">
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
  );
};

export default Header;
