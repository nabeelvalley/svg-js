/**
 * Mixins applier to allow multiple class inheritence. From [Typescript Docs](https://www.typescriptlang.org/docs/handbook/mixins.html)
 */
const applyMixins = (derivedCtor: any, baseCtors: any[]) => {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
      )
    })
  })
}

export default applyMixins
