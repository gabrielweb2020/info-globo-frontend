import React, { useCallback, useRef, useState, useEffect } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiArrowLeft } from 'react-icons/fi';
import * as Yup from 'yup';
import { useHistory, Link } from 'react-router-dom';

import api from '../../services/api';

import { useToast } from '../../hooks/toast';
import { useAuth } from '../../hooks/auth';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoLight from '../../assets/logo_light.png';

import { Container, Content } from './styles';

interface IPostData {
  id: string;
  title: string;
  description: string;
}

const NewPost: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: IPostData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          title: Yup.string().required('Título Obrigatório'),
          description: Yup.string().required('Descrição Obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { title, description } = data;

        api
          .post('/posts', {
            title,
            description,
          })
          .then(() => history.push('/dashboard'));

        addToast({
          type: 'success',
          title: 'Post Cadastrado!',
          description: 'As informações do post foram cadastradas com sucesso!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao Cadastrar',
          description: 'Ocorreu um erro ao cadastrar o post, tente novamente.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <header>
        <div>
          <div className="arrow">
            <Link to="/dashboard">
              <FiArrowLeft />
            </Link>
          </div>

          <div className="logo">
            <img src={logoLight} alt="InfoGlobo" />
          </div>
        </div>
      </header>

      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Cadastrar Post</h1>

          <section>
            <Input type="text" name="title" placeholder="Título do Post" />
            <Input name="description" placeholder="Descrição do Post" />
          </section>

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default NewPost;
