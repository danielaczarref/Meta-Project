import { InputHTMLAttributes } from 'react'

type InputTypes = InputHTMLAttributes<HTMLInputElement>

export type TextFieldProps = {
  id: string
  name: string
  label: string
  ariaLabelledby?: string
  message?: string
  onChange(
    value: React.ChangeEvent<HTMLInputElement> | undefined | null | any
  ): void | undefined
  maxLength?: number
  disabled?: boolean
  typeMessage?: 'error' | 'success'
} & InputTypes
