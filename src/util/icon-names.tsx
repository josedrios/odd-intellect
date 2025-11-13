export const ICON = {
  SEND: 'TbSend',
  SORT: 'TbArrowsSort',
  ELLIPSIS: 'TbDotsVertical',
  USER: 'TbUser',
  COMMENT: 'TbMessage',
  ASCENDING: 'TbSortAscending',
  DESCENDING: 'TbSortDescending',
  CLOCK: 'TbClock',
} as const;

export type IconValue = (typeof ICON)[keyof typeof ICON];
