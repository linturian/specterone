import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Register, MembershipTerm, Tier}  from '../components/registration';
import Collection from '../components/collection/Collection';
import Reserve from '../components/collection/Reserve';
import ComingSoon from '../pages/ComingSoon';
import Landing from '../pages/Landing';
import BetaSignup from '../pages/BetaSignup';
import Faq from '../pages/Faq';

const Router = () => (
    <Switch>
      <Route exact path='/' component={ComingSoon}/>
      <Route exact path='/signup' component={BetaSignup}/>
      <Route exact path='/landing' component={Landing}/>      
      <Route exact path='/faq' component={Faq}/>      
      <Route exact path='/register' component={Register}/>
      <Route exact path='/register/membership-term' component={MembershipTerm}/>
      <Route path='/register/membership-term/:number' component={Tier}/>
      <Route exact path='/collection' component= {Collection} />
      <Route exact path='/collection/reserve' component= {Reserve} />
    </Switch>
)

export default Router;