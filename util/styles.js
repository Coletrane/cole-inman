import { css } from "styled-components"

export const sizes = {
  ceiling: 99999,
  desktop: 1200,
  dablet: 1000,
  tablet: 700,
  phablet: 550,
  phone: 400
}

// @formatter:off
export const mediaQuery = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16

  accumulator[label] = (...args) => css`
        @media (max-width: ${emSize}em) {
          ${css(...args)}
      `

  return accumulator
}, {})

// @formatter:on

export const topBarStyle = {
  backgroundColor: "rgba(0,0,0,.75)",
  color: "white"
}

export const subtitleStyle = {
  fontSize: "2rem"
}

export const boxShadow =
  "0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)"
