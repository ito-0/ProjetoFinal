import styled from 'styled-components';

import { Props } from '.';
import { breakpoints, cores } from '../../styles';
import { Card } from '../Product/styles';

export const Container = styled.section<Omit<Props, 'title' | 'restaurantes'>>`
  padding: 32px 0;
  background-color: ${cores.rosaClaro};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'branca' ? cores.branca : cores.rosaEscuro});
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 16px;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 40px;
  column-gap: 80px;
  margin-top: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;
