import styled, { css, DefaultTheme } from 'styled-components'

import { IconProps } from './types'

type WrapperProps = {
  isOnClick: boolean
  size: string
}

const wrapperModifiers: { [key: string]: any } = {
  sm: (theme: DefaultTheme) => css`
    height: ${theme.size.sm};
    width: ${theme.size.sm};
  `,
  md: (theme: DefaultTheme) => css`
    height: ${theme.size.md};
    width: ${theme.size.md};
  `,
  lg: (theme: DefaultTheme) => css`
    height: ${theme.size.lg};
    width: ${theme.size.lg};
  `,
  xl: (theme: DefaultTheme) => css`
    height: ${theme.size.xl};
    width: ${theme.size.xl};
  `,
  xxl: (theme: DefaultTheme) => css`
    height: ${theme.size.xxl};
    width: ${theme.size.xxl};
  `,
  xxxl: (theme: DefaultTheme) => css`
    height: ${theme.size.xxxl};
    width: ${theme.size.xxxl};
  `
}

export const Wrapper = styled.a<WrapperProps>`
  background: none;

  ${({ theme, size, isOnClick }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;

    ${wrapperModifiers[size || 'lg'](theme)}

    /* ${
      isOnClick &&
      css`
        &:focus {
          border-color: ${theme.color.brand.neutral.darkest};
          border-radius: ${theme.border.radius.sm};
        }

        &:hover {
          border-color: ${theme.color.brand.neutral.darkest};
          border-radius: ${theme.border.radius.sm};
        }
      `
    } */
    }
  `}
`

export const Icon = styled.svg<IconProps>`
  ${({ theme, size }) => css`
    ${wrapperModifiers[size || 'lg'](theme)}
  `}
`
