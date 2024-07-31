import styled from 'styled-components';
import { TagContainer } from '../Tag/styles';

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 0;
  }

  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding-left: 120px;
  }

  ${TagContainer} {
    position: absolute;
    top: 40px;
  }
`;

export const Logo = styled.img`
  height: 52px;
`;

export const BannerTitle = styled.h1`
  font-size: 36px;
  max-width: 540px;
  text-align: center;
  padding-top: 340px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;
