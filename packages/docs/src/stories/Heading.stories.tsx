import { Heading, HeadingProps } from "@itoddy-ui/react";

import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Typography/Heading",
  component: Heading,

  args: {
    children: 'Just a test Heading',
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
       children: 'H1 Heading',
       as: 'h1',
    },
};
