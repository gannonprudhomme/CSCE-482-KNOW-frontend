import * as React from 'react';
import { Entry } from '../types';
import './Body.css';

interface BodyProps {
  description?: string;
  entries: Map<string, Entry>;
}

/**
 *  The body of the Knowledge panel. Displays the description (if there is one),
 *  and uses the entries to create the rest of the body, where the key is the bolded
 *  text and the value is normal text.
 */
const Body: React.FC<BodyProps> = ({ description, entries }) => {
  // Convert each entry into JSX
  const entriesJSX: JSX.Element[] = [];
  entries.forEach((value) => {
    const jsx = (
      <div key={value.keyText}>
        <span className="key-text">
          {value.keyText}
          :
        </span>
        &nbsp;
        <span className="value-text">
          {value.value}
        </span>
      </div>
    );
    entriesJSX.push(jsx);
  });

  const descriptionJSX = (
    <div className="description">
      {description}
    </div>
  );

  return (
    <div className="body">
      {description ? descriptionJSX : null}
      <div className="entries">
        {entriesJSX}
      </div>
    </div>
  );
};

export default Body;
