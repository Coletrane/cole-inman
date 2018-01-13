export const mobileWidth = 600
export const tabletWidth = 900

export const colors = {
  barColor: "black",
  barFontColor: "white"
}

export const boxShadow = "0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)"

export const mediaQueries = {
  all: {
    mobile: `(max-width: ${mobileWidth}px)`,
    tablet: `(min-width: ${mobileWidth + 1}px) and (max-width: ${tabletWidth}px)`,
    desktop: `(min-width: ${tabletWidth + 1}px)`
  },
  mobileAndDesktop: {
    mobile: `(max-width: ${mobileWidth}px)`,
    desktop: `(min-width: ${mobileWidth + 1}px)`
  }
}
