import React from 'react'
import { SpinnerProps } from './types'

import * as S from './styles'

const Spinner = ({ size = 'sm', color, legend = '' }: SpinnerProps) => (
  <S.Wrapper>
    <S.Loading size={size} color={color} legend={legend} />
    {!!legend && <S.Legend>{legend}</S.Legend>}
  </S.Wrapper>
)

export default Spinner
