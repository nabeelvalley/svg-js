import GlobalAttributeName, { Global } from '../GlobalAttribute'
import GenericShapeAttributeName from './GenericShapeAttributeName'
import PresentationalAttributeName from './PresentationalAttributeName'
import UsingAttributeName from './UsingAttributeName'

export interface RectAttribute {
  height: number | string
  width: number | string
  x: number | string
  y: number | string
}

export interface CircleAttribute {
  r: number | string
  cx: number | string
  cy: number | string
  pathLength: number | string
}

export interface EllipseAttribute {
  rx: number | string
  ry: number | string
  cx: number | string
  cy: number | string
}

export interface LineAttribute {
  x1: number | string
  x2: number | string
  y1: number | string
  y2: number | string
}

export interface PolyLineAttribute {
  points: string
}

export interface PolygonAttribute {
  points: string
}

export interface PathAttribute extends Global {
  d: string
}

/**
 * Atttributes for SVG Shape elements
 */
type ShapeAttributeName =
  | GlobalAttributeName
  | GenericShapeAttributeName
  | PresentationalAttributeName
  | UsingAttributeName

export default ShapeAttributeName
