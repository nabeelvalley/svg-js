import SVGElementType from '../enums/SVGElementType'
import SVGManager from '../api/SVGManager'
import KeyValuePair from './KeyValuePair'
import SVGShapeAttribute from '../enums/SVGShapeAttribute'
import SVGGlobalAttribute from '../enums/SVGGlobalAttribute'

interface SVGManagerConfiguration {
  parent?: HTMLElement | SVGSVGElement | SVGManager
  id?: string
  class?: string
  type?: SVGElementType
  attributes?: KeyValuePair<
    SVGShapeAttribute | SVGGlobalAttribute,
    number | string
  >[]
  style?: CSSStyleDeclaration
}

export default SVGManagerConfiguration
