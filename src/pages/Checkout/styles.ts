import styled from 'styled-components';
import { breakpoints, cores } from '../../styles';

type RowProps = {
  maxWidth?: string;
};

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Row = styled.div`
  display: flex;
  column-gap: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`;

export const InputGroup = styled.div<RowProps>`
  flex: auto;
  font-size: 14px;
  max-width: ${(props) => props.maxWidth || ''};

  label {
    font-weight: bold;
    margin: 16px 0 8px;
    display: block;
  }

  input {
    border: none;
    height: 32px;
    width: 100%;
    font-weight: bold;
    padding: 8px;
  }

  &.error {
    border: 1px solid red;
  }

  .error-message {
    position: absolute;
    color: ${cores.preta};
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 16px;
  }
`;
