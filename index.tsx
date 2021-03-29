import * as React from 'react';
import * as ReactDOM from 'react-dom';
import KnowledgePanel from './components/KnowledgePanel';
import { KnowledgePanelData } from './components/types';

// Temporary, will be replaced when we actually make a request to the backend
function dummyBackendRequest(uri: string, backendURL: string): Promise<KnowledgePanelData> {
  return new Promise((resolve) => {
    const dummyData: KnowledgePanelData = {
      title: 'Title',
      subtitle: `The given uri is: ${uri}`,
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
        backendURL: {
          keyText: 'Backend URL',
          value: backendURL,
        },
      })),
    };

    resolve(dummyData);
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
