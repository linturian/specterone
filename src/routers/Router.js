import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Collection from '../pages/Collection';
import Landing from '../pages/Landing';
import Register from '../pages/Register';
import Faq from '../pages/Faq';
import Login from '../pages/Login';
import Profile from '../pages/Profile';

const Router = () => (
    <Switch>
      <Route exact path='/' component={Landing}/>
      <Route exact path='/faq' component={Faq}/>      
      <Route exact path='/collection' component= {Collection} />
      <Route exact path='/register' component={Register}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/profile' component={Profile}/>
    </Switch>
)

export default Router;