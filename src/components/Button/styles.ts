import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Props } from '.';

import { colors } from '../../styles';

export const ButtonContainer = styled.button<Props>`
  border: none;
  color: ${colors.white};
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.darkPink : 'transparent'};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
`;

export const ButtonLink = styled(Link)`
  margin-top: auto;
  color: ${colors.darkPink};
  background-color: ${colors.softPink};
  font-size: 16px;
  font-weight: bold;
  padding: 6px;
  text-decoration: none;
  border: none;
`;
