import React from "react"
import {
  FooterColumn,
  FooterGridWrapper,
  FooterLink,
  FooterLinks,
  FooterLinkWrapper,
  StyledFooter,
  FooterTitle,
  Copyright,
} from "./Footer.styles"

export const Footer = () => (
  <StyledFooter>
    <FooterGridWrapper>
      <FooterColumn>
        <FooterLinks>
          <FooterTitle>INFORMATION.</FooterTitle>
          <FooterLinkWrapper>
            <FooterLink>About us</FooterLink>
          </FooterLinkWrapper>
          <FooterLinkWrapper>
            <FooterLink>Terms and Conditions</FooterLink>
          </FooterLinkWrapper>
          <FooterLinkWrapper>
            <FooterLink>Contact Us</FooterLink>
          </FooterLinkWrapper>
          <FooterLinkWrapper>
            <FooterLink>Returns</FooterLink>
          </FooterLinkWrapper>
        </FooterLinks>
      </FooterColumn>

      <FooterColumn>
        <FooterLinks>
          <FooterTitle>OPENING TIMES.</FooterTitle>
          <FooterLinkWrapper>
            <FooterLink>Monday - Saturday: 10am - 5pm</FooterLink>
          </FooterLinkWrapper>
          <FooterLinkWrapper>
            <FooterLink>Sunday: 1pm - 3pm (PURCHASES ONLY)</FooterLink>
          </FooterLinkWrapper>
        </FooterLinks>
      </FooterColumn>

      <FooterColumn>
        <FooterLinks>
          <FooterLinkWrapper>
            <FooterTitle>DELIVERY QUERYS.</FooterTitle>
          </FooterLinkWrapper>
          <FooterLinkWrapper>
            <FooterLink>NEXT DAY FREE OVER £100</FooterLink>
          </FooterLinkWrapper>
          <FooterLinkWrapper>
            <FooterLink>Having Problems ?</FooterLink>
          </FooterLinkWrapper>
        </FooterLinks>
      </FooterColumn>
    </FooterGridWrapper>
    <FooterGridWrapper>
      <Copyright>©️ LUKE BRANNAGAN 2021</Copyright>
    </FooterGridWrapper>
  </StyledFooter>
)
