import React from "react"

import { SizesSelector } from "./SizesSelector"

export default {
  title: "COMPONENTS/C-12 Sizes Selector",
  component: SizesSelector,
  argTypes: {},
}

const Template = args => <SizesSelector {...args} />

export const Default = Template.bind({})
Default.args = {}
