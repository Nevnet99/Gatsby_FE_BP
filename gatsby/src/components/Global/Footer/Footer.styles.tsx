import styled from "styled-components"
import { gridStyles, minBp } from "../../../styles/mixins/mixins.js"
import { h5Styles, pStyles } from "../../../styles/mixins/Typography.js"

export const StyledFooter = styled.footer`
  padding-top: 40px;
  padding-bottom: 20px;
  ${({ theme }) => `
        background-color: ${theme.colors.supremeRed};
    `}
`

export const FooterGridWrapper = styled.div`
  ${gridStyles}
  display: flex;
  flex-direction: column;

  ${({ theme }) => `
    ${minBp(theme.breakpoints.b)} {
        flex-direction: row;
    }
  `}
`

export const FooterColumn = styled.div`
  width: 100%;
  margin-bottom: 35px;

  ${({ theme }) => `
    ${minBp(theme.breakpoints.b)} {
        width: 33.33%;
        margin-bottom: 0;
        &:not(:last-child) {
            padding-right: 70px;
            
        }
    }
  `};
`

export const FooterTitle = styled.h5`
  ${h5Styles}
  border-bottom: 2px solid white;
  padding: 0;
  margin: 0;
  padding-bottom: 5px;
  margin-bottom: 20px;
`

export const FooterLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`

export const FooterLinkWrapper = styled.li`
  margin-bottom: 10px;
`

export const FooterLink = styled.a`
  ${pStyles}
  padding: 0;
  margin: 0;
  color: white;
`

export const Copyright = styled.p`
  ${pStyles}
  margin: 0;
  width: 100%;
  text-align: center;
  padding: 0;
  color: white;
`
