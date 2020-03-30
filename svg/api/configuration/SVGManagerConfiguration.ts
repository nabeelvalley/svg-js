import ElementType from '../../elements/ElementType'
import SVGManager from '../SVGManager'
import GlobalAttribute from '../../elements/GlobalAttribute'
import SVGShapeAttribute from '../../elements/shape/SVGShapeAttribute'
import ShapeAttribute from '../../elements/shape/ShapeAttribute'
import KeyValuePair from '../../generic/KeyValuePair'

interface SVGManagerConfiguration {
  parent?: HTMLElement | SVGSVGElement | SVGManager
  id?: string
  class?: string
  type?: ElementType
  attributes?: KeyValuePair<ShapeAttribute, number | string>[]
  style?: CSSStyleDeclaration
}

export default SVGManagerConfiguration
