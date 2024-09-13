import styled from 'styled-components';
import { cores } from '../../styles';
import { ButtonLink } from '../Button/styles';

export const Card = styled.div`
  background-color: ${cores.rosaEscuro};
  position: relative;
  border: 1px solid ${cores.rosaEscuro};
  color: ${cores.rosaClaro};
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  ${ButtonLink} {
    display: flex;
    justify-content: center;
  }
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

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
`;

export const ImageContainer = styled.div`
  position: relative;

  > img {
    object-fit: cover;
    height: 160px;
    width: 100%;
  }

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }
`;
