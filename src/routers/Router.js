import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Collection from '../pages/Collection';
import Landing from '../pages/Landing';
import Register from '../pages/Register';
import Faq from '../pages/Faq';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Consignment from '../pages/Consignment';
import AppliedRoute from "./AppliedRoute";

const Router = ({childProps}) => (
    <Switch>
      <AppliedRoute exact path='/' component={Landing} props={childProps}/>
      <Route exact path='/faq' component={Faq}/>      
      <Route exact path='/consignment' component={Consignment}/>      
      <Route exact path='/collection' component= {Collection} />
      <Route exact path='/register' component={Register}/>
      <AppliedRoute exact path='/login' component={Login} props={childProps}/>
      <AppliedRoute exact path='/profile' component={Profile} props={childProps}/>
    </Switch>
)

export default Router;