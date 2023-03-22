import { sum } from './sum'

describe('sum', () => {
  it('2,4,5,6 -> 17', () => {
    expect(sum(2, 4, 5, 6)).toBe(17)
  })

  it('2,4,5,6 -> 19 -> wrong', () => {
    expect(sum(2, 4, 5, 6)).not.toBe(19)
  })
})
