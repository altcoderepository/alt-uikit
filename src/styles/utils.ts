import { Size } from './configs';

export function getFontSize(size: Size): string {
  let fontSize: string = '1em';
  switch (size) {
    case Size.XL:
      fontSize = '2.5em';
      break;
    case Size.LG:
      fontSize = '2em';
      break;
    case Size.MD:
      fontSize = '1em';
      break;
    case Size.SM:
      fontSize = '0.8em';
      break;
  }
  return fontSize;
}
