import {
  all,
  equals,
  join,
  lensIndex,
  map,
  match,
  over,
  replace,
  toLower,
  toUpper
} from 'ramda'

const camelCase = str =>
  str
  |> match(/[A-Za-z]+/g)
  |> map(toLower)
  |> over(lensIndex(1), replace(/^./g, toUpper))
  |> join('')

const test = [
  'foo-bar',
  'foo_bar',
  'Foo-Bar',
  '--foo.bar',
  '__foo__bar__',
  'foo bar'
]

test |> map(camelCase) |> all(equals('fooBar')) |> console.log // true!!!
