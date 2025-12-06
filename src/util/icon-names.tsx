export const ICON = {
  SEND: 'TbSend',
  SORT: 'TbArrowsSort',
  SEARCH: 'TbSearch',
  ELLIPSIS: 'TbDotsVertical',
  UPARROW: 'TbArrowUp',
  DOWNARROW: 'TbArrowDown',
  RIGHTARROW: 'TbArrowRight',
  LEFTARROW: 'TbArrowLeft',
  USER: 'TbUser',
  REPLY: 'TbArrowBack',
  ASCENDING: 'TbSortAscending',
  DESCENDING: 'TbSortDescending',
  CLOCK: 'TbClock',
  SHARE: 'TbShare2',
} as const;

export type IconValue = (typeof ICON)[keyof typeof ICON];
