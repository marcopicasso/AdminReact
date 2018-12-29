import * as React from 'react';
import { Button } from 'primereact/button';
import './App.css';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Button label="Click" icon="pi pi-check" iconPos="right" />
      </div>
    );
  }
}

export default App;
