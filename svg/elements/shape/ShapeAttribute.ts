import GlobalAttribute, { Global } from '../GlobalAttribute'
import SVGShapeAttribute from './SVGShapeAttribute'

export interface Rect {
  height: number | string
  width: number | string
  x: number | string
  y: number | string
}

export interface Circle {
  r: number | string
  cx: number | string
  cy: number | string
}

export interface Ellipse {
  rx: number | string
  ry: number | string
  cx: number | string
  cy: number | string
}

export interface Line {
  x1: number | string
  x2: number | string
  y1: number | string
  y2: number | string
}

export interface PolyLine {
  points: string
}

export interface Polygon {
  points: string
}

export interface Path extends Global {
  d: string
}

/**
 * Atttributes for SVG Shape elements
 */
type ShapeAttribute = GlobalAttribute | SVGShapeAttribute

export default ShapeAttribute
