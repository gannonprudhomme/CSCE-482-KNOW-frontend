import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Export some function for the client to use
function doStuff(divID: string, url: string): void {
    ReactDOM.render(
        <div>
            {/* Sample code, will remove later */}
            {url}
        </div>,
        document.getElementById(divID)
    );
}

export default doStuff;
