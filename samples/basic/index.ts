import renderManager from './renderManager'
import renderPainter from './renderPainter'

const manager: HTMLElement = document.getElementById('manager')
const painter: HTMLElement = document.getElementById('painter')

renderManager(manager)
renderPainter(painter)
