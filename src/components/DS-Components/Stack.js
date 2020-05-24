import React, { Children } from "react";
import { Flex, Box } from "rebass/styled-components";
import { border, color, space } from "styled-system";
import styled from "styled-components";

const StackComponent = ({ spacing = "none", children, ...props }) => {
  const childrenArray = Children.toArray(children);

  return (
    <Flex {...props}>
      {childrenArray.map((child, index) => {
        if (index == 0) {
          return (
            <Box mt={spacing} mb={spacing}>
              {child}
            </Box>
          );
        } else {
          return <Box mb={spacing}>{child}</Box>;
        }
      })}
    </Flex>
  );
};

const Stack = styled(StackComponent)`
  ${color}
  ${space}
`;

export default Stack;
