import styled from 'styled-components';
import { colors } from '../../styles';

export const FooterContainer = styled.footer`
  background-color: ${colors.softPink};
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RedesSociaisLinks = styled.ul`
  display: flex;
  padding: 32px;
`;
export const Links = styled.a`
  margin-right: 8px;
`;

export const Logo = styled.img`
  margin-top: 24px;
  margin-right: 12px;
`;

export const FooterText = styled.p`
  font-size: 10px;
  color: ${colors.darkPink};
  max-width: 480px;
  text-align: center;
`;
