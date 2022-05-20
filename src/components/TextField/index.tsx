import React, { useState, useCallback, useRef } from 'react'
import { Close, Error, CheckCircle } from '@material-ui/icons'
import theme from 'styles/theme'
import { TextFieldProps } from './types'
import * as S from './styles'
import * as AS from 'styles/atomic'

const IconMessageModifiers = {
  error: (
    <Error
      style={{
        color: theme.color.support.highlight1.base,
        fontSize: '16px'
      }}
    />
  ),
  success: (
    <CheckCircle
      style={{
        color: theme.color.support.highlight1.base,
        fontSize: '16px'
      }}
    />
  )
}

const TextField: React.FC<TextFieldProps> = ({
  id,
  name,
  label,
  ariaLabelledby,
  message,
  typeMessage,
  disabled,
  maxLength,
  onChange,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [isText, setIsText] = useState(false)
  const [contador, setContador] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const [event, setEvent] = useState<React.ChangeEvent<HTMLInputElement>>()

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = () => {
    setIsFocused(false)
    setIsFilled(!!inputRef?.current?.value)
  }

  const handleClearText = () => {
    if (inputRef?.current?.value) {
      inputRef.current.value = ''

      if (event) {
        event.target.value = ''
        onChange(event)
      }
      setIsText(false)
    }
  }

  const handleChange = useCallback((e: any) => {
    if (onChange) {
      onChange(e)
      setEvent(e)
      setContador(e.target.value.length)
    }
    setIsText(!!e.target.value.length)
  }, [])

  return (
    <S.Wrapper disabled={disabled}>
      <AS.Title style={{ marginBottom: 12}}>
        {label}
      </AS.Title>
      <S.ContainerInput
        isError={typeMessage === 'error'}
        isFilled={isFilled}
        isFocused={isFocused}
        disabled={disabled}
      >
        <input
          name={name}
          id={id}
          ref={inputRef}
          aria-labelledby={ariaLabelledby}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={handleChange}
          disabled={disabled}
          maxLength={maxLength || undefined}
          {...rest}
        />

        <S.ButtonClear onClick={() => !!isText && handleClearText()}>
          {!!isText && (
            <Close
              style={{
                color: theme.color.brand.neutral.dark,
                fontSize: '24px'
              }}
            />
          )}
        </S.ButtonClear>
      </S.ContainerInput>
      <S.ContainerFooter>
        <S.ContainerMessage>
          {!!message && (
            <>
              {IconMessageModifiers[typeMessage || 'error']}
              <S.TextAssistive typeMessage={typeMessage || 'error'}>
                {message}
              </S.TextAssistive>
            </>
          )}
        </S.ContainerMessage>
        <S.ContainerContador>
          {!!maxLength && (
            <S.TextContador>{`${contador}/${maxLength}`}</S.TextContador>
          )}
        </S.ContainerContador>
      </S.ContainerFooter>
    </S.Wrapper>
  )
}

export default TextField
