import ElementType from '../../elements/ElementType'

export const svgNS = 'http://www.w3.org/2000/svg'

/**
 * Create an SVG Element based on type, essentially a wrapper for `createElementNS`
 */
const createSVGElement = (type: ElementType): SVGElement =>
  document.createElementNS(svgNS, type) as SVGElement

export default createSVGElement
