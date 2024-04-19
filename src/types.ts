import type {
  PresetMiniOptions as MiniOptions,
  Theme as MiniTheme
} from '@unocss/preset-mini'
import type { Preset as MiniPreset } from '@unocss/core'

export interface Options extends MiniOptions {}

export type Theme = Omit<MiniTheme, 'colors'>

export type Preset<T extends {} = Theme> = Omit<
  MiniPreset<T>,
  | 'name'
  | 'options'
  | 'preflights'
  | 'rules'
  | 'shortcuts'
  | 'theme'
  | 'variants'
> &
  Required<
    Pick<
      MiniPreset<T>,
      | 'name'
      | 'options'
      | 'preflights'
      | 'rules'
      | 'shortcuts'
      | 'theme'
      | 'variants'
    >
  >
