import { Paragraph } from '../components/Paragraph/Paragraph';
import React from 'react';
import { render } from '@testing-library/react';

describe('Paragraph', () => {
  test('Show Correct Default Properties', () => {
    const { getByRole } = render(<Paragraph>Lorem Ipsum</Paragraph>);
    expect(getByRole('paragraph')).toHaveStyle('color: #4d4d4d');
    expect(getByRole('paragraph')).toHaveStyle('font-size: 1em');
  });
});
