import SVGManager from '../svg/api/SVGManager'
import ElementType from '../svg/elements/ElementType'
import GenericShapeAttributeName from '../svg/elements/shape/GenericShapeAttributeName'

const renderManager = (node: HTMLElement) => {
  let root = new SVGManager({
    parent: node,
    id: 'manager-view',
    attributes: [
      { key: GenericShapeAttributeName.height, value: '120' },
      { key: GenericShapeAttributeName.width, value: '90vw' },
    ],
  })

  let background = new SVGManager({
    parent: root,
    id: 'background',
    type: ElementType.rect,
    attributes: [
      { key: GenericShapeAttributeName.height, value: '100' },
      { key: GenericShapeAttributeName.width, value: '80vw' },
      { key: GenericShapeAttributeName.fill, value: 'blue' },
    ],
  })

  let snake = new SVGManager({
    id: 'snake',
    parent: root,
    type: ElementType.g,
    attributes: [
      { key: GenericShapeAttributeName.height, value: '20px' },
      { key: GenericShapeAttributeName.width, value: '20px' },
    ],
  })

  let sement = new SVGManager({
    id: 'segment',
    parent: snake,
  })

  let food = new SVGManager({
    class: 'food',
    parent: root,
    type: ElementType.circle,
    attributes: [
      { key: GenericShapeAttributeName.r, value: '5px' },
      { key: GenericShapeAttributeName.cx, value: '2cm' },
      { key: GenericShapeAttributeName.cy, value: '50px' },
      { key: GenericShapeAttributeName.fill, value: 'red' },
    ],
  })
}

export default renderManager
