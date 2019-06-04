import React from 'react';
import styled from 'styled-components';

import Icon from './Icon';

import { LIGHT_THEME_KEY, DARK_THEME_KEY } from '../util/theme';

const SwitchButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  background-color: transparent;

  border: none;
  cursor: pointer;
  padding: 10px;
`;

const LightThemeButton = styled(SwitchButton)`
  width: 40px;
  color: ${props => props.theme.colors.white};
`;

const DarkThemeButton = styled(SwitchButton)`
  width: 37px;
  color: ${props => props.theme.colors.black};
`;

const SwitchTheme = ({ onClick, currThemeKey }) => (
  <div>
    {currThemeKey === LIGHT_THEME_KEY ? (
      <DarkThemeButton
        onClick={() => onClick(DARK_THEME_KEY)}
        themeKey={DARK_THEME_KEY}
        type="button"
      >
        <Icon iconKey="moon" />
      </DarkThemeButton>
    ) : (
      <LightThemeButton
        onClick={() => onClick(LIGHT_THEME_KEY)}
        themeKey={LIGHT_THEME_KEY}
        type="button"
      >
        <Icon iconKey="sun" />
      </LightThemeButton>
    )}
  </div>
);

export default SwitchTheme;
