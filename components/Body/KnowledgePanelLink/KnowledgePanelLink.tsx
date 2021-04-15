import * as React from 'react';
import renderKnowledgePanel from '../../..';
import './KnowledgePanelLink.css';

interface LinkProps {
  value: string;
  uri: string;
  backendURL: string;
}

// Should be able to insert different ways of determining
// what div to insert things into
const DIV_TO_INSERT_INTO = 'insert-here';
let insertCount = 0;

/**
 *  Creates a link that, on press, renders a knowledge panel with the URI as the diVID, using
 *  the provided URI and backendURL to do so.
 */
const KnowledgePanelLink: React.FC<LinkProps> = ({ value, uri, backendURL }) => {
  const onClick = () => {
    renderKnowledgePanel(`${DIV_TO_INSERT_INTO}-${insertCount}`, uri, backendURL);
    insertCount += 1;
  };

  return (
    <button type="button" onClick={onClick} className="value-text like-anchor">
      {value}
    </button>
  );
};

export default KnowledgePanelLink;
