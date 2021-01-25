import styled from "styled-components"
import { gridStyles, minBp } from "../../../styles/mixins/mixins.js"
import { h5Styles } from "../../../styles/mixins/Typography.js"

export const ProductBanner = styled.article`
  ${gridStyles}
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  ${({ theme }) => `
    ${minBp(theme.breakpoints.b)} {
        flex-direction: row;
        max-width: 75rem;
        margin: 0 auto 40px auto;
        flex-wrap: wrap;
         
    }
  `}
`
export const BannerTitle = styled.h5`
  ${h5Styles}
  text-align: center;
  margin-top: 40px;
  max-width: 75rem;
  margin: 40px auto 20px auto;
  ${({ theme }) => `
    ${minBp(theme.breakpoints.b)} {
        margin-bottom: 0;
    }
  `}
`
