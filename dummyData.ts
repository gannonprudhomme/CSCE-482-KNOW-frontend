import { KnowledgePanelData } from './components/types';

export const dummyData: KnowledgePanelData = {
  title: 'Title',
  subtitle: 'subtitle',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    est laborum.
  `,
  entries: new Map(Object.entries({
    'Birth Date': [{
      value: 'date goes here',
    }],
  })),
};

export const basicData = {
  ...dummyData,
  title: 'William Blake',
  subtitle: 'English poet',
  description: `William Blake was an English poet, painter, and printmaker. Largely unrecognised
    during his lifetime, Blake is now considered a seminal figure in the history of the poetry
    and visual arts of the Romantic Age.`,
  entries: new Map(Object.entries({
    'Birth Date': [{
      value: 'date goes here',
    }],
    Born: [{
      value: 'November 28, 1757, Soho, London, United Kingdom',
    }],
    Died: [{
      value: 'August 12, 1827, London, United Kingdom',
    }],
    Spouse: [{
      value: 'Catherine Blake (m. 1782 - 1827)',
    }],
    Children: [{
      value: 'Thomas Blake (Son)',
    }],
  })),
};

export const noDescData: KnowledgePanelData = {
  ...dummyData,
  description: '',
};

export const shortDescData: KnowledgePanelData = {
  ...dummyData,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor',
};

export const longTitleSubtitleData: KnowledgePanelData = {
  ...dummyData,
  title: 'This is a really long title that spans multiple lines',
  subtitle: 'This is also a really long subtitle that spans multiple lines - even more text',
  entries: new Map(Object.entries({
    Spouse: [
      {
        value: 'First one',
        link: 'insert-here',
      },
      {
        value: 'Second one',
        link: 'insert-here',
      },
    ],
  })),
};

export const dynamicLinkData: KnowledgePanelData = {
  ...dummyData,
  title: 'George Washington',
  description: '',
  entries: new Map(Object.entries({
    Spouse: [{
      value: 'Martha Washington',
      link: 'insert-here',
    }],
  })),
};

export function dummyBackendRequest(uri: string, backendURL: string): Promise<KnowledgePanelData> {
  return new Promise((resolve) => {
    const interactiveDemo = {
      ...dummyData,
      subtitle: `The uri is: ${uri}`,
      entries: new Map(Object.entries({
        'Backend URL': [{
          value: backendURL,
        }],
      })),
    };

    if (uri === 'basic' || uri === 'custom-styles') {
      resolve(basicData);
    } else if (uri === 'no-description') {
      resolve(noDescData);
    } else if (uri === 'short-description' || uri === 'insert-here') {
      resolve(shortDescData);
    } else if (uri === 'long-title-subtitle') {
      resolve(longTitleSubtitleData);
    } else if (uri === 'dynamic-link') {
      resolve(dynamicLinkData);
    } else { // b/c interactive demo can have any URI, make it the base case
      resolve(interactiveDemo);
    }
  });
}
