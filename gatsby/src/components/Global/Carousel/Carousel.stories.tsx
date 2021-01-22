import React from 'react';
import Carousel from './Carousel';

export default {
  title: 'COMPONENTS/C-1 Carousel',
  component: Carousel,
  argTypes: {},
};

const Template = (args) => <Carousel {...args} />;

export const Default = Template.bind({});
Default.args = {};
