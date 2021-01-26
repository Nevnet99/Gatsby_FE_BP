import React, { ChangeEvent, FC, useState } from "react"
import {
  Radios,
  RadioWrapper,
  StyledFieldset,
  StyledLabel,
  StyledLegend,
} from "./SizesSelector.styles"

export const SizesSelector: FC = () => {
  const sizes: number[] = [1, 5, 6, 12, 12.5, 11, 6.5, 6]
  const [selectedSize, setSelectedSize]: [
    number | null,
    (value: number) => void
  ] = useState(null)

  const handleRadioClick = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(parseInt(event.target.value))
  }

  return (
    <StyledFieldset>
      <StyledLegend>
        SIZE <span>OF SHOE</span>
      </StyledLegend>
      <Radios>
        {sizes.map((size, index) => (
          <RadioWrapper key={`size-${index}`}>
            <input
              type="radio"
              name="selectedSize"
              id={`size-${index}`}
              value={size}
              onClick={(event: ChangeEvent<HTMLInputElement>) =>
                handleRadioClick(event)
              }
            />
            <StyledLabel for={`size-${index.toString()}`}>{size}</StyledLabel>
          </RadioWrapper>
        ))}
      </Radios>
    </StyledFieldset>
  )
}
