import SVGManager from '../svg'

const app: HTMLElement = document.getElementById('app')

let manager = new SVGManager({
  height: 100,
  width: '80vw',
  target: app,
  id: 'snake',
})

console.log(manager)
