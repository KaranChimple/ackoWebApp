// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { PureComponent } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Schedule from './screens/schedule';
import Overview from './screens/overview';
import Artciles from './screens/articles';
import Profile from './screens/profile';

class App extends PureComponent {

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Schedule} />
          <Route path="/overview" exact component={Overview} />
          <Route path="/articles" exact component={Artciles} />
          <Route path="/profile" exact component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;
