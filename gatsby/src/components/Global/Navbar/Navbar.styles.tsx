import styled from "styled-components"
import { buttonStyles } from "../../../styles/mixins/Buttons"
import { gridStyles, minBp } from "../../../styles/mixins/mixins"
import { logoStyles, pStyles } from "../../../styles/mixins/Typography"

export const NavWrapper = styled.nav`
  ${gridStyles}
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;

  ${({ theme }) => `
     background: ${theme.colors.supremeRed};
     border-bottom: 1px solid white;
     

  `}
`

export const NavbarItems = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  ${({ theme }) => `
    ${minBp(theme.breakpoints.b)} {
      flex-direction: row;
    }
  `}
`

export const Buttons = styled.div`
  display: flex;
  ${({ theme }) => `
    ${minBp(theme.breakpoints.b)} {
      margin-left: 20px;
    }
  `}
`

export const NavButton = styled.button`
  ${buttonStyles}
  &:first-child {
    padding-left: 0;
  }
  ${({ theme }) => `
    ${minBp(theme.breakpoints.b)} {
      padding: 0;
      &:first-child {
          margin-right: 20px;
      }
    }
  `}
`

export const Logo = styled.h2`
  ${logoStyles}
  margin: 0;
`

export const Checkout = styled.button`
  display: flex;
  background: none;
  border: none;
  padding-left: 0;
  ${({ theme }) => `
    ${minBp(theme.breakpoints.b)} {
      justify-content: center;
      align-items: center;
      margin-left: auto;
    }
  `}

  svg {
    color: white;
  }

  p {
    ${buttonStyles}
    color: white;
    padding: 0;
    background: none;
    margin: 0;
    margin-right: 10px;
  }
`
