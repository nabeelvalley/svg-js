import BasicPainter from '../interfaces/BasicPainter'
import SVGElementType from '../enums/SVGElementType'
import SVGAttribute from '../enums/SVGAttribute'
import createSVGElement from '../functions/createSVGElement'

/**
 * Class for drawing an SVG path from Line Commands, information on how these work can be found on [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths)
 */
class SVGPathBuilder extends BasicPainter {
  private _lineCommands: string[] = []
  private _path: SVGPathElement

  constructor() {
    super()

    this._path = createSVGElement(SVGElementType.path) as SVGPathElement
  }

  /**
   * Get the last current SVG Element from the canvas that was created last
   */
  protected getWorkingNode(): SVGElement {
    return this.build().toPath()
  }

  /**
   * `Move To` Command, this is usually the first command and specifies what coordinates to start drawing at
   * @param x line end x coordinate
   * @param y line end y coordinate
   */
  public moveAbsolute(x: number, y: number): this {
    this._lineCommands.push(`M ${x} ${y}`)
    return this
  }

  /**
   * The relative form of the `Move To` command, this is usually the first command and specifies what coordinates to start drawing at
   * @param dx line end relative x coordinate
   * @param dy line end relative y coordinate
   */
  public moveRelative(dx: number, dy: number): this {
    this._lineCommands.push(`m ${dx} ${dy}`)
    return this
  }

  /**
   * `Line To` command for drawing a generic line between the given coordinates
   * @param x line end x coordinate
   * @param y line end y coordinate
   */
  public drawLineAbsolute(x: number, y: number): this {
    this._lineCommands.push(`L ${x} ${y}`)
    return this
  }

  /**
   * Relative form of the `Line To` command for drawing a generic line between the given coordinates
   */
  public drawLineRelative(dx: number, dy: number): this {
    this._lineCommands.push(`l ${dx} ${dy}`)
    return this
  }

  /**
   * `Line To` command for drawing horizontal lines
   * @param x line end x coordinate
   */
  public drawHorizontalAbsolute(x: number): this {
    this._lineCommands.push(`H ${x}`)
    return this
  }

  /**
   * Relative form of the `Line To` command for drawing horizontal lines
   * @param dx line end relative x coordinate
   */
  public drawHorizontalRelative(dx: number): this {
    this._lineCommands.push(`h ${dx}`)
    return this
  }

  /**
   * `Line To` command for drawing vertical lines
   * @param y line end y coordinate
   */
  public drawVerticalAbsolute(y: number): this {
    this._lineCommands.push(`V ${y}`)
    return this
  }

  /**
   * Relative form of the `Line To` command for drawing vertical lines
   * @param dy line end relative y coordinate
   */
  public drawVerticalRelative(dy: number): this {
    this._lineCommands.push(`v ${dy}`)
    return this
  }

  /**
   * A Cubic Bezier curve with the first control point at the start of the line and the second at the end of the line
   * @param x1 first control point x coordinate
   * @param y1 first control point y coordinate
   * @param x2 second control point x coordinate
   * @param y2 second control point y coordinate
   * @param x line end x coordinate
   * @param y line end y coordinate
   */
  public drawCubicAbsolute(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x: number,
    y: number
  ): this {
    this._lineCommands.push(`C ${x1} ${y1}, ${x2} ${y2}, ${x} ${y}`)
    return this
  }

  /**
   * Relativive form of the Cubic Bezier curve with the first control point at the start of the line and the second at the end of the line
   * @param dx1 first control point x length
   * @param dy1 first control point y length
   * @param dx2 second control point x length
   * @param dy2 second control point y length
   * @param dx line end relative x coordinate
   * @param dy line end relative y coordinate
   */
  public drawCubicRelative(
    dx1: number,
    dy1: number,
    dx2: number,
    dy2: number,
    dx: number,
    dy: number
  ): this {
    this._lineCommands.push(`c ${dx1} ${dy1}, ${dx2} ${dy2}, ${dx} ${dy}`)
    return this
  }

  /**
   * A Cubic Bezier curve with the first control point at the end of the previous curve and the second at the end of the line
   * @param x2 second control point x coordinate
   * @param y2 second control point y coordinate
   * @param x line end x coordinate
   * @param y line end y coordinate
   */
  public drawJointCubicAbsolute(
    x2: number,
    y2: number,
    x: number,
    y: number
  ): this {
    this._lineCommands.push(`S ${x2} ${y2}, ${x} ${y}`)
    return this
  }

