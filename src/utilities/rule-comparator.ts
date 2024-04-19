import type { Rule } from '@unocss/core'
import { isEqualWith, isRegExp } from 'lodash-es'

export const ruleComparator = (rule: Rule, exclude: RegExp | string) => {
  const matcher = rule[0]

  return isEqualWith(
    matcher,
    exclude,
    (a: RegExp | string, b: RegExp | string) => {
      if (isRegExp(a) && isRegExp(b)) {
        return a.source === b.source
      }

      return a === b
    }
  )
}
