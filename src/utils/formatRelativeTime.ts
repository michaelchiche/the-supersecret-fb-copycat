// Source: https://suckatcoding.com/blog/relative-time-in-js/
export function formatRelativeTime(
  date: Date,
  reference = new Date(),
  language = navigator.language,
) {
  if (!date) return '';

  date = new Date(date);
  let delta = Math.round((date.getTime() - reference.getTime()) / 1000),
    deltaInUnit = delta,
    unit = 'second';

  const units = [
    { unit: 60, name: 'minute' },
    { unit: 60 * 60, name: 'hour' },
    { unit: 60 * 60 * 24, name: 'day' },
    { unit: 60 * 60 * 24 * 7, name: 'week' },
    { unit: 60 * 60 * 24 * 30, name: 'month' },
    { unit: 60 * 60 * 24 * 400, name: 'year' },
  ];

  for (let u of units) {
    if (Math.abs(delta) > u.unit) {
      deltaInUnit = delta / u.unit;
      unit = u.name;
    }
  }

  return new Intl.RelativeTimeFormat(language, {
    style: 'long',
    numeric: 'auto',
  }).format(+deltaInUnit.toFixed(0), unit as Intl.RelativeTimeFormatUnit);
}
