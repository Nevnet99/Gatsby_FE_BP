import styled from "styled-components"
import { minBp } from "../../../styles/mixins/mixins"
import { pStyles } from "../../../styles/mixins/Typography"

export const StyledProductCard = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  width: calc(100% - 51px);
  padding: 20px;

  ${({ theme }) => `
  border: 5px dashed ${theme.colors.supremeRed};
  ${minBp(theme.breakpoints.b)} {
      margin-bottom: 0;
      width: 25%;
      border: none;
      padding: 0;
  }
`};
`

export const ProductLink = styled.a`
  text-decoration: none;
  color: black;
  ${({ theme }) => `
  
  ${minBp(theme.breakpoints.b)} {
     padding: 40px 20px;
  }
`};
`

export const ProductName = styled.p`
  ${pStyles}
  background: none;
  margin: 0;
  padding: 0;
  opacity: 0.4;
  margin-bottom: 15px;
`

export const ProductMaker = styled.p`
  ${pStyles}
  background: none;
  margin: 0;
  padding: 0;
  font-weight: 600;
  margin-bottom: 10px;
`

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
`

export const PriceWrapper = styled.div`
  span {
    ${pStyles}
    background: none;
    margin: 0;
    padding: 0;
    opacity: 0.4;
  }
`

export const PriceValue = styled.p`
  ${pStyles}
  background: none;
  margin: 0;
  padding: 0;
  margin-top: 5px;
  font-weight: 600;
`
