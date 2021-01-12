import React from 'react'

import { ThemePage } from './ThemePage'

export default {
  title: 'THEME/Theme Guidelines',
  component: ThemePage,
  argTypes: {},
}

const Template = args => <ThemePage {...args} />

export const Typography = Template.bind({})
Typography.args = {
  typography: true,
}

export const Buttons = Template.bind({})
Buttons.args = {
  buttons: true,
}

export const FormElements = Template.bind({})
FormElements.args = {
  form: true,
}
