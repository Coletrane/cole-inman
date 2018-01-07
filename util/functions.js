const mobileWidth = 600

export const isMobile = () => {
  // Normally this would be done using @media queries
  // but I am demonstrating React/JS knowledge with this project

  // Additionally, this shows the split between client and server side
  // code by checking if we are in the browser or server
  if (process.browser) {
    return document.documentElement.clientWidth < mobileWidth
  } else {
    return false
  }
}


export const getComponent = (props, slot) => {
  return props.children.filter( (comp) => {
    return comp.slot === slot;
  });
}
