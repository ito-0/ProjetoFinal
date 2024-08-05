import styled from 'styled-components';
import { cores } from '../../styles';

export const HeaderBar = styled.header`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  position: relative;

  a {
    color: ${cores.rosaEscuro};
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
  }
`;

export const Logo = styled.img`
  height: 48px;
  position: absolute;
  margin-top: 24px;
`;

export const Links = styled.ul`
  display: none;

  &.visivel {
    display: flex;
  }
`;

export const LinkItem = styled.li`
  padding: 32px 0;
  margin-right: 392px;
  margin-left: 392px;
  white-space: nowrap;
`;

export const BannerTitle = styled.h1`
  font-size: 36px;
  max-width: 540px;
  text-align: center;
  margin-top: 200px;
  margin-bottom: 4px;
`;
