import { Box, BoxProps } from "@itoddy-ui/react";

import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Surfaces/Box",
  component: Box,

  args:{
    children:  (
        <>
          <span>Testing Box Element</span>
        </>
      ),
  },
  argTypes: {
    children: {
      control: {
        type: null 
      }
    }
  }
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
