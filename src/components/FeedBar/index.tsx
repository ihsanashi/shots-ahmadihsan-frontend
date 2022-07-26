export { Theme } from './ThemeToggle';
export { LayoutSwitcher } from './LayoutSwitcher';
export { FeedSwitcher } from './FeedSwitcher';

import { FeedSwitcher, LayoutSwitcher, Theme } from './index';

export const FeedBar = () => {
  return (
    <section className='max-w-4xl p-4 mx-auto border-2 border-gray-100 divide-x-2 rounded-lg'>
      <div className='grid items-center grid-flow-col grid-cols-3 gap-4'>
        <LayoutSwitcher />
        <FeedSwitcher />
        <Theme />
      </div>
    </section>
  );
};
