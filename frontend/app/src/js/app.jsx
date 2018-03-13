import React from 'react';
import ReactDom from 'react-dom';

import Page from 'layout/page';

class App extends React.Component {
  render() {
    return(
      <Page />
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
