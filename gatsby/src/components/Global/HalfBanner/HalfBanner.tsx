import React, { FC } from "react"
import {
  BannerCard,
  BannerWrapper,
  CardImage,
  CardTitle,
} from "./HalfBanner.styles"

import yeezyImg from "../../../assets/images/yeezy-shot.jpeg"
import supremeImg from "../../../assets/images/supreme-city.jpeg"

// No alt required as the images are decorative

export const HalfBanner: FC = () => (
  <BannerWrapper>
    <BannerCard href="#">
      <CardImage alt="" src={yeezyImg} />
      <CardTitle>Shoes.</CardTitle>
    </BannerCard>
    <BannerCard href="#">
      <CardImage alt="" src={supremeImg} />
      <CardTitle>Clothing.</CardTitle>
    </BannerCard>
  </BannerWrapper>
)
