/**
 * Attributes for base SVG Shape Elements
 */
enum GenericShapeAttributeName {
  /**
   * SVG `svg` and `rect` height
   */
  height = 'height',
  /**
   * SVG `svg` and `rect` width
   */
  width = 'width',
  /**
   * SVG `rect` Element top-left x position
   */
  x = 'x',
  /**
   * SVG `rect` Element top-left y position
   */
  y = 'y',
  /**
   * SVG `circle`/`ellipse` center x position
   */
  cx = 'cx',
  /**
   * SVG `circle`/`ellipse` center y position
   */
  cy = 'cy',
  /**
   * SVG `circle` radius
   */
  r = 'r',
  /**
   * SVG `circle` circumference
   */
  pathLength = 'pathLength',
  /**
   * SVG `ellipse` x radius, or in this case of a `rect` this is the x corner radius
   */
  rx = 'rx',
  /**
   * SVG `ellipse` y radius, or in this case of a `rect` this is the y corner radius
   */
  ry = 'ry',
  /**
   * SVG `line` start x position
   */
  x1 = 'x1',
  /**
   * SVG `line` end x position
   */
  x2 = 'x2',
  /**
   * SVG `line` start y position
   */
  y1 = 'y1',
  /**
   * SVG `line` end y position
   */
  y2 = 'y2',
  /**
   * SVG `polyline` or `polygon` points list. Each point consists of an x and y coordinate and is separated by a comma. The list of points (0,0) (0,1) (1,2) (2,2) would be written as `0, 0 1, 0 2, 2`. In the case of a `polygon` the shape will be automatically closed
   */
  points = 'points',
  /**
   * SVG Shape Stroke Color
   */
  stroke = 'stroke',
  /**
   * SVG Shape Stroke Width
   */
  strokeWidth = 'stroke-width',
  /**
   * SVG Shape Fill Color
   */
  fill = 'fill',
  /**
   * SVG `path` Line Commands
   */
  d = 'd',
}

export default GenericShapeAttributeName
