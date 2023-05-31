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

  // https://github.com/unocss/unocss/blob/main/packages/preset-mini/src/_rules/color.ts
  /^(?:color|c)-(.+)$/,
  /^text-(.+)$/,
  /^bg-(.+)$/,
  /^(?:text|color|c)-(.+)$/,
  /^(?:text|color|c)-op(?:acity)?-?(.+)$/,
  /^bg-op(?:acity)?-?(.+)$/,

  // https://github.com/unocss/unocss/blob/main/packages/preset-mini/src/_rules/decoration.ts
  /^(?:underline|decoration)-(.+)$/,

  // https://github.com/unocss/unocss/blob/main/packages/preset-mini/src/_rules/ring.ts

  /^ring-(.+)$/,
  /^ring-offset-(.+)$/,

  // https://github.com/unocss/unocss/blob/main/packages/preset-mini/src/_rules/shadow.ts

  /^shadow(?:-(.+))?$/,

  // https://github.com/unocss/unocss/blob/main/packages/preset-mini/src/_rules/svg.ts

  /^fill-(.+)$/,
  /^stroke-(.+)$/,

  // https://github.com/unocss/unocss/blob/main/packages/preset-mini/src/_rules/typography.ts

  /^text-stroke-(.+)$/,
  /^text-shadow-color-(.+)$/,

  // https://github.com/unocss/unocss/blob/main/packages/preset-wind/src/rules/background.ts
  // /^bg-gradient-(.+)$/,
  /^(?:bg-gradient-)?(from)-(.+)$/,
  /^(?:bg-gradient-)?(via)-(.+)$/,
  /^(?:bg-gradient-)?(to)-(.+)$/,
  // /^(?:bg-gradient-)?(from|via|to)-op(?:acity)?-?(.+)$/,

  // https://github.com/unocss/unocss/blob/main/packages/preset-wind/src/rules/behaviors.ts
  /^accent-(.+)$/,
  /^caret-(.+)$/,

  // https://github.com/unocss/unocss/blob/main/packages/preset-wind/src/rules/divide.ts
  /^divide-(.+)$/,
  // /^divide-op(?:acity)?-?(.+)$/,

  // https://github.com/unocss/unocss/blob/main/packages/preset-wind/src/rules/filters.ts
  /^(?:filter-)?drop-shadow-color-(.+)$/,
  // /^(?:filter-)?drop-shadow(?:-(.+))?$/,
  // /^(?:filter-)?drop-shadow-color-(.+)$/,
  // /^(?:filter-)?drop-shadow-color-op(?:acity)?-?(.+)$/,

  // https://github.com/unocss/unocss/blob/main/packages/preset-mini/src/_rules/border.ts
  /^(?:border|b)-()(?:color-)?(.+)$/,
  /^(?:border|b)-([xy])-(?:color-)?(.+)$/,
  /^(?:border|b)-([rltbse])-(?:color-)?(.+)$/,
  /^(?:border|b)-(block|inline)-(?:color-)?(.+)$/,
  /^(?:border|b)-([bi][se])-(?:color-)?(.+)$/,

  // https://github.com/unocss/unocss/blob/main/packages/preset-wind/src/rules/placeholder.ts
  /^\$ placeholder-(.+)$/,
  /^\$ placeholder-op(?:acity)?-?(.+)$/
]
