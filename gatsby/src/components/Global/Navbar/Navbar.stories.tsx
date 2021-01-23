import React from "react"

import { Navbar } from "./Navbar"

export default {
  title: "COMPONENTS/C-8 Navbar",
  component: Navbar,
  argTypes: {},
}

const Template = args => <Navbar {...args} />

export const Default = Template.bind({})
Default.args = {}
