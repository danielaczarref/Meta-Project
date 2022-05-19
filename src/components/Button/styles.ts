import styled, { css } from 'styled-components'
import theme from 'styles/theme'

import { ButtonProps } from './types'

type WrapperProps = Pick<
  ButtonProps,
  'types' | 'size' | 'fullWidth' | 'disable' | 'loading'
>

export const DivIcon = styled.div`
  margin-right: 5px;
`

const wrapperModifiers = {
  // types
  primary: () => css`
    background: ${theme.color.brand.primary.base};
    color: ${theme.color.brand.neutral.white};
    & svg {
      color: ${theme.color.brand.neutral.white} !important;
    }
  `,
  secondary: () => css`
    background: ${theme.color.brand.neutral.white};
    color: ${theme.color.brand.primary.base};
    border: ${theme.border.width.hairline} solid
      ${theme.color.brand.primary.base};

    & svg {
      color: ${theme.color.brand.primary.base} !important;
    }
    &:hover {
      background: ${theme.color.brand.primary.lightest};
    }
  `,
  text: () => css`
    background: transparent;
    border: ${theme.border.width.none};
    color: ${theme.color.brand.primary.base};

    & svg {
      color: ${theme.color.brand.primary.base} !important;
    }

    &:hover {
      background: ${theme.color.brand.primary.lightest};
    }
  `,
  danger: () => css`
    background: ${theme.color.brand.neutral.white};
    color: ${theme.color.support.highlight1.base};
    border: ${theme.border.width.hairline} solid
      ${theme.color.support.highlight1.base};

    & svg {
      color: ${theme.color.support.highlight1.base} !important;
    }

    &:hover {
      background: ${theme.color.support.highlight1.light};
    }
  `,
  md: () => css`
    padding: ${theme.spacing.squish.nano};
  `,
  lg: () => css`
    padding: ${theme.spacing.squish.xs};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  disable: () => css`
    opacity: ${theme.opacity.medium};
    cursor: not-allowed;
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ types, size, fullWidth, disable, loading }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: ${theme.font.weight.medium};
    font-size: ${theme.font.size.lg};
    color: ${theme.color.brand.neutral.white};
    padding: ${theme.spacing.squish.nano};
    cursor: pointer;
    border-radius: ${theme.border.radius.sm};
    box-sizing: border-box;
    border: ${theme.border.width.hairline} solid
      ${theme.color.brand.primary.base};
    transition: 0.5s ease-in-out;

    &:hover {
      background: ${theme.color.brand.primary.dark};
    }

    ${loading &&
    css`
      span {
        margin-right: ${theme.spacing.inline.nano};
      }
    `}

    ${!!types && wrapperModifiers[types]};
    ${!!size && wrapperModifiers[size]};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${disable && wrapperModifiers.disable()};
  `}
`

export const Span = styled.span``