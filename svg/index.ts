import SVGManagerConfiguration from './interfaces/SVGManagerConfiguration'
import ElementType from './enums/ElementType'

/**
 * Class for managing and interacting with SVG Elements
 */
class SVGManager {
  /**
   * SVG root element
   */
  public root?: SVGSVGElement | SVGGElement

  /**
   * The current SVG element
   */
  public self?: SVGSVGElement | SVGGElement

  /**
   * Create an SVG root element, element will be added as a child to the parent if provided. Create `svg` node if parent is `div`, create `g` node if parent is `svg` unless explicitly stated
   * @param options configuration options for SVG root element
   */
  constructor(options?: SVGManagerConfiguration) {
    if (
      options?.parent instanceof SVGSVGElement ||
      options?.parent instanceof SVGGElement
    ) {
      this.root = options.parent
    } else {
      const svgns = 'http://www.w3.org/2000/svg'

      if (options?.parent instanceof HTMLElement) {
        this.self = document.createElementNS(
          svgns,
          options?.type || ElementType.svg
        )

        this.root = this.self
        options.parent.appendChild(this.self)
      } else if (options?.parent instanceof SVGManager) {
        this.self = document.createElementNS(
          svgns,
          options?.type || ElementType.g
        )

        this.root = options.parent?.root
        options.parent.appendChild(this.self)
      }

      options?.attributes?.forEach(attribute =>
        this.self.setAttribute(attribute.name, attribute.value.toString())
      )
    }

    if (options?.id) this.self.id = options.id
  }

  /**
   * Remove child from root node
   * @param node child node
   */
  appendChild(node: SVGElement) {
    this.root.appendChild(node)
  }

  /**
   * Remove child from root node
   * @param node child node
   */
  removeChild(node: SVGElement) {
    this.root.removeChild(node)
  }
}

export default SVGManager
