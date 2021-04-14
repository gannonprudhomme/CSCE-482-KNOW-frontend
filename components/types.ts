export interface KnowledgePanelData {
  title: string;
  subtitle: string;
  description: string;
  entries: Entry[];
}

/**
 *  Represents an entry for the body of the knowledge panel
 */
export interface Entry {
  // The actual readable format of the entry's key
  // e.g. if the key was "birthDate", keyText would be "Birth Date"
  key: string;
  // The actual value of the Entry
  value: string;
  // Link to the Knowledge Graph URI for the given entry
  // Can (and usually will) be null
  link?: string;
}
