import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { cores } from '../../styles';

export const ButtonContainer = styled.button`
  border: 2px solid ${cores.branca};
  color: ${cores.branca};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
`;

export const ButtonLink = styled(Link)`
  margin-top: auto;
  color: ${cores.rosaEscuro};
  background-color: ${cores.rosaMedio};
  font-size: 16px;
  font-weight: bold;
  padding: 6px;
  text-decoration: none;
`;
