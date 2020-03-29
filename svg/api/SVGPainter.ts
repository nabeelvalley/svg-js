import SVGPainterConfiguration from '../interfaces/SVGPainterConfiguration'
import SVGElementType from '../enums/SVGElementType'
import SVGAttribute from '../enums/SVGAttribute'
import BasicPainter from '../interfaces/BasicPainter'
import SVGPathBuilder from './SVGPathBuilder'
import KeyValuePair from '../interfaces/KeyValuePair'
import Exceptions from '../enums/Exceptions'
import createSVGElement from '../functions/createSVGElement'

class SVGPainter extends BasicPainter {
  protected _parent: SVGElement
  public getParent(): SVGElement {
    return this._parent
  }

  protected _canvas: SVGElement[]
  public getCanvas(): SVGElement[] {
    return this._canvas
  }

  protected _height: string
  public getHeight(value: string) {
    this._height = value
  }

  protected _width: string
  public getWidth(): string {
    return this._width
  }

  /**
   * Get the last SVG Element from the canvas that was created last
   */
  protected getWorkingNode(): SVGElement {
    if (!this._canvas.length) throw Exceptions.emptyCanvas

    const workingNode = this._canvas[this._canvas.length - 1]
    return workingNode
  }

  /**
   * Create a new Painter Instance. If an SVGElement is provided this will be set as the parent, if a DOM node is provded then an SVG node will be created inside of this
   */
  constructor(options?: SVGPainterConfiguration) {
    super()

    debugger

    if (options?.parent instanceof SVGElement) {
      this._parent = options.parent
      this._parent.setAttribute(SVGAttribute.height, options?.height.toString())
      this._parent.setAttribute(SVGAttribute.width, options?.width.toString())
    } else {
      this._parent = createSVGElement(SVGElementType.svg) as SVGSVGElement

      options.parent.appendChild(this._parent)
    }

    this._canvas = []
    this._height = options.height.toString()
    this._width = options.width.toString()
  }

  /**
   * Set the background color of the canvas. This will be set as the backmost element in the painting
   * @param color background color
   */
  public setBackground(color: string): this {
    let element = createSVGElement(SVGElementType.rect) as SVGRectElement

    element.setAttribute(SVGAttribute.height, this._height)
    element.setAttribute(SVGAttribute.width, this._width)

    element.setAttribute(SVGAttribute.fill, color)

    this._canvas.push(element)

    return this
  }

  /**
   * Paint a `rectangle` using the current fill and stroke settings
   * @param height
   * @param width
   * @param x
   * @param y
   * @param attributes
   */
  public paintRectangle(
    height: number | string,
    width: number | string,
    x: number | string,
    y: number | string,
    attributes?: KeyValuePair<SVGAttribute, number | string>[]
  ): this {
    return this.handleElementCreation(
      SVGElementType.rect,
      (e: SVGElement) => {
        e.setAttribute(SVGAttribute.height, height.toString())
        e.setAttribute(SVGAttribute.width, width.toString())
        e.setAttribute(SVGAttribute.x, x.toString())
        e.setAttribute(SVGAttribute.y, y.toString())
      },
      attributes
    )
  }

  /**
   * Paint a `circle` using the current fill and stroke settings
   * @param r
   * @param cx
   * @param cy
   * @param attributes
   */
  public paintCircle(
    r: number | string,
    cx: number | string,
    cy: number | string,
    attributes?: KeyValuePair<SVGAttribute, number | string>[]
  ): this {
    return this.handleElementCreation(
      SVGElementType.circle,
      (e: SVGElement) => {
        e.setAttribute(SVGAttribute.r, r.toString())
        e.setAttribute(SVGAttribute.cx, cx.toString())
        e.setAttribute(SVGAttribute.cy, cy.toString())
      },
      attributes
    )
  }

  /**
   * Paint an `ellipse` using the current fill and stroke settings
   * @param rx
   * @param ry
   * @param cx
   * @param cy
   * @param attributes
   */
  public paintEllipse(
    rx: number | string,
    ry: number | string,
    cx: number | string,
    cy: number | string,
    attributes?: KeyValuePair<SVGAttribute, number | string>[]
  ): this {
    return this.handleElementCreation(
      SVGElementType.ellipse,
      (e: SVGElement) => {
        e.setAttribute(SVGAttribute.rx, rx.toString())
        e.setAttribute(SVGAttribute.ry, ry.toString())
        e.setAttribute(SVGAttribute.cx, cx.toString())
        e.setAttribute(SVGAttribute.cy, cy.toString())
      },
      attributes
    )
  }

