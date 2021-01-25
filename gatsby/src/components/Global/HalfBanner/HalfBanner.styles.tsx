import styled from "styled-components"
import { gridStyles, minBp } from "../../../styles/mixins/mixins"
import { h3Styles } from "../../../styles/mixins/Typography"

export const BannerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  ${({ theme }) => `
    ${minBp(theme.breakpoints.b)} {
        flex-direction: row;
        padding: 0 30px;   
    }

    ${minBp(theme.breakpoints.c)} {
        padding: 0 110px;
    }
  `};
`

export const BannerCard = styled.a`
  position: relative;

  ${({ theme }) => `
    ${minBp(theme.breakpoints.b)} {
        width: 50%;
        max-height: 700px;
        &:first-child {
            padding-right: 31px;
        }
    }
  `};
`

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
`

export const CardTitle = styled.h3`
  ${h3Styles}
  position: absolute;
  bottom: 4px;
  margin: 0;
  text-align: center;
  ${({ theme }) => `
    ${minBp(theme.breakpoints.b)} {
     bottom: 0;
    }
  `};
`
