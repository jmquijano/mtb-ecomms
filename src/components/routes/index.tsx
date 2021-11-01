import React from "react";

// React Router
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// React Helmet
import Helmet from "react-helmet";

import { RouteConfigProvider } from "../../config/route.conf";
import { TitleComponent } from "./title";

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
                    {RouteConfigProvider.App.map((item, i) => {
                        return (  
                            <React.Fragment>
                                <TitleComponent title={item.title} />
                                <Route exact={item.exact} component={item.component} path={item.pathname} key={i} />
                            </React.Fragment>
                        );
                    })}
                </Switch>
            </Router>
        )
       
    }
}

export { Routes };