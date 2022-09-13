import React, { FC } from 'react';
import { ParagraphStyled } from './Paragraph.style';
import { ParagraphProps } from './Paragraph.types';

export const Paragraph: FC<ParagraphProps> = ({
  children,
  color = 'primary',
  size = 'md',
  bold = false,
  italic = false,
  ...props
}) => (
  <ParagraphStyled
    color={color}
    size={size}
    bold={bold}
    italic={italic}
    {...props}
    role="paragraph">
    {children}
  </ParagraphStyled>
);
