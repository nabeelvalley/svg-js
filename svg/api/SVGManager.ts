import SVGManagerConfiguration from '../interfaces/SVGManagerConfiguration'
import SVGElementType from '../enums/SVGElementType'

/**
 * Class for managing and interacting with SVG Elements
 */
class SVGManager {
  /**
   * SVG root element
   */
  public root?: SVGElement

  /**
   * The current SVG element
   */
  public self?: SVGElement

  private svgns = 'http://www.w3.org/2000/svg'

  /**
   * Create an SVG root element, element will be added as a child to the parent if provided. Create `svg` node if parent is `div`, create `g` node if parent is `svg` unless explicitly stated
   * @param options configuration options for SVG root element
   */
  constructor(options?: SVGManagerConfiguration) {
    if (options?.parent instanceof SVGElement) {
      this.root = options.parent
    } else {
      if (options?.parent instanceof HTMLElement) {
        this.self = document.createElementNS(
          this.svgns,
          options?.type || SVGElementType.svg
        ) as SVGElement

        this.root = this.self
        options.parent.appendChild(this.self)
      } else if (options?.parent instanceof SVGManager) {
        this.self = document.createElementNS(
          this.svgns,
          options?.type || SVGElementType.g
        ) as SVGElement

        this.root = options.parent?.root
        options.parent.appendChild(this.self)
      }

      options?.attributes?.forEach(attribute =>
        this.self.setAttribute(attribute.key, attribute.value.toString())
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
