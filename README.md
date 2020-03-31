# SVG.js

A zero-dependency library for building and working with SVGs for Typescript and Javascript

> [Documentation](https://nabeelvalley.github.io/svg-js/) | [GitHub](https://github.com/nabeelvalley/svg-js)

## Feature Status

- [x] Basic SVG Element Creation for
- [x] Path Builder API
- [x] Animation
- [ ] Advanced Animations
- [ ] Usings and Definitions
- [ ] Filters
- [ ] ->> NEXT Implement all features listed on the [MDN SVG Documentation](https://developer.mozilla.org/en-US/docs/Web/SVG/Element)

## Usage

There are two different API's exposed for building SVG's. The Painter API and the Manager API

## Painter API

The Painter API allows SVGs to be build using a builder pattern, an example of this can be seen below:

```ts
const target: HTMLElement = document.getElementById('target')

new SVGPainter({
  height: '400px',
  width: '80vw',
  parent: target,
})
  .setBackground('red')
  .setFill('green')
  .paintCircle(50, 20, 20)
  .setFill('blue')
  .paintRectangle(20, 30, 10, 10)
  .paintOver()
```

Additionally reusable segments can be defined using a sequence or a sequence generator. For example, the one below defines an animated flower:

```ts
const generateFlowerSequence = (x, y) => {
  return (painter: SVGPainter) => {
    const radius = 10

    painter
      .setStroke('none')
      .setFill('yellow')
      .paintCircle(radius, x - radius, y - radius)
      .paintCircle(radius, x + radius, y - radius)
      .paintCircle(radius, x + radius, y + radius)
      .paintCircle(radius, x - radius, y + radius)
      .setStroke('blue')
      .setFill('white')
      .setStrokeWidth(2)
      .paintCircle(radius, x, y)
      .addAnimation({
        id: 'test',
        attributeName: GenericShapeAttributeName.r,
        values: `${radius};${radius / 2};${radius}`,
        dur: '5s',
        repeatCount: 'indefinite',
      } as AnimationAttribute)
  }
}
```

The generated shape can be applied to the canvas using the `paintSequence` method:

```ts
new SVGPainter({
  height: '400px',
  width: '80vw',
  parent: target,
})
  .setBackground('red')
  .setFill('green')
  .paintCircle(50, 20, 20)
  .setFill('blue')
  .paintRectangle(20, 30, 10, 10)
  .paintSequence(generateFlowerSequence(40, 40))
  .paintOver()
```

## Manager API

The manager API defines a more declarative API structure and is simply a wrapper around the DOM exposed methods for working with SVGs

A simple canvas with a circle on it can be defined using this interface like so:

```ts
const target: HTMLElement = document.getElementById('target')

let root = new SVGManager({
  parent: target,
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

let circle = new SVGManager({
  class: 'circle',
  parent: root,
  type: ElementType.circle,
  attributes: [
    { key: GenericShapeAttributeName.r, value: '5px' },
    { key: GenericShapeAttributeName.cx, value: '2cm' },
    { key: GenericShapeAttributeName.cy, value: '50px' },
    { key: GenericShapeAttributeName.fill, value: 'red' },
  ],
})
```
