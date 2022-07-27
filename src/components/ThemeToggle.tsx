import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export const ThemeToggle = ({}) => {
  return (
    <div className='flex justify-end'>
      <button>
        <SunIcon width={20} height={20} />
      </button>
    </div>
  );
};
