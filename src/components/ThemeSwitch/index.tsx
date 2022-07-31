import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Button, IconButton, Flex } from '..';
import { useTheme } from 'next-themes';
import { Switch, SwitchThumb } from '../Switch';

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Flex justify='end' align='center'>
      <IconButton css={{ marginRight: '6px' }}>
        <SunIcon width={20} height={20} />
      </IconButton>
      <Switch defaultChecked id='theme-switcher' onClick={toggleTheme}>
        <SwitchThumb />
      </Switch>
      <IconButton css={{ marginLeft: '6px' }}>
        <MoonIcon width={20} height={20} />
      </IconButton>
    </Flex>
  );
}
