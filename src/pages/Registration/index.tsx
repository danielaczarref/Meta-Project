import React, { useRef, useState, useCallback } from 'react'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import { useUser } from 'contexts/user'
import getValidationErrors from 'utils/getErros'
import { RegistrationController } from 'controllers'
import Snackbar from 'node-snackbar'

import * as Yup from 'yup';
import * as C from 'components'
import * as S from 'styles/atomic'
import * as SC from './styles'

const Registration: React.FC = () => {
  const CN = useUser();
  const formRef = useRef<FormHandles>(null);
  const cpfInputRef = useRef(null);

  const [name, setName] = useState('');
  const [cpf, setCPF] = useState('');
  const optionsProfile = [
    {
      id: 1, tela: '',
    },
    {
      id: 2, tela: '',
    }
  ]

  const getCliente = () => {
    RegistrationController.getClient(cpf)
      .then((res: any) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log('erro: ', err);
        Snackbar.show({
          text: 'Erro ao buscar cliente. Entre em contato com nosso suporte',
          showAction: false
        })
      })
  }

  const handleSubmit = useCallback(async (data: any) => {
    
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        cpf: Yup.string().min(11, 'Preencha com 11 dígitos'),
      });
      await schema.validate(data, { abortEarly: false });

      getCliente();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    }
  }, [])

  return (
    <SC.ContainerCriar>
      <SC.ContainerRows>
        <SC.ContainerItem>
          <Form ref={formRef} onSubmit={handleSubmit}>
          <C.TextField
            id="cpf"
            name="cpf"
            label="Informe o CPF:"
            placeholder="000.000.000-00"
            value={cpf}
            onChange={(data: any) => {
              setCPF(data.target.value)
            }}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                getCliente();
                setCPF('');
              }
            }}
            onSubmit={() => formRef.current?.submitForm()}
          />
          </Form>
          </SC.ContainerItem>
          <SC.ContainerItem>
            <C.TextField
              id="name"
              name="name"
              label="Nome cliente:"
              placeholder="Ex.: José Dias de Araújo"
              value={cpf || ''}
              onChange={(data: any) => {
                console.log('teste')
              }}
            />
          </SC.ContainerItem>
          <SC.ContainerItem>
            <C.TextField
              id="profile"
              name="profile"
              label="Perfil:"
              placeholder="Ex.: Administrador"
              value={cpf || ''}
              onChange={(data: any) => {
                console.log('teste')
              }}
            />
          </SC.ContainerItem>
          <SC.ContainerItem>
          <C.Button 
            types="primary"
            fullWidth
            size="lg"
          >
            <S.Title color='white'>SALVAR</S.Title>
          </C.Button>
          </SC.ContainerItem>
      </SC.ContainerRows>
    </SC.ContainerCriar>
  )
}

export default Registration