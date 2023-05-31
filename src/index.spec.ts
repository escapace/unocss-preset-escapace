import { assert } from 'chai'
import { intersectionWith } from 'lodash-es'
import { EXCLUDE_RULES } from './constants.js'
import { presetEscapace } from './index.js'
import { ruleComparator } from './utilities/rule-comparator.js'

import { rules as presetWindRules } from '@unocss/preset-wind'

describe('./src/index.spec.ts', () => {
  // it('@unocss/preset-wind rules', () => {
  //   assert.equal(presetWindRules.length, 846)
  // })
  //
  // it('787 rules', () => {
  //   const { rules } = presetEscapace()
  //
  //   assert.equal(rules.length, 786)
  // })
  //
  // it('@unocss/preset-wind variants', () => {
  //   assert.equal(presetWindVariants({}).length, 44)
  // })
  //
  // it('variants', () => {
  //   const { variants } = presetEscapace()
  //
  //   assert.equal(variants.length, 34)
  // })

  it('rules are excluded', () => {
    const { rules } = presetEscapace()

    assert.deepEqual(intersectionWith(rules, EXCLUDE_RULES, ruleComparator), [])
    EXCLUDE_RULES.forEach((exclude) => {
      assert.deepEqual(
        intersectionWith(presetWindRules, [exclude], ruleComparator).length,
        1,
        `${exclude.toString()}`
      )
    })
  })
})
