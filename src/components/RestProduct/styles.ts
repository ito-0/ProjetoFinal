import styled from 'styled-components';
import { cores } from '../../styles';
import { ButtonLink } from '../Button/styles';

export const Card = styled.div`
  background-color: ${cores.rosaEscuro};
  position: relative;
  border: 1px solid ${cores.rosaEscuro};
  color: ${cores.rosaClaro};
  padding: 8px;

  ${ButtonLink} {
    display: flex;
    border: none;
    color: ${cores.rosaEscuro};
    background-color: ${cores.rosaClaro};
    font-size: 14px;
    font-weight: bold;
    justify-content: center;
`;

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin: 8px 0;
`;

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 8px 0;
`;
