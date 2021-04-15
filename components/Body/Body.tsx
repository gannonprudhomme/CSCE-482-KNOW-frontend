import * as React from 'react';
import { Entry } from '../types';
import './Body.css';
import KnowledgePanelLink from './KnowledgePanelLink/KnowledgePanelLink';

interface BodyProps {
  description?: string;
  entries: Map<string, Entry[]>;
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
    entries.forEach((values, key) => {
      const valuesJSX = values.map((entry, index) => {
        // Displays a space and comma, except if it's the last one in the list
        const commaOrNot = index < values.length - 1 ? (
          <>
            ,
            &nbsp;
          </>
        ) : null;
        return entry.link ? (
          <>
            <KnowledgePanelLink
              backendURL={backendURL}
              value={entry.value}
              uri={entry.link}
              key={entry.value}
            />
            {commaOrNot}
          </>
        ) : (
          <>
            <span className="value-text" key={entry.value}>
              {entry.value}
            </span>
            {commaOrNot}
          </>
        );
      });

      const jsx = (
        <div key={values[0].value}>
          <span className="key-text">
            {key}
            :
          </span>
          &nbsp;
          {valuesJSX}
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
