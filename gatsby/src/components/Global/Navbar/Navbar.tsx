import React from "react"
import Icon from "../../Shared/Icon/Icon"
import {
  Buttons,
  Checkout,
  Logo,
  NavbarItems,
  NavButton,
  NavWrapper,
} from "./Navbar.styles"

export const Navbar = () => (
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
)
