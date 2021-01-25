import React, { FC } from "react"
import {
  ProductImage,
  ProductViewWrapper,
  Title,
  ProductImageWrapper,
  PriceWrapper,
  PriceValue,
} from "./ProductView.styles"

import shoe from "../../../assets/images/product-shot.png"

export const ProductView: FC = () => (
  <ProductViewWrapper>
    <Title>Jordan 1 Mid Royale 2020</Title>
    <ProductImageWrapper>
      <ProductImage src={shoe} />
    </ProductImageWrapper>

    <PriceWrapper>
      <span>TOTAL PRICE</span>
      <PriceValue>£350.00</PriceValue>
    </PriceWrapper>
  </ProductViewWrapper>
)
