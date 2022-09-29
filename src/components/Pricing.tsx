import React from "react";
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import PricingListItem from "./PricingListItem";

const Pricing = () => {
  return (
    <Box
      maxW="994px"
      margin="auto"
      mt="-160px"
      borderRadius="0.75rem"
      overflow="hidden"
      boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      textAlign="center"
      as="section"
    >
      <Flex>
        <Box bg="#F0EAFB" p="3.75rem">
          <Text fontSize="2rem" fontWeight={800}>
            Premium PRO
          </Text>
          <Heading as="h3" fontSize="3.75rem" mt="1rem">
            $329
          </Heading>
          <Text
            color="#171923"
            fontSize="1.125rem"
            fontWeight={500}
            mt="0.5rem"
          >
            billed just once
          </Text>
          <Button colorScheme="purple" size="lg" w="282px" mt="1.5rem">
            Get Started
          </Button>
        </Box>
        <Box p="3.75rem" fontSize="1.125rem" bg="white">
          <Text textAlign="left">
            Access these features when you get this pricing package for your
            business.
          </Text>
          <Stack as="ul" spacing="1.25rem" pt="1.5rem">
            <PricingListItem>
              International calling and messaging API
            </PricingListItem>
            <PricingListItem>Additional phone numbers</PricingListItem>
            <PricingListItem>Automated messages via Zapier</PricingListItem>
            <PricingListItem>24/7 support and consulting</PricingListItem>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Pricing;
