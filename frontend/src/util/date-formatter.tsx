import dayjs from 'dayjs';

export function postDateFormatter(date: Date): string {
  return dayjs(date).format('MM-DD-YYYY');
}

export function commentDateFormatter(dateParam: Date): string {
  const date = dayjs(dateParam);
  const secondsPassed = dayjs().diff(date, 'second');
  const minutesPassed = dayjs().diff(date, 'minute');
  const hoursPassed = dayjs().diff(date, 'hour');
  const daysPassed = dayjs().diff(date, 'day');

  if (secondsPassed < 60) return minutesPassed + ' seconds ago';
  else if (minutesPassed < 60) return minutesPassed + ' minutes ago';
  else if (hoursPassed < 24) return hoursPassed + ' hours ago';
  else if (daysPassed < 31) return daysPassed + ' days ago';
  else return dayjs(date).format('MMMM D, YYYY');
}
