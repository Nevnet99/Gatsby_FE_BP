import React from "react"
import Layout from "../components/Global/Layout/Layout"
import Carousel from "../components/Global/Carousel/Carousel"
import HalfBanner from "../components/Global/HalfBanner/HalfBanner"
import { ProductBanner3Col } from "../components/Global/ProductBanner3Col/ProductBanner3Col"

const IndexPage: React.FC = () => (
  <Layout>
    <Carousel />
    <HalfBanner />
    <ProductBanner3Col />
  </Layout>
)

export default IndexPage
