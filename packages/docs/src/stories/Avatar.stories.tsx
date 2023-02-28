
import { Avatar, AvatarProps} from "@itoddy-ui/react"

import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Data Display/Avatar",
  component: Avatar,

  args:{
    src: 'https://github.com/ViniciusdePSouza.png',
    alt: 'Vinícius Souza'
  }
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};
export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined
    }
};
