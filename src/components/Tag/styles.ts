import styled from 'styled-components';
import { cores } from '../../styles';

import { Props } from '.';

export const TagContainer = styled.div<Props>`
  background-color: ${cores.rosaEscuro};
  color: ${cores.branca};
  font-size: ${(props) => (props.size === 'big' ? '18px' : '14px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  border-radius: 8px;
  display: inline-block;
`;
