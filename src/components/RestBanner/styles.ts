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
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.5;
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
