import React, { FC } from "react"
import {
  PriceValue,
  PriceWrapper,
  ProductImage,
  ProductLink,
  ProductMaker,
  ProductName,
  StyledProductCard,
} from "./ProductCard.styles"
import productShot from "../../../assets/images/product-shot.png"

const ProductCard: FC = () => {
  return (
    <StyledProductCard>
      <ProductLink href="#">
        <ProductName>1 Mid Royal 2020</ProductName>
        <ProductMaker>JORDAN</ProductMaker>
        <ProductImage src={productShot} />
        <PriceWrapper>
          <span>Price</span>
          <PriceValue>£350.00</PriceValue>
        </PriceWrapper>
      </ProductLink>
    </StyledProductCard>
  )
}

export default ProductCard
