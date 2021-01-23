import React from "react"

import { ProductView } from "./ProductView"

export default {
  title: "COMPONENTS/C-11 Product View",
  component: ProductView,
  argTypes: {},
}

const Template = args => <ProductView {...args} />

export const Default = Template.bind({})
Default.args = {}
