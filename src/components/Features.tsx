import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import {
  HassleFreeIcon,
  MoneyBackGuaranteeIcon,
  MonthlySubscriptionIcon,
} from "../icons/Icons";
import Feature from "./Feature";

const Features = () => {
  return (
    <Box maxW="1024px" m="auto" mt="3.75rem" mb="8" as="section">
      <Stack
        px="12"
        spacing={["6", "6", "5"]}
        direction={["column", "column", "row"]}
      >
        <Feature icon={MoneyBackGuaranteeIcon}>
          30 days money back Guarantee
        </Feature>
        <Feature icon={HassleFreeIcon}>No setup fees 100% hassle-free</Feature>
        <Feature icon={MonthlySubscriptionIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </Stack>
    </Box>
  );
};

export default Features;
