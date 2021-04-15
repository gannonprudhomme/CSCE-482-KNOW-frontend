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
      <Body description={desc} entries={new Map<string, Entry[]>()} backendURL="" />,
    );

    // assert
    const element = getByText(desc);
    expect(element).toBeInTheDocument();
  });

  test('Correctly displays entries', () => {
    // arrange
    const data: Entry = {
      value: 'some-value',
    };

    const key = 'Birth Date';
    const entries = new Map(Object.entries({
      'Birth Date': [data],
    }));

    // act
    const { getByText } = render(
      <Body entries={entries} backendURL="" />,
    );

    // assert
    const keyText = getByText(`${key}:`); // Adds the colon to it
    expect(keyText).toBeInTheDocument();
    const value = getByText(data.value);
    expect(value).toBeInTheDocument();
  });
});
