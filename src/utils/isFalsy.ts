// https://developer.mozilla.org/en-US/docs/Glossary/Falsy
type Falsy = false | 0 | 0n | '' | null | undefined

const isFalsy = <T>(x: T): x is T & Falsy => !(x as any)

export default isFalsy
