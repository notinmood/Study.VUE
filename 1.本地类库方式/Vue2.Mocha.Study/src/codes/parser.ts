export const parse = (str: string): Record<string, string> => { // name=apps
  const obj: Record<string, string> = {};
  const pairs = str.split('&');
  pairs.forEach((pair) => {
    const [key, value] = pair.split('=');
    if (key) obj[key] = value || ''; // 防止空字符串导致 undefined
  });
  return obj;
};

export const stringify = (obj: Record<string, string>): string => { // (name:'apps'}
  const arr: string[] = [];
  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (const key in obj) {
    arr.push(`${key}=${obj[key]}`);
  }
  return arr.join('&'); // name=apps
};
