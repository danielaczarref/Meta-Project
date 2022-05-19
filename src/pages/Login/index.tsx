import React, { useState } from 'react'
import * as SC from './styles'
import * as S from 'styles/atomic'
import * as C from 'components'

const Login: React.FC = () => {
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const maskArray = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]

  const handleChangePassword = (e: any) => {
    setPassword(e.target.value)
  }

  const handleChangeLogin = (e: any) => {
    setUsername(e.target.value)
  }

  const checkKey = (e: any) => {
    if (e.keyCode === 13) {
      console.log('teste')
    }
  }

  return (
    <SC.ContainerLogin>
     <SC.SectionLogin>
       <SC.CardLogin>
         <S.TitleHighlight>Faça login na sua conta</S.TitleHighlight>
         <S.Title>Use seu CPF e senha</S.Title>
          <SC.InputCard>
            <SC.InputMaskInfo 
              type='cpf' 
              placeholder='Ex.: 123.123.123-00' 
              mask={maskArray} 
              onChange={handleChangeLogin} 
              value={username} 
            />
            <SC.InputCardInfo type="password" placeholder='Informe sua senha' onKeyDown={checkKey} onChange={handleChangePassword} value={password || ''} />
            
          </SC.InputCard>
          <SC.ContainerButton>
          <C.Button 
            types="primary"
            fullWidth
            size="lg"
          >
            <S.Title color='white'>ENTRAR</S.Title>
          </C.Button>
       </SC.ContainerButton>
       </SC.CardLogin>
       
     </SC.SectionLogin>
     </SC.ContainerLogin>
  )
}

export default Login