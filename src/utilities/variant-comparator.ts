import type { Variant } from '@unocss/core'
import { compact, flatten, includes, isFunction } from 'lodash-es'

export const variantComparator = (variant: Variant, exclude: string) => {
  const names = compact(
    flatten(
      isFunction(variant) ? [variant.name] : [variant.match.name, variant.name]
    )
  )

  return includes(names, exclude)
}
