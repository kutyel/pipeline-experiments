import {
  join,
  lensIndex,
  map,
  match,
  over,
  replace,
  toLower,
  toUpper
} from 'ramda'

export const camelCase = str =>
  str
  |> match(/[A-Za-z]+/g)
  |> map(toLower)
  |> over(lensIndex(1), replace(/^./g, toUpper))
  |> join('')
