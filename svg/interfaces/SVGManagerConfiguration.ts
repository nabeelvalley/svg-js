import SVGElementType from '../enums/SVGElementType'
import SVGManager from '../api/SVGManager'
import SVGAttributeKV from '../interfaces/SVGAttributeKV'

interface SVGManagerConfiguration {
  parent?: HTMLElement | SVGSVGElement | SVGManager
  id?: string
  class?: string
  type?: SVGElementType
  attributes?: SVGAttributeKV[]
  style?: CSSStyleDeclaration
}

export default SVGManagerConfiguration
