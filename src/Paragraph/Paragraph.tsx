import React, { FC } from 'react';
import { ParagraphStyled } from './Paragraph.style';
import { ParagraphProps } from './Paragraph.types';

export const Paragraph: FC<ParagraphProps> = ({ children, color, size, ...props }) => (
  <ParagraphStyled color={color} size={size} {...props}>
    {children}
  </ParagraphStyled>
);
