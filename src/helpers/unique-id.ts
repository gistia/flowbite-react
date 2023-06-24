let prefixCounter = 0;

export const uniqueId = (length = 10) => {
  prefixCounter++;
  const suffix = Array.from({ length }, () => Math.floor(Math.random() * 36).toString(36)).join('');

  return `${prefixCounter}${suffix}`;
};
