import { css } from "styled-components"

export const logoStyles = css`
  ${({ theme }) => `
    font-size: ${theme.fontSize.logo};
    font-family: ${theme.font.main};
    color: ${theme.colors.text};

 `}
`
export const h2Styles = css`
  ${({ theme }) => `
    font-size: ${theme.fontSize.h2};
    font-family: ${theme.font.main};
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.colors.text};
    background-color: ${theme.colors.supremeRed};
    padding: 20px;
    white-space: no-wrap;

 `}
`

export const h3Styles = css`
  ${({ theme }) => `
    font-size: ${theme.fontSize.h3};
    font-family: ${theme.font.main};
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.colors.text};
    background-color: ${theme.colors.supremeRed};
    padding: 20px;
    letter-spacing: 1.5px;
 `}
`
export const h4Styles = css`
  ${({ theme }) => `
    font-size: ${theme.fontSize.h4};
    font-family: ${theme.font.main};
    font-weight: ${theme.fontWeight.regular};
    color: ${theme.colors.text};
    background-color: ${theme.colors.supremeRed};
    padding: 20px;
 `}
`

export const h5Styles = css`
  ${({ theme }) => `
    font-size: ${theme.fontSize.h5};
    font-family: ${theme.font.main};
    font-weight: ${theme.fontWeight.regular};
    color: ${theme.colors.text};
    background-color: ${theme.colors.supremeRed};
    padding: 20px;
 `}
`

export const pStyles = css`
  ${({ theme }) => `
    font-size: ${theme.fontSize.p};
    font-family: ${theme.font.main};
    font-weight: ${theme.fontWeight.regular};
    background-color: ${theme.colors.supremeRed};
    padding: 20px;
 `}
`

export const linkStyles = css`
  ${({ theme }) => `
      font-size: ${theme.fontSize.p};
      font-family: ${theme.font.main};
      font-weight: ${theme.fontWeight.regular};
      padding: 20px;
      text-decoration: none;
      color: ${theme.colors.secondary};

      &:visited {
        color: ${theme.colors.text};
      }
  `}
`
