import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Detail from './Detail';
import Home from './Home';

const App = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/detail/:id" component={Detail} />
        </Switch>
    )
}

export default App;