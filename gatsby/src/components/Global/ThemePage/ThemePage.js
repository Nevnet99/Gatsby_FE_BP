import React from 'react'

import {
  Header2,
  Header3,
  Header4,
  Header5,
  Logo,
  Paragraph,
  Button,
  StyledLink,
} from './ThemePage.styles'

export const ThemePage = ({ typography, buttons, form }) => (
  <div>
    {typography && (
      <>
        <Logo>Logo.</Logo>
        <Header2>H2 Headline</Header2>
        <Header3>H3 Headline</Header3>
        <Header4>H4 Headline</Header4>
        <Header5>H5 Headline</Header5>
        <Paragraph>Paragraph</Paragraph>
        <StyledLink href="#">Link</StyledLink>
      </>
    )}
    {buttons && <Button>Add to cart</Button>}
  </div>
)
