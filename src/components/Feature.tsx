import { HStack, Icon, StackProps, Text } from "@chakra-ui/react";
import React from "react";

interface FeatureProps extends StackProps {
  icon: React.ElementType;
}

const Feature = (props: FeatureProps) => {
  const { icon, children, ...rest } = props;

  return (
    <HStack {...rest} spacing="6">
      <Icon as={icon} boxSize="12" />
      <Text textAlign="left" fontSize="lg" fontWeight="bold">
        {children}
      </Text>
    </HStack>
  );
};

export default Feature;
