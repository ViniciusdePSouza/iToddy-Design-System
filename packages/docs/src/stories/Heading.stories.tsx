import { Heading, HeadingProps } from "@itoddy-ui/react";

import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Typography/Heading",
  component: Heading,

  args: {
    children: 'Just a test Heading',
  },

  argTypes: {
    size:{
      options: ["sm","md","lg","xl","2xl","4xl","5xl","6xl"],
      control: {
        type: 'inline-radio'
      }
    },
  }
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
       children: 'H1 Heading',
       as: 'h1',
    },
    parameters: {
        docs: {
            description: {
                story: 'By default the heading components will always be a `h2`, but you can customize it using the `as` property',
            }
        }
    }
};
