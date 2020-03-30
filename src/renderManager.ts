import SVGManager from '../svg/api/SVGManager'
import ElementType from '../svg/elements/ElementType'
import SVGShapeAttribute from '../svg/elements/shape/SVGShapeAttribute'

const renderManager = (node: HTMLElement) => {
  let root = new SVGManager({
    parent: node,
    id: 'manager-view',
    attributes: [
      { key: SVGShapeAttribute.height, value: '120' },
      { key: SVGShapeAttribute.width, value: '90vw' },
    ],
  })

  let background = new SVGManager({
    parent: root,
    id: 'background',
    type: ElementType.rect,
    attributes: [
      { key: SVGShapeAttribute.height, value: '100' },
      { key: SVGShapeAttribute.width, value: '80vw' },
      { key: SVGShapeAttribute.fill, value: 'blue' },
    ],
  })

  let snake = new SVGManager({
    id: 'snake',
    parent: root,
    type: ElementType.g,
    attributes: [
      { key: SVGShapeAttribute.height, value: '20px' },
      { key: SVGShapeAttribute.width, value: '20px' },
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
      { key: SVGShapeAttribute.r, value: '5px' },
      { key: SVGShapeAttribute.cx, value: '2cm' },
      { key: SVGShapeAttribute.cy, value: '50px' },
      { key: SVGShapeAttribute.fill, value: 'red' },
    ],
  })
}

export default renderManager
