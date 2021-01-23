import React from "react"

import { HalfBanner } from "./HalfBanner"

export default {
  title: "COMPONENTS/C-6 Half Banner",
  component: HalfBanner,
  argTypes: {},
}

const Template = args => <HalfBanner {...args} />

export const Default = Template.bind({})
Default.args = {}
