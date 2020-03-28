export interface SVGRectAttributes {
  height: number | string
  width: number | string
  x: number | string
  y: number | string
}

export interface SVGCircleAttributes {
  r: number | string
  cx: number | string
  cy: number | string
}

export interface SVGEllipseAttributes {
  rx: number | string
  ry: number | string
  cx: number | string
  cy: number | string
}

export interface SVGLineAttributes {
  x1: number | string
  x2: number | string
  y1: number | string
  y2: number | string
}

export interface SVGPolyLineAttributes {
  points: string
}

export interface SVGPolygonAttributes {
  points: string
}

export interface SVGPathAttributes {
  d: string
}
