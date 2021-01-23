import React from 'react'

import { Poppin } from './Poppin'

export default {
  title: 'COMPONENTS/C-9 Poppin',
  component: Poppin,
  argTypes: {},
}

const Template = args => <Poppin {...args} />

export const Default = Template.bind({})
Default.args = {}
