import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Register } from './Register';
import Login  from './Login';
import { dashboard } from './components/dashboard';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';


class App extends Component {
  render() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Jumbotron />
      <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={dashboard} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      </Layout>
      </React.Fragment>
   );
 }
}

export default App;
