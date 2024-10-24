import styled from 'styled-components';

import { Props } from '.';
import { breakpoints, colors } from '../../styles';
import { ProdCard } from '../Product/styles';

export const Container = styled.section<Omit<Props, 'title' | 'restaurantes'>>`
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

export const ProdList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 40px;
  column-gap: 80px;
  margin-top: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ProdListTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  background-color: red;
`;
