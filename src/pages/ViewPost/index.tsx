import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiClock, FiUser } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';

import { parseISO, format } from 'date-fns';
import api from '../../services/api';

import logoLight from '../../assets/logo_light.png';

import { Container, Content } from './styles';

interface IPostData {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  user: {
    name: string;
  };
}

const ViewPost: React.FC = () => {
  const { id } = useParams();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    api.get(`/posts/${id}`).then(response => {
      const postFormatted = format(
        parseISO(response.data.post.createdAt),
        'dd/MM/yyyy',
      );
      setTitle(response.data.post.title);
      setDescription(response.data.post.description);
      setUser(response.data.post.user.name);
      setDate(postFormatted);
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
        <h1>{title}</h1>
        <span>
          <FiClock /> {date}
          <FiUser /> {user}
        </span>
        <section>
          <p>{description}</p>
        </section>
      </Content>
    </Container>
  );
};

export default ViewPost;
