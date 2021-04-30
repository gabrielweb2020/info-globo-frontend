import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  > header {
    height: 144px;
    background: #004861;
    display: flex;

    div {
      display: flex;
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;
      align-items: center;
      justify-content: center;

      div.arrow {
        width: 38%;
        justify-content: flex-start;

        svg {
          color: #b7bf1e;
          width: 36px;
          height: 36px;
        }
      }

      div.logo {
        width: 62%;
        justify-content: flex-start;

        img {
          width: 260px;
        }
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  padding: 64px 0;

  h1 {
    font-size: 32px;
    padding-bottom: 6px;
    border-bottom: 2px solid #d8df20;
    margin-bottom: 32px;
  }

  span {
    font-size: 16px;
    color: #b7bf1e;

    svg {
      font-size: 18px;
      margin-right: 4px;

      & + svg {
        margin-left: 18px;
      }
    }
  }

  section {
    display: flex;
    margin-top: 16px;

    p {
      font-size: 18px;
      color: #666;
    }
  }
`;
