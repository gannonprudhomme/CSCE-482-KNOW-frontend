export interface KnowledgePanelData {
  title: string;
  subtitle: string;
  description: string;
  // The key will be bolded, and the value will be normal text
  entries: Map<string, Entry>;
}

/**
 *  Represents an entry for the body of the knowledge panel
 */
export interface Entry {
  // The actual readable format of the entry's key
  // e.g. if the key was "birthDate", keyText would be "Birth Date"
  keyText: string;
  // The actual value of the Entry
  value: string;
}
