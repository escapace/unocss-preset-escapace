import {
  preflights as presetWindPreflights,
  rules as presetWindRules,
  // shortcuts as presetWindShortcuts,
  theme as presetWindTheme,
  variants as presetWindVariants
} from '@unocss/preset-wind'
import { differenceWith } from 'lodash-es'
import { EXCLUDE_RULES, EXCLUDE_VARIANTS } from './constants'
import { Options, Preset } from './types'
import { ruleComparator } from './utilities/rule-comparator'
import { variantComparator } from './utilities/variant-comparator'

export const presetEscapace = (options: Options = {}): Preset => {
  options.dark = options.dark ?? 'class'
  options.attributifyPseudo = options.attributifyPseudo ?? false

  const rules = differenceWith(presetWindRules, EXCLUDE_RULES, ruleComparator)
  const variants = differenceWith(
    [...presetWindVariants(options)],
    EXCLUDE_VARIANTS,
    variantComparator
  )

  return {
    name: '@escapace/unocss-preset-escapace',
    theme: presetWindTheme,
    rules,
    shortcuts: [],
    variants,
    options,
    preflights: presetWindPreflights,
    prefix: options.prefix
  }
}
