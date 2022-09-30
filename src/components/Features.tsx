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
    <Box maxW="1024px" m="auto" mt="3.75rem" mb="8" as="section">
      <HStack px="12" spacing="5">
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
