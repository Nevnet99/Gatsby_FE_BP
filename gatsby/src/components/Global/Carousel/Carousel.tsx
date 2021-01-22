import React, { useState } from "react"
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel"

import "pure-react-carousel/dist/react-carousel.es.css"

import { CarouselWrapper, SlideImage } from "./Carousel.styles"

const Carousel: React.FC = () => {
  const [carouselPosition, setCarouselPosition] = useState(0)

  const onCarouselIncrement = value => {
    setCarouselPosition(value)
  }

  return (
    <CarouselWrapper>
      <CarouselProvider
        naturalSlideWidth={1000}
        naturalSlideHeight={600}
        totalSlides={3}
        infinite
        isPlaying
      >
        <Slider>
          <Slide>
            <SlideImage src="https://via.placeholder.com/1000x600" />
          </Slide>
          <Slide>
            <SlideImage src="https://via.placeholder.com/1000x600" />
          </Slide>
          <Slide>
            <SlideImage src="https://via.placeholder.com/1000x600" />
          </Slide>
        </Slider>
        <DotGroup />
      </CarouselProvider>
    </CarouselWrapper>
  )
}

export default Carousel
