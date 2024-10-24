import styled from 'styled-components';

import { Props } from '.';
import { breakpoints, colors } from '../../styles';
import { ProdCard } from '../Product/styles';

export const Container = styled.section<Omit<Props, 'title' | 'cardapio'>>`
  padding: 32px 0;
  background-color: ${colors.lightPink};

  ${ProdCard} {
    background-color: ${(props) =>
      props.background === 'white' ? colors.white : colors.darkPink});
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 16px;
  }
`;

export const RestList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 40px;
  column-gap: 40px;
  margin: 40px 0;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`;
