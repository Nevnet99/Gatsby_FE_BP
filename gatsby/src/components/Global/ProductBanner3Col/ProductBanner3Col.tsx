import React, { FC } from "react"
import ProductCard from "../../Shared/ProductCard/ProductCard"
import { ProductBanner, BannerTitle } from "./ProductBanner3Col.styles"

export const ProductBanner3Col: FC = () => {
  const amntOfProducts = 12

  return (
    <>
      <BannerTitle>NEW PRODUCTS.</BannerTitle>
      <ProductBanner>
        {Array(amntOfProducts)
          .fill()
          .map((x, i) => (
            <ProductCard key="i" />
          ))}
      </ProductBanner>
    </>
  )
}
