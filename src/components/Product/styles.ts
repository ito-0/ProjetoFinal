import styled from 'styled-components';
import { colors } from '../../styles';
import { TagContainer } from '../Tag/styles';
import { ButtonLink } from '../Button/styles';

export const ProdCard = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.darkPink};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }

  ${ButtonLink} {
    margin: 8px;
    align-self: flex-start;
    display: inline-block;
    color: ${colors.lightPink};
    background-color: ${colors.darkPink};
  }
`;

export const ProdImg = styled.img`
  height: 216px;
  width: 100%;
  object-fit: cover;
`;

export const ProdTitle = styled.h3`
  font-weight: bold;
  font-size: 18px;
`;

export const ProdGrade = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;

  > img {
    margin-left: 8px;
    margin-top: -4px;
    height: 21px;
    width: 21px;
  }
`;

export const ProdContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;

export const ProdDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  padding: 8px;
`;

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;
