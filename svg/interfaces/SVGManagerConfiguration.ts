import SVGElementType from '../enums/SVGElementType'
import SVGManager from '../api/SVGManager'
import KeyValuePair from './KeyValuePair'
import SVGGlobalAttribute from '../enums/SVGGlobalAttribute'
import SVGShapeAttribute from '../enums/shape/SVGShapeAttribute'
import ShapeAttribute from '../enums/shape/ShapeAttribute'

interface SVGManagerConfiguration {
  parent?: HTMLElement | SVGSVGElement | SVGManager
  id?: string
  class?: string
  type?: SVGElementType
  attributes?: KeyValuePair<ShapeAttribute, number | string>[]
  style?: CSSStyleDeclaration
}

export default SVGManagerConfiguration
