import { render } from '@testing-library/react';
import * as React from 'react';
import Header from '../../components/KnowledgePanel/Header/Header';

describe('Body', () => {
  test('Displays the title & subtitle', () => {
    // arrange
    const title = 'Title';
    const subtitle = 'Subtitle';

    // act
    const { getByText } = render(
      <Header title={title} subtitle={subtitle} />,
    );

    // assert
    const titleEl = getByText(title);
    expect(titleEl).toBeInTheDocument();
    const subtitleEl = getByText(subtitle);
    expect(subtitleEl).toBeInTheDocument();
  });
});
