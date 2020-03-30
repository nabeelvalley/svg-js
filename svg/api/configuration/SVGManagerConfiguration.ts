import ElementType from '../../elements/ElementType'
import SVGManager from '../SVGManager'
import GlobalAttribute from '../../elements/GlobalAttribute'
import GenericShapeAttributeName from '../../elements/shape/GenericShapeAttributeName'
import ShapeAttributeName from '../../elements/shape/ShapeAttribute'
import KeyValuePair from '../../generic/KeyValuePair'

interface SVGManagerConfiguration {
  parent?: HTMLElement | SVGSVGElement | SVGManager
  id?: string
  class?: string
  type?: ElementType
  attributes?: KeyValuePair<ShapeAttributeName, number | string>[]
  style?: CSSStyleDeclaration
}

export default SVGManagerConfiguration
