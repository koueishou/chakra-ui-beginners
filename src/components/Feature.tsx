import { HStack, Icon, StackProps, Text } from "@chakra-ui/react";
import React from "react";

interface FeatureProps extends StackProps {
  icon: React.ElementType;
}

const Feature = (props: FeatureProps) => {
  const { icon, children, ...rest } = props;

  return (
    <HStack {...rest} spacing="1.5rem">
      <Icon as={icon} boxSize="3rem" />
      <Text textAlign="left" fontSize="1.125rem" fontWeight={700}>
        {children}
      </Text>
    </HStack>
  );
};

export default Feature;
