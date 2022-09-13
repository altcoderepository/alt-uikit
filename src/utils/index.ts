import { ColorKeys, Colors, Sizes, SizeValues } from './styleValues';

export function getFontSize(size: SizeValues): string {
  let fontSize = '16px';
  switch (size) {
    case Sizes.xl:
      fontSize = '3em';
      break;
    case Sizes.lg:
      fontSize = '2em';
      break;
    case Sizes.md:
      fontSize = '1em';
      break;
    case Sizes.sm:
      fontSize = '0.8em';
      break;
  }
  return fontSize;
}

export function getColor(color: ColorKeys): string {
  let returnsColor = Colors.primary;
  switch (color) {
    case 'primary':
      returnsColor = Colors.primary;
      break;
    case 'secondary':
      returnsColor = Colors.secondary;
      break;
    case 'success':
      returnsColor = Colors.success;
      break;
    case 'warning':
      returnsColor = Colors.warning;
      break;
  }
  return returnsColor;
}
