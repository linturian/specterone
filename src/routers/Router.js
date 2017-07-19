import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Register, MembershipTerm, Tier}  from '../components/registration';
import Collection from '../components/collection/Collection';
import Reserve from '../components/collection/Reserve';
import ComingSoon from '../pages/ComingSoon';
import Landing from '../pages/Landing';

const Router = () => (
    <Switch>
      <Route exact path='/' component={Landing}/>
      <Route exact path='/register' component={Register}/>
      <Route exact path='/register/membership-term' component={MembershipTerm}/>
      <Route path='/register/membership-term/:number' component={Tier}/>
      <Route exact path='/collection' component= {Collection} />
      <Route exact path='/collection/reserve' component= {Reserve} />
    </Switch>
)

export default Router;