  /**
   * Relative form of a Cubic Bezier curve with the first control point at the end of that at the previous curve and the second at the end of the line
   * @param dx2 second control point x length
   * @param dy2 second control point y length
   * @param dx line end relative x coordinate
   * @param dy line end relative y coordinate
   */
  public drawJointCubicRelative(
    dx2: number,
    dy2: number,
    dx: number,
    dy: number
  ): this {
    this._lineCommands.push(`s ${dx2} ${dy2}, ${dx} ${dy}`)
    return this
  }

  /**
   * A Quadratic Bezier curve with the first control point with a single control point
   * @param x1 control point x coordinate
   * @param y1 control point y coordinate
   * @param x line end x coordinate
   * @param y line end y coordinate
   */
  public drawQuadraticAbsolute(
    x1: number,
    y1: number,
    x: number,
    y: number
  ): this {
    this._lineCommands.push(`Q ${x1} ${y1}, ${x} ${y}`)
    return this
  }

  /**
   * Relative form of a Quadratic Bezier curve with the first control point with a single control point
   * @param dx1 control point x length
   * @param dy1 control point y length
   * @param dx line end relative x coordinate
   * @param dy line end relative y coordinate
   */
  public drawQuadraticRelative(
    dx1: number,
    dy1: number,
    dx: number,
    dy: number
  ): this {
    this._lineCommands.push(`q ${dx1} ${dy1}, ${dx} ${dy}`)
    return this
  }

  /**
   * A Quadratic Bezier curve that is joint to a previous curve, the control point is inferred from the end control of the previous curve
   * @param x line end x coordinate
   * @param y line end y coordinate
   */
  public drawJointQuadraticAbsolute(x: number, y: number): this {
    this._lineCommands.push(`T ${x} ${y}`)
    return this
  }

  /**
   * Relative form of a Quadratic Bezier curve that is joint to a previous curve, the control point is inferred from the end control of the previous curve
   * @param dx control point x length
   * @param dy control point y length
   */
  public drawJointQuadraticRelative(dx: number, dy: number): this {
    this._lineCommands.push(`t ${dx} ${dy}`)
    return this
  }

  /**
   * Arc Curve based on an ellipse with `rx` and `ry` radii
   * @param rx x radius of arc
   * @param ry y radius of arc
   * @param xAxisRotation x axis rotation in degrees
   * @param largeArcFlag large arc sweep flag value
   * @param sweepFlag sweep flag value
   * @param x arc x coordinate
   * @param y arc y coordinate
   */
  public drawArcAbsolute(
    rx: number,
    ry: number,
    xAxisRotation: number,
    largeArcFlag: boolean,
    sweepFlag: boolean,
    x: number,
    y: number
  ): this {
    this._lineCommands.push(
      `A ${rx} ${ry}, ${xAxisRotation}, ${+largeArcFlag}, ${+sweepFlag}, ${x} ${y}`
    )
    return this
  }

  /**
   * Relative form of an Arc Curve based on an ellipse with `rx` and `ry` radii
   * @param rx x radius of arc
   * @param ry y radius of arc
   * @param xAxisRotation x axis rotation in degrees
   * @param largeArcFlag large arc sweep flag value
   * @param sweepFlag sweep flag value
   * @param dx arc relative x coordinate
   * @param dy arc relative y coordinate
   */
  public drawArcRelative(
    rx: number,
    ry: number,
    xAxisRotation: number,
    largeArcFlag: boolean,
    sweepFlag: boolean,
    dx: number,
    dy: number
  ): this {
    this._lineCommands.push(
      `a ${rx} ${ry}, ${xAxisRotation}, ${+largeArcFlag}, ${+sweepFlag}, ${dx} ${dy}`
    )
    return this
  }

  /**
   * `Close Path` command
   */
  public closePath() {
    this._lineCommands.push('Z')
  }

  /**
   * Add line command to path
   * @param command SVG Line Command or array of Line Commands as a string
   */
  public addLineCommand(commands: string | string[]) {
    if (typeof commands === 'string') this._lineCommands.push(commands)
    else this._lineCommands.push(...commands)
  }

  /**
   * Apply the current line commands to the path and set the fill, stroke, and stroke-width properties to the element
   */
  public build(): this {
    this.applyPainterAttributes(this._path)

    const d = this.toString()

    this._path.setAttribute(SVGAttribute.d, d)

    return this
  }

  /**
   * Get the string representation of a path, this is also the `d` property for a path
   */
  public toString(): string {
    return this._lineCommands.join('\n')
  }

  /**
   * Build and get the SVG `path` element
   */
  public toPath(): SVGPathElement {
    this.build()
    return this._path
  }
}

export default SVGPathBuilder
