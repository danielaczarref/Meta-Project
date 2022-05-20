import styled, { css } from 'styled-components'
import MaskedInput from 'react-text-mask'

export const ContainerCriar = styled.div`
  flex: 1;
  margin: 16px 25%;
  margin-top: 32px;
  display: flex;
  justify-content: center;
`

export const ContainerRows = styled.div`
  flex: 1;
  display: flex;
  padding: 0px 16px;
  justify-content: start;
  flex-direction: column;
`

export const ContainerItem = styled.div`
  flex: 1;
  display: flex;
  padding: 0px 16px;
  justify-content: start;
  margin-top: 16px;
  flex-direction: column;
  width: 40%;
`

export const InputMasked = styled(MaskedInput)`
  height: 44px;
  border-radius: 8px;
  border: solid 2px #737385;
  font-size: 16px;
  margin-bottom: 8px;
  margin-top: 8px; 
`