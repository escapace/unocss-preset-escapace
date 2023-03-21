export const EXCLUDE_VARIANTS = [
  '.dark',
  '.light',
  '@dark',
  '@light',
  'contrast-less',
  'negative',
  'contrast-more',
  'dark',
  'light',
  'placeholderModifier'
]

export const EXCLUDE_RULES: Array<string | RegExp> = [
  // https://github.com/unocss/unocss/blob/main/packages/preset-wind/src/rules/container.ts
  /^__container$/,
  /^@container(?:\/(\w+))?(?:-(normal))?$/,

  // https://github.com/unocss/unocss/blob/main/packages/preset-mini/src/_rules/behaviors.ts

  /^outline-(?:color-)?(.+)$/,

  // https://github.com/unocss/unocss/blob/main/packages/preset-mini/src/_rules/border.ts

  /^(?:border|b)-()(?:color-)?(.+)$/,
  /^(?:border|b)-([xy])-(?:color-)?(.+)$/,
  /^(?:border|b)-([rltbse])-(?:color-)?(.+)$/,
  /^(?:border|b)-(block|inline)-(?:color-)?(.+)$/,
  /^(?:border|b)-([bi][se])-(?:color-)?(.+)$/,

  /^(?:border|b)-()op(?:acity)?-?(.+)$/,
  /^(?:border|b)-([xy])-op(?:acity)?-?(.+)$/,
  /^(?:border|b)-([rltbse])-op(?:acity)?-?(.+)$/,
  /^(?:border|b)-(block|inline)-op(?:acity)?-?(.+)$/,
  /^(?:border|b)-([bi][se])-op(?:acity)?-?(.+)$/,

  // https://github.com/unocss/unocss/blob/main/packages/preset-mini/src/_rules/color.ts
  /^(?:color|c)-(.+)$/,
  /^text-(.+)$/,
  /^bg-(.+)$/,
  /^(?:text|color|c)-op(?:acity)?-?(.+)$/,
  /^bg-op(?:acity)?-?(.+)$/,

  // https://github.com/unocss/unocss/blob/main/packages/preset-mini/src/_rules/decoration.ts
  /^(?:underline|decoration)-(.+)$/,
  /^(?:underline|decoration)-op(?:acity)?-?(.+)$/,

  // https://github.com/unocss/unocss/blob/main/packages/preset-mini/src/_rules/ring.ts

  /^ring-(.+)$/,
  /^ring-op(?:acity)?-?(.+)$/,
  /^ring-offset-(.+)$/,
  /^ring-offset-op(?:acity)?-?(.+)$/,

  // https://github.com/unocss/unocss/blob/main/packages/preset-mini/src/_rules/shadow.ts

  /^shadow(?:-(.+))?$/,
  /^shadow-(.+)$/,
  /^shadow-op(?:acity)?-?(.+)$/,
  'shadow-inset',

  // https://github.com/unocss/unocss/blob/main/packages/preset-mini/src/_rules/svg.ts

  /^fill-(.+)$/,
  /^fill-op(?:acity)?-?(.+)$/,
  /^stroke-(.+)$/,
  /^stroke-op(?:acity)?-?(.+)$/,

  // https://github.com/unocss/unocss/blob/main/packages/preset-mini/src/_rules/typography.ts

  /^text-stroke-(.+)$/,
  /^text-stroke-op(?:acity)?-?(.+)$/,
  /^text-shadow(?:-(.+))?$/,
  /^text-shadow-color-(.+)$/,
  /^text-shadow-color-op(?:acity)?-?(.+)$/,

  // https://github.com/unocss/unocss/blob/main/packages/preset-wind/src/rules/background.ts
  /^bg-gradient-(.+)$/,
  /^(?:bg-gradient-)?stops-(\[.+\])$/,
  /^(?:bg-gradient-)?from-(.+)$/,
  /^(?:bg-gradient-)?via-(.+)$/,
  /^(?:bg-gradient-)?to-(.+)$/,
  /^(?:bg-gradient-)?from-op(?:acity)?-?(.+)$/,
  /^(?:bg-gradient-)?via-op(?:acity)?-?(.+)$/,
  /^(?:bg-gradient-)?to-op(?:acity)?-?(.+)$/,
  /^bg-gradient-((?:repeating-)?(?:linear|radial|conic))$/,
  /^bg-gradient-to-([rltb]{1,2})$/,
  /^(?:bg-gradient-)?shape-(.+)$/,

  // https://github.com/unocss/unocss/blob/main/packages/preset-wind/src/rules/behaviors.ts
  /^accent-(.+)$/,
  /^accent-op(?:acity)?-?(.+)$/,
  /^caret-(.+)$/,
  /^caret-op(?:acity)?-?(.+)$/,

  // https://github.com/unocss/unocss/blob/main/packages/preset-wind/src/rules/divide.ts
  /^divide-(.+)$/,
  /^divide-op(?:acity)?-?(.+)$/,

  // https://github.com/unocss/unocss/blob/main/packages/preset-wind/src/rules/filters.ts
  /^(?:filter-)?drop-shadow(?:-(.+))?$/,
  /^(?:filter-)?drop-shadow-color-(.+)$/,
  /^(?:filter-)?drop-shadow-color-op(?:acity)?-?(.+)$/,

  // https://github.com/unocss/unocss/blob/main/packages/preset-mini/src/_rules/border.ts
  /^(?:border|b)-()(?:color-)?(.+)$/,
  /^(?:border|b)-([xy])-(?:color-)?(.+)$/,

  // https://github.com/unocss/unocss/blob/main/packages/preset-wind/src/rules/placeholder.ts
  /^\$ placeholder-(.+)$/,
  /^\$ placeholder-op(?:acity)?-?(.+)$/
]
