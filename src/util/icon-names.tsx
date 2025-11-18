export const ICON = {
  SEND: 'TbSend',
  SORT: 'TbArrowsSort',
  ELLIPSIS: 'TbDotsVertical',
  UPARROW: 'TbArrowUp',
  DOWNARROW: 'TbArrowDown',
  USER: 'TbUser',
  REPLY: 'TbArrowBack',
  ASCENDING: 'TbSortAscending',
  DESCENDING: 'TbSortDescending',
  CLOCK: 'TbClock',
} as const;

export type IconValue = (typeof ICON)[keyof typeof ICON];
