import { render } from '@testing-library/react';
import * as React from 'react';
import Body from '../../components/Body/Body';
import { Entry } from '../../components/types';

describe('Body', () => {
  test('Displays the description', () => {
    // arrange
    const desc = 'Description';

    // act
    const { getByText } = render(
      <Body description={desc} entries={[]} backendURL="" />,
    );

    // assert
    const element = getByText(desc);
    expect(element).toBeInTheDocument();
  });

  test('Correctly displays entries', () => {
    // arrange
    const data: Entry = {
      key: 'Birth Date',
      value: 'some-value',
    };

    const entries = [data];

    // act
    const { getByText } = render(
      <Body entries={entries} backendURL="" />,
    );

    // assert
    const keyText = getByText(`${data.key}:`); // Adds the colon to it
    expect(keyText).toBeInTheDocument();
    const value = getByText(data.value);
    expect(value).toBeInTheDocument();
  });
});
