import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Paragraph } from '../components/Paragraph/Paragraph';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Typography/Paragraph',
  component: Paragraph,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning'],
    },
    size: { control: 'select', options: ['xl', 'lg', 'md', 'sm'] },
  },
} as ComponentMeta<typeof Paragraph>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Paragraph> = (args) => (
  <Paragraph {...args}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aliquid assumenda commodi cumque
    dolore ducimus eaque eligendi facere illo, illum in labore magnam, maiores nulla quam quasi quod
    quos soluta?
  </Paragraph>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  color: 'primary',
  size: 'md',
};
