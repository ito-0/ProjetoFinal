import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Props } from '.';

import { cores } from '../../styles';

export const ButtonContainer = styled.button<Props>`
  border: none;
  color: ${cores.branca};
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.rosaEscuro : 'transparent'};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
`;

export const ButtonLink = styled(Link)`
  margin-top: auto;
  color: ${cores.rosaEscuro};
  background-color: ${cores.rosaMedio};
  font-size: 16px;
  font-weight: bold;
  padding: 6px;
  text-decoration: none;
  border: none;
`;
