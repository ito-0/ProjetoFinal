import styled from 'styled-components';
import { cores } from '../../styles';

export const HeaderBar = styled.header`
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${cores.rosaEscuro};
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
  }

  div {
    display: flex;
    align-items: center;
  }
`;

export const Logo = styled.img`
  height: 48px;
`;

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`;

export const LinkItem = styled.li`
  margin-right: 16px;
`;

export const LinkCart = styled.a`
  display: flex;

  img {
    margin-left: 16px;
    filter: invert(45%) sepia(78%) saturate(597%) hue-rotate(314deg)
      brightness(98%) contrast(101%);
  }
`;
