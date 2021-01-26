import React, { FC } from "react"
import Icon from "../../Shared/Icon/Icon"
import {
  Buttons,
  Checkout,
  Logo,
  NavbarItems,
  NavButton,
  NavSpacer,
  NavWrapper,
} from "./Navbar.styles"

type Props = {
  spacer?: boolean
}

const Navbar: FC<Props> = ({ spacer }) => (
  <>
    <NavWrapper>
      <NavbarItems>
        <Logo>Kicks.</Logo>
        <Buttons>
          <NavButton>Shoes</NavButton>
          <NavButton>Clothing</NavButton>
        </Buttons>
        <Checkout>
          <p>View cart</p>
          <Icon icon="cart" />
        </Checkout>
      </NavbarItems>
    </NavWrapper>
    {spacer && <NavSpacer />}
  </>
)

export default Navbar
