import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Register, MembershipTerm, Tier6}  from '../components/registration';
import Collection from '../components/collection/Collection';
import Reserve from '../components/collection/Reserve';
import ComingSoon from '../pages/ComingSoon';
import MainLayout from '../pages/MainLayout';

const Router = () => (
    <Switch>
      <Route exact path='/' component={MainLayout}/>
      <Route exact path='/register' component={Register}/>
      <Route exact path='/register/membership-term' component={MembershipTerm}/>
      <Route path='/register/membership-term/:number' component={Tier6}/>
      <Route exact path='/collection' component= {Collection} />
      <Route exact path='/collection/reserve' component= {Reserve} />
    </Switch>
)

export default Router;