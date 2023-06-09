const formatter = new Intl.NumberFormat('ko');

export const formatNum = (num) => {
  return formatter.format(num);
};