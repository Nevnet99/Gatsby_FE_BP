import React from "react"

import { SubtotalTable } from "./SubtotalTable"

export default {
  title: "COMPONENTS/C-13 Subtotal Table",
  component: SubtotalTable,
  argTypes: {},
}

const Template = args => <SubtotalTable {...args} />

export const Default = Template.bind({})
Default.args = {}
