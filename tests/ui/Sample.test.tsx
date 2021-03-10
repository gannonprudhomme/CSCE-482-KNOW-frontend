import * as React from 'react';
import { render } from '@testing-library/react';
import Sample from '../../components/Sample/Sample';

describe('Sample', () => {
  test('renders without error', () => {
    // arrange
    const input = 5;

    // act
    const { getByText } = render(
      <Sample input={input} />,
    );

    // assert
    const element = getByText(input + 5);

    expect(element).toBeInTheDocument();
  });
});
