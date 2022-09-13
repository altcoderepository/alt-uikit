export enum Sizes {
  xl = 'xl',
  lg = 'lg',
  md = 'md',
  sm = 'sm',
}

export enum Colors {
  primary = '#4d4d4d',
  secondary = '#666666',
  success = '#5fbc35',
  warning = '#bc3535',
}

export type SizeValues = keyof typeof Sizes;
export type ColorKeys = keyof typeof Colors;
