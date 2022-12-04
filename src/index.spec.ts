import { presetEscapace } from './index.js'
import { assert } from 'chai'
import { intersectionWith } from 'lodash-es'
import { ruleComparator } from './utilities/rule-comparator.js'
import { EXCLUDE_RULES } from './constants.js'

import {
  rules as presetWindRules,
  variants as presetWindVariants
} from '@unocss/preset-wind'

describe('./src/index.spec.ts', () => {
  it('847 @unocss/preset-wind rules', () => {
    assert.ok(presetWindRules.length === 847)
  })

  it('787 rules', () => {
    const { rules } = presetEscapace()

    assert.ok(rules.length === 787)
  })

  it('43 @unocss/preset-wind variants', () => {
    assert.ok(presetWindVariants({}).length === 43)
  })

  it('42 variants', () => {
    const { variants } = presetEscapace()

    assert.ok(variants.length === 42)
  })

  it('rules are excluded', () => {
    const { rules } = presetEscapace()

    assert.deepEqual(intersectionWith(rules, EXCLUDE_RULES, ruleComparator), [])
  })
})
