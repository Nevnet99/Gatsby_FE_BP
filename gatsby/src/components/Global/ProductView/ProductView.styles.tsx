import styled from "styled-components"
import { gridStyles, minBp } from "../../../styles/mixins/mixins"
import { h2Styles, pStyles } from "../../../styles/mixins/Typography"

export const ProductViewWrapper = styled.div`
  ${gridStyles}
  max-width: 75rem;
  margin: 0 auto;
`

export const Title = styled.h2`
  ${h2Styles}
  margin-top: 50px;

  ${({ theme }) => `
    ${minBp(theme.breakpoints.b)} {
        margin-top: 60px;
    }
  `};
`

export const ProductImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ProductImage = styled.img`
  width: 100%;
  height: auto;

  ${({ theme }) => `
    ${minBp(theme.breakpoints.b)} {
        width: 50%;
    }
  `};
`

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  span {
    ${pStyles}
    opacity: 0.4;
    margin: 0;
    padding: 0;
    background: none;
    margin-bottom: 10px;
  }
`

export const PriceValue = styled.h4`
  ${pStyles}
  background: none;
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  padding: 0;
  ${({ theme }) => `
    color ${theme.colors.secondary};
  `};
`
