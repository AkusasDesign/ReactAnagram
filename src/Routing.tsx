import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* Material UI */
import Container from '@material-ui/core/Container';

/* Components */
import Header from './components/common/header/Header';
import Home from './screen/home/Home';
import About from './screen/about/About';
import Anagram from './screen/anagram/Anagram';
import Anagrams from './screen/anagrams/Anagrams';
import NotFound from './components/common/not_found/NotFound';

const Routing: React.FC = () => {
    return (
        <Router>
            <Header />
            <Container maxWidth="xl">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/about/:aboutID" component={About} />
                    <Route exact path="/anagram" component={Anagram} />
                    <Route exact path="/anagrams" component={Anagrams} />
                    <Route component={NotFound} />
                </Switch>
            </Container>
        </Router>
    );
}

export default Routing;