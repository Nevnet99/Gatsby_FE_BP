import React from "react"

import Layout from "./Layout.tsx"

export default {
  title: "COMPONENTS/C-7 Layout",
  component: Layout,
  argTypes: {},
}

const Template = args => <Layout {...args} />

export const Default = Template.bind({})
Default.args = {}
