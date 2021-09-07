const pad = (num: number) => {
  return ('0' + num).slice(-2);
};

export const formatSeconds = (
  seconds: number,
  format: 'HH:mm:SS' | 'HH:mm',
) => {
  let minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  let hours = Math.floor(minutes / 60);
  minutes = minutes % 60;
  if (format === 'HH:mm:SS') {
    return `${hours}:${pad(minutes)}:${pad(seconds)}`;
  } else if (format === 'HH:mm') {
    return `${pad(hours)}:${pad(minutes)}`;
  }
};
