import styled, { css } from 'styled-components'
import theme from 'styles/theme'
import MaskedInput from 'react-text-mask'

export const ContainerLogin = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 10%;
`

export const SectionLogin = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  align-content: center;
`

export const CardLogin = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  box-shadow: var(--shadow);
  padding: 32px;
  border-radius: var(--radius);
  background-color: white;
  min-width: 600px;
`

export const InputCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`

export const InputCardInfo = styled.input`
  height: 44px;
  border-radius: 8px;
  border: solid 2px #737385;
  font-size: 14pt;
  padding: 0 16px;
  margin-bottom: 8px;
  margin-top: 8px;
`

export const InputMaskInfo = styled(MaskedInput)`
  height: 44px;
  border-radius: 8px;
  border: solid 2px #737385;
  font-size: 14pt;
  padding: 0 16px;
  margin-bottom: 8px;
  margin-top: 8px;
`

export const ContainerButton = styled.div`
  margin-top: 8px;
`