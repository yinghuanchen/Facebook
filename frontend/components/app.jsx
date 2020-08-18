import React from "react";
import { Route, Switch} from 'react-router-dom';
import LogInFormContainer from './session/login_form_container'; 
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import UserShowContainer from './user/user_show_container';
import NewsFeedContainer from './newsfeed/newsfeed_container';
import NavBarContainer from './navbar/navbar_container';

const App = () => (
    <div>
        <Route path="/" component={NavBarContainer} />
        <AuthRoute exact path="/" component={LogInFormContainer} />
        <ProtectedRoute exact path="/users/:id" component={UserShowContainer} />
        <ProtectedRoute exact path="/newsfeed" component={NewsFeedContainer} />
    </div>
);

export default App;