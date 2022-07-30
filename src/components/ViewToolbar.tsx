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
import { useState } from 'react';

export const ViewToolbar = () => {
  const [viewMode, setViewMode] = useState('card');
  const [mediaColumn, setMediaColumn] = useState('ig_photos');

  console.log(viewMode);
  console.log(mediaColumn);

  return (
    <Toolbar aria-label='Layout and feed options'>
      <ToolbarToggleGroup
        type='single'
        defaultValue={viewMode}
        aria-label='View mode'
        onValueChange={(value) => {
          setViewMode(value);
        }}
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
        defaultValue={mediaColumn}
        aria-label='Feed mode'
        onValueChange={(value) => {
          setMediaColumn(value);
        }}
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
};
