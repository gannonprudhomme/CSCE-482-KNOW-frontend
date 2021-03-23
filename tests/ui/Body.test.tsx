import { render } from '@testing-library/react';
import * as React from 'react';
import Body from '../../components/KnowledgePanel/Body/Body';
import { Entry } from '../../components/types';

describe('Body', () => {
  test('Displays the description', () => {
    // arrange
    const desc = 'Description';

    // act
    const { getByText } = render(
      <Body description={desc} entries={new Map<string, Entry>()} />,
    );

    // assert
    const element = getByText(desc);
    expect(element).toBeInTheDocument();
  });

  test('Correctly displays entries', () => {
    // arrange
    const data: Entry = {
      keyText: 'Birth Date',
      value: 'some-value',
    };

    const entries = new Map<string, Entry>(Object.entries({
      birthDate: data,
    }));

    // act
    const { getByText } = render(
      <Body entries={entries} />,
    );

    // assert
    const keyText = getByText(`${data.keyText}:`); // Adds the colon to it
    expect(keyText).toBeInTheDocument();
    const value = getByText(data.value);
    expect(value).toBeInTheDocument();
  });
});
