import SVGManager from '../svg'
import ElementType from '../svg/enums/ElementType'
import SVGAttribute from '../svg/enums/SVGAttribute'

const app: HTMLElement = document.getElementById('app')

let root = new SVGManager({
  parent: app,
  id: 'root',
  attributes: [
    { name: SVGAttribute.height, value: '120' },
    { name: SVGAttribute.width, value: '90vw' },
  ],
})

let background = new SVGManager({
  parent: root,
  id: 'background',
  type: ElementType.rect,
  attributes: [
    { name: SVGAttribute.height, value: '100' },
    { name: SVGAttribute.width, value: '80vw' },
    { name: SVGAttribute.fill, value: 'blue' },
  ],
})

let snake = new SVGManager({
  id: 'snake',
  parent: root,
  type: ElementType.g,
  attributes: [
    { name: SVGAttribute.height, value: '20px' },
    { name: SVGAttribute.width, value: '20px' },
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
    { name: SVGAttribute.r, value: '5px' },
    { name: SVGAttribute.cx, value: '50px' },
    { name: SVGAttribute.cy, value: '50px' },
    { name: SVGAttribute.fill, value: 'red' },
  ],
})

console.log(food)
