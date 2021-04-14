import * as React from 'react';
import renderKnowledgePanel from '../../..';
import './KnowledgePanelLink.css';

interface LinkProps {
  value: string;
  uri: string;
  backendURL: string;
}

/**
 *  Creates a link that, on press, renders a knowledge panel with the URI as the diVID, using
 *  the provided URI and backendURL to do so.
 */
const KnowledgePanelLink: React.FC<LinkProps> = ({ value, uri, backendURL }) => {
  const onClick = () => {
    renderKnowledgePanel(uri, uri, backendURL);
  };

  return (
    <button type="button" onClick={onClick} className="value-text like-anchor">
      {value}
    </button>
  );
};

export default KnowledgePanelLink;
