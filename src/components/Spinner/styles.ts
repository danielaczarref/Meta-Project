import styled, { css } from 'styled-components'
import theme from 'styles/theme'
import { SpinnerProps } from './types'

const wrapperModifiers = {
  sm: () => css`
    border: ${theme.border.width.thin} solid rgba(0, 0, 0, 0.1);
    border-left-color: ${theme.color.brand.primary.base};
    height: 16px;
    width: 16px;

    & + p {
      font-size: ${theme.font.size.xlg};
    }
  `,
  md: () => css`
    border: ${theme.border.width.thick} solid rgba(0, 0, 0, 0.1);
    border-left-color: ${theme.color.brand.primary.base};
    height: 32px;
    width: 32px;

    & + p {
      font-size: ${theme.font.size.lg};
    }
  `,
  lg: () => css`
    border: 5px solid rgba(0, 0, 0, 0.1);
    border-left-color: ${theme.color.brand.primary.base};
    height: 48px;
    width: 48px;

    & + p {
      font-size: ${theme.font.size.lg};
    }
  `,
  xl: () => css`
    border: 6px solid rgba(0, 0, 0, 0.1);
    border-left-color: ${theme.color.brand.primary.base};
    height: 64px;
    width: 64px;

    & + p {
      font-size: ${theme.font.size.lg};
    }
  `,
  primary: () => css`
    border-left-color: ${theme.color.support.highlight1.base};
  `,
  secondary: () => css`
    border-left-color: ${theme.color.brand.neutral.white};
  `,
  tertiary: () => css`
    border-left-color: ${theme.color.support.highlight1.dark};
  `
}

export const Wrapper = styled.div<SpinnerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 95px;
`

export const Loading = styled.div<SpinnerProps>`
  ${({ size, color }) => css`
    border: ${theme.border.width.thin} solid rgba(0, 0, 0, 0.1);
    border-left-color: ${theme.color.brand.primary.base};
    border-radius: ${theme.border.radius.circular};
    height: 16px;
    width: 16px;
    ${theme.color.support.highlight1.base};
    animation: spin 1s linear infinite;

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    ${!!size && wrapperModifiers[size]};
    ${!!color && wrapperModifiers[color]};
  `}
`

export const Legend = styled.p`
  font-size: ${theme.font.size.xlg};
  color: ${theme.color.brand.primary.base};
  font-weight: ${theme.font.weight.regular};
  margin-top: ${theme.spacing.inline.nano};
`
