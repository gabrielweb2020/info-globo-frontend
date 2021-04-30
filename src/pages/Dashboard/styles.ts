import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px 0;
  background: #004861;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    max-width: 200px;
  }

  button {
    margin-left: auto;
    border: 0;
    background: transparent;

    svg {
      color: #d8df20;
      height: 20px;
      width: 20px;
    }
  }
`;

export const Profile = styled.div`
  margin-left: 80px;
  display: flex;
  align-items: center;

  div {
    margin-left: 6px;
    line-height: 24px;
    display: flex;
    flex-direction: column;

    span {
      color: #f4ede8;
    }

    strong {
      color: #d8df20;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
  flex-direction: column;
`;

export const HeaderPosts = styled.header`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  border-bottom: 4px solid #d8df20;
  margin-bottom: 64px;

  h1 {
    font-size: 42px;
    padding-bottom: 6px;
  }

  button {
    background: #014762;
    height: 48px;
    border-radius: 10px;
    border: 0;
    padding: 0 12px;
    color: #f5f5f5;
    width: 160px;
    font-weight: 500;
    margin-bottom: 8px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#014762')};
    }
  }
`;

export const ContentPosts = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  justify-content: space-between;
  align-items: center;

  p {
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    background: #014762;
    color: #f5f5f5;
    padding: 16px;
    border-radius: 10px;
  }
`;

export const ContentPostsItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 16px 8px;
  width: 48%;
  border-radius: 10px;
  border: 2px solid #004861;
  color: #004861;
  background: #f5f5f5;

  h1 {
    font-size: 22px;
    padding-bottom: 8px;
  }

  span {
    font-size: 16px;
    padding-bottom: 16px;
    color: #b7bf1e;

    svg {
      font-size: 18px;
      margin-right: 4px;

      & + svg {
        margin-left: 18px;
      }
    }
  }

  button {
    background: transparent;
    outline: 0;
    border: 0;
    font-size: 22px;
    margin-right: 8px;
    color: #004861;
    transition: background-color 0.2s;

    &:hover {
      color: ${shade(0.2, '#004861')};
    }
  }
`;
