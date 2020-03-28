import SVGManagerConfiguration from '../interfaces/SVGManagerConfiguration'
import SVGPainterConfiguration from '../interfaces/SVGPainterConfiguration'
import SVGElementType from '../enums/SVGElementType'
import SVGManager from './SVGManager'
import SVGAttribute from '../enums/SVGAttribute'
import SVGAttributeKV from '../interfaces/SVGAttributeKV'

class SVGPainter {
  private parent: SVGSVGElement | SVGGElement | HTMLElement
  private canvas: SVGElement[]
  private height: string
  private width: string
  private fill: string = 'white'
  private stroke: string = 'black'
  private strokeWidth: string = '1px'
  private svgns = 'http://www.w3.org/2000/svg'

  /**
   * Create a new Painter Instance
   */
  constructor(options?: SVGPainterConfiguration) {
    if (
      options?.parent instanceof SVGSVGElement ||
      options?.parent instanceof SVGGElement
    ) {
      this.parent = options.parent
    } else {
      this.parent = document.createElementNS(
        this.svgns,
        SVGElementType.svg
      ) as SVGSVGElement

      options.parent.appendChild(this.parent)
    }

    if (this.parent instanceof SVGSVGElement) {
      this.parent.setAttribute(SVGAttribute.height, options?.height.toString())
      this.parent.setAttribute(SVGAttribute.width, options?.width.toString())
    }

    this.canvas = []
    this.height = options.height.toString()
    this.width = options.width.toString()
  }

  /**
   * Set the background color of the canvas. This will be set as the backmost element in the painting
   * @param color background color
   */
  public setBackground(color: string) {
    let element = document.createElementNS(
      this.svgns,
      SVGElementType.rect
    ) as SVGRectElement

    element.setAttribute(SVGAttribute.height, this.height)
    element.setAttribute(SVGAttribute.width, this.width)

    element.setAttribute(SVGAttribute.fill, color)

    this.canvas.push(element)

    return this
  }

  /**
   * Set fill color for future paints, default white
   * @param color fill color
   */
  public setFill(color: string) {
    this.fill = color
    return this
  }

  /**
   * Set stroke color for future paints, default black
   * @param color stroke color
   */
  public setStroke(color: string) {
    this.stroke = color
    return this
  }

  /**
   * Set stroke width for future paints, default 1px
   * @param width stroke width
   */
  public setStrokeWidth(width: number | string) {
    this.strokeWidth = width.toString()
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
  ) {
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
  ) {
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
  ) {
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
  ) {
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
  public paintPolyline(points: string, attributes?: SVGAttributeKV[]) {
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
  public paintPolygon(points: string, attributes?: SVGAttributeKV[]) {
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
  public paintPath(d: string, attributes?: SVGAttributeKV[]) {
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
  ) {
    let element = document.createElementNS(this.svgns, type) as SVGElement

    this.applyPainterAttributes(element)

    custom(element)

    this.applyAdditionalAttributes(element, attributes)

    this.canvas.push(element)

    return this
  }

  /**
   * Apply the fill, stroke, and stroke-width attributes to element based on the current painter state
   * @param element element to apply the attributes to
   */
  private applyPainterAttributes(element: SVGElement) {
    element.setAttribute(SVGAttribute.fill, this.fill)
    element.setAttribute(SVGAttribute.stroke, this.stroke)
    element.setAttribute(SVGAttribute.strokeWidth, this.strokeWidth)
  }

  private applyAdditionalAttributes(
    element: SVGElement,
    attributes: SVGAttributeKV[]
  ) {
    attributes?.forEach(attribute =>
      element.setAttribute(attribute?.name, attribute?.value?.toString())
    )
  }

  /**
   * Replace all the existing content with the new content
   */
  public paintOver() {
    const canvasAsHtml = this.canvas.map(el => el.outerHTML).join('')

    this.parent.innerHTML = canvasAsHtml

    return this.parent.innerHTML
  }

  /**
   * Add the new content to the existing content
   */
  public paint() {
    const canvasAsHtml = this.canvas.map(el => el.outerHTML).join('')

    this.parent.innerHTML += canvasAsHtml

    return this.parent.innerHTML
  }
}

export default SVGPainter
