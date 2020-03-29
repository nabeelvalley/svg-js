import SVGAttribute from '../enums/SVGAttribute'
import SVGElementType from '../enums/SVGElementType'

export default abstract class BasicPainter {
  protected _svgns = 'http://www.w3.org/2000/svg'

  protected _fill: string = 'white'
  /**
   * Get fill color for future paints, default white
   */
  public getFill(): string {
    return this._fill
  }

  /**
   * Set fill color for future paints, default white
   * @param color fill color
   */
  public setFill(color: string): this {
    this._fill = color
    return this
  }

  protected _stroke: string = 'black'

  /**
   * Get stroke color for future paints, default black
   */
  public getStroke(): string {
    return this._stroke
  }

  /**
   * Set stroke color for future paints, default black
   * @param color stroke color
   */
  public setStroke(color: string): this {
    this._stroke = color
    return this
  }

  protected _strokeWidth: string = '1px'

  /**
   * Get stroke width for future paints, default 1px
   */
  public getStrokeWidth(): string {
    return this._strokeWidth
  }

  /**
   * Set stroke width for future paints, default 1px
   * @param width stroke width
   */
  public setStrokeWidth(width: number | string): this {
    this._strokeWidth = width.toString()
    return this
  }

  /**
   * Create an SVG Element based on type, essentially a wrapper for `createElementNS`
   */
  protected createSVGElement = (type: SVGElementType): SVGElement =>
    document.createElementNS(this._svgns, type) as SVGElement

  /**
   * Apply the fill, stroke, and stroke-width attributes to element based on the current painter state
   * @param element element to apply the attributes to
   */
  protected applyPainterAttributes(element: SVGElement): void {
    element.setAttribute(SVGAttribute.fill, this._fill)
    element.setAttribute(SVGAttribute.stroke, this._stroke)
    element.setAttribute(SVGAttribute.strokeWidth, this._strokeWidth)
  }
}
