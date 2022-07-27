import { styled } from '@stitches/react';
import { mauve } from '@radix-ui/colors';
import {
  ArchiveIcon,
  BoxIcon,
  DashboardIcon,
  ImageIcon,
  SectionIcon,
  VideoIcon,
} from '@radix-ui/react-icons';
import * as ToolbarPrimitive from '@radix-ui/react-toolbar';

const StyledToolbar = styled(ToolbarPrimitive.Root, {
  display: 'flex',
  justifyContent: 'space-evenly',
  padding: 10,
  width: '100%',
  minWidth: 'max-content',
  borderRadius: 6,
  backgroundColor: 'white',
});

const itemStyles = {
  all: 'unset',
  flex: '0 0 auto',
  color: mauve.mauve11,
  padding: '0 8px',
  borderRadius: 4,
  display: 'inline-flex',
  fontSize: 13,
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': { backgroundColor: mauve.mauve3, color: mauve.mauve11 },
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px ${mauve.mauve7}` },
};

const StyledButton = styled(
  ToolbarPrimitive.Button,
  {
    ...itemStyles,
    paddingLeft: 10,
    paddingRight: 10,
    color: 'white',
    backgroundColor: mauve.mauve9,
  },
  { '&:hover': { color: 'white', backgroundColor: mauve.mauve10 } }
);

const StyledLink = styled(
  ToolbarPrimitive.Link,
  {
    ...itemStyles,
    backgroundColor: 'transparent',
    color: mauve.mauve11,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  { '&:hover': { backgroundColor: 'transparent', cursor: 'pointer' } }
);

const StyledSeparator = styled(ToolbarPrimitive.Separator, {
  width: 1,
  backgroundColor: mauve.mauve6,
  margin: '0 10px',
});

const StyledToggleGroup = styled(ToolbarPrimitive.ToggleGroup, {
  display: 'inline-flex',
  borderRadius: 4,
});

const StyledToggleItem = styled(ToolbarPrimitive.ToggleItem, {
  ...itemStyles,
  boxShadow: 0,
  backgroundColor: 'white',
  marginLeft: 2,
  '&:first-child': { marginLeft: 0 },
  '&[data-state=on]': {
    backgroundColor: mauve.mauve5,
    color: mauve.mauve11,
  },
});

// Exports
export const Toolbar = StyledToolbar;
export const ToolbarButton = StyledButton;
export const ToolbarSeparator = StyledSeparator;
export const ToolbarLink = StyledLink;
export const ToolbarToggleGroup = StyledToggleGroup;
export const ToolbarToggleItem = StyledToggleItem;

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
