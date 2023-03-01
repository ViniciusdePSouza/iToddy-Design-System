import { Box, Text, Multistep, MultiStepProps } from "@itoddy-ui/react";

import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Form/Multistep",
  component: Multistep,

  args: {
    size: 4,
    currentStep: 1
  },
  decorators: [
    (Story) => {
      return <Box as='label' css={{ display: 'flex', flexDirection: 'column', gap: '$2'}}>
        {Story()}
        </Box>;
    },
  ],
} as Meta<MultiStepProps>;

export const Primary: StoryObj<MultiStepProps> = {}

export const Full: StoryObj<MultiStepProps> = {
    args: {
        size: 4,
        currentStep: 4
    }
}
