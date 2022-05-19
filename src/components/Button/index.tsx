import React from 'react'

import theme from 'styles/theme'
import { ButtonProps } from './types'
import * as S from './styles'
import Icon from '../Icon'

import SpinnerProps from '../Spinner'

const Button = ({
  children,
  types = 'primary',
  size = 'md',
  fullWidth = false,
  disable = false,
  nameIcon,
  loading = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    types={types}
    size={size}
    fullWidth={fullWidth}
    disable={disable || loading}
    loading={loading}
    {...props}
  >
    {!!nameIcon && (
      <S.DivIcon>
        <Icon
          name={nameIcon}
          size="sm"
          primaryColor={theme.color.brand.primary.base}
        />
      </S.DivIcon>
    )}
    {!!children && <S.Span>{children}</S.Span>}
    {loading && <SpinnerProps color="secondary" />}
  </S.Wrapper>
)

export default Button
