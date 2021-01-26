import styled from "styled-components"

export const CarouselWrapper = styled.div`
  ${({ theme }) => `
    max-height: 100%;
    overflow: hidden;
    .carousel__dot-group {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;

        .carousel__dot {
            border: 2px solid gray;
            border-radius: 35px;
            height: 15px;
            width: 15px;
            margin: 0 5px;
            &--selected {
                background-color: ${theme.colors.supremeRed};
            }
        }
    }
    
`}
`

export const SlideImage = styled.img`
  width: 100%;
  height: auto;
`
