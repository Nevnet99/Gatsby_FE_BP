import React from 'react'

import { ProductBanner3Col } from './ProductBanner3Col'

export default {
  title: 'COMPONENTS/C-10 Product Banner 3 Col',
  component: ProductBanner3Col,
  argTypes: {},
}

const Template = args => <ProductBanner3Col {...args} />

export const Default = Template.bind({})
Default.args = {}
