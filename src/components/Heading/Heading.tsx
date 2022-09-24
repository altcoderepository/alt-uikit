import React, { FC } from 'react';
import { HeadingProps } from './Heading.types';

export const Heading: FC<HeadingProps> = ({ children, variant = 'h1' }) => <h1>{children}</h1>;
