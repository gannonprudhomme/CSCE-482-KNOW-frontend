import * as React from 'react';
import { Entry } from '../types';
import './Body.css';
import KnowledgePanelLink from './KnowledgePanelLink/KnowledgePanelLink';

interface BodyProps {
  description?: string;
  entries: Entry[];
  backendURL: string;
}

/**
 *  The body of the Knowledge panel. Displays the description (if there is one),
 *  and uses the entries to create the rest of the body, where the key is the bolded
 *  text and the value is normal text.
 */
const Body: React.FC<BodyProps> = ({ description, entries, backendURL }) => {
  // Convert each entry into JSX
  const entriesJSX: JSX.Element[] = [];
  if (entries) {
    entries.forEach((value) => {
      const jsx = (
        <div key={value.key}>
          <span className="key-text">
            {value.key}
            :
          </span>
          &nbsp;
          {value.link ? (
            <KnowledgePanelLink backendURL={backendURL} value={value.value} uri={value.link} />
          ) : (
            <span className="value-text">
              {value.value}
            </span>
          )}
        </div>
      );
      entriesJSX.push(jsx);
    });
  }

  const descriptionJSX = (
    <div className="description">
      {description}
    </div>
  );

  return (
    <div className="body">
      {description ? descriptionJSX : null}
      {entries ? ( // Only render there are entries
        <div className="entries">
          {entriesJSX}
        </div>
      ) : null}
    </div>
  );
};

export default Body;
