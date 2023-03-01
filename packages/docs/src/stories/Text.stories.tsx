import { Text, TextProps } from "@itoddy-ui/react";

import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Typography/Text",
  component: Text,

  args: {
    children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit ex, ipsam quo corporis sequi officia et qui. Facere itaque eveniet quibusdam deserunt incidunt, consectetur officiis? Odit cupiditate ratione voluptates laboriosam!',
    size: 'md'
  },

  argTypes: {
    size:{
      options: ["xxs","xs","sm","md","lg","xl","2xl","4xl","5xl","6xl","7xl","8xl","9xl"],
      control: {
        type: 'inline-radio'
      }
    },
  }
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
    args: {
       children: 'Strong text',
       as: 'strong',
    },
};
