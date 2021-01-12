import React from 'react'

import { CheckoutStepper } from './CheckoutStepper'

export default {
  title: 'COMPONENTS/C-4 Checkout Stepper',
  component: CheckoutStepper,
  argTypes: {},
}

const Template = args => <CheckoutStepper {...args} />

export const Default = Template.bind({})
Default.args = {}
