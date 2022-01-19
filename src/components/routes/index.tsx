import React from "react";

// React Router
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// React Helmet
import Helmet from "react-helmet";

import { RouteConfigProvider } from "../../config/route.conf";

interface IRoutesProps {
    title?: string;
}

interface IRoutesState {

}

class Routes extends React.Component<IRoutesProps, IRoutesState> {
    

    render() {
        return (
            <Router>
                
                <Switch>
                    {RouteConfigProvider.map((item, i) => {
                        console.log(i);
                        return (
                            <Route exact={item.exact} component={item.component} path={item.pathname} key={i} />
                        );
                    })}
                </Switch>
            </Router>
        )
       
    }
}

export { Routes };