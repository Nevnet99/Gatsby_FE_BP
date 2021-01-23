import React, { FC, Fragment } from "react"
import { FiShoppingCart } from "react-icons/fi"

type iconProps = {
  icon: string
  width?: string
  height?: string
  fill?: string
}

const renderIcon: FC<iconProps> = ({ icon, width, height, fill }) => {
  const styles = {
    width: width || 24,
    height: height || 24,
    fill: fill || null,
  }

  const icons = {
    cart: <FiShoppingCart style={styles} />,
  }

  if (icon && icon.toLowerCase() in icons) {
    return icons[icon.toLowerCase()]
  }
}

const Icon: FC<iconProps> = props => <>{renderIcon(props)}</>

export default Icon