  /**
   * Paint a `line` using the current fill and stroke settings
   * @param x1
   * @param x2
   * @param y1
   * @param y2
   * @param attributes
   */
  public paintLine(
    x1: number | string,
    y1: number | string,
    x2: number | string,
    y2: number | string,
    attributes?: KeyValuePair<SVGAttribute, number | string>[]
  ): this {
    return this.handleElementCreation(
      SVGElementType.line,
      (e: SVGElement) => {
        e.setAttribute(SVGAttribute.x1, x1.toString())
        e.setAttribute(SVGAttribute.y1, y1.toString())
        e.setAttribute(SVGAttribute.x2, x2.toString())
        e.setAttribute(SVGAttribute.y2, y2.toString())
      },
      attributes
    )
  }

  /**
   * Paint a `polyline` using the current fill and stroke settings
   * @param points `
   * @param attributes
   */
  public paintPolyline(
    points: string,
    attributes?: KeyValuePair<SVGAttribute, number | string>[]
  ): this {
    return this.handleElementCreation(
      SVGElementType.polyline,
      (e: SVGElement) => {
        e.setAttribute(SVGAttribute.points, points)
      },
      attributes
    )
  }

  /**
   * Paint a `polygon` using the current fill and stroke settings
   * @param points
   * @param attributes
   */
  public paintPolygon(
    points: string,
    attributes?: KeyValuePair<SVGAttribute, number | string>[]
  ): this {
    return this.handleElementCreation(
      SVGElementType.polygon,
      (e: SVGElement) => {
        e.setAttribute(SVGAttribute.points, points)
      },
      attributes
    )
  }

  /**
   * Paint a `path` using the current fill and stroke settings. The `path` param can either be a `d` value for the path, or a built `SVGPathBuilder` object instance. To create a path from a fully defined SVGPathElement use the `paintSVG` command
   * @param path
   * @param attributes
   */
  public paintPath(
    path: string | SVGPathBuilder,
    attributes?: KeyValuePair<SVGAttribute, number | string>[]
  ): this {
    return this.handleElementCreation(
      SVGElementType.path,
      (e: SVGElement) => {
        e.setAttribute(SVGAttribute.d, path.toString())
      },
      attributes
    )
  }

  /**
   * Paints given SVG element to the canvas as-is
   * @param element element to paint
   */
  public paintSVG(element: SVGElement) {
    this._canvas.push(element)
    return this
  }

  /**
   * handle the shared element creation functionality
   * @param type type of elemnt being created
   * @param custom custom attributes to set or functionality to apply to element before applying the additional attrbiutes
   */
  private handleElementCreation(
    type: SVGElementType,
    custom: (SVGElement) => void,
    attributes: KeyValuePair<SVGAttribute, number | string>[]
  ): this {
    let element = createSVGElement(type)

    this.applyPainterAttributes(element)

    custom(element)

    this.applyAdditionalAttributes(element, attributes)

    this._canvas.push(element)

    return this
  }

  private applyAdditionalAttributes(
    element: SVGElement,
    attributes: KeyValuePair<SVGAttribute, number | string>[]
  ): void {
    attributes?.forEach(attribute =>
      element.setAttribute(attribute?.key, attribute?.value?.toString())
    )
  }

  /**
   * Arbitrary segment of code wthat will operate on `this` SVGPainter instance. This is useful for reusing paint segments/instructions
   * @param sequence function to be executed on the current painter instance
   * @param restorePainterState whether or not the current fill, stroke, strokeWidth settings should be restored after the paint sequence has been run
   */
  public paintSequence(
    sequence: (SVGPainter) => void,
    restorePainterState: boolean = true
  ): this {
    const initfill = this._fill
    const initStroke = this._stroke
    const initStrokeWidth = this._strokeWidth

    sequence(this)

    if (restorePainterState) {
      this._fill = initfill
      this._stroke = initStroke
      this._strokeWidth = initStrokeWidth
    }

    return this
  }

  /**
   * Replace all the existing content with the new content
   */
  public paintOver(): this {
    const canvasAsHtml = this._canvas.map(el => el.outerHTML).join('')

    this._parent.innerHTML = canvasAsHtml

    return this
  }

  /**
   * Paint all staged paints
   * @param clearPaints whether or not to clear painted items from staging. Setting this to false will mean these SVG objects are created again on next paint
   */
  public paint(clearPaints = true): this {
    const canvasAsHtml = this._canvas.map(el => el.outerHTML).join('')

    this._parent.innerHTML += canvasAsHtml

    if (clearPaints) {
      this._canvas = []
    }

    return this
  }
}

export default SVGPainter
