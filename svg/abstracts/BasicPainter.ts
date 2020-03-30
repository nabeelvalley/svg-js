import NodeUpdater from './NodeUpdater'
import SVGShapeAttribute from '../enums/shape/SVGShapeAttribute'

/**
 * Common functionality for updating the colour and stroke styles of SVG elements
 */
abstract class BasicPainter extends NodeUpdater {
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
   * Apply the fill, stroke, and stroke-width attributes to element based on the current painter state
   * @param element element to apply the attributes to
   */
  protected applyPainterAttributes(element: SVGElement): void {
    element.setAttribute(SVGShapeAttribute.fill, this._fill)
    element.setAttribute(SVGShapeAttribute.stroke, this._stroke)
    element.setAttribute(SVGShapeAttribute.strokeWidth, this._strokeWidth)
  }
}

export default BasicPainter
