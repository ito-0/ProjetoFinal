import styled from 'styled-components';
import { breakpoints, cores } from '../../styles';
import { TagContainer } from '../Tag/styles';
import { ButtonLink } from '../Button/styles';

export const Card = styled.div`
  background-color: ${cores.branca};
  border: 1px solid ${cores.rosaEscuro};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }

  ${ButtonLink} {
    margin: 8px;
    align-self: flex-start;
    display: inline-block;
    color: ${cores.rosaClaro};
    background-color: ${cores.rosaEscuro};
  }
`;

export const CapaImg = styled.img`
  height: 216px;
  width: 100%;
  object-fit: cover;
`;

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
`;

export const Nota = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;

  > img {
    margin-left: 8px;
    margin-top: -4px;
    height: 21px;
    width: 21px;
  }
`;

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  padding: 8px;
`;

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const TituloNotaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;
