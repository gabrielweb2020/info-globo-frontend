import React, { useCallback, useRef, useState, useEffect } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiArrowLeft } from 'react-icons/fi';
import * as Yup from 'yup';
import { useHistory, Link, useParams } from 'react-router-dom';

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

const EditPost: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const { id } = useParams();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

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

        api.put(`/posts/${id}`, data).then(() => history.push('/dashboard'));

        addToast({
          type: 'success',
          title: 'Post Atualizado!',
          description: 'As informações do post foram atualizadas com sucesso!',
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
          description: 'Ocorreu um erro ao atualizar o post, tente novamente.',
        });
      }
    },
    [addToast, history],
  );

  useEffect(() => {
    api.get(`/posts/${id}`).then(response => {
      setTitle(response.data.post.title);
      setDescription(response.data.post.description);
    });
  }, []);

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
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          id={id ? Number.parseInt(id, 10) : null}
        >
          <h1>Atualizar Post</h1>

          <section>
            <Input
              type="text"
              name="title"
              placeholder="Título do Post"
              onChange={e => setTitle(e.target.value)}
              value={title}
            />
            <Input
              name="description"
              placeholder="Descrição do Post"
              onChange={e => setDescription(e.target.value)}
              value={description}
            />
          </section>

          <Button type="submit">Atualizar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default EditPost;
