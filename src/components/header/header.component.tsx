import React from 'react';

import { Bars, HeaderContainer, LogoContainer, OptionLink, OptionsContainer, Logo } from './header.styles';
import OpenNav from './open-nav/open-nav.component';

const Header = () => {
  const [display, setDisplay] = React.useState(false);

  const openMenu = () => {
    setDisplay(!display);
  };

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
        <Bars onClick={openMenu} />
      </LogoContainer>
      {display ? <OpenNav /> : ''}
      <OptionsContainer>
        <OptionLink to="/signin">SIGN IN</OptionLink>
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
