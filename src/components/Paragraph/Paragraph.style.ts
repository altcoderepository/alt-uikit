import styled from 'styled-components';
import { ParagraphStyleProps } from './Paragraph.types';
import { getColor, getFontSize } from '../../utils';

export const ParagraphStyled = styled.p<ParagraphStyleProps>`
  font-family: Roboto, Helvetica, Sans-Serif;
  line-height: 1.5;
  font-size: ${(props) => getFontSize(props.size)};
  color: ${(props) => getColor(props.color)};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
`;
