import styled from 'styled-components';
import { cores } from '../../styles';

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 0;
  }

  .container {
    position: relative;
    color: ${cores.branca};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 16px 0;
  }
`;

export const Category = styled.h2`
  font-size: 32px;
  font-weight: 100;
`;
