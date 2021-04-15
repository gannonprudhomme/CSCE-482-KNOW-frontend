import * as React from 'react';
import * as ReactDOM from 'react-dom';
import KnowledgePanel from './components/KnowledgePanel';
import { KnowledgePanelData } from './components/types';
import { dummyBackendRequest } from './dummyData';

function makeBackendRequest(uri: string, backendURL: string): Promise<KnowledgePanelData> {
  return new Promise((resolve, reject) => {
    if (backendURL) {
      fetch(`${backendURL}/?uri=${uri}`).then(
        (res) => res.json(),
      ).then((data: KnowledgePanelData) => {
        const {
          title, subtitle, description, entries,
        } = data;

        let entriesMap = null;
        if (entries) {
          entriesMap = new Map(Object.entries(entries));
        }

        if (!title && !entries) {
          reject(Error('Empty response'));
        }

        resolve({
          title, subtitle, description, entries: entriesMap,
        });
      }).catch((err) => reject(err));
    } else {
      dummyBackendRequest(uri, backendURL).then((data) => resolve(data));
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
  const render = (jsx: JSX.Element) => {
    ReactDOM.render(jsx, document.getElementById(divID));
  };

  render(<div> Loading... </div>);

  makeBackendRequest(uri, backendURL).then((data) => {
    render(
      <div>
        <KnowledgePanel
          data={data}
          backendURL={backendURL}
        />
      </div>,
    );
  }).catch((err) => {
  // eslint-disable-next-line no-console
    console.error(err);
    render(<div> Unavailable </div>);
  });
}

export default renderKnowledgePanel;
