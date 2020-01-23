import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

/* Components */
import Designer from '../../components/about/Designer';
import Project from '../../components/about/Project';

class About extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/about/designer" component={Designer} />
                <Route component={Project} />
            </Switch>
        );
    }
}

export default About;
