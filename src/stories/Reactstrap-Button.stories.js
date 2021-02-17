import React from 'react';

import { Button } from 'reactstrap';

export default {
  title: 'Example/Reactstrap Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'info', 'danger', 'warning'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['', 'sm', 'lg'],
      },
    },
  },
  args: {
    color: 'primary',
    outline: false,
    block: false,
  },
};

const Template = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
};

export const Outline = Template.bind({});
Outline.args = {
  outline: true,
};
