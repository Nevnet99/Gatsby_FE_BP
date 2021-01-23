import { css } from "styled-components"

export const minBp = breakpoint => `@media (min-width: ${breakpoint}px)`

export const gridStyles = css`
  padding: 0 15px;
  ${({ theme }) => `
    ${minBp(theme.breakpoints.b)} {
        padding: 0 30px;
    }

    ${minBp(theme.breakpoints.c)} {
        padding: 0 110px;
    }
  `}
`
