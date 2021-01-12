import React from 'react'

import { FullCheckoutForm } from './FullCheckoutForm'

export default {
  title: 'Pages | Forms/Full Checkout Form',
  component: FullCheckoutForm,
  argTypes: {},
}

const Template = args => <FullCheckoutForm {...args} />

export const Default = Template.bind({})
Default.args = {}
