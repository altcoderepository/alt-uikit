import styled from 'styled-components';
import { ParagraphStyleProps } from './Paragraph.types';

export const ParagraphStyled = styled.p<ParagraphStyleProps>`
  font-family: Roboto, Helvetica, Sans-Serif;
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
`;
