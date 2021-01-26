import styled from "styled-components"
import { pStyles } from "../../../styles/mixins/Typography"

export const StyledFieldset = styled.fieldset`
  border: none;
`

export const StyledLegend = styled.legend`
  ${pStyles}
  margin: 0;
  background: none;
  padding: 0;
  opacity: 0.4;
  padding-left: 13px;
`

export const StyledLabel = styled.label`
  ${pStyles}
  margin: 0;
  background: none;
  padding: 0;
  position: relative;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  padding: 10px 20px;
  transition: all 0.4s;

  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    opacity: 0.4;
    ${({ theme }) => `
        background-color: ${theme.colors.supremeRed};
    `};
  }
`

export const RadioWrapper = styled.div`
  position: relative;

  input {
    opacity: 0;

    &:checked {
      + label {
        color: white;

        &::before {
          ${({ theme }) => `
             opacity: 1;
             background-color: ${theme.colors.supremeRed};
            `};
        }
      }
    }
  }
`

export const Radios = styled.div`
  display: flex;
`
