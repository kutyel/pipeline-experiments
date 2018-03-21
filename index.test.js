import { camelCase } from '.'
import cases from './cases.json'

test('camelCase', () =>
  cases.forEach(word => expect(camelCase(word)).toBe('fooBar')))
