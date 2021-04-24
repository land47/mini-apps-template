export type Resource<T> = {
  read(): T
}

export let wrapPromise = <T>(factory: () => Promise<T>): Resource<T> => {
  let initial = Symbol()
  let result: T | Symbol = initial

  let promise = factory().then(
    r => result = r,
    e => result = e
  )

  return {
    read() {
      if (result == initial) {
        throw promise
      }

      return result as T
    }
  }
}
