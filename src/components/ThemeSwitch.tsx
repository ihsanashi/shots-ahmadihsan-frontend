import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Button, Flex } from './';
import { darkTheme } from '../../stitches.config';
import { useState, useEffect } from 'react';
import { Switch, SwitchThumb } from './Switch';
import { IconButton } from './';

export function ThemeSwitch() {
  const [theme, setTheme] = useState('theme-default');

  useEffect(() => {
    document.body.classList.remove('theme-default', darkTheme);
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <Flex justify='end' align='center'>
      <IconButton css={{ marginRight: '6px' }}>
        <SunIcon width={20} height={20} />
      </IconButton>
      <Switch defaultChecked id='theme-switcher'>
        <SwitchThumb />
      </Switch>
      <IconButton css={{ marginLeft: '6px' }}>
        <MoonIcon width={20} height={20} />
      </IconButton>
    </Flex>
  );
}
