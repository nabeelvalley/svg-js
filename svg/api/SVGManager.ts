import SVGManagerConfiguration from '../interfaces/SVGManagerConfiguration'
import SVGElementType from '../enums/SVGElementType'
import createSVGElement from '../functions/createSVGElement'

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

  /**
   * Create an SVG root element, element will be added as a child to the parent if provided. Create `svg` node if parent is `div`, create `g` node if parent is `svg` unless explicitly stated
   * @param options configuration options for SVG root element
   */
  constructor(options?: SVGManagerConfiguration) {
    if (options?.parent instanceof SVGElement) {
      this.root = options.parent
    } else {
      if (options?.parent instanceof HTMLElement) {
        this.self = createSVGElement(options?.type || SVGElementType.svg)

        this.root = this.self
        options.parent.appendChild(this.self)
      } else if (options?.parent instanceof SVGManager) {
        this.self = createSVGElement(options?.type || SVGElementType.g)

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
   * Append child to root node
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
