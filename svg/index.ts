import SVGManagerConfiguration from './interfaces/SVGManagerConfiguration'
import ElementType from './enums/ElementType'
import SVGAttribute from './enums/SVGAttribute'

class SVGManager {
  /**
   * SVG root element
   */
  public root: SVGSVGElement

  /**
   * Create an SVG root element, element will be added as a child to the target if provided
   * @param options configuration options for SVG root element
   */
  constructor(options?: SVGManagerConfiguration) {
    this.root = document.createElementNS(
      'http://www.w3.org/2000/svg',
      ElementType.svg
    )

    if (options?.height)
      this.root.setAttribute(SVGAttribute.height, options.height.toString())

    if (options?.width)
      this.root.setAttribute(SVGAttribute.width, options.width.toString())

    if (options?.id) this.root.id = options.id
    if (options?.target) options.target.appendChild(this.root)
  }
}

export default SVGManager
