import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

import Dashboard from '../pages/Dashboard';
import EditPost from '../pages/EditPost';
import NewPost from '../pages/NewPost';
import ViewPost from '../pages/ViewPost';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/new-post" component={NewPost} isPrivate />
    <Route path="/edit-post/:id" component={EditPost} isPrivate />
    <Route path="/view-post/:id" component={ViewPost} isPrivate />
  </Switch>
);

export default Routes;
