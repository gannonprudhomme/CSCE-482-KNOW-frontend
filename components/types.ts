export interface KnowledgePanelData {
  title: string;
  subtitle: string;
  description: string;
  entries: Map<string, Entry[]>;
}

/**
 *  Represents an entry for the body of the knowledge panel
 */
export interface Entry {
  // The actual value of the Entry
  value: string;
  // Link to the Knowledge Graph URI for the given entry
  // Can (and usually will) be null
  link?: string;
}
