import React from "react";
import { HStack, Icon, Text, StackProps } from "@chakra-ui/react";
import { CheckIcon } from "../icons/Icons";

const PricingListItem = (props: StackProps) => {
  const { children, ...rest } = props;

  return (
    <HStack as="li" spacing="5" {...rest}>
      <Icon as={CheckIcon} w="1.375rem" h="1.375rem" />
      <Text textAlign="left">{children}</Text>
    </HStack>
  );
};

export default PricingListItem;
