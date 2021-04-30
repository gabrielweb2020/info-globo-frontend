/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
import React, {
  useState,
  useCallback,
  useEffect,
  useMemo,
  MouseEventHandler,
} from 'react';
import { Link } from 'react-router-dom';
import {
  FiPower,
  FiClock,
  FiPenTool,
  FiTrash,
  FiEye,
  FiUser,
} from 'react-icons/fi';
import { format, parseISO } from 'date-fns';

import api from '../../services/api';

import { useAuth } from '../../hooks/auth';

import logoLight from '../../assets/logo_light.png';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  HeaderPosts,
  ContentPosts,
  ContentPostsItem,
} from './styles';

interface Posts {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  dateFormatted: string;
  user: {
    name: string;
  };
}

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    api.get('posts').then(response => {
      const postsFormatted = response.data.posts.map(post => {
        return {
          ...post,
          dateFormatted: format(parseISO(post.createdAt), 'dd/MM/yyyy'),
        };
      });

      setPosts(postsFormatted);
    });
  }, []);

  function handleRemovePost(id: string) {
    const postsFilter = posts.filter(post => post._id !== id);
    api.delete(`/posts/${id}`).then(() => setPosts(postsFilter));
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoLight} alt="InfoGlobo" />

          <Profile>
            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <HeaderPosts>
          <h1>Posts</h1>
          <Link to="/new-post">
            <button type="button">Cadastrar Post</button>
          </Link>
        </HeaderPosts>

        <ContentPosts>
          {posts.length === 0 && (
            <p>Ainda Não Existe Nenhum Post Cadastrado!</p>
          )}

          {posts.map(post => (
            <ContentPostsItem key={post._id}>
              <h1>{post.title}</h1>
              <span>
                <FiClock /> {post.dateFormatted}
                <FiUser /> {post.user.name}
              </span>
              <div>
                <Link to={`/edit-post/${post._id}`}>
                  <button type="button">
                    <FiPenTool />
                  </button>
                </Link>
                <button
                  type="button"
                  onClick={() => handleRemovePost(post._id)}
                >
                  <FiTrash />
                </button>
                <Link to={`/view-post/${post._id}`}>
                  <button type="button">
                    <FiEye />
                  </button>
                </Link>
              </div>
            </ContentPostsItem>
          ))}
        </ContentPosts>
      </Content>
    </Container>
  );
};

export default Dashboard;
