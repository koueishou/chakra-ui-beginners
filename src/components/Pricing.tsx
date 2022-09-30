import React from "react";
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import PricingListItem from "./PricingListItem";

const Pricing = () => {
  return (
    <Box as="section" mx="6">
      <Box
        maxW="994px"
        margin="auto"
        mt="-40"
        borderRadius="xl"
        overflow="hidden"
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
        textAlign="center"
      >
        <Flex direction={["column", "column", "row"]}>
          <Box bg="#F0EAFB" p="3.75rem">
            <Text fontSize="xl" fontWeight="extrabold">
              Premium PRO
            </Text>
            <Heading as="h3" fontSize={["5xl", "5xl", "6xl"]} mt="4">
              $329
            </Heading>
            <Text color="gray.900" fontSize="lg" fontWeight="medium" mt="2">
              billed just once
            </Text>
            <Button colorScheme="purple" size="lg" w="282px" mt="6">
              Get Started
            </Button>
          </Box>
          <Box p="3.75rem" fontSize="lg" bg="white">
            <Text textAlign="left">
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as="ul" spacing="5" pt="6">
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
    </Box>
  );
};

export default Pricing;
