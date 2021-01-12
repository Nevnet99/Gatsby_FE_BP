import React from 'react'

import { PoppinForm } from './PoppinForm'

export default {
  title: 'Pages | Forms/Poppin Form',
  component: PoppinForm,
  argTypes: {},
}

const Template = args => <PoppinForm {...args} />

export const Default = Template.bind({})
Default.args = {}
