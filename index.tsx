import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Sample from './components/Sample/Sample';

// Export some function for the client to use
function doStuff(divID: string, url: string): void {
  ReactDOM.render(
    <div>
      <Sample input={5} />
      {url}
    </div>,
    document.getElementById(divID),
  );
}

export default doStuff;
