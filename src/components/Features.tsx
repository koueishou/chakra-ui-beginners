import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import {
  HassleFreeIcon,
  MoneyBackGuaranteeIcon,
  MonthlySubscriptionIcon,
} from "../icons/Icons";
import Feature from "./Feature";

const Features = () => {
  return (
    <Box maxW="1024px" m="auto" mt="3.75rem" mb="2rem" as="section">
      <HStack px="3rem" spacing="1.25rem">
        <Feature icon={MoneyBackGuaranteeIcon}>
          30 days money back Guarantee
        </Feature>
        <Feature icon={HassleFreeIcon}>No setup fees 100% hassle-free</Feature>
        <Feature icon={MonthlySubscriptionIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </HStack>
    </Box>
  );
};

export default Features;
