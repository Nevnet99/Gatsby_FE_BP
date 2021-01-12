import React from 'react'

import { CheckoutForm } from './CheckoutForm'

export default {
  title: 'COMPONENTS/C-3 Checkout Form',
  component: CheckoutForm,
  argTypes: {},
}

const Template = args => <CheckoutForm {...args} />

export const Default = Template.bind({})
Default.args = {}
