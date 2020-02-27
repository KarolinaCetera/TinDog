import React from 'react';
import Main from '../Main/Main';
import List from "../List/List";
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';
import Nav from "../Nav/Nav";
import About from "../About/About";
import AddDog from "../AddDog/AddDog";

const App = () => {
    return (
        <>
            <HashRouter>
                <Nav/>
                <Switch>
                   <Route exact path='/' component={Main} />
                    <Route path='/list' component={List} />
                    <Route path='/form' component={AddDog} />
                    <Route path='/about' component={About} />
                </Switch>
            </HashRouter>
        </>
    )
};

export default App;


