enum ElementType {
  /**
   * SVG Base `svg` element
   */
  svg = 'svg',
  /**
   * SVG Group `g` element
   */
  g = 'g',
  /**
   * SVG `rect` element
   */
  rect = 'rect',
  /**
   * SVG `circle` element
   */
  circle = 'circle',
  /**
   * SVG `ellipse` element
   */
  ellipse = 'ellipse',
  /**
   * SVG `line` element
   */
  line = 'line',
  /**
   * SVG `polyline` element
   */
  polyline = 'polyline',
  /**
   * SVG `polygon` element
   */
  polygon = 'polygon',
  /**
   * SVG `path` element
   */
  path = 'path',
  /**
   * SVG `animate` element, applicable properties are in the AnimationAttribute enum
   */
  animate = 'animate',
}

export default ElementType
