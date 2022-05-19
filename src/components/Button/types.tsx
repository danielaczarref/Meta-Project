import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  types: 'primary' | 'secondary' | 'text' | 'danger'
  size?: 'md' | 'lg'
  fullWidth?: boolean
  disable?: boolean
  nameIcon?: string
  loading?: boolean
  as?: React.ElementType
} & ButtonTypes
