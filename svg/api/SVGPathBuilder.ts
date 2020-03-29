import BasicPainter from '../interfaces/BasicPainter'
import SVGElementType from '../enums/SVGElementType'
import SVGAttribute from '../enums/SVGAttribute'

/**
 * Class for building an SVG path from Line Commands, information on how these work can be found on [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths)
 */
class SVGPathBuilder extends BasicPainter {
  private _lineCommands: string[] = []
  private _path: SVGPathElement

  constructor() {
    super()

    this._path = this.createSVGElement(SVGElementType.path) as SVGPathElement
  }

  public moveAbsolute(x: number, y: number): this {
    this._lineCommands.push(`M ${x} ${y}`)
    return this
  }

  public moveRelative(dx: number, dy: number): this {
    this._lineCommands.push(`m ${dx} ${dy}`)
    return this
  }

  public buildLineAbsolute(x: number, y: number): this {
    this._lineCommands.push(`L ${x} ${y}`)
    return this
  }

  public buildLineRelative(dx: number, dy: number): this {
    this._lineCommands.push(`l ${dx} ${dy}`)
    return this
  }

  public buildHorizontalAbsolute(x: number): this {
    this._lineCommands.push(`H ${x}`)
    return this
  }

  public buildHorizontalRelative(dx: number): this {
    this._lineCommands.push(`h ${dx}`)
    return this
  }

  public buildVerticalAbsolute(y: number): this {
    this._lineCommands.push(`V ${y}`)
    return this
  }

  public buildVerticalRelative(dy: number): this {
    this._lineCommands.push(`v ${dy}`)
    return this
  }

  public buildCubicAbsolute(
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

  public buildCubicRelative(
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

  public buildJointCubicAbsolute(
    x2: number,
    y2: number,
    x: number,
    y: number
  ): this {
    this._lineCommands.push(`S ${x2} ${y2}, ${x} ${y}`)
    return this
  }

  public buildJointCubicRelative(
    dx2: number,
    dy2: number,
    dx: number,
    dy: number
  ): this {
    this._lineCommands.push(`s ${dx2} ${dy2}, ${dx} ${dy}`)
    return this
  }

  public buildQuadraticAbsolute(
    x1: number,
    y1: number,
    x: number,
    y: number
  ): this {
    this._lineCommands.push(`Q ${x1} ${y1}, ${x} ${y}`)
    return this
  }

  public buildQuadraticRelative(
    dx1: number,
    dy1: number,
    dx: number,
    dy: number
  ): this {
    this._lineCommands.push(`q ${dx1} ${dy1}, ${dx} ${dy}`)
    return this
  }

  public buildJointQuadraticAbsolute(x: number, y: number): this {
    this._lineCommands.push(`T ${x} ${y}`)
    return this
  }

  public buildJointQuadraticRelative(dx: number, dy: number): this {
    this._lineCommands.push(`t ${dx} ${dy}`)
    return this
  }

  public buildArcAbsolute(
    rx: number,
    ry: number,
    xAxisRotation: number,
    largeArcFlag: boolean,
    sweepFlag: boolean,
    x: number,
    y: number
  ): this {
    this._lineCommands.push(
      `A ${rx} ${ry} ${xAxisRotation} ${+largeArcFlag} ${+sweepFlag} ${x} ${y}`
    )
    return this
  }

  public buildArcRelative(
    rx: number,
    ry: number,
    xAxisRotation: number,
    largeArcFlag: boolean,
    sweepFlag: boolean,
    dx: number,
    dy: number
  ): this {
    this._lineCommands.push(
      `a ${rx} ${ry} ${xAxisRotation} ${+largeArcFlag} ${+sweepFlag} ${dx} ${dy}`
    )
    return this
  }

  public closePath() {
    this._lineCommands.push('Z')
  }
  /**
   * Build the final path and apply the fill, stroke, and stroke-width properties to the element
   */
  public build() {
    this.applyPainterAttributes(this._path)

    const d = this.toString()

    this._path.setAttribute(SVGAttribute.d, d)
  }

  /**
   * Get the string representation of a path, this is also the `d` property for a path
   */
  public toString(): string {
    return this._lineCommands.join()
  }

  /**
   * Get the built SVG `path` element
   */
  public toPath(): SVGPathElement {
    return this._path
  }
}

export default SVGPathBuilder
