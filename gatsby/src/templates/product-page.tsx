import React, { FC } from "react"
import Layout from "../components/Global/Layout/Layout"
import ProductView from "../components/Global/ProductView/ProductView"
import SizesSelector from "../components/Global/SizesSelector/SizesSelector"

const ProductPage: FC = () => {
  return (
    <Layout>
      <ProductView />
      <SizesSelector />
    </Layout>
  )
}

export default ProductPage
