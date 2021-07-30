import md5 from 'md5';

const ConvertMd5 = (text: string): string => {
  let cadena = '';
  const buf = md5(text);
  const h = buf.substring(0, 12);
  let first = -1;
  let last = -1;

  for (let i = 0; i < h.length; i++) {
    const regex = /^[0-9]*$/;
    const isNumber = regex.test(h[i]);
    if (!isNumber && first === -1) {
      cadena += h[i].toUpperCase();
      first = i;
    } else {
      cadena += h[i];
    }

    if (isNumber) {
      last = Number(h[i]);
    }
  }
  const cadenaNew = cadena.replace(`${last}`, '*');

  return cadenaNew;
};

export default ConvertMd5;
