import React from 'react'

import { CheckoutCard } from './CheckoutCard'

export default {
  title: 'COMPONENTS/C-2 Checkout Card',
  component: CheckoutCard,
  argTypes: {},
}

const Template = args => <CheckoutCard {...args} />

export const Default = Template.bind({})
Default.args = {}
