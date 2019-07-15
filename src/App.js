import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInComponent from './components/sign-up/sign-up.component'
import { auth } from './firebase/firebase.utills';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => this.setState({ currentUser: user }))
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>    
        <Route exact path='/' component={HomePage}/>
        <Route path='/signin' component={SignInComponent}/>
        <Route path='/shop' component={ShopPage}/>        
      </Switch>
    </div>
  )}
}

export default App;
