import Navbar from './navbar';
import Home from './Home'
import Create from './Create'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
 

  return (
    <Router>
      <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Switch>
            <Route path="/" exact>
              <Home></Home>
            </Route>
            <Route path="/create">
              <Create></Create>
            </Route>
        </Switch>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
