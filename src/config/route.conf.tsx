import React from "react";

// Page Components
import Home from "../components/home";

class RouteConfigProvider extends React.Component {
    static readonly App = [
        {
            title: 'Home',
            pathname: '/',
            exact: true,
            component: Home
        }
    ]
}

export { RouteConfigProvider };