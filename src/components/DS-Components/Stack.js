import React, { Children } from "react";
import { Flex, Box } from "rebass/styled-components";
import { border, space } from "styled-system";
import { styled } from "styled-components";

const Stack = ({ spacing = "none", children, ...props }) => {
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

export default Stack;
