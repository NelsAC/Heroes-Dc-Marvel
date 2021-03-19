import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
// import DcScreen from '../components/dc/DcScreen';
import LoginScreen from '../components/login/LoginScreen';
import DashBoardRoutes from './DashBoardRoutes';
// import MarvelScreen from '../components/marvel/MarvelScreen';

const AppRouter = () => {
    return (
        <Router>
            <div>
                {/* <Navbar /> */}

                <Switch>
                    <Route exact path="/login" component={ LoginScreen } />
                    <Route path="/" component={ DashBoardRoutes } />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
