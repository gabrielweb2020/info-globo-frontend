import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #f5f5f5;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 2px solid #004861;
  color: #004861;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 14px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #d8df20;
      border-color: #d8df20;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #d8df20;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #004861;

    &::placeholder {
      color: #004861;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
