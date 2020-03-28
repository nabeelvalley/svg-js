import ElementType from '../enums/ElementType'
import SVGManager from '..'
import SVGAttribute from '../enums/SVGAttribute'

interface SVGManagerConfiguration {
  parent?: HTMLElement | SVGSVGElement | SVGManager
  id?: string
  class?: string
  type?: ElementType
  attributes?: { name: SVGAttribute; value: number | string }[]
  style?: CSSStyleDeclaration
}

export default SVGManagerConfiguration
