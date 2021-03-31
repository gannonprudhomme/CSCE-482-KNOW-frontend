import * as React from 'react';
import * as ReactDOM from 'react-dom';
import KnowledgePanel from './components/KnowledgePanel';
import { KnowledgePanelData } from './components/types';

const dummyData: KnowledgePanelData = {
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
    birthDate: {
      keyText: 'Birth Date',
      value: 'date goes here',
    },
  })),
};

const basicData = {
  ...dummyData,
  title: 'William Blake',
  subtitle: 'English poet',
  description: `William Blake was an English poet, painter, and printmaker. Largely unrecognised
    during his lifetime, Blake is now considered a seminal figure in the history of the poetry
    and visual arts of the Romantic Age.`,
  entries: new Map(Object.entries({
    birthDate: {
      keyText: 'Born',
      value: 'November 28, 1757, Soho, London, United Kingdom',
    },
    died: {
      keyText: 'Died',
      value: 'August 12, 1827, London, United Kingdom',
    },
    spouses: {
      keyText: 'Spouse',
      value: 'Catherine Blake (m. 1782 - 1827)',
    },
    children: {
      keyText: 'Children',
      value: 'Thomas Blake (Son)',
    },
  })),
};

const noDescData = {
  ...dummyData,
  description: '',
};

const shortDescData = {
  ...dummyData,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor',
};

const longTitleSubtitleData = {
  ...dummyData,
  title: 'This is a really long title that spans multiple lines',
  subtitle: 'This is also a really long subtitle that spans multiple lines - even more text',
};

// Temporary, will be replaced when we actually make a request to the backend
function dummyBackendRequest(uri: string, backendURL: string): Promise<KnowledgePanelData> {
  return new Promise((resolve) => {
    const interactiveDemo = {
      ...dummyData,
      subtitle: `The uri is: ${uri}`,
      entries: new Map(Object.entries({
        backendURL: {
          keyText: 'Backend URL',
          value: backendURL,
        },
      })),
    };

    if (uri === 'basic' || uri === 'custom-styles') {
      resolve(basicData);
    } else if (uri === 'no-description') {
      resolve(noDescData);
    } else if (uri === 'short-description') {
      resolve(shortDescData);
    } else if (uri === 'long-title-subtitle') {
      resolve(longTitleSubtitleData);
    } else { // b/c interactive demo can have any URI, make it the base case
      resolve(interactiveDemo);
    }
  });
}

/**
 * The exposed function that the client will use to render a knowledge panel.
 * @param divID The div ID to insert the HTML into.
 * @param uri The URI of the entity a knowledge panel will be generated for.
 * @param backendURL The URL of the backend where we will send requests to.
 */
function renderKnowledgePanel(divID: string, uri: string, backendURL: string): void {
  dummyBackendRequest(uri, backendURL).then((data) => {
    ReactDOM.render(
      <div>
        <KnowledgePanel
          data={data}
        />
      </div>,
      document.getElementById(divID),
    );
  });
}

export default renderKnowledgePanel;
