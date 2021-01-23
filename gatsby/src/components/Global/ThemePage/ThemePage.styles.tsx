import styled from 'styled-components'
import {
  logoStyles,
  h2Styles,
  h3Styles,
  h4Styles,
  h5Styles,
  pStyles,
  linkStyles,
} from '../../../styles/mixins/Typography'

import { buttonStyles } from '../../../styles/mixins/Buttons'

// BG COLOR FOR EXAMPLE AS TEXT IS WHITE.
export const Logo = styled.h1`
  ${logoStyles}
  ${({ theme }) => `
    background-color: ${theme.colors.supremeRed};
    padding: 20px;
  `}
`
export const Header2 = styled.h2`
  ${h2Styles}
`

export const Header3 = styled.h3`
  ${h3Styles}
`

export const Header4 = styled.h4`
  ${h4Styles}
`

export const Header5 = styled.h5`
  ${h5Styles}
`

export const Paragraph = styled.p`
  ${pStyles}
`

export const Button = styled.button`
  ${buttonStyles}
`

export const StyledLink = styled.a`
  ${linkStyles}
`
