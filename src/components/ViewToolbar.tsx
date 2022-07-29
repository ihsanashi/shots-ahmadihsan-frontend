import {
  Toolbar,
  ToolbarToggleGroup,
  ToolbarToggleItem,
  ToolbarSeparator,
} from './Toolbar';
import {
  ArchiveIcon,
  BoxIcon,
  DashboardIcon,
  ImageIcon,
  SectionIcon,
  VideoIcon,
} from '@radix-ui/react-icons';

export const ViewToolbar = () => (
  <Toolbar aria-label='Layout and feed options'>
    <ToolbarToggleGroup
      type='single'
      aria-label='Layout mode'
      defaultValue='card'
    >
      <ToolbarToggleItem value='card' aria-label='Cards'>
        <BoxIcon />
      </ToolbarToggleItem>
      <ToolbarToggleItem value='masonry' aria-label='Masonry grid'>
        <DashboardIcon />
      </ToolbarToggleItem>
      <ToolbarToggleItem value='carousel' aria-label='Horizontal carousel'>
        <SectionIcon />
      </ToolbarToggleItem>
    </ToolbarToggleGroup>
    <ToolbarSeparator />
    <ToolbarToggleGroup
      type='single'
      defaultValue='ig_photos'
      aria-label='Feed mode'
    >
      <ToolbarToggleItem value='ig_photos' aria-label='Instagram photos'>
        <ImageIcon />
      </ToolbarToggleItem>
      <ToolbarToggleItem value='ig_stories' aria-label='Instagram stories'>
        <ArchiveIcon />
      </ToolbarToggleItem>
      <ToolbarToggleItem value='ig_videos' aria-label='Instagram videos'>
        <VideoIcon />
      </ToolbarToggleItem>
    </ToolbarToggleGroup>
  </Toolbar>
);
