import React,{ Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import UserScores from './UserScores';
import '../App.css';

class App extends Component {
  render() {
    const { firebase } = this.props
    return (
      <BrowserRouter>
          <div className="App">
              <Header firebase={firebase} />
              <Switch>
                <Route exact path="/movies/:uid" component={UserScores} />
              </Switch>
              <Footer />
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
