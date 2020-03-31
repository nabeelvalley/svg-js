/**
 * Global SVG Element Attributes
 */
export interface Global {
  /**
   * SVG Element ID
   */
  id?: number | string
  /**
   * SVG Element Class
   */
  class?: number | string
  /**
   * SVG Style attribute
   */
  style?: number | string
}

/**
 * Global SVG Element Attributes
 */
enum GlobalAttributeName {
  /**
   * SVG Element ID
   */
  id = 'id',
  /**
   * SVG Element Class
   */
  class = 'class',
  /**
   * SVG Style attribute
   */
  style = 'style',
}

export default GlobalAttributeName
