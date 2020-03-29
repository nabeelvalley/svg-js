import SVGManagerConfiguration from '../interfaces/SVGManagerConfiguration'
import SVGPainterConfiguration from '../interfaces/SVGPainterConfiguration'
import SVGElementType from '../enums/SVGElementType'
import SVGManager from './SVGManager'
import SVGAttribute from '../enums/SVGAttribute'
import SVGAttributeKV from '../interfaces/SVGAttributeKV'

class SVGPainter {
  private _svgns = 'http://www.w3.org/2000/svg'

  private _parent: SVGSVGElement | SVGGElement | HTMLElement
  public getParent(): SVGSVGElement | SVGGElement | HTMLElement {
    return this._parent
  }

  private _canvas: SVGElement[]
  public getCanvas(): SVGElement[] {
    return this._canvas
  }

  private _height: string
  public getHeight(value: string) {
    this._height = value
  }

  private _width: string
  public getWidth(): string {
    return this._width
  }

  private _fill: string = 'white'
  public getFill(): string {
    return this._fill
  }

  private _stroke: string = 'black'
  public getStroke(): string {
    return this._stroke
  }

  private _strokeWidth: string = '1px'
  public getStrokeWidth(): string {
    return this._strokeWidth
  }

  /**
   * Create a new Painter Instance
   */
  constructor(options?: SVGPainterConfiguration) {
    if (
      options?.parent instanceof SVGSVGElement ||
      options?.parent instanceof SVGGElement
    ) {
      this._parent = options.parent
    } else {
      this._parent = document.createElementNS(
        this._svgns,
        SVGElementType.svg
      ) as SVGSVGElement

      options.parent.appendChild(this._parent)
    }

    if (this._parent instanceof SVGSVGElement) {
      this._parent.setAttribute(SVGAttribute.height, options?.height.toString())
      this._parent.setAttribute(SVGAttribute.width, options?.width.toString())
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
    let element = document.createElementNS(
      this._svgns,
      SVGElementType.rect
    ) as SVGRectElement

    element.setAttribute(SVGAttribute.height, this._height)
    element.setAttribute(SVGAttribute.width, this._width)

    element.setAttribute(SVGAttribute.fill, color)

    this._canvas.push(element)

    return this
  }

  /**
   * Set fill color for future paints, default white
   * @param color fill color
   */
  public setFill(color: string): this {
    this._fill = color
    return this
  }

  /**
   * Set stroke color for future paints, default black
   * @param color stroke color
   */
  public setStroke(color: string): this {
    this._stroke = color
    return this
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
    attributes?: SVGAttributeKV[]
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
    attributes?: SVGAttributeKV[]
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
    attributes?: SVGAttributeKV[]
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
    x2: number | string,
    y1: number | string,
    y2: number | string,
    attributes?: SVGAttributeKV[]
  ): this {
    return this.handleElementCreation(
      SVGElementType.line,
      (e: SVGElement) => {
        e.setAttribute(SVGAttribute.x1, x1.toString())
        e.setAttribute(SVGAttribute.x2, x2.toString())
        e.setAttribute(SVGAttribute.y1, y1.toString())
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
  public paintPolyline(points: string, attributes?: SVGAttributeKV[]): this {
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
  public paintPolygon(points: string, attributes?: SVGAttributeKV[]): this {
    return this.handleElementCreation(
      SVGElementType.polygon,
      (e: SVGElement) => {
        e.setAttribute(SVGAttribute.points, points)
      },
      attributes
    )
  }

  /**
   * Paint a `path` using the current fill and stroke settings
   * @param d
   * @param attributes
   */
  public paintPath(d: string, attributes?: SVGAttributeKV[]): this {
    return this.handleElementCreation(
      SVGElementType.path,
      (e: SVGElement) => {
        e.setAttribute(SVGAttribute.d, d)
      },
      attributes
    )
  }

  /**
   * handle the shared element creation functionality
   * @param type type of elemnt being created
   * @param custom custom attributes to set or functionality to apply to element before applying the additional attrbiutes
   */
  private handleElementCreation(
    type: SVGElementType,
    custom: (SVGElement) => void,
    attributes: SVGAttributeKV[]
  ): this {
    let element = document.createElementNS(this._svgns, type) as SVGElement

    this.applyPainterAttributes(element)

    custom(element)

    this.applyAdditionalAttributes(element, attributes)

    this._canvas.push(element)

    return this
  }

  /**
   * Apply the fill, stroke, and stroke-width attributes to element based on the current painter state
   * @param element element to apply the attributes to
   */
  private applyPainterAttributes(element: SVGElement): void {
    element.setAttribute(SVGAttribute.fill, this._fill)
    element.setAttribute(SVGAttribute.stroke, this._stroke)
    element.setAttribute(SVGAttribute.strokeWidth, this._strokeWidth)
  }

  private applyAdditionalAttributes(
    element: SVGElement,
    attributes: SVGAttributeKV[]
  ): void {
    attributes?.forEach(attribute =>
      element.setAttribute(attribute?.name, attribute?.value?.toString())
    )
  }

  /**
   * Arbitrary segment of code where the SVGPainter that will be passed is the current SVGPainter instance.This is useful for reusing paint segments/instructions
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

    console.log(initStroke)
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
