import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as IconLogo } from '../../assets/logo.svg';
import { FaBars } from 'react-icons/fa';

const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

const ResponsiveOptions = css`
  display: none;

  @media screen and (max-width: 768px) {
    height: 80%;
    width: 70px;
    padding: 25px;
    display: flex;
    align-items: flex-end;
    font-size: 2rem;
    justify-content: flex-end;
    cursor: pointer;
  }
`;

export const Bars = styled(FaBars)`
  ${ResponsiveOptions}
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 768px) {
    height: auto;
    flex-direction: column;
  }
`;

export const LogoContainer = styled(Link)`
  height: 80%;
  width: 70px;
  padding: 25px;
  top: 0;
  left: 0;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
    width: 100%;
  }
`;

export const Logo = styled(IconLogo)`
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: flex-start;
    width: 70px;
    height: 70px;
    padding: 25px;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
