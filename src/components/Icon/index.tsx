import React from 'react'
import theme from 'styles/theme'
import { ListIcons } from './ListIcon'
import { IconProps } from './types'
import * as S from './styles'

const Icon: React.FC<IconProps> = ({
  id,
  size = 'lg',
  name = 'alertWarning',
  viewBox,
  onClick,
  primaryColor = theme.color.brand.neutral.dark,
  secundaryColor = theme.color.brand.neutral.base
}) => (
  <S.Wrapper
    isOnClick={!!onClick}
    onClick={onClick}
    aria-labelledby={id}
    id={id}
    size={size}
    href={!onClick ? '#' : undefined}
  >
    <S.Icon
      size={size}
      name={name}
      fill="none"
      viewBox={viewBox || '0 0 32 32'}
    >
      {ListIcons[name](primaryColor, secundaryColor)}
    </S.Icon>
  </S.Wrapper>
)

export default Icon
