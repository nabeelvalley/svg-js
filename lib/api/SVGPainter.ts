import SVGPainterConfiguration from './configuration/SVGPainterConfiguration'
import ElementType from '../elements/ElementType'
import SVGPathBuilder from './SVGPathBuilder'
import KeyValuePair from '../generic/KeyValuePair'
import Exceptions from '../generic/enums/Exceptions'
import createSVGElement from '../generic/functions/createSVGElement'
import BasicPainter from './abstracts/BasicPainter'
import GenericShapeAttributeName from '../elements/shape/GenericShapeAttributeName'
import ShapeAttributeName from '../elements/shape/ShapeAttribute'

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

    if (options?.parent instanceof SVGElement) {
      this._parent = options.parent
    } else {
      this._parent = createSVGElement(ElementType.svg) as SVGSVGElement

      options.parent.appendChild(this._parent)
    }

    this._parent.setAttribute(
      GenericShapeAttributeName.height,
      options?.height.toString()
    )
    this._parent.setAttribute(
      GenericShapeAttributeName.width,
      options?.width.toString()
    )

    this._canvas = []
    this._height = options.height.toString()
    this._width = options.width.toString()
  }

  /**
   * Set the background color of the canvas. This will be set as the backmost element in the painting
   * @param color background color
   */
  public setBackground(color: string): this {
    let element = createSVGElement(ElementType.rect) as SVGRectElement

    element.setAttribute(GenericShapeAttributeName.height, this._height)
    element.setAttribute(GenericShapeAttributeName.width, this._width)

    element.setAttribute(GenericShapeAttributeName.fill, color)

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
    attributes?: KeyValuePair<ShapeAttributeName, number | string>[]
  ): this {
    return this.handleElementCreation(
      ElementType.rect,
      (e: SVGElement) => {
        e.setAttribute(GenericShapeAttributeName.height, height.toString())
        e.setAttribute(GenericShapeAttributeName.width, width.toString())
        e.setAttribute(GenericShapeAttributeName.x, x.toString())
        e.setAttribute(GenericShapeAttributeName.y, y.toString())
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
    attributes?: KeyValuePair<ShapeAttributeName, number | string>[]
  ): this {
    return this.handleElementCreation(
      ElementType.circle,
      (e: SVGElement) => {
        e.setAttribute(GenericShapeAttributeName.r, r.toString())
        e.setAttribute(GenericShapeAttributeName.cx, cx.toString())
        e.setAttribute(GenericShapeAttributeName.cy, cy.toString())
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
    attributes?: KeyValuePair<ShapeAttributeName, number | string>[]
  ): this {
    return this.handleElementCreation(
      ElementType.ellipse,
      (e: SVGElement) => {
        e.setAttribute(GenericShapeAttributeName.rx, rx.toString())
        e.setAttribute(GenericShapeAttributeName.ry, ry.toString())
        e.setAttribute(GenericShapeAttributeName.cx, cx.toString())
        e.setAttribute(GenericShapeAttributeName.cy, cy.toString())
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
    attributes?: KeyValuePair<ShapeAttributeName, number | string>[]
  ): this {
    return this.handleElementCreation(
      ElementType.line,
      (e: SVGElement) => {
        e.setAttribute(GenericShapeAttributeName.x1, x1.toString())
        e.setAttribute(GenericShapeAttributeName.y1, y1.toString())
        e.setAttribute(GenericShapeAttributeName.x2, x2.toString())
        e.setAttribute(GenericShapeAttributeName.y2, y2.toString())
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
    attributes?: KeyValuePair<ShapeAttributeName, number | string>[]
  ): this {
    return this.handleElementCreation(
      ElementType.polyline,
      (e: SVGElement) => {
        e.setAttribute(GenericShapeAttributeName.points, points)
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
    attributes?: KeyValuePair<ShapeAttributeName, number | string>[]
  ): this {
    return this.handleElementCreation(
      ElementType.polygon,
      (e: SVGElement) => {
        e.setAttribute(GenericShapeAttributeName.points, points)
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
    attributes?: KeyValuePair<ShapeAttributeName, number | string>[]
  ): this {
    return this.handleElementCreation(
      ElementType.path,
      (e: SVGElement) => {
        e.setAttribute(GenericShapeAttributeName.d, path.toString())
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
    type: ElementType,
    custom: (SVGElement) => void,
    attributes: KeyValuePair<ShapeAttributeName, number | string>[]
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
    attributes: KeyValuePair<ShapeAttributeName, number | string>[]
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
