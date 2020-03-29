import SVGElementType from '../enums/SVGElementType'
import SVGManager from '../api/SVGManager'
import KeyValuePair from './KeyValuePair'
import SVGAttribute from '../enums/SVGAttribute'

interface SVGManagerConfiguration {
  parent?: HTMLElement | SVGSVGElement | SVGManager
  id?: string
  class?: string
  type?: SVGElementType
  attributes?: KeyValuePair<SVGAttribute, number | string>[]
  style?: CSSStyleDeclaration
}

export default SVGManagerConfiguration
