import styled from 'styled-components';
import { ParagraphProps } from './Paragraph.types';
import { getFontSize } from '../styles/utils';

export const Paragraph = styled.p<ParagraphProps>`
  font-size: ${(props) => getFontSize(props.size)};
  margin: 1em 0;
`;
