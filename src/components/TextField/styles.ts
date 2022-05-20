import styled, { css, DefaultTheme } from 'styled-components'
import * as S from 'styles/atomic'

type ContainerProps = {
  isError: boolean
  isFilled: boolean
  isFocused: boolean
  disabled?: boolean
}

type WrapperProps = {
  disabled?: boolean
}

type TextAssistiveProps = {
  typeMessage?: 'error' | 'success'
}

const TextAssistiveModifiers = {
  error: (theme: DefaultTheme) => css`
    color: ${theme.color.support.highlight1.base};
  `,
  success: (theme: DefaultTheme) => css`
    color: ${theme.color.support.highlight1.base};
  `
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  flex: 1;

  ${({ disabled }) => css`
    ${disabled &&
    css`
      opacity: 0.32;
    `}
  `}
`

export const ContainerInput = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 48px;
  box-sizing: border-box;

  ${({ isError, isFocused, isFilled, disabled }) => css`
    background: #FFFFFF;
    border-radius: 4px;
    border: 1px solid #C8CED2;

    ${isError &&
    css`
      border: 1px solid #A32122;
    `}

    ${isFilled &&
    css`
      border: 1px solid #C8CED2;
    `}


     &:hover {
      ${!isFocused &&
      !disabled &&
      css`
        background-color: #DEDEDE;
        border: 1px solid #1D5AF5;
      `}
    }

    ${isFocused &&
    css`
      border: 2px solid #1D5AF5;
    `}

    ${disabled &&
    css`
      border: 1px solid #DEDEDE;
      background-color: #FFFFFF;
    `}



    input {
      flex: 1;
      height: 48px;
      width: 100%auto;
      border: none;
      background: inherit;
      box-sizing: border-box;
      background-color: transparent;
      font-family: ${S.fonts.medium};
      font-size: ${S.fonts.md};
      font-weight: 600px;
      color: #202029;
      caret-color: #1D5AF5;
      padding-left: 8px;

      &:focus {
        border: none;
        outline: none;
      }

      &::placeholder {
        color: #202029;
      }
    }
    input[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    input[type='number'] {
      -moz-appearance: textfield;
      appearance: textfield;
    }
  `}
`

export const ButtonClear = styled.button`
  border: none;
  background-color: transparent;
  height: 24px;
  width: 24px;
  margin-right: 8px;
  margin-left: 8px;
`

export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ContainerContador = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 8px;
`

export const ContainerMessage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 8px;
`

export const TextAssistive = styled.span<TextAssistiveProps>`
  ${({ theme, typeMessage }) => css`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400px;
    text-align: start;
    margin-left: 8px;

    ${TextAssistiveModifiers[typeMessage || 'success'](theme)}
  `}
`

export const TextContador = styled.span<TextAssistiveProps>`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400px;
  text-align: end;
`
