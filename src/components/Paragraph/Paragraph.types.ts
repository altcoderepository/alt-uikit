import { ColorKeys, SizeValues } from '../../utils/styleValues';

export interface ParagraphProps {
  children: string;
  color?: ColorKeys;
  size?: SizeValues;
  bold?: boolean;
  italic?: boolean;
}

export interface ParagraphStyleProps {
  size: SizeValues;
  color: ColorKeys;
  bold: boolean;
  italic: boolean;
}
